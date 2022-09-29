import { useParams } from 'react-router-dom'
import HeroBackground from '../../components/hero'
import Details from './components/details'
import './blog.scss'
import Populars from './components/populars'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { memo } from 'react'
import Seo from '../../components/meta'
import { resize } from '../../helper'

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
				<Seo
					title={'Replik Yazılım | ' + data.title}
					description={data.meta_desc}
					image={resize(data.image, 500, 500)}
				/>
				<HeroBackground
					title="Blog Detail"
					breadcrumb={['Home', data.title.slice(0, 20) + ' ...']}
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
