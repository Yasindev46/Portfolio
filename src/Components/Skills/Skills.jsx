import React from 'react';
import './Skills.css';

const skills = [
  {
    name: 'React',
    logo: '/Portfolio/react.png',
    description:'Framework'
  },
  {
    name: 'JavaScript',
    logo: '/Portfolio/js.png',
    description:'Interaction'
  },
  {
    name: 'TypeScript',
    logo: '/Portfolio/ts.png',
    description:'Interaction'
  },
  {
    name: 'HTML5',
    logo: '/Portfolio/html.png',
    description:'Markup Language'
  },
  {
    name: 'CSS3',
    logo: '/Portfolio/css.png',
    description:'User Interface'
  },
  {
    name: 'Tailwind CSS',
    logo: '/Portfolio/tailwind.png',
    description:'User Interface'
  },
  {
    name: 'Less',
    logo: '/Portfolio/less.png',
    description:'User Interface'
  },
  {
    name: 'Figma',
    logo: '/Portfolio/figma.png',
    description:'User Interface'
  },
  {
    name: 'Redux',
    logo: '/Portfolio/redux.jpeg',
    description:'State Management'
  },
  {
    name: 'Git',
    logo: '/Portfolio/git.jpg',
    description:'Version Control'
  },
  {
    name: 'GHCP',
    logo: '/Portfolio/copilot.png',
    description:'AI Coding agent'
  },
  {
    name: 'Codex',
    logo: '/Portfolio/codex.jpg',
    description:'AI Coding agent'
  },
  {
    name: 'Node.js',
    logo: '/Portfolio/node.jpeg',
    description:'Server-side Runtime'
  },
  {
    name: 'Express.js',
    logo: '/Portfolio/express.png',
    description:'Server-side Runtime'
  },
  {
    name: 'MongoDB',
    logo: '/Portfolio/mongo.jpeg',
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