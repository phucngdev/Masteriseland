import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "./pages/user/Home";
import Explore from "./pages/user/Explore";
import Posts from "./pages/user/Posts";
import Likes from "./pages/user/Likes";
import Contact from "./pages/user/Contact";
import Mail from "./pages/user/Mail";
import Notification from "./pages/user/Notification";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // const loadUsers = () => {
  //   baseUrl
  //     .get("users.json")
  //     .then((response) => setUsers(response.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  return (
    <>
      <Routes>
        <Route to="/" element={<PublicRouter />}>
          <Route index element={<Home />}></Route>
          <Route path="explore" element={<Explore />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="likes" element={<Likes />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="mail" element={<Mail />}></Route>
          <Route path="notification" element={<Notification />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
