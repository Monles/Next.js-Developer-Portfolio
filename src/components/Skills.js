import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 3.5 }}
      viewport={{ once: true }}>
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}>
          Freelance
        </motion.div>

        <Skill name='Web Dev' x='-25vw' y='-5vw' />
        <Skill name='Pen Test' x='20vw' y='3vw' />
        <Skill name='Threat Analysis' x='20vw' y='15vw' />
        <Skill name='Python' x='0vw' y='12vw' />
        <Skill name='C' x='-25vw' y='12vw' />
        <Skill name='Blog' x='-30vw' y='-15vw' />
        <Skill name='Youtube' x='15vw' y='-12vw' />
        <Skill name='Rust' x='31vw' y='-5vw' />
        <Skill name='Brand Design' x='0vw' y='-20vw' />
        <Skill name='UI/UX Design' x='-5vw' y='-11vw' />
      </div>
    </>
  )
}

export default Skills
