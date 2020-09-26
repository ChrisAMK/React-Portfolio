import React from "react";

function Blog() {
  return (
    <div className="container-fluid padding">
      <div className="row padding">
        <div className="col-12 aboutBody">
          <h1 className="title">Portfolio</h1>
          <hr></hr>
          <div className="row">
                        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                            <div className="card">
                                <img className="card-img-top" src="img/waykey.jpg" alt="Car Photo"></img>
                                <div className="card-body">
                                    <h4 className="card-title">Way-key</h4>
                                    <p>Project 1 saw my group create the Way-key, it is a dashboard that tells you the weather and provides a playlist along with a joke for the day</p>
                                    <a href="https://https://chrisamk.github.io/Way-Key/index.html" target="__blank">Click to Check it out!</a><br></br>
                                    <a href="https://github.com/ChrisAMK/Way-Key" target="__blank">Click here for Repository Link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                            <div className="card">
                                <img className="card-img-top" src="img/walkey.jpg" alt="Car Photo"></img>
                                <div className="card-body">
                                    <h4 className="card-title">Walkey</h4>
                                    <p>Project 2 with the same group decided on creating a Full Stack Dog walking app for pet owners</p>
                                    <a href="https://veronickling-project2.herokuapp.com/" target="__blank">Click to Check it out!</a><br></br>
                                    <a href="https://github.com/RecordSword/Project2/" target="__blank">Click here for Repository Link</a>
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
