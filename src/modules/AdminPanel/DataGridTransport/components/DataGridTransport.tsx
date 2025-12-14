import { useState } from 'react';
import styles from './DataGrid.module.scss';
import Transport, {
	City,
	CountryOrigin,
	DriveType,
	FuelType,
	PHOTO_CATEGORIES,
	Showroom,
	TransportClass,
	TransportType,
} from '@/interfaces/Transport.interface';
export function DataGridTransport() {
	const [transports, setTransports] = useState<Transport[]>([
		{
			id: 1,
			nameAuto: 'BMW M340i',
			price: 3500000,
			fullSpeed: 250,
			speed100Time: 5.2,
			volumeTank: 59,
			fuelType: FuelType.AI95,
			seats: 5,
			typeBody: TransportType.SEDAN,
			uniqueName: '200SX',
			driveType: DriveType.REAR,
			class: TransportClass.PASSENGER,
			country: CountryOrigin.GERMANY,
			city: City.NEVSKY,
		},
		{
			id: 2,
			nameAuto: '400Z',
			price: 8500000,
			volumeTank: 250,
			fuelType: FuelType.DT,
			typeBody: TransportType.TRUCK,
			uniqueName: '400Z',
			driveType: DriveType.REAR,
			class: TransportClass.CARGO,
			country: CountryOrigin.SWEDEN,
			city: City.PRIVOLZHSK,
		},
	]);

	const [editingId, setEditingId] = useState<number | null>(null);
	const [showPhotoGallery, setShowPhotoGallery] = useState<number | null>(null);
	const [showAddModal, setShowAddModal] = useState(false);
	const [sortConfig, setSortConfig] = useState<{
		key: keyof Transport;
		direction: 'asc' | 'desc';
	} | null>(null);
	const [filterText, setFilterText] = useState('');
	const [selectedPhotoCategory, setSelectedPhotoCategory] = useState<string>(PHOTO_CATEGORIES[0]);

	const filteredTransports = transports
		.filter((t) => t.nameAuto.toLowerCase().includes(filterText.toLowerCase()))
		.sort((a, b) => {
			if (!sortConfig) return 0;
			const aVal = a[sortConfig.key];
			const bVal = b[sortConfig.key];
			if (aVal === null || aVal === undefined) return 1;
			if (bVal === null || bVal === undefined) return -1;
			const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
			return sortConfig.direction === 'asc' ? comparison : -comparison;
		});

	const handleSort = (key: keyof Transport) => {
		setSortConfig((current) =>
			current?.key === key && current.direction === 'asc'
				? { key, direction: 'desc' }
				: { key, direction: 'asc' },
		);
	};

	const handleDelete = (id: number) => {
		if (confirm('Are you sure you want to delete this vehicle?')) {
			setTransports(transports.filter((t) => t.id !== id));
		}
	};

	const handleSaveEdit = (updated: Transport) => {
		setTransports(transports.map((t) => (t.id === updated.id ? updated : t)));
		setEditingId(null);
	};

	const handleAddTransport = (newTransport: Omit<Transport, 'id'>) => {
		setTransports([
			...transports,
			{
				...newTransport,
				id: Math.max(...transports.map((t) => t.id), 0) + 1,
			},
		]);
		setShowAddModal(false);
	};

	const getImageUrl = (category: string, uniqueName: string) => {
		return `/uploads/transport/${category}/${uniqueName}.png`;
	};

	const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.src = '/uploads/transport/front/200SX.png';
	};

	const currentTransport = transports.find((t) => t.id === editingId);
	const photoTransport = transports.find((t) => t.id === showPhotoGallery);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.headerContent}>
					<h1 className={styles.title}>Transport Fleet Manager</h1>
					<p className={styles.subtitle}>
						Manage your vehicle inventory with photos and complete specifications
					</p>
				</div>
				<button className={styles.addButton} onClick={() => setShowAddModal(true)}>
					<span className={styles.addIcon}>+</span> Add Vehicle
				</button>
			</div>

			<div className={styles.controlsBar}>
				<input
					type="text"
					placeholder="Search by vehicle name..."
					value={filterText}
					onChange={(e) => setFilterText(e.target.value)}
					className={styles.searchInput}
				/>
				<div className={styles.statsBar}>
					<span className={styles.stat}>
						<span className={styles.statLabel}>Total Vehicles:</span>
						<span className={styles.statValue}>{filteredTransports.length}</span>
					</span>
					<span className={styles.stat}>
						<span className={styles.statLabel}>Total Value:</span>
						<span className={styles.statValue}>
							$
							{(filteredTransports.reduce((sum, t) => sum + (t.price || 0), 0) / 1000000).toFixed(
								1,
							)}
							M
						</span>
					</span>
				</div>
			</div>

			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th className={styles.th} onClick={() => handleSort('nameAuto')}>
								Vehicle Name{' '}
								{sortConfig?.key === 'nameAuto' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('typeBody')}>
								Type{' '}
								{sortConfig?.key === 'typeBody' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('price')}>
								Price {sortConfig?.key === 'price' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('fuelType')}>
								Fuel{' '}
								{sortConfig?.key === 'fuelType' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('fullSpeed')}>
								Max Speed{' '}
								{sortConfig?.key === 'fullSpeed' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('seats')}>
								Seats {sortConfig?.key === 'seats' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('country')}>
								Country{' '}
								{sortConfig?.key === 'country' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th} onClick={() => handleSort('city')}>
								City {sortConfig?.key === 'city' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
							</th>
							<th className={styles.th}>Photos</th>
							<th className={styles.th}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredTransports.map((transport) => (
							<tr key={transport.id} className={styles.tr}>
								<td className={styles.td}>
									<span className={styles.vehicleName}>{transport.nameAuto}</span>
								</td>
								<td className={styles.td}>
									<span className={styles.badge}>{transport.typeBody}</span>
								</td>
								<td className={styles.td}>
									{transport.price ? `$${(transport.price / 1000000).toFixed(2)}M` : '—'}
								</td>
								<td className={styles.td}>{transport.fuelType || '—'}</td>
								<td className={styles.td}>
									{transport.fullSpeed ? `${transport.fullSpeed} km/h` : '—'}
								</td>
								<td className={styles.td}>{transport.seats ? `${transport.seats} seats` : '—'}</td>
								<td className={styles.td}>{transport.country || '—'}</td>
								<td className={styles.td}>{transport.city || '—'}</td>
								<td className={styles.td}>
									<button
										className={styles.photoButton}
										onClick={() => setShowPhotoGallery(transport.id)}>
										📷 Gallery
									</button>
								</td>
								<td className={styles.td}>
									<div className={styles.actionButtons}>
										<button
											className={styles.editButton}
											onClick={() => setEditingId(transport.id)}>
											Edit
										</button>
										<button
											className={styles.deleteButton}
											onClick={() => handleDelete(transport.id)}>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{photoTransport && (
				<div className={styles.modal}>
					<div className={styles.overlay} onClick={() => setShowPhotoGallery(null)} />
					<div className={styles.galleryContent}>
						<div className={styles.galleryHeader}>
							<h2 className={styles.galleryTitle}>{photoTransport.nameAuto} - Photo Gallery</h2>
							<button className={styles.closeButton} onClick={() => setShowPhotoGallery(null)}>
								✕
							</button>
						</div>

						<div className={styles.galleryContainer}>
							{/* <div className={styles.previewSection}>
								<img
									src={getImageUrl(selectedPhotoCategory, photoTransport.uniqueName)}
									alt={`${photoTransport.nameAuto} - ${selectedPhotoCategory}`}
									className={styles.previewImage}
									onError={handleImageError}
								/>
								<p className={styles.categoryLabel}>{selectedPhotoCategory.toUpperCase()}</p>
							</div> */}

							<div className={styles.categoriesGrid}>
								{PHOTO_CATEGORIES.map((category) => (
									<button
										key={category}
										className={`${styles.categoryButton} ${selectedPhotoCategory === category ? styles.active : ''}`}
										onClick={() => setSelectedPhotoCategory(category)}>
										<div className={styles.categoryThumbnail}>
											<img
												src={getImageUrl(category, photoTransport.uniqueName) || '/placeholder.svg'}
												alt={category}
												onError={handleImageError}
											/>
										</div>
										<span className={styles.categoryName}>{category}</span>
									</button>
								))}
							</div>
						</div>

						<div className={styles.galleryFooter}>
							<p className={styles.info}>
								Vehicle: <strong>{photoTransport.nameAuto}</strong> | ID:{' '}
								<strong>{photoTransport.uniqueName}</strong>
							</p>
							<button
								className={styles.closeButtonFooter}
								onClick={() => setShowPhotoGallery(null)}>
								Close Gallery
							</button>
						</div>
					</div>
				</div>
			)}

			{currentTransport && (
				<div className={styles.modal}>
					<div className={styles.overlay} onClick={() => setEditingId(null)} />
					<div className={styles.editContent}>
						<div className={styles.editHeader}>
							<h2 className={styles.editTitle}>Edit Vehicle: {currentTransport.nameAuto}</h2>
							<button className={styles.closeButton} onClick={() => setEditingId(null)}>
								✕
							</button>
						</div>

						<form
							onSubmit={(e) => {
								e.preventDefault();
								const formData = new FormData(e.currentTarget);
								const updated: Transport = {
									...currentTransport,
									nameAuto: formData.get('nameAuto') as string,
									uniqueName: formData.get('uniqueName') as string,
									typeBody: formData.get('typeBody') as TransportType,
									class: (formData.get('class') as TransportClass) || undefined,
									fullSpeed: formData.get('fullSpeed')
										? Number(formData.get('fullSpeed'))
										: undefined,
									speed100Time: formData.get('speed100Time')
										? Number(formData.get('speed100Time'))
										: undefined,
									fuelType: (formData.get('fuelType') as FuelType) || undefined,
									volumeTank: formData.get('volumeTank')
										? Number(formData.get('volumeTank'))
										: undefined,
									price: formData.get('price') ? Number(formData.get('price')) : undefined,
									seats: formData.get('seats') ? Number(formData.get('seats')) : undefined,
									driveType: (formData.get('driveType') as DriveType) || undefined,
									units: formData.get('units') ? Number(formData.get('units')) : undefined,
									country: (formData.get('country') as CountryOrigin) || undefined,
									city: (formData.get('city') as City) || undefined,
									showroom: (formData.get('showroom') as Showroom) || undefined,
									paintFirst: (formData.get('paintFirst') as string) || undefined,
									paintInter: (formData.get('paintInter') as string) || undefined,
									rims: (formData.get('rims') as string) || undefined,
									accessories: (formData.get('accessories') as string) || undefined,
								};
								handleSaveEdit(updated);
							}}
							className={styles.editForm}>
							<div className={styles.editFormGrid}>
								{/* Basic Info */}
								<fieldset className={styles.fieldset}>
									<legend className={styles.legend}>Basic Information</legend>
									<div className={styles.field}>
										<label className={styles.label}>Vehicle Name</label>
										<input
											type="text"
											name="nameAuto"
											defaultValue={currentTransport.nameAuto}
											className={styles.input}
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Unique Name</label>
										<input
											type="text"
											name="uniqueName"
											defaultValue={currentTransport.uniqueName}
											className={styles.input}
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Body Type</label>
										<select
											name="typeBody"
											defaultValue={currentTransport.typeBody}
											className={styles.select}>
											{Object.values(TransportType).map((type) => (
												<option key={type} value={type}>
													{type}
												</option>
											))}
										</select>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Class</label>
										<select
											name="class"
											defaultValue={currentTransport.class || ''}
											className={styles.select}>
											<option value="">Select Class</option>
											{Object.values(TransportClass).map((cls) => (
												<option key={cls} value={cls}>
													{cls}
												</option>
											))}
										</select>
									</div>
								</fieldset>

								{/* Performance */}
								<fieldset className={styles.fieldset}>
									<legend className={styles.legend}>Performance</legend>
									<div className={styles.field}>
										<label className={styles.label}>Max Speed (km/h)</label>
										<input
											type="number"
											name="fullSpeed"
											defaultValue={currentTransport.fullSpeed || ''}
											className={styles.input}
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>0-100 Time (sec)</label>
										<input
											type="number"
											step="0.1"
											name="speed100Time"
											defaultValue={currentTransport.speed100Time || ''}
											className={styles.input}
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Fuel Type</label>
										<select
											name="fuelType"
											defaultValue={currentTransport.fuelType || ''}
											className={styles.select}>
											<option value="">Select Fuel</option>
											{Object.values(FuelType).map((fuel) => (
												<option key={fuel} value={fuel}>
													{fuel}
												</option>
											))}
										</select>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Tank Volume (L)</label>
										<input
											type="number"
											name="volumeTank"
											defaultValue={currentTransport.volumeTank || ''}
											className={styles.input}
										/>
									</div>
								</fieldset>

								{/* Specifications */}
								<fieldset className={styles.fieldset}>
									<legend className={styles.legend}>Specifications</legend>
									<div className={styles.field}>
										<label className={styles.label}>Price ($)</label>
										<input
											type="number"
											name="price"
											defaultValue={currentTransport.price || ''}
											className={styles.input}
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Seats</label>
										<input
											type="number"
											name="seats"
											defaultValue={currentTransport.seats || ''}
											className={styles.input}
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Drive Type</label>
										<select
											name="driveType"
											defaultValue={currentTransport.driveType || ''}
											className={styles.select}>
											<option value="">Select Drive</option>
											{Object.values(DriveType).map((drive) => (
												<option key={drive} value={drive}>
													{drive}
												</option>
											))}
										</select>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Units</label>
										<input
											type="number"
											name="units"
											defaultValue={currentTransport.units || ''}
											className={styles.input}
										/>
									</div>
								</fieldset>

								{/* Location */}
								<fieldset className={styles.fieldset}>
									<legend className={styles.legend}>Location & Origin</legend>
									<div className={styles.field}>
										<label className={styles.label}>Country</label>
										<select
											name="country"
											defaultValue={currentTransport.country || ''}
											className={styles.select}>
											<option value="">Select Country</option>
											{Object.values(CountryOrigin).map((country) => (
												<option key={country} value={country}>
													{country}
												</option>
											))}
										</select>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>City</label>
										<select
											name="city"
											defaultValue={currentTransport.city || ''}
											className={styles.select}>
											<option value="">Select City</option>
											{Object.values(City).map((city) => (
												<option key={city} value={city}>
													{city}
												</option>
											))}
										</select>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Showroom</label>
										<select
											name="showroom"
											defaultValue={currentTransport.showroom || ''}
											className={styles.select}>
											<option value="">Select Showroom</option>
											{Object.values(Showroom).map((showroom) => (
												<option key={showroom} value={showroom}>
													{showroom}
												</option>
											))}
										</select>
									</div>
								</fieldset>

								{/* Paint & Customization */}
								<fieldset className={styles.fieldset}>
									<legend className={styles.legend}>Paint & Customization</legend>
									<div className={styles.field}>
										<label className={styles.label}>Paint Exterior</label>
										<input
											type="text"
											name="paintFirst"
											defaultValue={currentTransport.paintFirst || ''}
											className={styles.input}
											placeholder="e.g., Metallic Blue"
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Paint Interior</label>
										<input
											type="text"
											name="paintInter"
											defaultValue={currentTransport.paintInter || ''}
											className={styles.input}
											placeholder="e.g., Black Leather"
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Rims</label>
										<input
											type="text"
											name="rims"
											defaultValue={currentTransport.rims || ''}
											className={styles.input}
											placeholder="e.g., 20-inch Alloy"
										/>
									</div>
									<div className={styles.field}>
										<label className={styles.label}>Accessories</label>
										<input
											type="text"
											name="accessories"
											defaultValue={currentTransport.accessories || ''}
											className={styles.input}
											placeholder="e.g., Roof Rack, Spoiler"
										/>
									</div>
								</fieldset>
							</div>

							<div className={styles.editActions}>
								<button
									type="button"
									className={styles.cancelButton}
									onClick={() => setEditingId(null)}>
									Cancel
								</button>
								<button type="submit" className={styles.saveButton}>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{showAddModal && (
				<div className={styles.modal}>
					<div className={styles.overlay} onClick={() => setShowAddModal(false)} />
					<div className={styles.addContent}>
						<div className={styles.addHeader}>
							<h2 className={styles.addTitle}>Add New Vehicle</h2>
							<button className={styles.closeButton} onClick={() => setShowAddModal(false)}>
								✕
							</button>
						</div>

						<form
							onSubmit={(e) => {
								e.preventDefault();
								const formData = new FormData(e.currentTarget);
								const nameAuto = formData.get('nameAuto') as string;
								const uniqueName = formData.get('uniqueName') as string;

								if (!nameAuto || !uniqueName) {
									alert('Please fill in required fields');
									return;
								}

								handleAddTransport({
									nameAuto,
									uniqueName,
									typeBody: (formData.get('typeBody') as TransportType) || TransportType.SEDAN,
									fuelType: (formData.get('fuelType') as FuelType) || FuelType.AI95,
									driveType: (formData.get('driveType') as DriveType) || DriveType.FRONT,
									class: (formData.get('class') as TransportClass) || TransportClass.PASSENGER,
									price: formData.get('price') ? Number(formData.get('price')) : undefined,
									fullSpeed: formData.get('fullSpeed')
										? Number(formData.get('fullSpeed'))
										: undefined,
									speed100Time: formData.get('speed100Time')
										? Number(formData.get('speed100Time'))
										: undefined,
									seats: formData.get('seats') ? Number(formData.get('seats')) : undefined,
									volumeTank: formData.get('volumeTank')
										? Number(formData.get('volumeTank'))
										: undefined,
									country: (formData.get('country') as CountryOrigin) || undefined,
									city: (formData.get('city') as City) || undefined,
									showroom: (formData.get('showroom') as Showroom) || undefined,
								});
							}}
							className={styles.addForm}>
							<div className={styles.addFormGrid}>
								<div className={styles.field}>
									<label className={styles.label}>Vehicle Name *</label>
									<input
										type="text"
										name="nameAuto"
										className={styles.input}
										placeholder="e.g., BMW M340i"
										required
									/>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Unique Name *</label>
									<input
										type="text"
										name="uniqueName"
										className={styles.input}
										placeholder="e.g., bmw-m340i-2024"
										required
									/>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Body Type</label>
									<select name="typeBody" className={styles.select}>
										{Object.values(TransportType).map((type) => (
											<option key={type} value={type}>
												{type}
											</option>
										))}
									</select>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Class</label>
									<select name="class" className={styles.select}>
										<option value="">Select Class</option>
										{Object.values(TransportClass).map((cls) => (
											<option key={cls} value={cls}>
												{cls}
											</option>
										))}
									</select>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Price ($)</label>
									<input type="number" name="price" className={styles.input} />
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Fuel Type</label>
									<select name="fuelType" className={styles.select}>
										{Object.values(FuelType).map((fuel) => (
											<option key={fuel} value={fuel}>
												{fuel}
											</option>
										))}
									</select>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Max Speed (km/h)</label>
									<input type="number" name="fullSpeed" className={styles.input} />
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Seats</label>
									<input type="number" name="seats" className={styles.input} />
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Tank Volume (L)</label>
									<input type="number" name="volumeTank" className={styles.input} />
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Drive Type</label>
									<select name="driveType" className={styles.select}>
										{Object.values(DriveType).map((drive) => (
											<option key={drive} value={drive}>
												{drive}
											</option>
										))}
									</select>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Country</label>
									<select name="country" className={styles.select}>
										<option value="">Select Country</option>
										{Object.values(CountryOrigin).map((country) => (
											<option key={country} value={country}>
												{country}
											</option>
										))}
									</select>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>City</label>
									<select name="city" className={styles.select}>
										<option value="">Select City</option>
										{Object.values(City).map((city) => (
											<option key={city} value={city}>
												{city}
											</option>
										))}
									</select>
								</div>

								<div className={styles.field}>
									<label className={styles.label}>Showroom</label>
									<select name="showroom" className={styles.select}>
										<option value="">Select Showroom</option>
										{Object.values(Showroom).map((showroom) => (
											<option key={showroom} value={showroom}>
												{showroom}
											</option>
										))}
									</select>
								</div>
							</div>

							<div className={styles.addActions}>
								<button
									type="button"
									className={styles.cancelButton}
									onClick={() => setShowAddModal(false)}>
									Cancel
								</button>
								<button type="submit" className={styles.addSubmitButton}>
									Add Vehicle
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
