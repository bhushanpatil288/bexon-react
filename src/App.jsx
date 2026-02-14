import Header from "./components/header/Header"
import Hero from "./components/main/section-hero/Hero"

const App = () => {
  return (
    <>
      <div className="bg-custom-main p-3">
        <header className="container-fluid  bg-custom-hero p-3 rounded-3">
          <Header />
        </header>
        <main>
          <Hero />
        </main>
        
      </div>
    </>
  )
}

export default App