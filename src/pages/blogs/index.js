import HeroBackground from '../../components/hero'
import Blogs from '../../components/blogs'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Seo from "../../components/meta";

function BlogsPage() {
    return (
        <>
            <Seo title="Replik Yazılım | Bloglar"/>
            <HeroBackground title="Blog Yazıları" breadcrumb={['Anasayfa', 'Blog Yazıları']}/>
            <Blogs pagination={true} limit={6}/>
        </>
    )
}

export default BlogsPage
