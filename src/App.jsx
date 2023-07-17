import { General, Topshots, About, Footer, CTA, Gallery } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({ duration: 700, offset: 100 });

const App = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center bg-black">
			<General />
			<div className="w-full flex justify-center items-start p-[calc(var(--index)*1.5)]">
				<div className="xl:max-w-[1280px] w-full">
					<Topshots />
					<Gallery />
					<About />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
