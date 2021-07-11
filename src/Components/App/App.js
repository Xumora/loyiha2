import './App.css';
import Title from '../Title/Title';
import Blocks from '../Blocks/Blocks';
import Clients from '../Clients/Clients';
import PricingCards from '../PricingCards/PricingCards';
import Cards from '../Cards/Cards';

function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
          <Title titleName="Better Strategy With  Quality Business" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <Blocks />
        </div>
      </section>

      <section>
        <div className="container">
          <Title titleName="What Clients Say" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <Clients />
        </div>
      </section>

      <section>
        <div className="container">
          <Title titleName="About Us" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
        </div>
      </section>

      <section>
        <div className="container">
          <Title titleName="Pricing" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <PricingCards />
        </div>
      </section>

      <section>
        <div className="container">
          <Title titleName="Get In Touch" titleText="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics" />
          <Cards />
        </div>
      </section>
    </div>
  );
}

export default App;
