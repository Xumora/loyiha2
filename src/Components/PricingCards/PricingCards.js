import "./PricingCards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const res = [
    {
        name: "FREE",
        des: "Organize across all apps by hand",
        price: "0",
        ben: [`Unlimited product updates`, `Unlimited product updates`, `Unlimited product updates`, `1GB  Cloud 
        storage`, `Email and community support`]
    },
    {
        name: "SILVER",
        des: "Organize across all apps by hand",
        price: "9.99",
        ben: [`Unlimited product updates`, `Unlimited product updates`, `Unlimited product updates`, `1GB  Cloud 
        storage`, `Email and community support`]
    },
    {
        name: "GOLD",
        des: "Organize across all apps by hand",
        price: "19.99",
        ben: [`Unlimited product updates`, `Unlimited product updates`, `Unlimited product updates`, `1GB  Cloud 
        storage`, `Email and community support`]
    },
];

function PricingCards() {
    return <div className="row">
        {res.map((value, index) => {
            return <div className="col-12 col-lg-4 pbox my-3">
                <div className="box2 bg-white p-5 text-center">
                    <h2>{value.name}</h2>
                    <p className="px-5 fs-5 my-5">{value.des}</p>
                    <h1 className="text-primary">{value.price} $</h1>
                    <h6 className="text-info">Per Month</h6>
                    <a href="#" className="btn btn-primary d-block py-3">Try for free</a>
                    <ul className="list-group mt-5">
                        {value.ben.map((benefit) => {
                            return <li className="list-group-item border-0 text-start d-flex align-items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-success fs-2 me-3 check" />
                                {benefit}</li>
                        })}
                    </ul>
                </div>
            </div>
        })}
    </div>
}

export default PricingCards;