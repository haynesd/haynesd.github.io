document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://xkcd.com/info.0.json'));
        const data = await response.json();
        const comicData = JSON.parse(data.contents);

        // Set the title
        document.getElementById('title').textContent = comicData.title;

        // Set the comic image
        const comicImg = document.getElementById('comic-img');
        comicImg.src = comicData.img;
        comicImg.alt = comicData.title;

        // Set the alt text
        document.getElementById('alt-text').textContent = comicData.alt;
    } catch (error) {
        console.error('Error fetching comic:', error);
    }
});