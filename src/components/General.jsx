import Navbar from './Navbar';
const General = () => {
	return (
		<div className="h-screen bg xl:max-w-[1280px] w-full" id="general">
			<Navbar />
			<div className="flex justify-center items-center">
				<div className="flex flex-col justify-around items-center w-[300px] h-[300px] mt-[8%]">
					<h1
						className="uppercase text-[64px] font-light leading-[100px] text-white font-bio mb-[20%]"
						data-aos="fade-up"
						data-aos-once={true}
						data-aos-duration="1000"
					>
						Welcome
					</h1>
					<button className="uppercase text-[40px] font-light leading-[62px] text-white border p-4 rounded-[4px] font-bio mb-[20%]">
						Gallery
					</button>
				</div>
			</div>
		</div>
	);
};
export default General;
