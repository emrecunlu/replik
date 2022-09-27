import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

export default function Seo({ title, description, image }) {
	const { config } = useSelector((state) => state.config)

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta
				name="description"
				content={description || config?.meta_description?.value}
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://metatags.io/" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://metatags.io/" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={image} />
		</Helmet>
	)
}
