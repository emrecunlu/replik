import {Routes, Route, useLocation} from 'react-router-dom'
import React, {Suspense} from 'react'
import {AnimatePresence} from 'framer-motion'
import MainLayout from './pages/layouts/MainLayout'
import ScrollToTop from './components/ScrollToTop'
import {useEffect} from 'react'
import {store} from './store'
import {fetchConfig, fetchNavbar} from './store/config'
import Loader from './components/loader'
import {findPageName} from "./helper";

const About = React.lazy(() => import('./pages/about'))
const Home = React.lazy(() => import('./pages/home'))
const Services = React.lazy(() => import('./pages/services'))
const ContactPage = React.lazy(() => import('./pages/contact'))
const BlogsPage = React.lazy(() => import('./pages/blogs'))
const Blog = React.lazy(() => import('./pages/blog'))
const Corporate = React.lazy(() => import('./pages/corporate'))
const Content = React.lazy(() => import('./components/content'))

function App() {
    const location = useLocation()

    useEffect(() => {
        store.dispatch(fetchConfig())
    }, [])

    return (
        <AnimatePresence onExitComplete={true} mode="wait">
            <ScrollToTop>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<MainLayout/>}>
                        <Route
                            index={true}
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Home/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="hakkimizda"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <About/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="hizmetlerimiz"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Services/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="hizmetlerimiz/:slug"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Content/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="iletisim"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <ContactPage/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="kurumsal"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Corporate/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="kurumsal/:slug"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Content/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="blogs"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <BlogsPage/>
                                </Suspense>
                            }
                        />
                        <Route
                            path="blog/:slug"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Blog/>
                                </Suspense>
                            }
                        />
                    </Route>
                </Routes>
            </ScrollToTop>
        </AnimatePresence>
    )
}

export default App
