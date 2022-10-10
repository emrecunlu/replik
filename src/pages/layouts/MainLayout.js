import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import AnimatedPage from '../AnimatedPage'
import Loader from '../../components/loader'
import { useSelector } from 'react-redux'

function MainLayout() {
	const { loading, config } = useSelector((state) => state.config)

	console.log(config)

	if (loading) return <Loader />

	return (
		<AnimatedPage>
			<Navbar />
			<Outlet />
			<Footer />
		</AnimatedPage>
	)
}

export default MainLayout
