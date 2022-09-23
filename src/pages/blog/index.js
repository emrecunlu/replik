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

	const { data, isLoading } = useQuery(
		['blog_content'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + 'blog/' + slug + '/'
			)

			return data
		},
		{
			retry: false,
		}
	)

	window.onload = () => {
		console.log('loaded!')
	}

	if (!isLoading) {
		return (
			<>
				<HeroBackground title={data[0].title} breadcrumb={['Home', 'Blog']} />
				<section id="blog">
					<div className="container">
						<Details blog={data[0]} />
						<Populars />
					</div>
				</section>
			</>
		)
	}
}

export default memo(Blog)
