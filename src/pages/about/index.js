import Company from '../../components/company'
import Customers from '../../components/customers'
import HeroBackground from '../../components/hero'
import Testimonial from '../../components/testimonial'
import './about.scss'

function About() {
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
			<HeroBackground title="About Us" breadcrumb={['Home', 'About Us']} />
			<Company company={company} />
			<Testimonial testimonials={testimonials} />
			<Customers />
		</>
	)
}

export default About
