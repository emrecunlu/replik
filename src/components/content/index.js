import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import { resize } from '../../helper'
import HeroBackground from '../hero'
import MarkdownPreview from '@uiw/react-markdown-preview'
import './content.scss'

function Content({ slug }) {
	const params = useParams()

	const { data, isLoading } = useQuery(['content', params?.slug], async () => {
		const { data, status } = await axios.get(
			process.env.REACT_APP_ENDPOINT + '/content/' + params?.slug + '/'
		)

		return data
	})

	if (!isLoading) {
		console.log(data)

		return (
			<>
				<HeroBackground
					title={data.title}
					breadcrumb={['Home', 'Kurumsal', data.title]}
				/>
				<section id="content">
					<div className="container">
						<h2>{data.navbar.title}</h2>
						<h1>{data.title}</h1>
						<hr />
						<div className="content-details">
							{data.image !== null && (
								<div className="content-image">
									<LazyLoadImage src={resize(data.image, 1200, 500)} />
								</div>
							)}
							<div className="content-markdown">
								<MarkdownPreview source={data.content_markdown} />
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default Content
