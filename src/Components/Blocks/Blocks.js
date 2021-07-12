
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";


const res = [
    {
        icon: faUserFriends,
        name: "Investment Trading1",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faCog,
        name: "Investment Trading2",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faProjectDiagram,
        name: "Investment Trading3",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faChartPie,
        name: "Investment Trading4",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faChartLine,
        name: "Investment Trading5",
        text: "the quick fox jumps over the lazy dog",
    },
    {
        icon: faChartBar,
        name: "Investment Trading6",
        text: "the quick fox jumps over the lazy dog",
    },
];

function Blocks() {
    return <div className="row">
        {res.map((value) => {
            return <div className="col-12 col-lg-4 mt-5">
                <div className="box d-flex p-5 text-white align-items-center border border-white h-100">
                    <FontAwesomeIcon icon={value.icon} className="text-primary me-3 fs-1" />
                    <div>
                        <h5>
                            {value.name}
                        </h5>
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