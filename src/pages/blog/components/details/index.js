import { LazyLoadImage } from 'react-lazy-load-image-component'
import { resize } from '../../../../helper'
import { getMonthName } from '../../../../helper'
import MarkdownPreview from '@uiw/react-markdown-preview'
import './details.scss'

function Details({ blog }) {
	const date = new Date(blog.created_at)

	return (
		<>
			<article className="blog-inner">
				<div className="blog-image">
					<img src={resize(blog.image, 800, 600)} alt={blog.title} />
				</div>
				<div className="blog-created">
					<div className="post-on created-item">
						<h1>Post On: </h1>
						<span>
							{getMonthName(date.getMonth()) +
								' ' +
								date.getDay() +
								' - ' +
								date.getFullYear()}
						</span>
					</div>
					<div className="posted-by created-item">
						<h1>Posted By: </h1>
						<span>{blog.author.username}</span>
					</div>
				</div>
				<div className="blog-title">
					<h1>{blog.title}</h1>
				</div>
				<div className="blog-markdown">
					<MarkdownPreview source={blog.content} />
				</div>
			</article>
		</>
	)
}

export default Details
