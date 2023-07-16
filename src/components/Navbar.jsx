import { Link } from 'react-scroll';
import { navBarLinks } from '../constants';
import { logo, close, menu } from '../assets';
import { useState } from 'react';

const properties = {
	smooth: true,
	offset: 50,
	duration: 500,
};

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 px-8 justify-between items-center">
			<img src={logo} alt="logo" />

			<div className="sm:flex hidden justify-end items-center flex-1">
				{navBarLinks.map((link) => (
					<Link key={link.id} to={link.id} {...properties} className="nav-link">
						{link.title}
					</Link>
				))}
			</div>

			<div className="list-none sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					onClick={() => setToggle((prev) => !prev)}
					className="w-[28px] h-[28px] object-contain"
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navBarLinks.map((link, index) => (
							<li
								key={link.id}
								className={`nav-link m-0 leading-[40px] text-[16px] ${
									index === navBarLinks.length - 1 ? 'mr-0' : 'mb-4'
								}`}
							>
								<Link to={link.id} {...properties}>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
