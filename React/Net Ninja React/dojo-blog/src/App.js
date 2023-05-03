import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className='content'>
          <Switch>
            {/* Add "exact" if it is exactly that url, not just inside it (in this case /create is in / because it has a /) */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            {/* 404 page goes at the bottom since, "*" means every other route path not included here */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;









// Some practice code

// import './App.css';

// function App() {
//   const title = 'Welcome To The New Blog';
//   const likes = 50;
//   // const person = {name: 'Yoshi', age: 30};    cannot render objects or booleans using the curly braces {}     *Objects are not valid as a React child*
//   const link = "http://www.google.com";

//   return (
//     <div className="App">
//     <div className="content">
//       <h1>{title}</h1>
//       <p>Liked: {likes} times</p>

//       {/* <p>{person}</p> */}

//       <p>{10}</p>
//       <p>{"Hello, ninjas"}</p>
//       <p>{[1,2,3,4,5]}</p>
//       <p>{Math.floor(Math.random() * 10)}</p>

//       <a href={link}>Google Site</a>
//     </div>
//     </div>
//   );
// }

// export default App;
