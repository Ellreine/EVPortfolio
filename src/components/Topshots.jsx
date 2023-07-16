import { shots } from '../assets';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { arrowLeft, arrowRight } from '../assets';

const properties = {
	duration: 3000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	prevArrow: (
		<button className="sm:w-[40px] w-[20px] transition-all duration-300 hover:-translate-x-4">
			<img src={arrowLeft} alt="arrow-left" />
		</button>
	),
	nextArrow: (
		<button className="sm:w-[40px] w-[20px] transition-all duration-300 hover:translate-x-4">
			<img src={arrowRight} alt="arrow-right" />
		</button>
	),
};

const Slider = () => {
	return (
		<div className="slider">
			<Fade {...properties}>
				{shots.map((shot, index) => (
					<div key={index}>
						<img src={shot} alt="shot" />
					</div>
				))}
			</Fade>
		</div>
	);
};

const Topshots = () => {
	return (
		<div className="flex flex-col justify-center items-center sm:py-6 py-2 text-white bg-black">
			<div className="w-full text-center sm:flex-row flex-col justify-center items-center">
				<h2
					className="my-8 font-bio font-light sm:text-[80px] text-[50px] sm:leading-[124px] leading-[90px] uppercase"
					data-aos="fade-up"
				>
					<span className="font-bold">Top</span> Shots
				</h2>
			</div>
			<Slider />
			<div className="flex flex-col justify-center items-center" data-aos="fade-up">
				<p className="font-normal sm:text-[48px] text-[28px] sm:leading-[56px]">
					Mood and motivation board
				</p>
				<p className="font-light sm:text-[36px] text-[20px] sm:leading-[42px]">
					You can see more by going to the gallery
				</p>
			</div>
		</div>
	);
};

export default Topshots;
