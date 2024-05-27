import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import IProduct from "../../models/IProduct";
import { useSelector} from "react-redux";

//чи достатньо продуктів для відтворення наступної сторінки
export let next=null;

function ListOfProducts() {
  const [data, setData] = useState<Array<IProduct>>([]);

  const currentPage= useSelector((state: any) => { return state.pagination.currentPage; });
  let url=import.meta.env.VITE_PATH_TO_SERVER + "products"+'?_page='+currentPage+'&_per_page='+8;

  console.log(currentPage);
  console.log(url);
  console.log(data);
  useEffect(() => {
    console.log("useffect")
    const fetchData = async () => {
      try {
        const response = await axios.get(
          url
        );
        setData(response.data.data);
        next=response.data.next;
        console.log("caught");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);
  return (
    <>
      <div className="row products">
        {data.map((el: IProduct) => {
          return (
            <div className="col-md-3" key={el.id}>
              <Card props={el} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ListOfProducts;
