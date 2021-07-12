import './App.css';
import Title from '../Title/Title';
import Blocks from '../Blocks/Blocks';
import Clients from '../Clients/Clients';
import PricingCards from '../PricingCards/PricingCards';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="py-5">
        <div className="container my-5 py-5">
          <Title titleName="Creating a Beautifull and Usefull Solutitons" titleText="We know how large objects will act, but things on a 
            small scale just do not act that way." className="display-5 fw-bold" textClass="fs-5 px-5" />
          <div className="text-center">
            <a href="#" className="btn btn-primary m-0 me-lg-3 py-3 px-4 btn1 d-block d-lg-inline-block mt-3">Get Quote Now</a>
            <a href="#" className="btn btn-outline-light py-3 px-4 btn1 d-block d-lg-inline-block mt-3">Learn More</a>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <Title titleName="Better Strategy With  Quality Business" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <Blocks />
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <Title titleName="What Clients Say" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <Clients />
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <Title titleName="About Us" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <div className="row my-5 pt-5">
            <div className="col-12 col-lg-6">
              <div className="img-box">
                <img src="./video.1.jpg" alt="?" className="w-100" />
                <img src="./filter.png" alt="?" className="filter" />
              </div>
            </div>
            <div className="col-12 col-lg-4 offset-lg-2 text-white d-flex align-items-center mt-5 mt-lg-0">
              <div>
                <h4>Most trusted in our field</h4>
                <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                <div className="d-flex mt-3">
                  <FontAwesomeIcon icon={faClone} className="text-primary me-3 fs-3" />
                  <div>
                    <h5>the quick fox jumps over the lazy dog</h5>
                    <p>Things on a very small scale ...</p>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-primary me-3 fs-3" />
                  <div>
                    <h5>the quick fox jumps over the lazy dog</h5>
                    <p>Things on a very small scale ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <Title titleName="Pricing" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <PricingCards />
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <Title titleName="Get In Touch" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <Cards />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
