import { General, Topshots, About, Footer, CTA } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({ duration: 700, offset: 100 });

const App = () => {
	return (
		<div className="bg-black w-full ">
			<General />
			<div className="flex justify-center items-start sm:px-16 px-6">
				<div className="xl:max-w-[1280px] w-full">
					<Topshots />
					<About />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
