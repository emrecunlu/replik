import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import { resize } from '../../helper'
import HeroBackground from '../hero'
import './content.scss'

function Content({ slug }) {
	const params = useParams()

	const { data, isLoading } = useQuery(['content', params?.slug], async () => {
		const { data, status } = await axios.get(
			process.env.REACT_APP_ENDPOINT + '/content/' + params?.slug + '/'
		)

		return data
	})

	if (!isLoading) {
		return (
			<>
				<HeroBackground
					title={data.title}
					breadcrumb={['Home', 'Kurumsal', data.title]}
				/>
				<section id="content">
					<div className="container">
						<h2>Kurumsal</h2>
						<h1>KVKK Metini</h1>
						<hr />
						<div className="content-details">
							{data.image !== null && (
								<div className="content-image">
									<LazyLoadImage src={resize(data.image, 1200, 500)} />
								</div>
							)}
							<div className="content-markdown">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Vestibulum dictum et dolor eget efficitur. Nullam sem tortor,
									congue nec tempus a, facilisis sed ligula. Praesent nisl
									ligula, tincidunt nec nibh eget, blandit aliquam magna.
									Phasellus mattis in leo in vulputate. Vestibulum vel tempus
									erat. Ut nec maximus purus. Donec in purus libero. Mauris
									magna odio, tincidunt vitae finibus ut, suscipit eu sapien.
									Fusce quis nisl quis est ornare dictum. In at libero tortor.
									Cras placerat turpis nisl, sit amet dignissim tortor luctus a.
									Pellentesque eu nulla ac orci cursus lacinia. Etiam ut maximus
									nulla. Maecenas vel aliquet libero, ut tincidunt ligula.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
									dolorem iusto aperiam aliquam numquam deleniti quia inventore
									nesciunt ad commodi quaerat eligendi vero officia, delectus
									esse facilis! Magni, officiis dolores.
								</p>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default Content
