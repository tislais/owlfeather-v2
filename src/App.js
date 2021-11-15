import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const handleMenuClick = () => {
    setNavOpen(prev => !prev)
  }
  return (
    <>
      <section>
        <Header handleMenuClick={handleMenuClick} />
        <Nav navOpen={navOpen} />
        <Main />
      </section>
      <Footer />
    </>
  );
}


export default App;
