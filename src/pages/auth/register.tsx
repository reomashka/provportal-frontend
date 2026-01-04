import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { RegisterForm } from '@/modules/auth/RegisterForm';

export const Register = () => {
	return (
		<>
			<MetadataWrapper
				title="Войти | ProvPortal"
				description="Полная информация обо всех работах на МТА Провинция"
			/>
			<Header />

			<main>
				<div className="container">
					<RegisterForm />
				</div>
			</main>

			<Footer />
		</>
	);
};
