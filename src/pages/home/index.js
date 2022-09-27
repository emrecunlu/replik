import './home.scss'
import Solutions from '../../components/solutions'
import Company from '../../components/company'
import Overview from '../../components/overview'
import Testimonial from '../../components/testimonial'
import Contact from '../../components/contact'
import Blogs from '../../components/blogs'
import { Link } from 'react-router-dom'
import Customers from '../../components/customers'
import { useSelector } from 'react-redux'
import { resize } from '../../helper'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

function Home() {
	const { config } = useSelector((state) => state.config)

	const company = {
		title: 'Providing your business with a quality IT service is our passion.',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud',
		experience: 27,
		image: 'https://cutesolution.com/html/Techvio/assets/img/about.jpg',
		skills: [
			{
				id: 1,
				skill: 'IT Consulting',
				percent: 90,
			},
			{
				id: 2,
				skill: 'Virtual Workstation',
				percent: 75,
			},
			{
				id: 3,
				skill: 'Managed IT Service',
				percent: 80,
			},
		],
	}

	return (
		<>
			<div className="home-area">
				<div className="container">
					<div className="area-text">
						<h1>{config?.hero_title?.value}</h1>
						<span>{config?.hero_subtitle?.value}</span>
						<div className="text-area-buttons">
							<Link>About Us</Link>
							<Link>Contact Us</Link>
						</div>
					</div>
					<div className="area-image">
						<img src={resize(config?.hero_image?.image, 600, 600)} />
					</div>
				</div>
				<div className="shape-effect">
					<img src="/static/img/home-bottom-shape.png" alt="" />
				</div>
			</div>
			<Solutions name="hizmetlerimiz" />
			<Company company={company} />
			<Overview
				data={{
					question: 'WHY CHOOSE US?',
					title: 'Safeguard your brand with Cyber-Security & IT Solutions',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					img: 'https://cutesolution.com/html/Techvio/assets/img/choose-1.jpg',
					items: [
						'Remote It Assistance',
						'Solving IT Problems',
						'Practice IT Management',
						'IT Security Services',
						'Managed IT Service',
						'Cloud Services',
					],
				}}
			/>
			<Overview
				variant="ltr"
				data={{
					question: 'WHY CHOOSE US?',
					title: 'Safeguard your brand with Cyber-Security & IT Solutions',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					img: 'https://cutesolution.com/html/Techvio/assets/img/choose-1.jpg',
					items: [
						'Remote It Assistance',
						'Solving IT Problems',
						'Practice IT Management',
						'IT Security Services',
						'Managed IT Service',
						'Cloud Services',
					],
				}}
			/>
			<Testimonial />
			<Contact />
			<Blogs limit={3} />
			<Customers />
		</>
	)
}

export default Home
