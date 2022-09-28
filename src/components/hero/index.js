import React from 'react'
import {TbArrowNarrowRight} from 'react-icons/tb'
import './hero.scss'

function HeroBackground({title, breadcrumb}) {
    return (
        <div className="hero-background">
            <div className="hero-content">
                <div className="page-name">
                    <h1>{title}</h1>
                </div>
                <div className="breadcrumbs">
                    {breadcrumb.map((crumb, key) => (
                        <div key={key}>
                            <React.Fragment key={key}>
                                <div className="breadcrumbs">
                                    <span>{crumb}</span>
                                    {breadcrumb.length - 1 !== key && (
                                        <TbArrowNarrowRight color="#f1f1f1" size={24}/>
                                    )}
                                </div>
                            </React.Fragment>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroBackground
