import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { userStore } from '@/store/user';

export const AppInitializer = observer(({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		if (!userStore.isResolved) {
			userStore.fetchProfile();
		}
	}, []);

	if (!userStore.isResolved) {
		return null;
	}

	return <>{children}</>;
});
