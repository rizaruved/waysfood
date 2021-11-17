import logo from '../assets/png/waysfood.png';
import pizza from '../assets/png/pizza-icon.png';

function Home() {
    return (
      <div className="home-banner">
          <div className="home-nav">
              <div className="home-logo">
                <img src={logo} alt="waysfood-logo" />
              </div>
              
              <div>
                <button className="home-button" style={{marginRight: 16, cursor: "pointer"}}>Register</button>
                <button className="home-button" style={{marginRight: 93.94, cursor: "pointer"}}>Login</button>
              </div>
          </div>
          
          <div className="main">
            <div className="main-text">
              <h1>Are You Hungry?</h1>
              <h1>Express Home Delivery</h1>
              <div className="main-content">
                <div className="main-stick"></div>
                <div className="main-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div>
              <img src={pizza} alt="pizza-image"/>
            </div>
          </div>
      </div>
    );
  }
  
  export default Home;
  