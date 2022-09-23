import { useEffect } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import HeroBackground from '../../components/hero'
import Details from './components/details'

import './blog.scss'
import Populars from './components/populars'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { memo } from 'react'

function Blog() {
	const { slug } = useParams()

	const { data, isLoading } = useQuery(['blog_content'], async () => {
		const { data } = await axios.get(
			process.env.REACT_APP_ENDPOINT + '/blog/' + slug + '/'
		)

		return data
	})

	if (!isLoading) {
		return (
			<>
				<HeroBackground
					title="Blog Detail"
					breadcrumb={['Home', 'Blogs', data.title]}
				/>
				<section id="blog">
					<div className="container">
						<Details blog={data} />
						<Populars />
					</div>
				</section>
			</>
		)
	}
}

export default memo(Blog)
