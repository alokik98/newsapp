import React from 'react'
import Nav from './Nav'
import "./HomeScreen.css"
import News from './News'
import { Routes, Route } from 'react-router-dom'

const HomeScreen = () => {

    return (
        <div className='homeScreen'>
            <Nav />
            <Routes>
                <Route exact path="/" element={<News category="general" />} />
                <Route exact path="/business" element={<News category="business" />} />
                <Route exact path="/entertainment" element={<News category="entertainment" />} />
                <Route exact path="/health" element={<News category="health" />} />
                <Route exact path="/science" element={<News category="science" />} />
                <Route exact path="/sports" element={<News category="sports" />} />
                <Route exact path="/technology" element={<News category="technology" />} />
            </Routes>

        </div>
    )
}

export default HomeScreen 