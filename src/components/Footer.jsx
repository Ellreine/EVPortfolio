import { social } from '../assets';

const Footer = () => {
	return (
		<footer className="bg-primary w-full py-6 mt-10 flex flex-col justify-center items-center text-center uppercase text-[calc(var(--index)*0.8)]">
			<div className="w-full flex flex-col">
				<div className="mb-12 flex justify-around items-center text-white">
					<div className="mx-6">
						<a href="mailto:eva.vexler13@gmail.com" type="email">
							Send message
						</a>
					</div>

					<div className="mx-6 flex flex-row justify-between items-center">
						{social.map((item, index) => (
							<a key={index} href="">
								<img className="social-icon" src={item} alt="icon" />
							</a>
						))}
					</div>
				</div>

				<div className="capitalize text-white text-[calc(var(--index)*0.8)] opacity-50">
					<span>&#xa9; All right reserved</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
