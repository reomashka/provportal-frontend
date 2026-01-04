import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getAllJobs } from '@/api/jobs/jobs.api';
import CardSkeleton from '@/components/card-skeleton/CardSkeleton';
import { SearchInput } from '@/components/search-input/SearchInput';
import { Job } from '@/interfaces/Job.interface';

import { JobCard } from './components/JobCard';
import styles from './JobsList.module.scss';

export const JobsList = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const { data, isLoading, isError } = useQuery<Job[]>({
		queryKey: ['jobs'],
		queryFn: () => getAllJobs(),
	});

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
				{isLoading || isError ? (
					Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
				) : data ? (
					<JobCard jobData={filteredData} />
				) : null}
			</div>
		</>
	);
};
