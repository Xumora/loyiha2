import "./Blocks.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const res = [
    {
        icon: faUsers,
        icon: <Blocks />,
        name: "Investment Trading",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faUsers,
        name: "Investment Trading",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faUsers,
        name: "Investment Trading",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faUsers,
        name: "Investment Trading",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faUsers,
        name: "Investment Trading",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faUsers,
        name: "Investment Trading",
        text: "the quick fox jumps over the lazy dog",
    },
];

function Blocks() {
    return <div className="row">
        {res.map((value) => {
            return <div className="col-12 col-md-4">
                <div className="box d-flex">
                    <FontAwesomeIcon icon={value.icon} className="text-primary" />
                    <div>
                        <h6>
                            {value.name}
                        </h6>
                        <p>
                            {value.text}
                        </p>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default Blocks;