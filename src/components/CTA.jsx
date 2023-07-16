const CTA = () => {
	return (
		<div className="py-6 bg-primary flex flex-col items-center justify-center">
			<h2 className="text-6xl mb-6 text-center text-white tracking-wider font-bio">Get in Touch</h2>
			<form className="w-[700px] flex flex-col text-xl">
				<div className=" flex flex-row gap-4 ">
					<input
						id="name"
						type="text"
						placeholder="Name"
						className="w-full h-[60px] mb-4 px-4 formFocus py-2 bg-neutral-500 text-white opacity-70 rounded-sm  placeholder:text-white placeholder:text-xl focus:outline-none focus:opacity-100 "
						required
					/>
					<input
						id="phone"
						type="tel"
						placeholder="Phone"
						className="w-full h-[60px] mb-4 px-4 py-2 formFocus bg-neutral-500 text-white opacity-70 rounded-sm placeholder:text-white placeholder:text-xl focus:outline-none focus:opacity-100"
						required
					/>
				</div>

				<input
					id="email"
					type="email"
					placeholder="Email Address"
					className="w-full h-[60px] mb-4 px-4 py-2 formFocus bg-neutral-500 text-white opacity-70 rounded-sm placeholder:text-white placeholder:text-xl focus:outline-none focus:opacity-100"
					required
				/>

				<textarea
					id="message"
					placeholder="Leave your message"
					className="w-full h-[160px] mb-4 px-4 py-2 formFocus bg-neutral-500 resize-none text-white opacity-70 rounded-sm  placeholder:text-white placeholder:text-xl focus:outline-none focus:opacity-100"
					rows="4"
					required
				></textarea>

				<button
					type="submit"
					className="inline-block px-6 py-3 text-sm font-medium leading-5 font-bio text-neutral-800 uppercase bg-gray-300 rounded-md hover:bg-neutral-600 hover:text-white hover:border-neutral-900 formFocus"
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default CTA;
