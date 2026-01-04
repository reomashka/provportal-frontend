import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { LoginForm } from '@/modules/auth/LoginForm';

export const Login = () => {
	return (
		<>
			<MetadataWrapper
				title="Войти | ProvPortal"
				description="Полная информация обо всех работах на МТА Провинция"
			/>
			<Header />

			<main>
				<div className="container">
					<LoginForm />
				</div>
			</main>

			<Footer />
		</>
	);
};
