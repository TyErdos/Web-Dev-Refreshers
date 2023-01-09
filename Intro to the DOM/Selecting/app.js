const allImages = document.getElementsByTagName('img');

for(let img of allImages)
{
    console.log(img.src);
}


//This would replace all images on the web page with that single image source
// for(let img of allImages)
// {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const squareImages = document.getElementsByClassName('square');


//Changes source for all of the square images
// for(let img of squareImages)
// {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const links = document.querySelectorAll('p a');
for(let link of links)
{
    console.log(link.href);
}

