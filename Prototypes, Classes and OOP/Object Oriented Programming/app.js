// function hex(r, g, b)
// {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// function rgb(r,g,b)
// {
//     return `rgb(${r}, ${g}, ${b})`;
// };


// // hex(255,100,25);
// // rgb(255,100,25);

// function createColor(r,g,b)
// {
//     const color = {};
//     color.r=r;
//     color.g=g;
//     color.b=b;

//     color.rgb = function()
//     {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }

//     color.hex = function()
//     {
//         const {r,g,b} = this;
//         return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
//     }

//     return color;
// }

// const firstColor = createColor(35,255,150);
// firstColor.hex();
// firstColor.rgb();


function Color(r, g, b)
{
    this.r = r;
    this.g = g;
    this.b = b;

    console.log(this)
}

Color.prototype.rgb = function()
{
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function()
{
    const {r,g,b} = this;
    return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}

Color.prototype.rgba = function(a=1.0)
{
    const {r,g,b} = this;

    return `rgba(${r}, ${g}, ${b}, ${a})`;

}


const color1 = new Color(255,50,100);
const color2 = new Color(0,0,0);


// document.body.style.backgroundColor = color1.rgb();
// document.body.style.backgroundColor = color1.rgba(0.1);