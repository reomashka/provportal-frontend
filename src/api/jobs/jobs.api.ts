import { Job } from '@/interfaces/Job.interface';

export const getCurrentJob = async (id: number): Promise<Job> => {
	const response = await fetch(`/api/jobs/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка получения информации о работах');
	}

	return resData;
};

export const getAllJobs = async () => {
	const response = await fetch(`/api/jobs`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Ошибка получения информации о работах');
	}

	return resData;
};
