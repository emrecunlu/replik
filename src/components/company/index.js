import { NavLink } from 'react-router-dom'
import './company.scss'
import { useSelector } from 'react-redux'
import { resize } from '../../helper'

function Company({ company }) {
	const { config } = useSelector((state) => state.config)

	return (
		<>
			<section id="company">
				<div className="container">
					<div className="company-details">
						<h2>Şirketimiz Hakkında</h2>
						<h1>
							İşinize kaliteli bir hizmet sunmak bizim tutkumuzdur
						</h1>
						<span>{config.description}</span>
						<div className="skills">
							<div className="skill">
								<div className="skill-detail">
									<h1>Teknik Destek</h1>
									<h2>30%</h2>
								</div>
								<div className="percent-bar">
									<span
										style={{
											width: `30%`,
										}}
									></span>
								</div>
							</div>
							<div className="skill">
								<div className="skill-detail">
									<h1>Teknik Destek</h1>
									<h2>30%</h2>
								</div>
								<div className="percent-bar">
									<span
										style={{
											width: `30%`,
										}}
									></span>
								</div>
							</div>
							<div className="skill">
								<div className="skill-detail">
									<h1>Teknik Destek</h1>
									<h2>30%</h2>
								</div>
								<div className="percent-bar">
									<span
										style={{
											width: `30%`,
										}}
									></span>
								</div>
							</div>	
						</div>
						<NavLink to="/hizmetlerimiz">Hizmetlerimiz</NavLink>
					</div>
					<div className="company-image">
						<img
							src={resize(config.company_image, 500, 500)}
                            alt="Şirket Resim"
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Company
