import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-7xl md:text-5xl'data-aos='zoom-in-up'>Technologies I work with </h2>
          <p data-aos='zoom-in-up'className='text-grey-500 pt-8'>
            I have a solid foundation in web develpment, specializing in HTML, CSS, Javascript, Typescript, C/C++, GW-Basic, Foxpro. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I&aposm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-blue-400 text-3xl sm:text-4xl'>
            <div data-aos='zoom-in-up'className='space-y2'>
            <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>JavaScript</h2>
              <h2>TypeScript</h2>
              <h2>React.js</h2>
              <h2>Node.js</h2>
            </div>
            <div data-aos='zoom-in-up'className='space-y2'>
              <h2>Next.js</h2>
              <h2>Tailwind</h2>
              <h2>C-Language</h2>
              <h2>C++</h2>
              <h2>GW-Basic</h2>
              <h2>FoxPro</h2>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Skills
