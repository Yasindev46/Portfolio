import React, { useState } from "react";
import "./About.css";

const About = () => {
  const stats = [
  {
    label: "Experience",
    value: "6+ Years",
    icon: <i className="fa fa-briefcase" style={{ fontSize: 28, color: "#00bcd4" }} />,
  },
  {
    label: "Skills",
    value: "10+",
    icon: <i className="fa fa-cogs" style={{ fontSize: 28, color: "rgb(224, 232, 67)" }} />,
  },
  {
    label: "Commits",
    value: "4000+",
    icon: <i className="fa fa-git" style={{ fontSize: 28, color: "rgb(187, 80, 240)" }} />,
  },
  {
    label: "Projects Completed",
    value: "4+",
    icon: <i className="fa fa-check-circle" style={{ fontSize: 28, color: "rgb(121, 243, 97)" }} />,
  },
];
  return (
    <section className="about-section" id="aboutMe">
      <h2 className="about-heading" >About Me</h2>
      <p className="about-description">
        I'm Yasin, a passionate software developer focused on building modern,
        scalable web applications. I enjoy learning new technologies,
        collaborating with creative teams, and solving real-world problems
        through code.
      </p>
       <div className="about-stats">
        {stats.map((stat) => (
          <div className="about-stat-card" key={stat.label}>
            <div className="about-stat-icon">{stat.icon}</div>
            <div className="about-stat-value">{stat.value}</div>
            <div className="about-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
