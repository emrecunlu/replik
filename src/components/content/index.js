import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import { resize } from '../../helper'
import HeroBackground from '../hero'
import './content.scss'
import Seo from '../meta'
import { useVisibilityHook } from 'react-observer-api'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './markdown.css'

function Content() {
	const { isVisible, setElement } = useVisibilityHook()
	const params = useParams()

	
	const { data, isLoading } = useQuery(
		['content', params?.slug],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/content/' + params?.slug + '/'
			)

			return data
		},
		{
			enabled: isVisible,
			staleTime: Infinity,
		}
	)

	return (
		<section ref={setElement} id="content-page">
			{!isLoading && (
				<>
					<Seo	
						title={'Replik Yazılım | ' + data.title}
						image={`/static/img/${data.image}`}
						description={data.desc}
					/>
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
								{data.image !== "" && (
									<div className="content-image">
										<LazyLoadImage src={resize(data.image, 1200, 500)} />
									</div>
								)}
								<ReactMarkdown
									children={data.content_markdown}
									remarkPlugins={[remarkGfm]}
									className="markdown-body"
								/>
							</div>
						</div>
					</section>
				</>
			)}
		</section>
	)
}

export default Content
