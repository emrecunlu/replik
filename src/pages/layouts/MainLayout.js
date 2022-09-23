import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import AnimatedPage from '../AnimatedPage'
import { useIsFetching } from '@tanstack/react-query'
import Loader from '../../components/loader'

function MainLayout() {
	return (
		<AnimatedPage>
			<Navbar />
			<Outlet />
			<Footer />
			<Loader visiblity={useIsFetching()} />
		</AnimatedPage>
	)
}

export default MainLayout
