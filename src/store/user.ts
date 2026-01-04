import { makeAutoObservable, runInAction } from 'mobx';

export type UserRole = 'USER' | 'ADMIN' | 'MODERATOR';
export type AuthMethodType = 'CREDENTIALS' | 'GOOGLE' | 'YANDEX';

export interface User {
	id: string;
	name: string | null;
	email: string | null;
	role: UserRole;
	isBlocked: boolean;
	isVerified: boolean;
	avatarUrl: string | null;
	createdAt: string;
}

class UserStore {
	user: User | null = null;

	status: 'idle' | 'loading' | 'succeeded' | 'failed' = 'idle';
	error: string | null = null;
	isResolved = false;

	constructor() {
		makeAutoObservable(this);
	}

	/* ================== CHECKS ================== */

	get isAuth() {
		return !!this.user;
	}

	get isAdmin() {
		return this.user?.role === 'ADMIN';
	}

	get isModerator() {
		return this.user?.role === 'MODERATOR';
	}

	get isBlocked() {
		return this.user?.isBlocked ?? false;
	}

	/* ================== ACTIONS ================== */

	setUser(user: User | null) {
		this.user = user;
	}

	reset() {
		this.user = null;
		this.status = 'idle';
		this.error = null;
		this.isResolved = true;
	}

	/* ================== ASYNC ================== */

	async fetchProfile() {
		this.status = 'loading';
		this.error = null;

		try {
			const res = await fetch('/api/users/me', {
				credentials: 'include',
			});

			if (!res.ok) {
				throw new Error('Unauthorized');
			}

			const data: User = await res.json();

			runInAction(() => {
				this.user = data;
				this.status = 'succeeded';
				this.isResolved = true;
			});
		} catch (e) {
			runInAction(() => {
				this.user = null;
				this.status = 'failed';
				this.isResolved = true;
				this.error = e instanceof Error ? e.message : 'Failed to load profile';
			});
		}
	}

	async logout() {
		try {
			await fetch('/api/auth/logout', {
				method: 'POST',
				credentials: 'include',
			});
		} finally {
			runInAction(() => {
				this.user = null;
				this.status = 'idle';
				this.error = null;
				this.isResolved = true;
			});
		}
	}
}

export const userStore = new UserStore();
