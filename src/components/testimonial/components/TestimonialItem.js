import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { resize } from '../../../helper'
import './item.scss'

function TestimonialItem({ testimonial }) {
	return (
		<>
			<article className="testimonial">
				<div className="star-rating">
					<ul>
						{[...Array(5)].map((val, key) => (
							<li>
								{(key < testimonial.rating && (
									<AiFillStar size={18} color="#ffce39" />
								)) || <AiOutlineStar size={18} color="#ffce39" />}
							</li>
						))}
					</ul>
				</div>
				<div className="user-desc">
					<p>{testimonial.Description}</p>
				</div>
				<div className="user-profile">
					<div className="user-img">
						<img
							src={resize(testimonial.image, 80, 80)}
							alt={testimonial.testimonial_department}
						/>
					</div>
					<div className="user-name">
						<h1>{testimonial.testimonial_name}</h1>
					</div>
					<div className="user-job">
						<h1>{testimonial.testimonial_department}</h1>
					</div>
				</div>
			</article>
		</>
	)
}

export default TestimonialItem
