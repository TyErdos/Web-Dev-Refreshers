const createRandColor = () => 
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}

const buttons = document.querySelectorAll('button');

for(let button of buttons)
{
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

for(let newh1 of h1s)
{
    newh1.addEventListener('click', colorize)
}


function colorize()
{
        console.log(this);
        this.style.backgroundColor = createRandColor();
        this.style.color = createRandColor();
}