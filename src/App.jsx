import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Services from './pages/Services.jsx'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
