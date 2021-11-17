import logo from '../assets/png/waysfood.png';

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
          <div>
            <div>
              <h1>Are You Hungry?</h1>
              <h1>Express Home Delivery</h1>
            </div>
            <div></div>
          </div>
      </div>
    );
  }
  
  export default Home;
  