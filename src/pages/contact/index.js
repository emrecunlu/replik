import { useEffect } from 'react'
import HeroBackground from '../../components/hero'
import ContactItem from './components/ContactItem'
import Contact from '../../components/contact'

import './contact.scss'
import Seo from '../../components/meta'

function ContactPage() {
	return (
		<>
			<Seo title="Replik Yazılım | İletişim" />
			<HeroBackground title="İletşim" breadcrumb={['Anasayfa', 'İletişim']} />
			<section id="contact-information">
				<div className="container">
					<h2>İletişime Geç</h2>
					<h1>Senin İçin Buradayız</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1568.6471354462683!2d27.361611!3d38.1566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b944cb2d0de59b%3A0x2cfb5bafee01ca61!2zRXJ0dcSfcnVsLCBOZWNtZXR0aW4gT8SfdXogQ2QuIDktMSwgMzU4NjAgVG9yYmFsxLEvxLB6bWly!5e0!3m2!1str!2str!4v1663336520918!5m2!1str!2str"
						width="100%"
						height="450"
						style={{ border: 0, marginTop: 50 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div className="contact-items">
						{[1, 2, 3, 4, 5].map((contact, i) => (
							<ContactItem key={i} />
						))}
					</div>
				</div>
			</section>
			<Contact />
		</>
	)
}

export default ContactPage
