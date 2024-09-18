import { backend } from 'declarations/backend';

async function loadImage() {
    try {
        const imageUrl = await backend.getImageUrl();
        const imgElement = document.getElementById('steel-girder');
        imgElement.src = imageUrl;
    } catch (error) {
        console.error('Error loading image:', error);
    }
}

window.addEventListener('load', loadImage);
