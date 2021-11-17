import logo from '../assets/png/waysfood.png';
import pizza from '../assets/png/pizza-icon.png';

function Home() {
    return (
      <div className="homeBanner">
          <div className="homeNav">
              <div className="homeLogo">
                <img src={logo} alt="waysfood-logo" />
              </div>
              
              <div>
                <button className="homeButton" style={{marginRight: 16}}>Register</button>
                <button className="homeButton" style={{marginRight: 93.94}}>Login</button>
              </div>
              {/* Create conditional rendering here */}
          </div>
          
          <div className="main">
            <div className="mainText">
              <h1 >Are You Hungry? <br/> Express Home Delivery</h1>
              <div className="mainContent">
                <div className="mainStick"></div>
                <div className="mainDescription">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div className="mainImage">
              <img src={pizza} alt="pizza-image"/>
            </div>
          </div>
      </div>
    );
  }
  
  export default Home;
  