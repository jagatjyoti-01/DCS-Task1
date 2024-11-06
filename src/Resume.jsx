import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Careerobj from './components/Careerobj';
import SkillAndLanguage from "./components/SkillAndLanguage";
import Academic from "./components/Academic";
import Intrests from "./components/Intrests";
import Projects from "./components/Projects";

function Resume() {
  return (
    <div className="container mt-4">
      <Header />
{/* This is my about us section */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="p-3 py-0 ">
            <About />
          </div>
        </div>

        {/* Career Objective */}
        <div className="col-md-8">
          <Careerobj/>
        </div>
      </div>


      <div className="row mt-4">
        {/* Skills */}
        <div className="col-md-4">
          <SkillAndLanguage/>
        
        </div>

        {/* Academic Background */}
        <div className="col-md-8">
         <Academic/>
        </div>
      </div>


      <div className="row mt-4">
       
        {/* Interests */}
        <div className="col-md-4">
         <Intrests/>
        </div>

        {/* Internships & Projects */}
        <div className="col-md-8 pb-4">
         <Projects/>
        </div>
      </div>
    </div>
  );
}

export default Resume;
