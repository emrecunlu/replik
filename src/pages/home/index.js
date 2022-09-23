import './home.scss'
import Solutions from '../../components/solutions'
import Company from '../../components/company'
import Overview from '../../components/overview'
import Testimonial from '../../components/testimonial'
import Contact from '../../components/contact'
import Blogs from '../../components/blogs'
import { Link } from 'react-router-dom'
import Customers from '../../components/customers'
import { Helmet } from 'react-helmet'

function Home() {
	const solutions = [
		{
			id: 1,
			title: 'IT Solution',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle fill="#FFF59D" cx="24" cy="22" r="20"></circle><path fill="#FBC02D" d="M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"></path><path fill="#FFF59D" d="M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"></path><circle fill="#5C6BC0" cx="24" cy="44" r="3"></circle><path fill="#9FA8DA" d="M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"></path><g fill="#5C6BC0"><path d="M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"></path><polygon points="18,38.7 18,40.7 30,39 30,37"></polygon></g></svg>',
			url: '#',
		},
		{
			id: 2,
			title: 'Web Development',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
			url: '#',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"></path></svg>',
		},
		{
			id: 3,
			title: 'Networking Services',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M428.4 27.8v456.4h60.9V27.8h-60.9zM327 168.2v316h60.8v-316H327zM225.4 273.6v210.6h61V273.6h-61zM124 343.8v140.4h60.9V343.8H124zM22.67 394.9v89.3h60.84v-89.3H22.67z"></path></svg>',
			url: '#',
		},
		{
			id: 4,
			title: 'IT Solution',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle fill="#FFF59D" cx="24" cy="22" r="20"></circle><path fill="#FBC02D" d="M37,22c0-7.7-6.6-13.8-14.5-12.9c-6,0.7-10.8,5.5-11.4,11.5c-0.5,4.6,1.4,8.7,4.6,11.3 c1.4,1.2,2.3,2.9,2.3,4.8V37h12v-0.1c0-1.8,0.8-3.6,2.2-4.8C35.1,29.7,37,26.1,37,22z"></path><path fill="#FFF59D" d="M30.6,20.2l-3-2c-0.3-0.2-0.8-0.2-1.1,0L24,19.8l-2.4-1.6c-0.3-0.2-0.8-0.2-1.1,0l-3,2 c-0.2,0.2-0.4,0.4-0.4,0.7s0,0.6,0.2,0.8l3.8,4.7V37h2V26c0-0.2-0.1-0.4-0.2-0.6l-3.3-4.1l1.5-1l2.4,1.6c0.3,0.2,0.8,0.2,1.1,0 l2.4-1.6l1.5,1l-3.3,4.1C25.1,25.6,25,25.8,25,26v11h2V26.4l3.8-4.7c0.2-0.2,0.3-0.5,0.2-0.8S30.8,20.3,30.6,20.2z"></path><circle fill="#5C6BC0" cx="24" cy="44" r="3"></circle><path fill="#9FA8DA" d="M26,45h-4c-2.2,0-4-1.8-4-4v-5h12v5C30,43.2,28.2,45,26,45z"></path><g fill="#5C6BC0"><path d="M30,41l-11.6,1.6c0.3,0.7,0.9,1.4,1.6,1.8l9.4-1.3C29.8,42.5,30,41.8,30,41z"></path><polygon points="18,38.7 18,40.7 30,39 30,37"></polygon></g></svg>',
			url: '#',
		},
		{
			id: 5,
			title: 'Web Development',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
			url: '#',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"></path></svg>',
		},
		{
			id: 6,
			title: 'Networking Services',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua',
			icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M428.4 27.8v456.4h60.9V27.8h-60.9zM327 168.2v316h60.8v-316H327zM225.4 273.6v210.6h61V273.6h-61zM124 343.8v140.4h60.9V343.8H124zM22.67 394.9v89.3h60.84v-89.3H22.67z"></path></svg>',
			url: '#',
		},
	]
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

	const testimonials = [
		{
			id: 1,
			starRating: 3,
			desc: 'Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.',
			userImage:
				'https://cutesolution.com/html/Techvio/assets/img/client/testimonial-2.jpg',
			name: 'Zahra Burnett',
			job: 'Business Man',
		},
		{
			id: 2,
			starRating: 5,
			desc: 'Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.',
			userImage:
				'https://cutesolution.com/html/Techvio/assets/img/client/testimonial-2.jpg',
			name: 'Zahra Burnett',
			job: 'Business Man',
		},
		{
			id: 3,
			starRating: 5,
			desc: 'Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.',
			userImage:
				'https://cutesolution.com/html/Techvio/assets/img/client/testimonial-2.jpg',
			name: 'Zahra Burnett',
			job: 'Business Man',
		},
		{
			id: 4,
			starRating: 5,
			desc: 'Lorem ipsum was conceived as filler text, formatted in a certain way to enable the presentation of graphic elements in documents, without the need for formal copy. Using Lorem Ipsum allows designers to put together layouts and the form of the content before the content has been created, giving the design and production process more freedom.',
			userImage:
				'https://cutesolution.com/html/Techvio/assets/img/client/testimonial-2.jpg',
			name: 'Zahra Burnett',
			job: 'Business Man',
		},
	]

	return (
		<>
			<div className="home-area">
				<div className="container">
					<div className="area-text">
						<h1>IT Solutions & Business Services Company</h1>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua, magna
							aliqua. ipsum is simply dummy text of the printing.
						</span>
						<div className="text-area-buttons">
							<Link>About Us</Link>
							<Link>Contact Us</Link>
						</div>
					</div>
					<div className="area-image">
						<img src="/static/img/home-font.png" alt="" />
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
			<Testimonial testimonials={testimonials} />
			<Contact />
			<Blogs limit={3} />
			<Customers />
		</>
	)
}

export default Home
