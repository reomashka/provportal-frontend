// api
import { useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { getAllTransport } from '@/api/transport/transport.api';
import CardSkeleton from '@/components/card-skeleton/CardSkeleton';
import { SearchInput } from '@/components/search-input/SearchInput';
// scss & interfaces
import Transport from '@/interfaces/Transport.interface';
import TransportTypeProps from '@/interfaces/TransportTypeProps.interface';
import { transportStore } from '@/store/transportFilterSort';

import { SortButtons } from './components/FilterAndSort';
// components
import { TransportCard } from './components/TransportCard';
import styles from './TransportList.module.scss';

export const TransportList = observer(({ transportType }: TransportTypeProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const store = transportStore;

	const { data, isLoading, error } = useQuery<Transport[]>({
		queryKey: ['transports', transportType],
		queryFn: () => getAllTransport(transportType),
		enabled: !!transportType,
	});

	const filterByStore = (items: Transport[]) => {
		return items.filter((item) => {
			const { filters } = store;

			if (filters.epp && !item.epp) return false;

			if (filters.countryOrigin.length && !filters.countryOrigin.includes(item.country ?? ''))
				return false;

			if (filters.fuelType.length && !filters.fuelType.includes(item.fuelType ?? '')) return false;

			if (filters.bodyType.length && !filters.bodyType.includes(item.typeBody ?? '')) return false;
			if (filters.seats.length && !filters.seats.includes(item.seats ?? 0)) return false;
			if (filters.driveType.length && !filters.driveType.includes(item.driveType ?? ''))
				return false;
			if (filters.slots.length && !filters.slots.includes(item.slots ?? 0)) return false;
			if (filters.showroom.length && !filters.showroom.includes(item.showroom ?? '')) return false;

			return true;
		});
	};

	const sortByStore = (items: Transport[]) => {
		switch (store.sortBy) {
			case 'priceAsc':
				return [...items].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
			case 'priceDesc':
				return [...items].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
			default:
				return items;
		}
	};

	const filteredData = sortByStore(
		filterByStore(
			(data ?? []).filter((item: Transport) =>
				item.name?.toLowerCase().includes(searchQuery.toLowerCase()),
			),
		),
	);
	return (
		<>
			<SortButtons />
			<SearchInput
				value={searchQuery}
				onChange={setSearchQuery}
				placeholder="Поиск по транспорту..."
			/>
			<div className={styles.transportGrid}>
				{isLoading || error ? (
					Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
				) : (
					<TransportCard transportData={filteredData} transportType={transportType} />
				)}
			</div>
			<span className={styles.noDataTransport}>
				{filteredData.length == 0 && 'Увы, такого транспорта нет!'}
			</span>
		</>
	);
});
