import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './item.scss'

function TestimonialItem({ testimonial }) {
	return (
		<>
			<article className="testimonial">
				<div className="star-rating">
					<ul>
						{[...Array(5)].map((val, key) => (
							<li>
								{(key < testimonial.starRating && (
									<AiFillStar size={18} color="#ffce39" />
								)) || <AiOutlineStar size={18} color="#ffce39" />}
							</li>
						))}
					</ul>
				</div>
				<div className="user-desc">
					<p>{testimonial.desc}</p>
				</div>
				<div className="user-profile">
					<div className="user-img">
						<img src={testimonial.userImage} alt="" />
					</div>
					<div className="user-name">
						<h1>{testimonial.name}</h1>
					</div>
					<div className="user-job">
						<h1>{testimonial.job}</h1>
					</div>
				</div>
			</article>
		</>
	)
}

export default TestimonialItem
