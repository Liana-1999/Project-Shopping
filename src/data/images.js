const images = [
    {
        id: "mars",
        src: "https://via.placeholder.com/200x300/FF0000/FFFFFF?text=Mars",
    },
    {
        id: "moon",
        src: "https://via.placeholder.com/200x300/00FF00/000000?text=Moon",
    },
    {
        id: "jupiter",
        src: "https://via.placeholder.com/200x300/0000FF/FFFFFF?text=Jupiter",
    }
];

export const getImages = () => {
    return images;
};

export const getImageDetail = (imageId) => {
    const image = images.find(item => item.id === imageId);

    return image;
}