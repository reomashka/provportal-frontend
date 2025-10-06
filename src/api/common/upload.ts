export async function uploadFile(file: File, title: string) {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('title', title);

	const res = await fetch('/api/upload', {
		method: 'POST',
		body: formData,
	});

	return res.json();
}
