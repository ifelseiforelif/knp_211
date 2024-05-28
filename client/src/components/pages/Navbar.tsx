import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            STEPShop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Головна
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Реєстрація
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  Авторизація
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Товари
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Категорії
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Користувачі
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
