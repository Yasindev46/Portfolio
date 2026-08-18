import React from 'react';
import './Skills.css';

const skills = [
  {
    name: 'React',
    logo: '/public/images/react.png',
    description:'Framework'
  },
  {
    name: 'JavaScript',
    logo: '/public/images/js.png',
    description:'Interaction'
  },
  {
    name: 'TypeScript',
    logo: '/public/images/ts.png',
    description:'Interaction'
  },
  {
    name: 'HTML5',
    logo: '/public/images/html.png',
    description:'Markup Language'
  },
  {
    name: 'CSS3',
    logo: '/public/images/css.png',
    description:'User Interface'
  },
  {
    name: 'Tailwind CSS',
    logo: '/public/images/tailwind.png',
    description:'User Interface'
  },
  {
    name: 'Less',
    logo: '/public/images/less.png',
    description:'User Interface'
  },
  {
    name: 'Figma',
    logo: '/public/images/figma.png',
    description:'User Interface'
  },
  {
    name: 'Redux',
    logo: '/public/images/redux.jpeg',
    description:'State Management'
  },
  {
    name: 'Git',
    logo: '/public/images/git.jpg',
    description:'Version Control'
  },
  {
    name: 'GHCP',
    logo: '/public/images/copilot.png',
    description:'AI Coding agent'
  },
  {
    name: 'Codex',
    logo: '/public/images/codex.jpg',
    description:'AI Coding agent'
  },
  {
    name: 'Node.js',
    logo: '/public/images/node.jpeg',
    description:'Server-side Runtime'
  },
  {
    name: 'Express.js',
    logo: '/public/images/express.png',
    description:'Server-side Runtime'
  },
  {
    name: 'MongoDB',
    logo: '/public/images/mongo.jpeg',
    description:'Database'
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title" >Essential Tools I Used</h2>
      <p className="skills-subtitle">Discover the powerfull tools and technologies I use to create<br/>
      exceptional, high-performing websites & applications.</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
            <span className="skill-desc">{skill.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;