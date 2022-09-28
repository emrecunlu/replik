import { Link, NavLink } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import './navbar.scss'
import React, { useState } from 'react'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function Navbar() {
	const { data, isLoading } = useQuery(
		['navbar'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/navbar/'
			)

			return data
		},
		{
			staleTime: Infinity,
		}
	)

	const [menu, setMenu] = useState(false)

	const navbar = useRef()

	const clickHandle = ({ target }) => {
		target.closest('li').querySelector('ul').classList.toggle('active')
	}

	const scrollMe = () => {
		if (window.scrollY * 1.2 >= navbar.current.offsetHeight)
			navbar.current?.classList.add('sticky')
		else navbar.current?.classList.remove('sticky')
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollMe)

		return () => {
			window.removeEventListener('scroll', scrollMe)
		}
	}, [])


	if (!isLoading) {
		return (
			<div ref={navbar} className="navbar-area">
				<nav>
					<div className="container">
						<div className="navbar-logo">
							<Link to="/">
								<img className="logo-light" src="/static/img/logo.png" alt="" />
								<img
									className="logo-dark"
									src="/static/img/logo-black.png"
									alt=""
								/>
							</Link>
						</div>
						<div className="navbar-items">
							<ul>
								{data.map((nav) => (
									<li
										key={nav.id}
										className={classNames({
											dropdown: nav.content.length > 0,
										})}
									>
										<NavLink to={nav.slug === '/' ? '/' : nav.slug + '/'}>
											{nav.menu}
											{nav.content.length > 0 && (
												<FaAngleDown size={15} className="dropdown-icon" />
											)}
										</NavLink>
										{nav.content.length > 0 && (
											<ul>
												{nav.content.map((child, i) => (
													<li key={i}>
														<NavLink to={'/' + nav.slug + '/' + child.slug + '/'}>
															{child.title}
														</NavLink>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</div>
						<div className="navbar-support">
							<Link to="/contact">Contact Me</Link>
						</div>
						<div
							className={classNames({
								'navbar-toggler': true,
								active: menu,
							})}
							onClick={() => setMenu((menu) => !menu)}
						>
							<div className="toggler"></div>
						</div>
					</div>
				</nav>
				<AnimatePresence>
					{menu && (
						<motion.div
							initial={{
								opacity: 0,
								y: -200,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							exit={{
								opacity: 0,
								y: -200,
							}}
							className="navbar-responsive-menu"
						>
							<div className="container">
								<ul>
									{data.map((nav) => (
										<li
											className={classNames({
												dropdown: nav.content.length > 0,
											})}
										>
											{(nav.content.length > 0 && (
												<React.Fragment key={nav.id}>
													<span onClick={clickHandle}>
														{nav.menu}
														<IoIosArrowDropdownCircle />
													</span>
													<ul>
														{nav.content.map((child, i) => (
															<li key={i}>
																<NavLink to={'/' + nav.slug + '/' + child.slug + '/'}>
																	{child.title}
																</NavLink>
															</li>
														))}
													</ul>
												</React.Fragment>
											)) || (
												<NavLink to={nav.slug === '/' ? '/' : nav.slug + '/'}>
													{nav.menu}
												</NavLink>
											)}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		)
	}
}

export default Navbar
