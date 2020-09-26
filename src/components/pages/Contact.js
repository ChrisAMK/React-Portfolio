import React from "react";

function Contact() {
  return (
    <div className="container-fluid padding bottomMargin">
      <div className="row padding">
        <div className="col-12 aboutBody">
          <h1 className="title">Get in Contact</h1>
          <hr></hr>
          <div className="row">
            <div className="col-12 leftpanel">
              <form className="col-12">
                <label>Name:</label><br></br>
                <input type="text" name="name" placeholder="Enter a Name" className="contactInput"/><br></br><br></br>
                <label>Email Address:</label><br></br>
                <input type="text" name="name" placeholder="Enter your E-Mail Address" className="contactInput"/><br></br><br></br>
                <label>Name:</label><br></br>
                <textarea type="text" name="name" placeholder="Enter your Message" className="contactInput"/><br></br><br></br>
                
                <button className="rightbtn">Submit</button>                                    
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
