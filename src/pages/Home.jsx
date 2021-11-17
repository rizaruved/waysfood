import logo from '../assets/png/waysfood.png';
import pizza from '../assets/png/pizza-icon.png';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
              <h1 >Are You Hungry? <br/> Express Home Delivery</h1>
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
            <div className="col-md-3 restaurantCard">bla</div>
            <div className="col-md-3 restaurantCard">bli</div>
            <div className="col-md-3 restaurantCard">blu</div>
            <div className="col-md-3 restaurantCard">ble</div>
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
  