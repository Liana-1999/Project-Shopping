const images = [
    {
        id: 'image-1',
        name: 'Image 1',
        src: 'https://fakeimg.pl/300/'
    },
    {
        id: 'image-2',
        name: 'Image 2',
        src: 'https://fakeimg.pl/300/'
    },
    {
        id: 'image-3',
        name: 'Image 3',
        src: 'https://fakeimg.pl/300/'
    }
];

export const getImages = () => {
    return images;
};

export const getImageDetail = (imageId) => {
    const image = images.find(item => item.id === imageId);

    return image;
}