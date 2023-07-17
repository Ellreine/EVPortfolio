import { shots } from '../assets';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { arrowLeft, arrowRight } from '../assets';

const properties = {
	duration: 3000,
	transitionDuration: 500,
	infinite: true,
	indicators: false,
	arrows: true,
	prevArrow: (
		<button className="w-[calc(var(--index)*1.6)] transition-all duration-300 hover:-translate-x-4">
			<img src={arrowLeft} alt="arrow-left" />
		</button>
	),
	nextArrow: (
		<button className="w-[calc(var(--index)*1.6)] transition-all duration-300 hover:translate-x-4">
			<img src={arrowRight} alt="arrow-right" />
		</button>
	),
};

const Slider = () => {
	return (
		<div className="slider md:w-[calc(var(--index)*40)] w-[calc(var(--index)*28)]">
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
		<section className="flex flex-col justify-center items-center py-[calc(var(--index)*3)] text-white bg-primary">
			<div className="w-full text-center sm:flex-row flex-col justify-center items-center">
				<h2
					className="mt-[calc(var(--index)*0.7)] font-bio font-light text-[calc(var(--index)*3.6)] leading-[calc(var(--index)*4.2)] uppercase"
					data-aos="fade-up"
				>
					<span className="font-bold">Top</span> Shots
				</h2>
			</div>
			<Slider />
			<div className="mb-[calc(var(--index)*0.8)] flex flex-col justify-center items-center" data-aos="fade-up">
				<p className="font-normal text-[calc(var(--index)*2)] leading-[calc(var(--index)*2.3)]">
					Mood and motivation board
				</p>
				<p className="font-light text-[calc(var(--index)*1.4)] leading-[calc(var(--index)*2)]">
					You can see more by going to the gallery
				</p>
			</div>
		</section>
	);
};

export default Topshots;
