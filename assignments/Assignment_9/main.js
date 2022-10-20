const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['../../img/GuitarMan.jpg', '../../img/MeWithWaterfall.jpg', '../../img/Screenshot2022-10-06142752.png', '../../img/santa.jpg', '../../img/IMG-6316.jpg']

/* Declaring the alternative text for each image file */
const altArray = ['Guitar guy', 'I like water', 'bird', 'I hate christmas', 'Danny Rankin']

/* Looping through images */
for (let i = 0; i < 5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', altArray[i]);
    newImage.setAttribute('class', 'smallImg');
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imgArray[i]);
        displayedImage.setAttribute('alt', altArray[i]);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
    if (currentClass == 'dark')
    {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else
    {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})