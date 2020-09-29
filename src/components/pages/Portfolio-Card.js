import React from "react";

function PortfolioCard(props) {
    let deployedBtn = "Deployed Site"
    let deployedLink = <button className="portbtn leftbtn"><a href={props.deployed} target="__blank">{deployedBtn}</a></button>

    if (props.deployed === "") {
        deployedBtn = "Unavaliable"
        deployedLink = <button className="portbtn leftbtn">{deployedBtn}</button>
    }

    return (
            <div className="card">
                <img className="card-img-top" src={require(`../assets/${props.image}`)} alt="Car"></img>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <hr></hr>
                    <p>{props.summary}</p>
                    {deployedLink}
                    <button className="portbtn rightbtn"><a href={props.repo} target="__blank">Github Repository</a></button>
                </div>
            </div>   
    );
  }
  
  export default PortfolioCard;