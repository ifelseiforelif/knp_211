import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import ProductType from "../../types/product-type";


function ListOfProducts() {
  const products: Array<ProductType> = useSelector((state: any) => {
    return state.products.products;
  });
  
  return (
    <>
      {products.length ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products?.map((el: ProductType) => {
            return (
              <div className="col" key={el.id}>
                <ProductCard props={el} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Список продуктів порожній</p>
      )}
    </>
  );
}
export default ListOfProducts;