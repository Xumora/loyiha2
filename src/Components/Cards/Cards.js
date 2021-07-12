import "./Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const res = [
    {
        icon: faPhoneAlt,
        email1: "georgia.young@example.com",
        email2: "georgia.young@ple.com",
    },
    {
        icon: faMapMarkerAlt,
        email1: "kh.mamirova@gmail.com",
        email2: "xumora@gmail.com",
    },
    {
        icon: faEnvelope,
        email1: "skz@example.com",
        email2: "john@ple.com",
    },
];

function Cards() {
    return <div className="row">
        {res.map((value, index) => {
            return <div className="col-12 col-lg-4 b">
                <div className="text-center p-5 bg-white my-5 c">
                    <FontAwesomeIcon icon={value.icon} className="text-primary display-4 ic" />
                    <p className="m-0 mt-4">{value.email1}</p>
                    <p>{value.email2}</p>
                    <h6>Get Support</h6>
                    <a href="#" className="btn btn-outline-primary px-5 fw-bold py-3">Submit Request</a>
                </div>
            </div>
        })}
    </div>
}

export default Cards;