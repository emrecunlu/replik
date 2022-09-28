import { Swiper, SwiperSlide } from 'swiper/react'
import './testimonial.scss'
import TestimonialItem from './components/TestimonialItem'
import { Autoplay } from 'swiper'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useVisibilityHook } from 'react-observer-api'

function Testimonial() {
	const { setElement, isVisible } = useVisibilityHook()

	const { data, isLoading } = useQuery(
		['testimonials'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/testimonials/'
			)

			return data
		},
		{
			enabled: isVisible,
			staleTime: Infinity,
		}
	)

	return (
		<section ref={setElement} id="testimonial">
			{!isLoading && (
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
						breakpoints={{
							1200: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 2,
							},
							0: {
								slidesPerView: 1,
							},
						}}
						loop={true}
						modules={[Autoplay]}
					>
						{data.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								<TestimonialItem
									testimonial={testimonial}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</section>
	)
}

export default Testimonial
