import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function Seo({ title, description, image }) {
	const { pathname } = useLocation()
	const { config } = useSelector((state) => state.config)

	return (
		<Helmet>
			<title>{title || config.title}</title>
			<meta name="title" content={config.title} />
			<link
				rel="icon"
				href={'/static/img/' + config.favicon}
				type="image/x-icon"
			/>
			<meta name="description" content={description || config.description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={config.url + pathname} />
			<meta property="og:title" content={title || config.title} />
			<meta
				property="og:description"
				content={description || config.description}
			/>
			{image && <meta property="og:image" content={image} />}

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={config.url + pathname} />
			<meta property="twitter:title" content={title || config.title} />
			<meta
				property="twitter:description"
				content={description || config.description}
			/>
			{image && <meta property="twitter:image" content={image} />}
		</Helmet>
	)
}
