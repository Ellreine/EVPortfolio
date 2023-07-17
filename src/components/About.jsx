import { imgAbout } from '../assets';
import { aboutInfo } from '../constants';

const About = () => {
	return (
		<section
			className="my-[calc(var(--index)*3)] bg-primary flex justify-center p-[calc(var(--index)*1.5)]"
			id="about"
		>
			<div className="flex justify-center items-center ">
				<div className="w-full flex flex-col justify-center text-white text-[calc(var(--index)*0.9)] mx-[calc(var(--index)*1.5)]">
					{aboutInfo.map((item) => (
						<div key={item.title} className="mb-[calc(var(--index)*1.5)] text-center" data-aos="fade-right">
							<h2 className="mb-2">{item.title}</h2>
							<p>{item.description}</p>
						</div>
					))}
				</div>
				<img
					className="m-[calc(var(--index)*1.5)] p-4 border h-[calc(var(--index)*30)]"
					src={imgAbout}
					alt="EV"
					data-aos="fade-up"
					data-aos-delay="100"
				/>
			</div>
		</section>
	);
};

export default About;
