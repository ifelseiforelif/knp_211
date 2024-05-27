import ListOfProducts from "./ListOfProducts";
import Pagination from "../Pagination";

export default function Home() {
  return (
    <div className="container">
      <Pagination/>
      <ListOfProducts />
    </div>
  );
}
