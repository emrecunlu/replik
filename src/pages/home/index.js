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
import Seo from '../../components/meta'

function Home() {
	const { config } = useSelector((state) => state.config)

	return (
		<>
			<Seo title="Replik Yazılım" />
			<div className="home-area">
				<div className="container">
					<div className="area-text">
						<h1>{config.hero_title}</h1>
						<span>{config.hero_description}</span>
						<div className="text-area-buttons">
							<Link to="/hakkimizda">Hakkımızda</Link>
							<Link to="/iletisim">İletişim</Link>
						</div>
					</div>
					<div className="area-image">
						<img src={resize(config.hero_image, 600, 600)} />
					</div>
				</div>
				<div className="shape-effect">
					<img src="/static/img/home-bottom-shape.png" alt="" />
				</div>
			</div>
			<Solutions
				name="hizmetlerimiz"
				title="Hizmetlerimiz"
				subtitle="Sektörel Hizmetler"
			/>
			<Company />
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
			<Solutions
				name="kurumsal"
				title="Kurumsal"
				subtitle="Kurumsal Sayfalarımız"
			/>
			<Testimonial />
			<Contact />
			<Blogs limit={3} />
			<Customers />
		</>
	)
}

export default Home
