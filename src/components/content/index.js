import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import { resize } from '../../helper'
import HeroBackground from '../hero'
import MarkdownPreview from '@uiw/react-markdown-preview'
import './content.scss'
import Seo from '../meta'
import { useVisibilityHook } from 'react-observer-api'

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
						image={resize(data.image, 300, 300)}
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
			)}
		</section>
	)
}

export default Content
