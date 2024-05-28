import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import ProductType from "../../types/product-type";


export default function AddedProduct({ product }: { product: ProductType }) {
  return (
    <div>
      <div className="col col-sm-9 mx-auto mt-5 d-flex flex-column align-items-center">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img src={`${window.location.origin}/${product.imageUrl}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{formatPrice(product.priceCent / 100) + "₴"}</p>
          </div>
        </div>
        <Link className="btn btn-primary mt-3" aria-current="page" to="/products">
          Готово
        </Link>
      </div>
    </div>
  );
}