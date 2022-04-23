import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';

class App extends Component {

  renderExperiences() {
    let resultsArray = [];
    resume.experiences.forEach((item, i) => {
      resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }

  renderProjects() {
    let resultsArray = [];
    resume.projects.forEach((item, i) => {
      resultsArray.push(<Project item={item} key={i} />);
    });
    return resultsArray;
  }

  renderSkills() {
    let resultsArray = [];
    resume.skills.forEach((item, i) => {
      resultsArray.push(<Skill item={item} key={i} />);
    });
    return resultsArray;
  }

  renderEducations() {
    let resultsArray = [];
    resume.education.forEach((item, i) => {
      resultsArray.push(<Education item={item} key={i} />);
    });
    return resultsArray;
  }

  renderLanguages() {
    let resultsArray = [];
    resume.languages.forEach((item, i) => {
      resultsArray.push(<Language item={item} key={i} />);
    });
    return resultsArray;
  }

  renderInterests() {
    let resultsArray = [];
    resume.interests.forEach((item, i) => {
      resultsArray.push(<li key={i}>{item}</li>);
    });
    return resultsArray;
  }


  render() {
    return (
      <div class="wrapper">
        <div class="sidebar-wrapper">
          <div class="profile-container">
            <img className="profile" src={resume.image} alt="Dispaly-pic" />
            <h1 className="name">{resume.name}</h1>
            <h3 className="tagline">Software Engineer</h3>
          </div>

          <div class="contact-container container-block">
            <ul class="list-unstyled contact-list">
              <li class="email"><i class="fas fa-envelope"></i><a href="mailto: yourname@email.com" target="_blank" rel="noopener noreferrer">{resume.email}</a></li>
              <li class="phone"><i class="fas fa-phone-alt"></i><a href="tel:+254 704 489 364">{resume.phone}</a></li>
              <li class="website"><i class="fas fa-globe"></i><a href={resume.websiteURL} target="_blank" rel="noopener noreferrer">{resume.website}</a></li>
              <li class="website"><i class="fas fa-globe"></i><a href={resume.portfolioURL} target="_blank" rel="noopener noreferrer">{resume.portfolio}</a></li>
              <li class="linkedin"><i class="fab fa-linkedin-in"></i><a href={resume.linkedinURL} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a></li>
              <li class="github"><i class="fab fa-github"></i><a href={resume.githubURL} target="_blank" rel="noopener noreferrer">{resume.github}</a></li>
              <li class="twitter"><i class="fab fa-twitter"></i><a href={resume.twitterURL} target="_blank" rel="noopener noreferrer">{resume.twitter}</a></li>
            </ul>
          </div>

          <div class="education-container container-block">
            <h2 class="container-block-title">Education</h2>
              {this.renderEducations()}
          </div>

          <div class="languages-container container-block">
            <h2 class="container-block-title">Languages</h2>
            <ul class="list-unstyled interests-list">
              {this.renderLanguages()}
            </ul>
          </div>

          <div class="interests-container container-block">
            <h2 class="container-block-title">Interests</h2>
            <ul class="list-unstyled interests-list">
              {this.renderInterests()}
            </ul>
          </div>

        </div>

        <div class="main-wrapper">

          <section class="section summary-section">
            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-user"></i></span>Career Profile</h2>
            <div class="summary">
              <p>
                A passionate software engineer who constantly seeks out innovative solutions to everyday problems with experience in strategic IT roles in the <strong>Payments</strong>,  
                <strong>Banking</strong>, <strong>Software Development</strong>, and <strong>Integrations</strong> industry. I genuinely enjoy working with clients to provide insightful and honest strategic recommendations based on their business goals.
              </p>

              <p> 
                Driven by my ability in developing quality software, I've honed my analytical thinking and collaboration skills,
                and I love working with a team throughout my 3 years in this industry. I've also had the opportunity to serve as the software engineer coordinator and lead several projects with first technology.
              </p>

              <p>
                I am confident and I pride myself on being an excellent collaborator with the ability to develop any application from desktop app to
                software and web applications. I am currently seeking an opportunity to join a fast-paced software development company that will
                benefit from my strong tech stacks and efficient software development skills.
              </p>

            </div>
          </section>

          <section class="section experiences-section">
            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Experiences</h2>

            {this.renderExperiences()}

          </section>

          <section class="section projects-section">
            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-archive"></i></span>Projects</h2>
            <div class="intro">
              <p>Here is a list of my top complete open-source side projects. Some of these projects though complete, are still under maintenance with new updates.</p>
            </div>
            
            {this.renderProjects()}

          </section>

          <section class="skills-section section">
            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
            <div class="skillset">
              {this.renderSkills()}

            </div>
          </section>

        </div>
      </div>
    );
  }
  
}

export default App;
