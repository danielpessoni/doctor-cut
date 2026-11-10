import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"

function App() {

  return (
    <>
      {/* <div>
        <Header />
        <Hero />
        <Services />
        <Sharper />
        <Contact />
        <WhatsAppButton />
        <Footer />
      </div> */}
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
