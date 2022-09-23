import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import HeroBackground from '../../components/hero'
import Solutions from '../../components/solutions'

function Corporate() {
	return (
		<>
			<HeroBackground title="Kurumsal" breadcrumb={['Anasayfa', 'Kurumsal']} />
			<Solutions name="kurumsal" />
		</>
	)
}

export default Corporate
