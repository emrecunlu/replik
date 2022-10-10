import HeroBackground from '../../components/hero'
import Solutions from '../../components/solutions'
import Seo from "../../components/meta";

function Corporate() {
    return (
        <>
            <Seo title="Replik Yazılım | Kurumsal"/>
            <HeroBackground title="Kurumsal" breadcrumb={['Anasayfa', 'Kurumsal']}/>
            <Solutions name="kurumsal" title="Kurumsal" subtitle="Kurumsal Sayfalarımız"/>
        </>
    )
}

export default Corporate
