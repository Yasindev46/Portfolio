import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <section className='section-container'>
      <div className='section-intro'>
        <h2 className='section-heading' id='hero-name' >
          Hello, 👋
        </h2>
        <h3 className='section-name'>I'm Yasin</h3>
        <h2 className='section-heading' >
          Software Developer
        </h2>
        <p className='section-subheading' >
          I'm a passionate <strong>Software Developer</strong> specializing in building modern web applications with React, JavaScript, and Tailwind CSS. I love solving problems, learning new technologies, and collaborating with creative teams to deliver impactful digital experiences.
        </p>
      </div>
        <img
        src="/public/hero2.jpg "
        alt="Developer"
        className='glow-img'
      />
    </section>
  );
}

export default Section;
