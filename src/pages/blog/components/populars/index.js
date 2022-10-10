import './populars.scss'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PopularItem from './item'

function Populars() {
	const { data, isLoading } = useQuery(
		['latest_blog'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/blog/?limit=6'
			)

			return data
		},
		{
			staleTime: Infinity,
		}
	)

	if (!isLoading) {
		return (
			<div className="popular-wrapper">
				<div className="wrapper-title">
					<h1>Son Eklenenler</h1>
				</div>
				<div className="popular-posts">
					{data.results.map((blog) => (
						<PopularItem key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		)
	}
}

export default Populars
