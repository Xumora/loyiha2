import "./PricingCards.css";

const res = [
    {
        name: "Regina Miles",
        des: "Designer",
        price: "4",
        ben: [`Unlimited product updates`, `Unlimited product updates`, `Unlimited product updates`, `1GB  Cloud 
        storage`, `Email and community support`]
    },
    {
        name: "Regina Miles",
        des: "Designer",
        price: "4",
        ben: [`Unlimited product updates`, `Unlimited product updates`, `Unlimited product updates`, `1GB  Cloud 
        storage`, `Email and community support`]
    },
    {
        name: "Regina Miles",
        des: "Designer",
        price: "4",
        ben: [`Unlimited product updates`, `Unlimited product updates`, `Unlimited product updates`, `1GB  Cloud 
        storage`, `Email and community support`]
    },
];

function PricingCards() {
    return <div className="row">
        {res.map((value, index) => {
            return <div className="col-12 col-md-4">
                <div className="box">
                    <h5>{value.name}</h5>
                    <p>{value.des}</p>
                    <h4>{value.price}</h4>
                    <h6>Per Month</h6>
                    <a href="#" className="btn btn-primary d-block">Try for free</a>
                    <ul class="list-group">
                        {value.ben.map((benefit) => {
                            return <li class="list-group-item">{benefit}</li>
                        })}
                    </ul>
                </div>
            </div>
        })}
    </div>
}

export default PricingCards;