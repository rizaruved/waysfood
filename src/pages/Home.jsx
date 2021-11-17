import logo from '../assets/png/waysfood.png';
import pizza from '../assets/png/pizza-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
      // Main Div Wrapper Start
      <div>
        
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
          <div className="jumbotron">
            <div className="jumbotronText">
              <h1 >Are You Hungry? <br/> Express Home Delivery</h1>
              <div className="jumbotronContent">
                <div className="jumbotronStick"></div>
                <div className="jumbotronDescription">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div className="jumbotronImage">
              <img src={pizza} alt="pizza-image"/>
            </div>
          </div>
        </div>
        {/* Jumbotron Wrapper End */}
        
        {/* Homepage Contents Wrapper Start */}
        <div className="container">
          <h2>Popular Restaurant</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
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
  