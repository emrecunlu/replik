import { Swiper, SwiperSlide } from 'swiper/react'
import './testimonial.scss'
import TestimonialItem from './components/TestimonialItem'
import { Autoplay } from 'swiper'

function Testimonial({ testimonials }) {
	return (
		<>
			<section id="testimonial">
				<div className="container">
					<h2>TESTIMONIAL</h2>
					<h1>What Our Client Say</h1>
					<Swiper
						slidesPerView={3}
						spaceBetween={50}
						grabCursor={true}
						autoplay={{
							delay: 2000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						loop={true}
						modules={[Autoplay]}
					>
						{testimonials.map((testimonial) => (
							<SwiperSlide>
								<TestimonialItem
									key={testimonial.id}
									testimonial={testimonial}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default Testimonial
