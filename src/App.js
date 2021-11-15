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
        <div className={div}>
          <Nav navOpen={navOpen} />
          <Main />
        </div>
      </section>
      <Footer />
    </>
  );
}

const div = `
  lg:flex
  justify-center
`

export default App;
