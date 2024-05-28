import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import TableOfProducts from "./TableOfProducts";
import IProduct from "../../models/IProduct";
import { AppDispatch } from "../../state/store";
import { useDispatch } from "react-redux";
import { getProducts } from "../../state/products/products-slice";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getProducts());
  }, []);

  return (
    <>
      <div className="col col-sm-9 mx-auto">
        <h2 className="mt-5">Товари</h2>
        <Link className="btn btn-primary mt-3 mb-4" aria-current="page" to="/add-product">
          Додати товар
        </Link>
        <TableOfProducts/>
      </div>
    </>
  );
}
