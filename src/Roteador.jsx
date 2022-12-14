import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';


export function Roteador() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home /> }>Home</Route>
                <Route path="/about" element={<About /> }>About</Route>
            </Routes>
        </Router>
    )
}