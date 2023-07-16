import { behance, instagram, telegram, youtube, whatsapp } from '../assets';

const Footer = () => {
	return (
		<div className={'bg-neutral-800 h-[200px] flex flex-col justify-center items-center text-center uppercase text-xl'}>
			<div className={'container flex flex-col gap-16'}>
				<div className={'text-white  flex justify-around items-center '}>
					<div className={'w-[200px]'}>
						<a href="mailto:eva.vexler13@gmail.com" type="email">
							send message
						</a>
					</div>
					<div className={' w-[200px]'}>
						<a href="">eva vexler</a>
					</div>
					<div className={'w-[200px] h-[32px] flex flex-row gap-2 justify-between items-center'}>
						<a href="">
							<img className={'w-[32px] h-[32px]'} src={behance} alt="" />
						</a>
						<a href="">
							<img className={'w-[32px] h-[32px]'} src={instagram} alt="" />
						</a>
						<a href="">
							<img className={'w-[32px] h-[32px]'} src={youtube} alt="" />
						</a>
						<a href="">
							<img className={'w-[32px] h-[32px]'} src={whatsapp} alt="" />
						</a>
						<a href="">
							<img className={'w-[32px] h-[32px]'} src={telegram} alt="" />
						</a>
					</div>
				</div>
				<div className={'text-white text-lg opacity-50 '}> &#xa9; all right reserved</div>
			</div>
		</div>
	);
};

export default Footer;
