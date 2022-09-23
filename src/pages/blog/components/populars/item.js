import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { getMonthName, resize, timeSince } from '../../../../helper'

function PopularItem({ blog }) {
	const date = new Date(blog.created_at)

	return (
		<article className="popular-post">
			<div className="post-thumbnail">
				<Link to={'/blog/' + blog.slug}>
				<LazyLoadImage
						src={resize(blog.image, 80, 80)}
						width={80}
						height={80}
					/>
				</Link>
			</div>
			<div className="post-details">
				<div className="post-createdAt">
					<span>
						{getMonthName(date.getMonth()) +
							' ' +
							date.getDay() +
							',' +
							date.getFullYear()}
					</span>
				</div>
				<div className="post-title">
					<a href="#">{blog.title}</a>
				</div>
			</div>
		</article>
	)
}

export default PopularItem
