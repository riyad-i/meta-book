import "./App.css";
import { useState } from "react";
import NewPostPage from "./pages/NewPostPage";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service";



function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);
  return (
    <main className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='posts/new' element={<NewPostPage/>}/>
          <Route path='posts' element={<OrderHistoryPage/>}/>
        </Routes>
        </>
      ) : <AuthPage setUser={setUser}/>}
    </main>
  )
}

export default App;
