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
        name: "John Doe",
        job: "Web developer",
        rating: "5",
        comment: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, distinctio!`,
    },
];

function Clients() {

    return <div className="row">
        {res.map((value) => {
            return <div className="col-12 col-lg-6 my-5 ">
                <div className="box3 d-lg-flex bg-white pe-lg-3 align-items-center d-block">
                    <div className="ci-box w-100 w-lg-50 me-3">
                        <img src={value.url} alt="?" className="w-100 ci" />
                    </div>
                    <div className="p-4 p-lg-0 py-lg-3 h bg-white">
                        <h4 className="m-0">
                            {value.name}
                        </h4>
                        <p className="fs-5 m-0">
                            {value.job}
                        </p>
                        <StarRating size='15' isReadOnly='true' initialRating={value.rating} />
                        <p className="m-0 text-muted">
                            {value.comment}
                        </p>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default Clients;