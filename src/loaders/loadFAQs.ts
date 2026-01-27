
export const loadFAQs = async () => {
	const res = await fetch(`${import.meta.env.PUBLIC_COCKPIT_API}/content/items/faq`)
	const data = await res.json();

	console.log(data)
	return data
}

