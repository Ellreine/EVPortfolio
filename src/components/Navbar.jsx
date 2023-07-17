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
		<nav className="w-full flex py-[calc(var(--index)*0.7)] px-[calc(var(--index)*2)] justify-between items-center">
			<img src={logo} alt="logo" className="w-[calc(var(--index)*5)]" />

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
					className="menu-icon"
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-[calc(var(--index)*1.5)] bg-black-gradient absolute top-[calc(var(--index)*6)] right-0 mx-[calc(var(--index)*1.7)] my-[calc(var(--index))] w-[calc(var(--index)*12)] rounded-xl sidebar z-10`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navBarLinks.map((link, index) => (
							<li
								key={link.id}
								className={`nav-link m-0 leading-[calc(var(--index)*2)] text-[calc(var(--index)*1.2)] ${
									index === navBarLinks.length - 1 ? 'mr-0' : 'mb-[calc(var(--index)*1.1)]'
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
