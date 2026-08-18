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
        {/* <img
        src="/public/images/hero3.png "
        alt="Developer"
        style={{
          width: '220px',
          height: '280px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      /> */}
        <img
        src="/public/images/hero2.jpg "
        alt="Developer"
        className='glow-img'
      />
      
    </section>
  );
}

export default Section;
