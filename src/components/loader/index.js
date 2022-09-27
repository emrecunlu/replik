import { BounceLoader } from 'react-spinners'
import './loader.scss'

function Loader() {
	return (
		<div className="loader">
			<BounceLoader size={48} />
		</div>
	)
}

export default Loader
