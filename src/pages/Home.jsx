function Home() {
    return (
      <div className="home-banner">
          <div className="home-nav">
              <div className="home-logo">
                <img src={"./assets/png.waysfood.png"} />
              </div>
              
              <div>
                <button className="home-button" style={{marginRight: 16, cursor: "pointer"}}>Register</button>
                <button className="home-button" style={{marginRight: 93.94, cursor: "pointer"}}>Login</button>
              </div>
          </div>
          <div>

          </div>
      </div>
    );
  }
  
  export default Home;
  