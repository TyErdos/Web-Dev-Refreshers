document.querySelector('button').addEventListener('click', function(event)
{
    console.log(event);
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e)
// {
//     console.log(e.key);
//     console.log(e.code);
// })

// input.addEventListener('keyup', function()
// {
//     console.log("Key up");
// })


window.addEventListener('keydown', function(e)
{
    // console.log(e.code);

    switch(e.code)
    {
        case 'ArrowUp':
            console.log("UP");
            break;
        case 'ArrowDown':
            console.log("DOWN");
            break;
        case 'ArrowRight':
            console.log("RIGHT");
            break;
        case 'ArrowLeft':
            console.log("LEFT");
            break;
        default:
            console.log("IGNORED");
    }
})



