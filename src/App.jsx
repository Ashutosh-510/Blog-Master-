import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
//import authServices from './appwrite/auth'
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  // for only React Application we use process.env to access EV's
  // console.log(process.env.REACT_APP_APPWRITE_URL)

  // for Vite we use
  //console.log(import.meta.env.VITE_APP_APPWRITE_URL)

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
