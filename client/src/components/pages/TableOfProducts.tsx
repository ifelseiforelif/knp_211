import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IProduct from "../../models/IProduct";
import sliceDescription from "../../utils/sliceDescription";
import formatPrice from "../../utils/formatPrice";
import ProductType from "../../types/product-type";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, removeProduct } from "../../state/products/products-slice";
import ICategory from "../../models/ICategory";


function TableOfProducts() {
  const dispatch = useDispatch();

  const products: Array<ProductType> = useSelector((state: any) => {
    return state.products.products;
  });

  const [categories, setCategories] = useState<Array<ICategory>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_PATH_TO_SERVER + "categories");
        setCategories(response.data);
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    dispatch<any>(getProducts());
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((category) => category.id === categoryId);
    return category?.name;
  };
  
  const removeProductHandler = async (productId: any) => {
    try {
      await dispatch<any>(removeProduct(productId));
      dispatch<any>(getProducts());
    } 
    catch (error) {}
  };

  return (
    <>
      {products.length ? (
        <div className="mb-4 rounded-3 ovx">
          <table className="table table-hover">
            <thead>
              <tr><th>Id</th><th>Категорія</th><th>Назва</th><th>Опис</th><th>Ціна</th><th></th><th></th><th></th><th></th></tr>
            </thead>
            <tbody>
              {products?.map((el: ProductType) => {
                return(
                  <tr key={el.id}>
                    <td>{el.id.slice(0,5) + "..."}</td>
                    <td>{getCategoryName(el.categoryId)}</td>
                    <td>{el.name}</td>
                    <td>{sliceDescription(el.description)}</td>
                    <td>{formatPrice(el.priceCent / 100) + "₴"}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link className="btn btn-sm btn-primary action-btn-sm" aria-current="page" to={`/edit-product/${el.id}`}>
                        Змінити
                      </Link>
                    </td>
                    <td>
                      <a 
                        className="btn btn-sm btn-danger action-btn-sm"
                        onClick={() => removeProductHandler(el.id)}
                      >
                        Видалити
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>    
      ) : (
        <p>Список продуктів порожній</p>
      )}  
    </>
  );
}

export default TableOfProducts;