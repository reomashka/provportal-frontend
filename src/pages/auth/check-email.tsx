import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { CheckEmail } from '@/modules/auth/CheckEmail';

export const CheckEmailPage = () => {
	return (
		<>
			<MetadataWrapper
				title="Войти | ProvPortal"
				description="Полная информация обо всех работах на МТА Провинция"
			/>
			<Header />

			<main>
				<div className="container">
					<CheckEmail />
				</div>
			</main>

			<Footer />
		</>
	);
};
