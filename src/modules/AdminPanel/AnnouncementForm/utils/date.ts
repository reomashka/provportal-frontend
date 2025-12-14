export const formatDateForDisplay = (dateString: string): string => {
	return new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	}).format(new Date(dateString));
};

export const getTodayDateString = (): string => {
	return new Date().toISOString().split('T')[0];
};
