import { Link } from "react-router-dom"
import './item.scss'

function ContactItem() {
	return (
		<article className="contact-item">
			<div className="item-title">
				<h1>USA Headquarter</h1>
			</div>
			<div className="item-desc">
				<p>
					304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B Overlook
					Drive Chester, PA 19013, Flemingsburg USA.
				</p>
			</div>
			<div className="item-links">
				<ul>
					<li>
						<Link to="/">080 707 555-321</Link>
					</li>
                    <li>
                        <Link to="/">demo@example.com</Link>
                    </li>
				</ul>
			</div>
		</article>
	)
}

export default ContactItem
