import { useState } from 'react';

// scss & interfaces
import Transport from '@interfaces/Transport.interface';
import TransportTypeProps from '@interfaces/TransportTypeProps.interface';
import styles from './TransportList.module.scss';

// components
import { TransportCard } from './components/TransportCard';
import CardSkeleton from '@components/CardSkeleton';
import { SearchInput } from '@components/SearchInput';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from '@redux/store';

// api
import { useQuery } from '@tanstack/react-query';
import { getAllTransport } from '@/api/transport/getAllTransport';

export const TransportList = ({ transportType }: TransportTypeProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const filterData = useSelector((state: RootState) => state.filter.value);

	const { data, isLoading, error } = useQuery<Transport[], Error>({
		queryKey: ['transports', filterData, transportType],
		queryFn: () => getAllTransport(filterData, transportType),
	});

	const searchFilterTransportData = (data ?? []).filter((item: Transport) =>
		item.nameAuto?.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<>
			<SearchInput
				value={searchQuery}
				onChange={setSearchQuery}
				placeholder="Поиск по транспорту..."
			/>

			<div className={styles.transportGrid}>
				{isLoading || error ? (
					Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
				) : (
					<TransportCard transportData={searchFilterTransportData} transportType={transportType} />
				)}
			</div>
		</>
	);
};
