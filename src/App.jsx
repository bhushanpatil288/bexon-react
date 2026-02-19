import { Header, Hero, Solutions, Marquee, About, Process, Projects, Footer } from "./components"

const App = () => {
  return (
      <div className="bg-custom-main p-3">

        <header className="container-fluid  bg-custom-hero p-3 rounded-3">
          <Header />
        </header>

        <main>
          <Hero />
          <Solutions />
          <Marquee />
          <About />
          <Process />
          <Projects />
        </main>

        <footer>
          <Footer />
        </footer>
        
      </div>
  )
}

export default App