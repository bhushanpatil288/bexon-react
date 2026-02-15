import Header from "./components/header/Header"
import Hero from "./components/main/section-hero/Hero"
import Solutions from "./components/main/section-solution/Solutions"
import Marquee from "./components/main/section-marquee/Marquee"
import About from "./components/main/section-about/About"

const App = () => {
  return (
    <>
      <div className="bg-custom-main p-3">

        <header className="container-fluid  bg-custom-hero p-3 rounded-3">
          <Header />
        </header>

        <main>
          <Hero />
          <Solutions />
          <Marquee />
          <About />
        </main>
        
      </div>
    </>
  )
}

export default App