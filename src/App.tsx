import { Header } from './Header'
import { Hero } from './Hero'
import { About } from './About'
import { Products } from './Products'
import { Events } from './Events'
import { Footer } from './Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Events />
      </main>
      <Footer />
    </>
  )
}

export default App
