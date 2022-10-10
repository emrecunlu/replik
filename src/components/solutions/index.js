import './solutions.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function Solutions({ name, title, subtitle }) {
	const { data, isLoading } = useQuery(
		['contents'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/content/'
			)

			return data
		},
		{
			staleTime: Infinity,
		}
	)

	if (!isLoading) {
		const items = data.filter((item) => item.navbar.slug.replace('/', '') === name)

		console.log(data)

		return (
			<>
				<section id="solutions">
					<div className="container">
						<h2>{title}</h2>
						<h1>{subtitle}</h1>
						<div className="solutions">
							{items.map((item) => (
								<div key={item.id} className="solution">
									<div className="solution-icon">
										<i className={item.icon}></i>
									</div>
									<div className="solution-name">
										<h1>{item.title}</h1>
									</div>
									<div className="solution-desc">
										<span>
											{item.desc.slice(0, 100)}
											{item.desc.length > 0 ? '...' : null}
										</span>
									</div>
									<Link to={'/' + item.navbar.slug + '/' + item.slug}>
										Daha Fazla
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>
			</>
		)
	}
}
export default Solutions
