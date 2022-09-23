import Blog from './components/Blog'
import './blogs.scss'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import Pagination from '../pagination'

function Blogs({ limit, pagination }) {
	const [page, setPage] = useState(0)

	const fetchBlog = async () => {
		const { data } = await axios.get(
			`${process.env.REACT_APP_ENDPOINT}blog/?limit=${limit}&offset=${
				page * limit
			}`
		)

		return data
	}

	const { data, isLoading } = useQuery(['blogs', page], fetchBlog, {
		keepPreviousData: true,
		staleTime: 5000
	})

	if (!isLoading) {
		return (
			<section id="blogs">
				<div className="container">
					<h2>BLOG & ARTICLE</h2>
					<h1>Recent Blog</h1>
					<div className="blogs">
						{data.results.map((blog) => (
							<Blog key={blog.id} blog={blog} />
						))}
					</div>
					{pagination && (
						<Pagination
							page={page}
							setPage={setPage}
							count={Math.ceil(data.count / limit)}
						/>
					)}
				</div>
			</section>
		)
	}
}

export default Blogs
