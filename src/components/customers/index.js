import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './customers.scss'
import { useVisibilityHook } from 'react-observer-api'
import { resize } from '../../helper'
import { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Customers() {
	const { isVisible, setElement } = useVisibilityHook()

	const { isLoading, data } = useQuery(
		['customers'],
		async () => {
			const { data } = await axios.get(
				process.env.REACT_APP_ENDPOINT + '/customer/'
			)

			return data
		},
		{
			enabled: isVisible,
			staleTime: Infinity,
		}
	)

	return (
		<section ref={setElement} id="customers">
			<div className="container">
				<h2>Müşterilerimiz</h2>
				<h1>Güvenilir Müşterilerimiz</h1>
				<div className="customer-slides">
					{!isLoading && (
						<Swiper
							loop={true}
							spaceBetween={30}
							autoplay={{
								delay: 1500,
								disableOnInteraction: false,
								stopOnLastSlide: false,
							}}
							breakpoints={{
								1200: {
									slidesPerView: 5,
								},
								992: {
									slidesPerView: 4,
								},
								0: {
									slidesPerView: 3,
								},
							}}
							allowTouchMove={false}
							slidesPerView={5}
							modules={[Autoplay]}
						>
							{data.map((customer) => (
								<SwiperSlide key={customer.id}>
									<div className="customer-image">
										<LazyLoadImage
											src={resize(customer.image, 350, 200)}
											effect="blur"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</div>
			</div>
		</section>
	)
}

export default Customers
