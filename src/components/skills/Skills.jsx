import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Codeimg from '../../assests/95064821-1656c580-0722-11eb-9169-a239ffb79241.png'

const Skills = () => (
    <section id='skills'>
        <h5>What Skills i have</h5>
        <h1>Skills</h1>
        <div className='container container_skills'>
            <div className='skills_tech'>
                <h3>Tech Skills</h3>
                <div className='tech_contents'>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>HTML</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>CSS</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>React</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>JavaScript</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Node.js</h4>
                        <small className='text-light'>Basic</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>C++</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Python</h4>
                        <small className='text-light'>Basic</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Java</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>

                </div>
            </div>
            <div className='skills_soft'>
                <h3>Soft Skills</h3>
                <div className='soft_contents'>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Communication</h4>
                        <small className='text-light'>3/5</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Negotiation</h4>
                        <small className='text-light'>4/5</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Writing</h4>
                        <small className='text-light'>3/5</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>Creativity</h4>
                        <small className='text-light'>5/5</small>
                    </article>
                    {/* <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>HTML</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article>
                    <article className='skill_details'>
                        <BsPatchCheckFill className='skills-icons' />
                        <h4>HTML</h4>
                        <small className='text-light'>Imtermediate</small>
                    </article> */}


                </div>
            </div>
            <div className='discription'>
                <div className='skill_img_content'>
                    <img src={Codeimg} alt='' />
                    <article>If you are looking for fake Experience ,I don't have it, but what I have is a particular set of skills that I have acquired over a period of time ,which makes me nightmare for people with fake experience and lacking skills.</article>               </div>
            </div>
        </div>
    </section>
)

export default Skills