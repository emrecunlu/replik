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
			const { data } = await axios('http://192.168.20.76:8000/api/navbar/')

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
										dropdown: nav?.child.length > 0,
									})}
								>
									<NavLink to={nav.slug}>
										<span>{nav.menu}</span>
										{nav?.child.length > 0 && <RiArrowDropDownLine size={24} />}
									</NavLink>
									{nav?.child.length > 0 && (
										<div className="dropdown-items">
											<ul>
												{nav?.child.map((parent) => (
													<li key={parent?.id}>
														<NavLink
															state={{
																path: nav.child,
															}}
															to={nav.slug + '/' + parent?.slug}
														>
															{parent.menu}
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
