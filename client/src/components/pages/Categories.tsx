import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import TableOfCategories from "./TableOfCategories";
import ICategory from "../../models/ICategory";

export default function Categories() {
  const [categories, setCategories] = useState<Array<ICategory>>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_PATH_TO_SERVER + "categories")
    .then(r => {
      setCategories(r.data);
    })
  }, []);

  return (
    <>
      <div className="col col-sm-9 mx-auto">
        <h2 className="mt-5">Категорії</h2>
        <Link className="btn btn-primary mt-3 mb-4" aria-current="page" to="/add-category">
          Додати категорію
        </Link>
        <TableOfCategories/>
      </div>
    </>
  );
}
