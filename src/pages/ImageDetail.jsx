import { useParams } from "react-router-dom";
import { getImageDetail } from "../data/images";

export const ImageDetail = () => {
    const { imageId } = useParams();
    const image = getImageDetail(imageId);
    
    return (
        <div>
            <h3>Image Detail</h3>

            <p>{image.name}</p>

            <img src={image.src} alt="Alt" />
        </div>
    );
};