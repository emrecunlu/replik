import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import HeroBackground from '../../components/hero'
import Solutions from '../../components/solutions'
import Seo from '../../components/meta'

function Corporate() {
	return (
		<>
			<Seo title="Replik Yazılım | Hizmetlerimiz" />
			<HeroBackground
				title="Hizmetlerimiz"
				breadcrumb={['Anasayfa', 'Hizmetlerimiz']}
			/>
			<Solutions name="hizmetlerimiz" title="Hizmetlerimiz" subtitle="Hizmet Sayfalarımız" />
		</>
	)
}

export default Corporate
