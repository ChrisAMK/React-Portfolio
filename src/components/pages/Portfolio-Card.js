import React from "react";

function PortfolioCard(props) {
    let deployedBtn = "Deployed Site"
    let deployedLink = <a className="portbtn leftbtn" href={props.deployed} target="__blank">{deployedBtn}</a>

    if (props.deployed === "") {
        deployedBtn = "Unavaliable"
        deployedLink = <p className="portbtn leftbtn">{deployedBtn}</p>
    }

    return (
            <div className="card">
                <img className="card-img-top" src={require(`../assets/${props.image}`)} alt="Car"></img>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <hr></hr>
                    <p>{props.summary}</p>
                    {deployedLink}
                    <a className="portbtn rightbtn" href={props.repo} target="__blank">Github Repository</a>                                    
                </div>
            </div>   
    );
  }
  
  export default PortfolioCard;