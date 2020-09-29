import React from "react";
import PortfolioCard from "./Portfolio-Card";

function Portfolio() {

    const leftProjects = [
        {
            title: "Budget Tracker",
            summary: "Budget Tracker is a Progressive Web Application that allows functionality for users to keep track of how much money they have spent even while being offline.",
            repo: "https://github.com/ChrisAMK/Budget-Tracker",
            deployed: "https://warm-tundra-70984.herokuapp.com/",
            image: "budget.jpg",
            index: 1
        },
        {
            title: "Hungry Cheds",
            summary: "Hungry Cheds is a Simple Web Application that uses a MySQL Database for users to add any kind of burger they want, devour it and then delete the burger.",
            repo: "https://github.com/ChrisAMK/Eat-Da-Burger",
            deployed: "https://infinite-dawn-32982.herokuapp.com/",
            image: "burger.jpg",
            index: 3
        },
        {
            title: "Vanilla JavaScript Quiz",
            summary: "This Application tests the users knowledge of Javascript by presenting a series of questions where the user can select the correct one, The Score is counted.",
            repo: "https://github.com/ChrisAMK/JavaScript-Quiz-Game",
            deployed: "https://chrisamk.github.io/JavaScript-Quiz-Game/",
            image: "quiz.jpg",
            index: 5
        }
    ]

    const rightProjects = [
        {
            title: "Python Pong",
            summary: "A Simple Game of Pong written in Python, It is a two player game where one player controls with W and S, and the other with the Arrow Keys.",
            repo: "https://github.com/ChrisAMK/Pong",
            deployed: "",
            image: "pong.jpg",
            index: 2
            
        },
        {
            title: "Ched Weather",
            summary: "Ched weather is a weather app that allows users to search for a town or city and be presented with the current weather and a 5 day forecast.",
            repo: "https://github.com/ChrisAMK/Weather-Forecast-API",
            deployed: "https://chrisamk.github.io/Weather-Forecast-API/",
            image: "Screen1planner.jpg",
            index: 4
        },
        {
            title: "Work Day Scheduler",
            summary: "Work Day Scheduler keeps track of the user's day buy allowing the user to enter in their activities in the hour slots that are represented by Past, Present and Future.",
            repo: "https://github.com/ChrisAMK/JavaScript-Daily-Planner",
            deployed: "https://chrisamk.github.io/JavaScript-Daily-Planner/key.html",
            image: "screen2api.jpg",
            index: 6
        }
    ]

    const generateProjects = (project, key) => {
        return (
            <PortfolioCard
            title={project.title}
            image={project.image}
            summary={project.summary}
            repo={project.repo}
            deployed={project.deployed}
            key={project.index}
            />
        )
    }
    

  return (
    <div className="container bodyWrapper">
      <div className="container-fluid padding bottomMargin">
        <div className="row padding">
          <div className="col-12 aboutBody">
            <h1 className="title">Portfolio</h1>
            <hr></hr>
            <div className="row">
                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                      { 
                        leftProjects.map((project, key) => (
                            generateProjects(project, key)
                        ))
                      }
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                      {
                        rightProjects.map((project, key) => (
                            generateProjects(project, key)
                        ))
                      }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
