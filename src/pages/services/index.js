import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import HeroBackground from '../../components/hero'
import Solutions from '../../components/solutions'

function Corporate() {
	return (
		<>
			<HeroBackground
				title="Kurumsal"
				breadcrumb={['Anasayfa', 'Hizmetlerimiz']}
			/>
			<Solutions name="hizmetlerimiz" />
		</>
	)
}

export default Corporate
