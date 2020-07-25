import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="bio-div">
        <img className="bio-pic" 
        src="https://avatars1.githubusercontent.com/u/7634806?s=460&u=6f6f5b9b3070017d34185e9cdf32489498f15d17&v=4" 
        alt="https://avatars1.githubusercontent.com/u/7634806?s=460&u=6f6f5b9b3070017d34185e9cdf32489498f15d17&v=4"/>
        <div className="bio-info">
          <p>Abraham Jong-Hae Choi</p>
          <p>Male | 33</p>
          <p>Chapman University</p>
          <p>Computer Science B.S</p>
          <p>Web Developer</p>
          <p>US Veteran</p>
        </div>
      </div>
      <div className="about-div">
        <div className="about-card">
          <h1>Introduction</h1>
          <p>Hello, World! My name is Abraham Choi and my Korean name is Choi Jong-Hae. 
          I was born in New York and grew up in New Jersey. I joined the United States Air Force,
          was stationed in Louisiana. Separated from the military, went back to New Jersey to 
          Middlesex County College where I had received my Associate's degree in Computer Science,
          then moved to Orange, California where I received my Bachelor's degree in Computer 
          Science from Chapman University. Currently, I live and work in Irvine, at a Managed 
          Service Provider where I perform network operations, maintain servers, and provide 
          helpdesk support.</p>
          <p>Since 2019, I have been studying and developing using the MERN stack (MongoDB, 
          Express, React, Node). </p>
        </div>
      </div>
    </section>
  );  
}

export default About;