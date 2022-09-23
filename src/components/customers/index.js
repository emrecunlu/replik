import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './customers.scss'

function Customers() {
	return (
		<section id="customers">
			<div className="container">
				<h2>TRUSTED BY OVER 40,000</h2>
				<h1>Our Customers</h1>
				<div className="customer-slides">
					<Swiper
						loop={true}
						spaceBetween={30}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
							stopOnLastSlide: false,
						}}
						allowTouchMove={false}
						slidesPerView={5}
						modules={[Autoplay]}
					>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-1.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-2.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-1.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-1.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-1.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-2.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-1.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="customer-image">
								<img
									src="https://cutesolution.com/html/Techvio/assets/img/partner/client-1.png"
									alt=""
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Customers
