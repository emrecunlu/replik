import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { useEffect, useRef } from 'react'
import { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import axios from 'axios'

function Navbar() {
	const navbar = useRef()

	const { data } = useQuery(
		['navbar'],
		async () => {
			const { data } = await axios(process.env.REACT_APP_ENDPOINT + '/navbar/')

			return data
		},
		{
			staleTime: Infinity,
		}
	)

	const scrollDetected = () => {
		if (window.scrollY > navbar.current?.offsetHeight * 1.2) {
			navbar.current?.classList.add('sticky')
		} else {
			navbar.current?.classList.remove('sticky')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollDetected)

		return () => window.removeEventListener('scrol', scrollDetected)
	}, [])

	return (
		<>
			<nav ref={navbar}>
				<div className="container">
					<div className="navbar-logo">
						<NavLink to="/">
							<img src="/uploads/logo.png" alt="" />
						</NavLink>
						<NavLink className="logo-dark" to="/">
							<img src="/uploads/logo-black.png" alt="" />
						</NavLink>
					</div>
					<div className="navbar-items">
						<ul>
							{data?.map((nav) => (
								<li
									key={nav.id}
									className={classNames({
										dropdown: nav?.content.length > 0,
									})}
								>
									<NavLink to={nav.slug === '/' ? '/' : '/' + nav.slug}>
										<span>{nav.menu}</span>
										{nav?.content.length > 0 && (
											<RiArrowDropDownLine size={24} />
										)}
									</NavLink>
									{nav?.content.length > 0 && (
										<div className="dropdown-items">
											<ul>
												{nav?.content.map((child, i) => (
													<li key={i}>
														<NavLink to={nav.slug + '/' + child.slug}>
															{child.title}
														</NavLink>
													</li>
												))}
											</ul>
										</div>
									)}
								</li>
							))}
						</ul>
					</div>
					<div className="contact-button">
						<NavLink to="/contact" className="hover-filled-slide-right">
							Get It Suppor
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	)
}

export default memo(Navbar)
