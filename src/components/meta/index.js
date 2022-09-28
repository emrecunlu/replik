import {Helmet} from 'react-helmet'
import {useSelector} from 'react-redux'
import {useLocation} from "react-router-dom";

export default function Seo({title, description, image}) {
    const {pathname} = useLocation()
    const {config} = useSelector((state) => state.config)

    return (<Helmet>
            <title>{title}</title>
            <meta name="title" content={title}/>
            <link rel="icon" href={'/static/img/' + config?.meta_favicon?.image} type="image/x-icon"/>
            <meta
                name="description"
                content={description || config?.meta_description?.value}
            />

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={config.site_url.value + pathname}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description || config?.meta_description?.value}/>
            {image && (<meta property="og:image" content={image}/>)}

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={config.site_url.value + pathname}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description || config?.meta_description?.value}/>
            {image && (<meta property="twitter:image" content={image}/>)}
        </Helmet>)
}
