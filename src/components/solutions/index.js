import './solutions.scss'
import HTMLReactParser from 'html-react-parser'
import { NavLink } from 'react-router-dom'

function Solutions({ solutions }) {
	return (
		<>
			<section id="solutions">
				<div className="container">
					<h2>WHAT WE PROVIDE</h2>
					<h1>IT Solutions</h1>
					<div className="solutions">
						{solutions.map((solution) => (
							<div key={solution.id} className="solution">
								<div className="solution-icon">
									{HTMLReactParser(solution.icon)}
								</div>
								<div className="solution-name">
									<h1>{solution.title}</h1>
								</div>
								<div className="solution-desc">
									<span>{solution.desc}</span>
								</div>
								<NavLink to={solution.url}>Read More</NavLink>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Solutions
