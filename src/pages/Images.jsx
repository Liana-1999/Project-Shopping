import { useParams, useNavigate } from "react-router-dom";
import { getImages } from '../data/images';

export const Images = () => {
    const navigate = useNavigate();

    const images = getImages();

    const handleImageView = (image) => {
        navigate(`/shorts/${image.id}`);
    };

    return (
        <section>
            <h1>This is Images Page</h1>

            <div className="images">
                {images.map((image) => (
                    <img
                    onClick={
                        () => handleImageView(image)
                    }
                    src={image.src}
                    alt="Test"
                />
                ))}
            </div>
        </section>
    );
};