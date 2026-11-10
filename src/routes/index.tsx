import { Routes, Route } from 'react-router-dom'
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Services } from "../pages/Services"
import { Sharpener } from "../pages/Sharpener"
import { Contact } from "../pages/Contact"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/sharpener" element={<Sharpener />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}