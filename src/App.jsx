import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './Room'
import ZegoCloud from './ZegoCloud'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ZegoCloud />} />
                <Route path='/room/:id' element={<Room />} />
            </Routes>
        </Router>
    )
}

export default App