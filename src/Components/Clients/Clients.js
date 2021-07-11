import "./Clients.css";
import StarRating from 'react-svg-star-rating'

const res = [
    {
        url: "./user.1.png",
        name: "Regina Miles",
        job: "Designer",
        rating: "4",
        comment: `This proved to be impossible using 
        concepts of space and time. Einstein 
        new view of time first and then`,
    },
    {
        url: "./user.2.png",
        name: "Regina Miles",
        job: "Designer",
        rating: "5",
        comment: `This proved to be impossible using 
        concepts of space and time. Einstein 
        new view of time first and then`,
    },
];

function Clients() {

    return <div className="row">
        {res.map((value) => {
            return <div className="col-12 col-md-6">
                <div className="box d-flex">
                    <img src={value.url} alt="?" />
                    <div>
                        <h6>
                            {value.name}
                        </h6>
                        <p>
                            {value.job}
                        </p>
                        <StarRating size='15' isReadOnly='true' initialRating={value.rating} />
                        <p>
                            {value.comment}
                        </p>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default Clients;