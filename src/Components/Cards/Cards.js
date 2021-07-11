import "./Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const res = [
    {
        icon: faUsers,
        email1: "georgia.young@example.com",
        email2: "georgia.young@ple.com",
    },
    {
        icon: faUsers,
        email1: "georgia.young@example.com",
        email2: "georgia.young@ple.com",
    },
    {
        icon: faUsers,
        email1: "georgia.young@example.com",
        email2: "georgia.young@ple.com",
    },
];

function Cards() {
    return <div className="row">
        {res.map((value, index) => {
            return <div className="col-12 col-md-4">
                <div className="box text-center">
                    <FontAwesomeIcon icon={value.icon} className="text-primary" />
                    <p>{value.email1}</p>
                    <p>{value.email2}</p>
                    <h6>Get Support</h6>
                    <a href="#" className="btn btn-outline-primary">Submit Request</a>
                </div>
            </div>
        })}
    </div>
}

export default Cards;