import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {Link, useLocation} from 'react-router-dom'
import { resize } from '../../../helper'
import './blog.scss'
import { getMonthName } from '../../../helper'

function Blog({ blog }) {
	const date = new Date(blog.created_at)

	return (
		<article className="blog">
			<div className="blog-thumbnail">
				<Link to={'/blog/' + blog.slug}>
					<LazyLoadImage
						src={resize(blog.image, 450, 370)}
						alt={blog.title}
						effect="blur"
					/>
				</Link>
			</div>
			<div className="blog-items">
				<div className="blog-created">
					<div className="blog-author blog-item">
						<Link to={'/blog/' + blog.slug}>
							<FaUserAlt />
							<span>{blog.author.username}</span>
						</Link>
					</div>
					<div className="blog-date blog-item">
						<Link to={'/blog/' + blog.slug}>
							<FaCalendarAlt />
							<span>
								{getMonthName(date.getMonth()) +
									' ' +
									date.getDay() +
									', ' +
									date.getFullYear()}
							</span>
						</Link>
					</div>
				</div>
				<div className="blog-title">
					<Link to={'/blog/' + blog.slug}>{blog.title}</Link>
				</div>
				<div className="blog-desc">
					<p>{blog.meta_desc}</p>
				</div>
				<div className="blog-details">
					<Link to={'/blog/' + blog.slug}>Daha Fazla</Link>
				</div>
			</div>
		</article>
	)
}

export default Blog
