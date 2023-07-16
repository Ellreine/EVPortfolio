import { imgAbout } from '../assets';

const About = () => {
	return (
		<div className={'bg-neutral-800 min-h-screen min-w-screen flex justify-center'}>
			<div className={'container flex justify-center items-center gap-16'}>
				<div className={'w-[550px] h-[650px] text-white flex justify-around flex-col gap-5 text-xl'}>
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
					<div className={'item'}>
						<h2>режиссер ева векслер</h2>
						<p>
							{' '}
							Независимый режиссер документального кино с навыками оператора, монтажера и звукорежиссера.
						</p>
					</div>
				</div>
				<img className={'w-[550px] h-[850px]'} src={imgAbout} alt="" />
			</div>
		</div>
	);
};

export default About;
