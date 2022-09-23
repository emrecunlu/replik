import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import MainLayout from './pages/layouts/MainLayout'
import Services from './pages/services'
import { AnimatePresence } from 'framer-motion'
import ContactPage from './pages/contact'
import BlogsPage from './pages/blogs'
import Blog from './pages/blog'
import Corporate from './pages/corporate'
import CorporateContent from './pages/corporate/content'
import ServicesContent from './pages/services/contents'
import ScrollToTop from './components/ScrollToTop'

function App() {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<ScrollToTop>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<MainLayout />}>
						<Route index={true} element={<Home />} />
						<Route path="hakkimizda" element={<About />} />
						<Route path="hizmetlerimiz" element={<Services />} />
						<Route path="hizmetlerimiz/:slug" element={<ServicesContent />} />
						<Route path="iletisim" element={<ContactPage />} />
						<Route path="kurumsal" element={<Corporate />} />
						<Route path="kurumsal/:slug" element={<CorporateContent />} />
						<Route path="blogs" element={<BlogsPage />} />
						<Route path="blog/:slug" element={<Blog />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</AnimatePresence>
	)
}

export default App
