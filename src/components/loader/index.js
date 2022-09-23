import { BounceLoader } from 'react-spinners'
import './loader.scss'

function Loader({ visiblity = true }) {
	return (
		<div
			className="loader"
			style={{
				visibility: visiblity ? 'visible' : 'hidden',
			}}
		>
			<BounceLoader size={48} />
		</div>
	)
}

export default Loader
