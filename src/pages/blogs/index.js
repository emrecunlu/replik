import HeroBackground from '../../components/hero'
import Blogs from '../../components/blogs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function BlogsPage() {
	return (
		<>
			<HeroBackground title="Blogs" breadcrumb={['Home', 'Blogs']} />
			<Blogs pagination={true} limit={6} />
		</>
	)
}

export default BlogsPage
