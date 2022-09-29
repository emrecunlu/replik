import './footer.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa'
import {
	AiFillMail,
	AiFillPhone,
	AiOutlineCopyrightCircle,
} from 'react-icons/ai'
import { BsFillPinMapFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useVisibilityHook } from 'react-observer-api'

function Footer() {
	const { config } = useSelector((state) => state.config)
	const { isVisible, setElement } = useVisibilityHook()

	const { isLoading, data } = useQuery(
		['contents'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/content/'
			)

			return data
		},
		{
			enabled: isVisible,
			staleTime: Infinity,
		}
	)

	return (
		<footer ref={setElement}>
			{!isLoading && (
				<>
					<div className="footer-subscribe">
						<div className="container">
							<div className="sub-text">
								<h1>Sign Up Our Newsletter</h1>
								<p>
									We Offer An Informative Monthly Technology Newsletter - Check
									It Out.
								</p>
							</div>
							<div className="subscribe-input">
								<form action="#">
									<input type="text" placeholder="Enter your mail" />
									<button type="submit">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
					<div className="footer-elements">
						<div className="container">
							<div className="footer-item big-item">
								<div className="item-title">
									<h1>{config.footer_about.label}</h1>
								</div>
								<div className="item-desc">
									<p>{config.footer_about.value}</p>
								</div>
								<div className="item-socials">
									<ul>
										<li>
											<Link to="/">
												<FaFacebookF size={14} />
											</Link>
										</li>
										<li>
											<Link to="/">
												<FaTwitter size={14} />
											</Link>
										</li>
										<li>
											<Link to="/">
												<FaLinkedin size={14} />
											</Link>
										</li>
										<li>
											<Link to="/">
												<FaPinterest size={14} />
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="footer-item">
								<div className="item-title">
									<h1>Kurumsal</h1>
								</div>
								<div className="items">
									<ul>
										{data
											?.filter((el) => el.navbar.slug === 'kurumsal')
											?.map((nav) => (
												<li key={nav.id}>
													<Link to={nav.navbar.slug + '/' + nav.slug + '/'}>
														{nav.title}
													</Link>
												</li>
											))}
									</ul>
								</div>
							</div>
							<div className="footer-item">
								<div className="item-title">
									<h1>Hizmetlerimiz</h1>
								</div>
								<div className="items">
									<ul>
										{data
											?.filter((el) => el.navbar.slug === 'hizmetlerimiz')
											?.map((nav) => (
												<li key={nav.id}>
													<Link to={nav.navbar.slug + '/' + nav.slug + '/'}>
														{nav.title}
													</Link>
												</li>
											))}
									</ul>
								</div>
							</div>
							<div className="footer-item big-item">
								<div className="item-title">
									<h1>Contact Info</h1>
								</div>
								<div className="items">
									<ul>
										<li className="more-than">
											<div className="icon">
												<AiFillPhone color="#fff" size={24} />
											</div>
											<div className="about">
												<h1>{config.tel_number.label}</h1>
												<Link to="/">{config.tel_number.value}</Link>
											</div>
										</li>
										<li className="more-than">
											<div className="icon">
												<AiFillMail color="#fff" size={24} />
											</div>
											<div className="about">
												<h1>{config.email_address.label}</h1>
												<Link to="/">{config.email_address.value}</Link>
											</div>
										</li>
										<li className="more-than">
											<div className="icon">
												<BsFillPinMapFill color="#fff" size={24} />
											</div>
											<div className="about">
												<h1>{config.address.label}</h1>
												<Link to="/">{config.address.value}</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<AiOutlineCopyrightCircle size={24} color="#fafafa" />
						<span> {config.copyright.value}</span>
					</div>
				</>
			)}
		</footer>
	)
}

export default Footer
