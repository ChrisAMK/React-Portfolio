import React from "react";
import PortfolioCard from "./Portfolio-Card";

function Portfolio() {

    const leftProjects = [
        {
            title: "Employee Tracker",
            summary: "Employee Track is a Command Line Application that lets users add Departments and Roles to a store and manage employees and their roles within the Store.",
            repo: "https://github.com/ChrisAMK/Employee-Tracker-MySQL",
            deployed: "",
            image: "employee-tracker.jpg"
        },
        {
            title: "Hungry Cheds",
            summary: "Hungry Cheds is a Simple Web Application that uses a MySQL Database for users to add any kind of burger they want, devour it and then delete the burger.",
            repo: "https://github.com/ChrisAMK/Eat-Da-Burger",
            deployed: "https://infinite-dawn-32982.herokuapp.com/",
            image: "burger.jpg"
        },
        {
            title: "Vanilla JavaScript Quiz",
            summary: "This Application tests the users knowledge of Javascript by presenting a series of questions where the user can select the correct one, The Score is counted.",
            repo: "https://github.com/ChrisAMK/JavaScript-Quiz-Game",
            deployed: "https://chrisamk.github.io/JavaScript-Quiz-Game/",
            image: "quiz.jpg"
        }
    ]

    const rightProjects = [
        {
            title: "Python Pong",
            summary: "A Simple Game of Pong written in Python, It is a two player game where one player controls with W and S, and the other with the Arrow Keys.",
            repo: "https://github.com/ChrisAMK/Pong",
            deployed: "",
            image: "pong.jpg"
        },
        {
            title: "Ched Weather",
            summary: "Ched weather is a weather app that allows users to search for a town or city and be presented with the current weather and a 5 day forecast.",
            repo: "https://github.com/ChrisAMK/Weather-Forecast-API",
            deployed: "https://chrisamk.github.io/Weather-Forecast-API/",
            image: "Screen1planner.jpg"
        },
        {
            title: "Work Day Scheduler",
            summary: "Work Day Scheduler keeps track of the user's day buy allowing the user to enter in their activities in the hour slots that are represented by Past, Present and Future.",
            repo: "https://github.com/ChrisAMK/JavaScript-Daily-Planner",
            deployed: "https://chrisamk.github.io/JavaScript-Daily-Planner/index.html",
            image: "screen2api.jpg"
        }
    ]

    const generateProjects = (project) => {
        return (
            <PortfolioCard
            title={project.title}
            image={project.image}
            summary={project.summary}
            repo={project.repo}
            deployed={project.deployed}
            />
        )
    }
    

  return (

    <div className="container-fluid padding bottomMargin">
      <div className="row padding">
        <div className="col-12 aboutBody">
          <h1 className="title">Portfolio</h1>
          <hr></hr>
          <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                    { 
                      leftProjects.map(project => (
                          generateProjects(project)
                      ))
                    }
              </div>
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                    {
                      rightProjects.map(project => (
                          generateProjects(project)
                      ))
                    }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
