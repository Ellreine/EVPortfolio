import Navbar from './Navbar';
const General = () => {
	return (
		<header className="bg w-full" id="general">
			<Navbar />
			<div className="flex justify-center items-center">
				<div className="flex flex-col justify-around items-center mt-[calc(var(--index)*5)]">
					<h1
						className="uppercase text-[calc(var(--index)*3)] font-light leading-[calc(var(--index)*2)] text-white font-bio mb-[calc(var(--index)*7)]"
						data-aos="fade-up"
						data-aos-once={true}
						data-aos-duration="1000"
					>
						Welcome
					</h1>
					<button className="uppercase text-[calc(var(--index)*1.7)] font-light leading-[calc(var(--index)*2)] text-white border p-4 rounded-[4px] font-bio mb-[calc(var(--index)*9)]">
						Gallery
					</button>
				</div>
			</div>
		</header>
	);
};
export default General;
