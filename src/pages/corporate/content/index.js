import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import HeroBackground from '../../../components/hero'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { resize } from '../../../helper'
import classNames from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Contact from '../../../components/contact'

function CorporateContent() {
	const { slug } = useParams()

	const { data, isLoading } = useQuery(
		['contents'],
		async () => {
			const { data } = await axios(
				`${process.env.REACT_APP_ENDPOINT}content/${slug}/`
			)

			return data
		},
		{
			retry: false,
		}
	)

	if (!isLoading && data && data.length === 0)
		return <Navigate to="/404" replace={true} />

	if (!isLoading)
		return (
			<>
				<HeroBackground
					title="Kurumsal"
					breadcrumb={['Anasayfa', data[0]?.menu]}
				/>
				<section id="content">
					<div
						className={classNames({
							container: true,
							'content-row': data[0].content.image !== null,
						})}
					>
						{data[0].content.image && (
							<div className="content-image">
								<LazyLoadImage
									src={resize(data[0].content.image, 1200, 600)}
									width={1200}
									height={600}
									effect="blur"
								/>
							</div>
						)}
						<div className="content">
							<MarkdownPreview source={data[0].content.content_markdown} />
						</div>
					</div>
				</section>
			</>
		)
}

export default CorporateContent
