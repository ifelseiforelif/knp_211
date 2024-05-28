import ProductType from "../types/product-type";
import formatPrice from "../utils/formatPrice";

function ProductCard({ props }: { props: ProductType }) {
  return (
    <div className="card h-100" style={{ width: "18rem" }}>
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{formatPrice(props.priceCent / 100) + "₴"}</p>
        <a href="#" className="btn btn-primary">
          Додати в кошик
        </a>
      </div>
    </div>
  );
}

export default ProductCard;