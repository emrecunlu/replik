import Blog from './components/Blog'
import './blogs.scss'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useVisibilityHook } from 'react-observer-api'

function Blogs({ limit, pagination }) {
	const [page, setPage] = useState(0)
	const { setElement, isVisible } = useVisibilityHook()

	const fetchBlog = async () => {
		const { data } = await axios.get(
			process.env.REACT_APP_ENDPOINT +
				'/blog/?limit=' +
				limit +
				'&offset=' +
				limit * page +
				'/'
		)

		return data
	}

	const { data, isLoading } = useQuery(['blogs', page], fetchBlog, {
		keepPreviousData: true,
		enabled: isVisible,
	})

	return (
		<section ref={setElement} id="blogs">
			{!isLoading && (
				<div className="container">
					<h2>Blog</h2>
					<h1>Blog Yazıları</h1>
					<div className="blogs">
						{data.results.map((blog) => (
							<Blog key={blog.id} blog={blog} />
						))}
					</div>
					{data?.results.length > 0 && (
						<React.Fragment>
							{pagination && (
								<ReactPaginate
									containerClassName="pagination-items"
									pageLinkClassName="pagination-item"
									activeLinkClassName="active-page"
									previousClassName="pagination-item"
									nextClassName="pagination-item"
									onPageChange={({ selected }) => setPage(selected)}
									pageCount={Math.ceil(data.count / limit)}
									previousLabel="Geri"
									nextLabel="İleri"
								/>
							)}
						</React.Fragment>
					)}
				</div>
			)}
		</section>
	)
}

export default Blogs
