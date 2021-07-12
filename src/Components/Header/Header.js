import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return <header className="text-white sticky-top" id="navigation">
        <div className="container py-3">
            <div className="row">
                <div className="col-6 col-lg-3 d-flex align-items-center"><h4>BrandName</h4></div>
                <div className="col-lg-9 d-none d-lg-flex justify-content-between align-items-center" id="submenu">
                    <div>
                        <a href="#" className="btn text-white">Home</a>
                        <a href="#" className="btn text-white">Product</a>
                        <a href="#" className="btn text-white">Pricing</a>
                        <a href="#" className="btn text-white">Contact</a>
                    </div>
                    <div>
                        <a href="#" className="btn text-primary">Login</a>
                        <a href="#" className="btn btn-primary py-3 px-4">Become a memeber
                            <FontAwesomeIcon icon={faArrowRight} className="ms-3" /></a>
                    </div>
                </div>
                <div className="col-6 d-flex d-lg-none align-items-center justify-content-end">
                    <a href="#" className="btn text-white fs-4">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <a href="#" className="btn text-white fs-4">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a href="#" className="btn text-white fs-4" id="menu" type="button">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </div>
            </div>
        </div>
    </header>
}

export default Header;
