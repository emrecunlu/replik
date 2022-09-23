import './footer.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa'
import { AiFillPhone, AiOutlineCopyrightCircle } from 'react-icons/ai'

function Footer() {
	return (
		<footer>
			<div className="footer-subscribe">
				<div className="container">
					<div className="sub-text">
						<h1>Sign Up Our Newsletter</h1>
						<p>
							We Offer An Informative Monthly Technology Newsletter - Check It
							Out.
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
							<h1>About Us</h1>
						</div>
						<div className="item-desc">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
								necessitatibus odio pariatur quae voluptatum? Aliquam cum
								deleniti dolorum iure tenetur. Ea expedita inventore officia
								omnis quam quasi quos totam voluptas.
							</p>
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
							<h1>Our Services</h1>
						</div>
						<div className="items">
							<ul>
								<li>
									<Link to="/">IT Solution</Link>
								</li>
								<li>
									<Link to="/">Web Development</Link>
								</li>
								<li>
									<Link to="/">Networking Services</Link>
								</li>
								<li>
									<Link to="/">SEO Optimization</Link>
								</li>
								<li>
									<Link to="/">App Optimization</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-item">
						<div className="item-title">
							<h1>Useful Links</h1>
						</div>
						<div className="items">
							<ul>
								<li>
									<Link to="/">IT Solution</Link>
								</li>
								<li>
									<Link to="/">Web Development</Link>
								</li>
								<li>
									<Link to="/">Networking Services</Link>
								</li>
								<li>
									<Link to="/">SEO Optimization</Link>
								</li>
								<li>
									<Link to="/">App Optimization</Link>
								</li>
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
										<h1>Phone</h1>
										<Link to="/">080 707 555-321</Link>
									</div>
								</li>
								<li className="more-than">
									<div className="icon">
										<AiFillPhone color="#fff" size={24} />
									</div>
									<div className="about">
										<h1>Phone</h1>
										<Link to="/">080 707 555-321</Link>
									</div>
								</li>
								<li className="more-than">
									<div className="icon">
										<AiFillPhone color="#fff" size={24} />
									</div>
									<div className="about">
										<h1>Phone</h1>
										<Link to="/">080 707 555-321</Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<AiOutlineCopyrightCircle size={24} color="#fafafa" />
				<span> 2021 Techvio - All Rights Reserved.</span>
			</div>
		</footer>
	)
}

export default Footer
