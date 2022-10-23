import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirebaseProvider from "./auth/FirebaseProvider";
import Home from "./components/Home";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
    <FirebaseProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </FirebaseProvider>
    </>
  );
}

export default App;
