import React from "react";
import './about.css';
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf';
import { MdDownload } from "react-icons/md";
import data from './data';
import Card from '../../components/Card';


const About = () => {
    return(
        <section id='about'>
            <div className='container about__container'>
                <div className='about__left'>
                    <div className='about__portrait'>
                        <img src={AboutImage} alt="About Image" />
                     </div>
                </div>
                <div className='about__right'>
                    <h2>About Me</h2>
                    <div className='about__cards'>
                        {
                            data.map(item=>(
                                <Card key={item.id} className='about__card'>
                                <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.desc}</h5>
                                </Card>
                            ))
                        }
                    </div>
                    <p>Hi, my name is Kalindu Randika</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href={CV} download className='btn primary'>Download CV <MdDownload /></a>
                </div>
            </div>

        </section>

    )
}

export default About;
