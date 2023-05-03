import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //grab data, but in this context call it blogs
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    


    return (  
        <div className="home">
            {/* adding "blogs &&" fixes the error of blogs trying to output a null value*/}
            {/* because blogs is insitally null, so it ignores the right hand side */}
            {/* basically, the right hand side is only ouput if the left side is true */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
           
        </div>
    );
}
 
export default Home;











// const [name, setName] = useState('mario');

    // const handleDelete = (id) =>
    // {
    //     const newBlogs = blogs.filter(blog => blog.id != id);
    //     setBlogs(newBlogs);
    // }



// was in the "home"  className
{/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/> */}



// How to use hooks
// import { useState } from "react";


// const Home = () => {

//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () =>
//     {
//         setName('luigi');
//         setAge(30);
//     }

//     return (  
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }


// how to react to click events in components
// const Home = () => {

//     const handleClick = (e) =>
//     {
//         console.log("Hello, ninjas", e)
//     }

//     const handleClickAgain = (name, e) =>
//     {
//         console.log(`Hello, ${name}`, e.target)
//     }


//     return (  
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>

//             {/* how to pass in arguments without invoking the function */}
//             <button onClick={(e) =>  handleClickAgain('mario', e)}>Click me again</button>

//         </div>
//     );
// }
 




