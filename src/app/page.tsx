import Image from "next/image"
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import About from "./component/about"
import Trigger from "./component/trigger"
import Contact from "./component/contact"
import Menu from "./component/menu"
import Shop from "./component/shop"

function Home() {
  return (
    <div className="">
     
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Shop />
      <Contact />
    </div>
  )
}

export default Home