export const register = async (name: string, email: string, password: string) => {
	const res = await fetch('/api/auth/register', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, email, password }),
		credentials: 'include',
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message || 'Register failed');
	}

	return data;
};
