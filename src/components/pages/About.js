import React from "react";

function About() {
  return (
    <div className="container bodyWrapper">
      <div className="container-fluid padding bottomMargin">
        <div className="row padding">
          <div className="col-12 aboutBody">
            <h1 className="title">About Me</h1>
            <hr></hr>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 leftpanel">
                <aside class="pull-left"><img src={require("../assets/IMG_4729.jpg")} alt="selfie" id="imgbox"></img></aside>
                {/* <hr className="hide"></hr> */}
                <p></p>
                <p>I am Chris Klinger, a full stack web developer from an Exploration Drilling Background. In my time in the drilling,
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
                Having come from a vastly different industry, I see the opportunity to apply the team-work skills and strong work ethic
                have gained from drilling into Web Development.
                </p>
   
                </div>


            </div>
            <hr></hr>
            <div className="row text-center">
            <div className="col-12">
              <h2>Connect</h2>
              <h6><a href="tel:0475416442">0475 416 442</a></h6>
              <h6>Chriskl@live.com</h6>
            </div>
              <div className="col-12 social padding" id="socials">
                <a href="https://github.com/ChrisAMK" title="Click to go to Github"><i className="fab fa-github fright"></i></a>
                <a href="https://www.linkedin.com/in/chrisamk" title="Click to go to LinkedIn"><i className="fab fa-linkedin fleft"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
