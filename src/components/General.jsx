import Navbar from './Navbar';
const General = () => {
	return (
		<div className={' min-h-screen min-w-screen bg z-0 '}>
			<Navbar />
			<div className={'flex justify-center'}>
				<div className={' flex justify-around items-center w-[300px] h-[300px] flex-col mt-[8%]'}>
					<h1 className={' uppercase text-6xl text-white font-bio'}> welcome </h1>
					<button className={' uppercase text-4xl text-white border p-3 font-bio '}> gallery </button>
				</div>
			</div>
		</div>
	);
};
export default General;
