import classNames from 'classnames'
import './overview.scss'

function Overview({ variant = 'rtl', data }) {
	return (
		<>
			<section className="overview">
				<div
					className={classNames({
						ltr: variant !== 'rtl',
						container: true,
					})}
				>
					<div className="overview-image">
						<img src={data.img} alt="" />
					</div>
					<div className="overview-contents">
						<h2>{data.question}</h2>
						<h1>{data.title}</h1>
						<span>{data.desc}</span>
						<div className="overview-items">
							<ul>
								{data.items.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Overview
