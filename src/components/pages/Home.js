import React from "react";

class Home extends React.Component {

  componentDidMount = () => {
    console.log("Mounted")
  }

  componentWillUnmount = () => {
    console.log("Unmounting")
  }

  com

  render() {
    return (
      <div className="container-fluid padding">
      <div className="row padding">
        <div className="col-12 aboutBody">
          <h1 className="title">About Me</h1>
          <hr></hr>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 leftpanel">
              <img src={require("./proshot.jpg")} alt="selfie" id="selfie"></img>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-8 rightpanel">
              <p>I am Chris Klinger, a full stack web developer from an Exploration Drilling Background. From my time in the Drilling scene,
                i put my work ethic to the test working months straight in Australia’s hottest environments</p>
              <p>
              I freshly received a certificate from The University of Western Australia’s Full Stack Web Development
              Bootcamp for acquired knowledge in HTML, CSS, JavaScript and Various Frameworks.I have always had a keen 
              interest in Technology from a young age, earning Principle’s commendations for ATAR AIT.
              </p>
              <p>
              Combining my determination with my ability to troubleshoot has brought satisfaction from developing User Friendly
              Web Applications and in doing so, I am motivated to replicate that satisfaction by further developing
              my skills as a full-stack web developer in a professional workplace.
              </p>
              <p>
              Having come from a vastly different industry, I see the opportunity to apply the Team-work skills and strong work ethic
              have gained from Drilling Rigs into Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}



export default Home;
