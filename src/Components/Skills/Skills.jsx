import React from 'react';
import './Skills.css';

const skills = [
  {
    name: 'React',
    logo: '/public/react.png',
    description:'Framework'
  },
  {
    name: 'JavaScript',
    logo: '/public/js.png',
    description:'Interaction'
  },
  {
    name: 'TypeScript',
    logo: '/public/ts.png',
    description:'Interaction'
  },
  {
    name: 'HTML5',
    logo: '/public/html.png',
    description:'Markup Language'
  },
  {
    name: 'CSS3',
    logo: '/public/css.png',
    description:'User Interface'
  },
  {
    name: 'Tailwind CSS',
    logo: '/public/tailwind.png',
    description:'User Interface'
  },
  {
    name: 'Less',
    logo: '/public/less.png',
    description:'User Interface'
  },
  {
    name: 'Figma',
    logo: '/public/figma.png',
    description:'User Interface'
  },
  {
    name: 'Redux',
    logo: '/public/redux.jpeg',
    description:'State Management'
  },
  {
    name: 'Git',
    logo: '/public/git.jpg',
    description:'Version Control'
  },
  {
    name: 'GHCP',
    logo: '/public/copilot.png',
    description:'AI Coding agent'
  },
  {
    name: 'Codex',
    logo: '/public/codex.jpg',
    description:'AI Coding agent'
  },
  {
    name: 'Node.js',
    logo: '/public/node.jpeg',
    description:'Server-side Runtime'
  },
  {
    name: 'Express.js',
    logo: '/public/express.png',
    description:'Server-side Runtime'
  },
  {
    name: 'MongoDB',
    logo: '/public/mongo.jpeg',
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