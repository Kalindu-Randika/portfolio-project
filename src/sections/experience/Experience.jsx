import React from "react";
import data from "./data";
import './experience.css';
import Card from "../../components/Card";

const experience = () => {
    return(
        <section id='experience'> <h2> My Experience </h2>
        <p> Experienced Product Owner and Software Developer</p>
            <div className='container services__container'>
                {
                    data.map(item=>(
                        <Card key={item.id} className="service light">
                            <div className="service__icon"> {item.icon} </div>
                            <div className="service__details">
                            <h4> {item.title}</h4>
                                <p>{item.desc}</p>
                            </div>

                        </Card>
                        
                    ))
                }
            </div>
        </section>
    )

}

export default experience;
