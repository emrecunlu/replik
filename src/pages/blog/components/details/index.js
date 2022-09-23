import { LazyLoadImage } from 'react-lazy-load-image-component'
import { resize } from '../../../../helper'
import MarkdownPreview from '@uiw/react-markdown-preview'
import './details.scss'

function Details({ blog }) {
	return (
		<>
			<article className="blog-inner">
				<div className="blog-image">
					<LazyLoadImage
						src={resize(blog.image, 800, 600)}
						width={800}
						height={600}
						effect="blur"
					/>
				</div>
				<div className="blog-created">
					<div className="post-on created-item">
						<h1>Post On: </h1>
						<span>June 10 - 2021</span>
					</div>
					<div className="posted-by created-item">
						<h1>Posted By: </h1>
						<span>Herman Boone</span>
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
