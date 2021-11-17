import logo from '../assets/png/waysfood.png';
import pizza from '../assets/png/pizza-icon.png';
import bkLogo from '../assets/png/burgerking.png';
import starbucksLogo from '../assets/png/starbucks.png';
import kfcLogo from '../assets/png/kfc.png';
import jcoLogo from '../assets/png/jco.png';

function Home() {
    return (
      // Main Div Wrapper Start
      <div className="mainDiv">
        
        {/* Jumbotron Wrapper Start */}
        <div className="homeBanner">
          {/* Navigation Bar Wrapper */}
          <div className="homeNav">
              {/* Logo Wrapper */}
              <div className="homeLogo">
                <img src={logo} alt="waysfood-logo" />
              </div>
              {/* Button Wrapper */}
              <div>
                <button className="homeButton" style={{marginRight: 16}}>Register</button>
                <button className="homeButton" style={{marginRight: 93.94}}>Login</button>
              </div>
              {/* Create conditional rendering below */}
          </div>
          
          {/* Jumbotron Content Wrapper */}
          <div className="header">
            <div className="headerText">
              <p>Are You Hungry? <br/> Express Home Delivery</p>
              <div className="headerContent">
                <div className="headerStick"></div>
                <div className="headerDescription">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div className="headerImage">
              <img src={pizza} alt="pizza-image"/>
            </div>
          </div>
        </div>
        {/* Jumbotron Wrapper End */}
        
        {/* Homepage Contents Wrapper Start */}
        <div className="container">
          <h2>Popular Restaurant</h2>
          <div className="row">
            <div className="col-md-3 restaurantCard">
              <img src={bkLogo} alt="burger-king-logo" />
            </div>
            <div className="col-md-3 restaurantCard">
              <img src={starbucksLogo} alt="starbucks-logo" />
            </div>
            <div className="col-md-3 restaurantCard">
              <img src={kfcLogo} alt="kfc-logo" />
            </div>
            <div className="col-md-3 restaurantCard">
              <img src={jcoLogo} alt="jco-logo" />
            </div>
          </div>
          <div>
            blu
          </div>
        </div>
        {/* Homepage Contents Wrapper End */}
      
      </div>
      // Main Div Wrapper End
    );
  }
  
  export default Home;
  