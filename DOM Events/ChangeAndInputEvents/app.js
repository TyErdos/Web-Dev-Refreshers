const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e)
// {
//     console.log("change detected")
// });

input.addEventListener('input', function(e)
{
    h1.innerText = input.value;
    console.log("change detected")
    console.log(e);
});

