import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import HeroBackground from '../../components/hero'
import Solutions from '../../components/solutions'
import Seo from "../../components/meta";

function Corporate() {
    return (
        <>
            <Seo title="Replik Yazılım | Hizmetlerimiz"/>
            <HeroBackground
                title="Kurumsal"
                breadcrumb={['Anasayfa', 'Hizmetlerimiz']}
            />
            <Solutions name="hizmetlerimiz"/>
        </>
    )
}

export default Corporate
