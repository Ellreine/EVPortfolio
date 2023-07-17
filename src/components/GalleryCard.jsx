import PropTypes from 'prop-types';

const GalleryCard = ({ images, flexReverse, text }) => {
	return (
		<div className="mt-[calc(var(--index)*3)]">
			<div
				className={`w-full flex ${
					flexReverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
				} flex-col justify-center sm:items-start items-center`}
			>
				<div
					className={`${
						flexReverse ? 'sm:ml-[calc(var(--index))]' : 'sm:mr-[calc(var(--index))]'
					} mb-[calc(var(--index))]`}
					data-aos={`${flexReverse ? 'fade-left' : 'fade-right'}`}
				>
					<img src={images[2]} alt="poster" className="gallery-img" />
				</div>
				<div className="flex flex-col justify-start items-start" data-aos="fade-up">
					<img src={images[0]} alt="scene" className="mb-[calc(var(--index)*0.8)] gallery-img" />
					<img src={images[1]} alt="scene" className="gallery-img" />
				</div>
			</div>
			<div className="flex flex-col flex-wrap justify-center items-center text-center sm:w-full w-[calc(var(--index)*22)] mt-[calc(var(--index))]">
				<h2 className="font-bio uppercase text-[calc(var(--index)*1.7)]">{text.title}</h2>
				<p className="text-[calc(var(--index)*0.8)]">{text.roles}</p>
				{text.description ? <p className="text-[calc(var(--index)*0.8)]">{text.description}</p> : null}
			</div>
		</div>
	);
};

GalleryCard.propTypes = {
	images: PropTypes.array,
	flexReverse: PropTypes.bool,
	text: PropTypes.object,
};

export default GalleryCard;
