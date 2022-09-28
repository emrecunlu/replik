import {NavLink} from 'react-router-dom'
import './company.scss'
import {useSelector} from "react-redux";
import {resize} from "../../helper";

function Company({company}) {

    const {config} = useSelector(state => state.config)

    console.log(config)

    return (
        <>
            <section id="company">
                <div className="container">
                    <div className="company-details">
                        <h2>{config.company_about.label}</h2>
                        <h1>{config.company_about.value}</h1>
                        <span>{config.company_desc.value}</span>
                        <div className="skills">
                            {config.skills.value.split('|').map((skill, i) => (
                                <div className="skill" key={i}>
                                    <div className="skill-detail">
                                        <h1>{skill.split(',')[0]}</h1>
                                        <h2>{skill.split(',')[1]}%</h2>
                                    </div>
                                    <div className="percent-bar">
										<span
                                            style={{
                                                width: `${skill.split(',')[1]}%`,
                                            }}
                                        ></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <NavLink to="/">Learn More</NavLink>
                    </div>
                    <div className="company-image">
                        <img src={resize(config.company_about.image, 500, 500)} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company
