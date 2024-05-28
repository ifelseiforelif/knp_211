import { Link } from "react-router-dom";
import ICategory from "../../models/ICategory";

export default function AddedCategory({ props }: { props: ICategory }) {
  return (
    <div>
      <div className="col col-sm-9 mx-auto mt-5 d-flex flex-column align-items-center">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img src={`${window.location.origin}/${props.imageUrl}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
        <Link className="btn btn-primary mt-3" aria-current="page" to="/products">
          Готово
        </Link>
      </div>
    </div>
  );
}