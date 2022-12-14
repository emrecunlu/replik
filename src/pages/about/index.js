import Company from '../../components/company'
import Customers from '../../components/customers'
import HeroBackground from '../../components/hero'
import Testimonial from '../../components/testimonial'
import './about.scss'
import Seo from "../../components/meta";

function About() {
    return (
        <>
            <Seo title="Replik Yazılım | Hakkımızda" />
            <HeroBackground title="Hakkımızda" breadcrumb={['Anasayfa', 'Hakkımızda']}/>
            <Company/>
            <Testimonial/>
            <Customers/>
        </>
    )
}

export default About
