import React from "react";

function Blog() {
  return (
    <div className="container-fluid padding bottomMargin">
      <div className="row padding">
        <div className="col-12 aboutBody">
          <h1 className="title">Portfolio</h1>
          <hr></hr>
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                  <div className="card">
                      <img className="card-img-top" src="/assets/employee-tracker.jpg" alt="Car"></img>
                      <div className="card-body">
                          <h4 className="card-title">Employee Tracker</h4>
                          <hr></hr>
                          <p>Employee Track is a Command Line Application that lets users add Departments and Roles to a store and manage employees and their roles within the Store.</p>
                          <a className="leftbtn" href="https://github.com/ChrisAMK/Employee-Tracker-MySQL" target="__blank">Deployed Site</a>
                          <a className="rightbtn" href="https://github.com/ChrisAMK/Employee-Tracker-MySQL" target="__blank">Github Repository</a>                                    
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                  <div className="card">
                      <img className="card-img-top" src="/assets/burger.jpg" alt="Car"></img>
                      <div className="card-body">
                          <h4 className="card-title">Hungry Cheds</h4>
                          <hr></hr>
                          <p>Hungry Cheds is a Simple Web Application that uses a MySQL Database for users to add any kind of burger they want, devour it and then delete the burger.</p>
                          <a className="leftbtn" href="https://infinite-dawn-32982.herokuapp.com/" target="__blank">Deployed Site</a>
                          <a className="rightbtn" href="https://github.com/ChrisAMK/Eat-Da-Burger" target="__blank">Github Repository</a>                                    
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                  <div className="card">
                      <img className="card-img-top" src="/assets/quiz.jpg" alt="Car"></img>
                      <div className="card-body">
                          <h4 className="card-title">Javascript Quiz</h4>
                          <hr></hr>
                          <p>This Application tests the users knowledge of Javascript by presenting a series of questions where the user can select the correct one, The Score is counted.</p>
                          <a className="leftbtn" href="https://chrisamk.github.io/JavaScript-Quiz-Game/" target="__blank">Deployed Site</a>
                          <a className="rightbtn" href="https://github.com/ChrisAMK/JavaScript-Quiz-Game" target="__blank">Github Repository</a>                                    
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                  <div className="card">
                      <img className="card-img-top" src="/assets/pong.jpg" alt="Car"></img>
                      <div className="card-body">
                          <h4 className="card-title">Python Pong</h4>
                          <hr></hr>
                          <p>A Simple Game of Pong written in Python, It is a two player game where one player controls with W and S, and the other with the Arrow Keys.</p>
                          <a className="leftbtn" href="https://github.com/ChrisAMK/Pong" target="__blank">Deployed Site</a>
                          <a className="rightbtn" href="https://github.com/ChrisAMK/Pong" target="__blank">Github Repository</a>                                    
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                  <div className="card">
                      <img className="card-img-top" src="/assets/screen1planner.jpg" alt="Car"></img>
                      <div className="card-body">
                          <h4 className="card-title">Work Day Scheduler</h4>
                          <hr></hr>
                          <p>Work Day Scheduler keeps track of the user's day buy allowing the user to enter in their activities in the hour slots that are represented by Past, Present and Future.</p>
                          <a className="leftbtn" href="https://chrisamk.github.io/JavaScript-Daily-Planner/index.html" target="__blank">Deployed Site</a>
                          <a className="rightbtn" href="https://github.com/ChrisAMK/JavaScript-Daily-Planner" target="__blank">Github Repository</a>                                    
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                  <div className="card">
                      <img className="card-img-top" src="/assets/screen2api.jpg" alt="Car"></img>
                      <div className="card-body">
                          <h4 className="card-title">Ched Weather</h4>
                          <hr></hr>
                          <p>Ched weather is a weather app that allows users to search for a town or city and be presented with the current weather and a 5 day forecast.</p>
                          <a className="leftbtn" href="https://chrisamk.github.io/Weather-Forecast-API/" target="__blank">Deployed Site</a>
                          <a className="rightbtn" href="https://github.com/ChrisAMK/Weather-Forecast-API" target="__blank">Github Repository</a>                                    
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
