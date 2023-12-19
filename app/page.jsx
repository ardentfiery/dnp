import Choosecourse from "@/components/homepage/Choosecourse"
import Herosection from "../components/homepage/Herosection"
import Navbar from "../components/homepage/Navbar"
import Quiz from "../components/homepage/Quiz"
import Footer from "../components/homepage/Footer"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Quiz/>
    <Choosecourse/>
    <Footer/>

    </>
  )
}
