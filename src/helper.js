export const resize = (path, w = 1200, h = 300) => {
	return (
		process.env.REACT_APP_ENDPOINT +
		'/resize/' +
		path +
		'/' +
		w +
		'x' +
		h +
		'/'
	).toString()
}

export function setCookie(name, value, days) {
	var expires = ''
	if (days) {
		var date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		expires = '; expires=' + date.toUTCString()
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/'
}
export function getCookie(name) {
	var nameEQ = name + '='
	var ca = document.cookie.split(';')
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i]
		while (c.charAt(0) == ' ') c = c.substring(1, c.length)
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
	}
	return null
}
export function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export const getMonthName = (index) => {
	const months = [
		'Ocak',
		'Şubat',
		'Mart',
		'Nisan',
		'Mayıs',
		'Haziran',
		'Temmuz',
		'Ağustos',
		'Eylül',
		'Ekim',
		'Kasım',
		'Aralık',
	]

	return months[index + 1]
}

export const getValue = (array, key) => {
	return array.filter(el => el.key === key) ?? null;
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
