import { NavLink } from 'react-router-dom'
import './company.scss'

function Company({ company }) {
	return (
		<>
			<section id="company">
				<div className="container">
					<div className="company-details">
						<h2>ABOUT YOUR COMPANY</h2>
						<h1>{company.title}</h1>
						<span>{company.desc}</span>
						<div className="skills">
							{company.skills.map((skill) => (
								<div className="skill" key={skill.id}>
									<div className="skill-detail">
										<h1>{skill.skill}</h1>
										<h2>{skill.percent}%</h2>
									</div>
									<div className="percent-bar">
										<span
											style={{
												width: `${skill.percent}%`,
											}}
										></span>
									</div>
								</div>
							))}
						</div>
						<NavLink to="/">Learn More</NavLink>
					</div>
					<div className="company-image">
						<img src={company.image} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}

export default Company
