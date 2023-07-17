import { contacts } from '../constants';

const CTA = () => {
	return (
		<section className="my-4 py-12 bg-primary flex flex-col items-center justify-center" id="contacts">
			<h2
				className="uppercase text-[calc(var(--index)*2.5)] font-light leading-[calc(var(--index)*4)] text-white font-bio mb-[1%]"
				data-aos="flip-down"
			>
				Get in Touch
			</h2>
			<form className="w-[55%] flex flex-col text-[calc(var(--index)*0.9)]">
				<div className="flex flex-row">
					{contacts.map((contact, index) => (
						<input
							key={contact.id}
							id={contact.id}
							type={contact.type}
							placeholder={contact.placeholder}
							className={`w-full ${
								index === 1 ? 'mx-0' : 'mr-4'
							} mb-4 py-2 px-4 formFocus bg-neutral-500 text-white opacity-70 rounded-[4px] placeholder:text-white placeholder:text-[calc(var(--index)*0.9)] focus:outline-none focus:opacity-100`}
							required
						/>
					))}
				</div>

				<input
					id="email"
					type="email"
					placeholder="Your email address"
					className="w-full mb-4 py-2 px-4 formFocus bg-neutral-500 text-white opacity-70 rounded-[4px] placeholder:text-white placeholder:text-[calc(var(--index)*0.9)] focus:outline-none focus:opacity-100"
					required
				/>

				<textarea
					id="message"
					placeholder="Leave your message"
					className="w-full mb-4 py-2 px-4 formFocus bg-neutral-500 resize-none text-white opacity-70 rounded-[4px] placeholder:text-white placeholder:text-[calc(var(--index)*0.9)] focus:outline-none focus:opacity-100"
					rows="4"
					required
				></textarea>

				<button
					type="submit"
					className="inline-block py-2 px-4 text-[calc(var(--index)*0.8)] font-medium leading-[calc(var(--index))] font-bio text-neutral-800 uppercase bg-gray-300 rounded-md hover:bg-neutral-600 hover:text-white hover:border-neutral-900 formFocus"
				>
					Send
				</button>
			</form>
		</section>
	);
};

export default CTA;
