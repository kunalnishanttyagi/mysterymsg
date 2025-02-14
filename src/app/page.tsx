import Navbar from "./components/Navbar"
import Backgroundhome from "./components/Backgroundhome"
import AnimatedTestimonialsDemo from "./components/Testimonial"
import Howtouse from "./components/Howtouse"
import HeroScrollDemo from "./components/scrollingimage"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div className=" " >
      <Navbar></Navbar>
      <Backgroundhome></Backgroundhome>
      <HeroScrollDemo></HeroScrollDemo>
      <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
      <Howtouse ></Howtouse>
      <Footer></Footer>
    </div>
  );
}
