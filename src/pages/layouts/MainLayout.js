import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import AnimatedPage from '../AnimatedPage'
import { useIsFetching } from '@tanstack/react-query'
import Loader from '../../components/loader'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useState } from 'react'

function MainLayout() {
	const { loading, config } = useSelector((state) => state.config)

	return (
		<AnimatedPage>
			<Navbar />
			<Outlet />
			<Footer />
		</AnimatedPage>
	)
}

export default MainLayout
