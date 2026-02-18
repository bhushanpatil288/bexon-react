import { Header, Hero, Solutions, Marquee, About, Process, Projects } from "./components"

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
        
      </div>
  )
}

export default App