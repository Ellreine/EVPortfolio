import { capturedTime, sundayMother } from '../assets';
import { films } from '../constants';
import GalleryCard from './GalleryCard';

const Gallery = () => {
	return (
		<section
			className="my-[calc(var(--index)*3)] pb-[calc(var(--index)*3)] flex flex-col justify-center items-center text-white bg-primary"
			id="gallery"
		>
			<div className="w-full text-center flex flex-col justify-center items-center">
				<GalleryCard images={sundayMother} flexReverse={false} text={films.sundayMother} />
				<GalleryCard images={capturedTime} flexReverse={true} text={films.capturedTime} />
			</div>
		</section>
	);
};

export default Gallery;
