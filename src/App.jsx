import { General, Topshots } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({ duration: 700, offset: 100 });

const App = () => {
	return (
		<div>
			<General />
			<Topshots />
		</div>
	);
};

export default App;
