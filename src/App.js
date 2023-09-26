import "./App.css";
import { useState } from "react";
import NewPostPage from "./pages/NewPostPage";
import AuthPage from "./pages/AuthPage";
import AllPostsPage from "./pages/AllPostsPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service";
import { getPosts } from "./utilities/posts-service";
import ViewPostPage from './pages/ViewPostPage'
import Weather from "./pages/Weather";
import Edit from './pages/Edit';


function App() {
  const [user, setUser] = useState(getUser());
  // const [posts, setPosts] = useState(getPosts())
  // console.log(user);
  return (
    <main className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='posts/new' element={<NewPostPage/>}/>
          {/* <Route path='posts' element={<AllPostsPage posts={posts} />}/> */}

          {/* view route */}
          <Route path='posts/:id' element={<ViewPostPage />}/>
          <Route path='posts' element={<AllPostsPage />}/>
          <Route path='weather' element={<Weather />}/>
          <Route path=':id' element={< Edit/>}/>
        </Routes>
        </>
      ) : <AuthPage setUser={setUser}/>}
    </main>
  )
}

export default App;
