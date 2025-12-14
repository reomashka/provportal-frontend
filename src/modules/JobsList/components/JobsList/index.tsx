import styles from './JobsList.module.scss';
import { useState, useEffect } from 'react';

import { JobCard } from '../JobCard';
import { Job } from '@/interfaces/Job.interface';
import CardSkeleton from '@/components/CardSkeleton';
import { SearchInput } from '@/components/SearchInput';

export const JobsList = () => {
	const [data, setData] = useState<Job[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setHasError(false);
			try {
				const response = await fetch('/api/jobs');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error('Ошибка загрузки данных:', error);
				setHasError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const filteredData = (data ?? []).filter((item) =>
		item.name?.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<>
			<SearchInput
				value={searchQuery}
				onChange={setSearchQuery}
				placeholder="Поиск по работам..."
			/>

			<div className={styles.jobsGrid}>
				{isLoading || hasError ? (
					Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
				) : data ? (
					<JobCard jobData={filteredData} />
				) : null}
			</div>
		</>
	);
};
