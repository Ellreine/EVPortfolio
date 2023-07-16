import { imgAbout } from '../assets';

const About = () => {
	return (
		<div className=" bg-primary min-h-screen min-w-screen flex justify-center py-6" id="about">
			<div className="flex justify-center items-center gap-16">
				<div className="w-[550px] h-[650px] text-white flex justify-around flex-col gap-5 text-xl">
					<div className="item">
						<h2>режиссер ева векслер</h2>
						<p>
							{' '}
							Независимый режиссер документального кино с навыками оператора, монтажера и звукорежиссера.
						</p>
					</div>
					<div className={'item'}>
						<h2>режиссер ева векслер</h2>
						<p>
							{' '}
							Независимый режиссер документального кино с навыками оператора, монтажера и звукорежиссера.
						</p>
					</div>
					<div className={'item'}>
						<h2>режиссер ева векслер</h2>
						<p>
							{' '}
							Независимый режиссер документального кино с навыками оператора, монтажера и звукорежиссера.
						</p>
					</div>
				</div>
				<img className="h-[700px]" src={imgAbout} alt="EV" data-aos="fade-up" data-aos-delay="100" />
			</div>
		</div>
	);
};

export default About;
