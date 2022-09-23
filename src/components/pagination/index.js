import './pagination.scss'
import classNames from 'classnames'

function Pagination({ count, page, setPage }) {
	return (
		<div className="pagination-items">
			<ul>
				{[...Array(count)].map((val, key) => (
					<li
						className={classNames({
							active: key === page,
						})}
						onClick={() => setPage(key)}
					>
						{key + 1}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pagination
