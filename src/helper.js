export const resize = (path, w = 1200, h = 300) => {
	return (
		process.env.REACT_APP_ENDPOINT +
		'resize/' +
		path +
		'/' +
		w +
		'x' +
		h +
		'/'
	).toString()
}

export const getMonthName = index => {
	const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

	return months[index + 1]
}

export const timeSince = (date) => {
	var seconds = Math.floor(new Date().getTime() / 1000 - date),
		interval = Math.floor(seconds / 31536000)

	if (interval > 1) return interval + 'y'

	interval = Math.floor(seconds / 2592000)
	if (interval > 1) return interval + 'm'

	interval = Math.floor(seconds / 86400)
	if (interval >= 1) return interval + 'd'

	interval = Math.floor(seconds / 3600)
	if (interval >= 1) return interval + 'h'

	interval = Math.floor(seconds / 60)
	if (interval > 1) return interval + 'm '

	return Math.floor(seconds) + 's'
}
