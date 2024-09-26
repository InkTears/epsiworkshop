import '../css/evenements.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from "react";
import {Link} from "react-router-dom";

export default function Evenements() {
    return (
        <div className='evenements'>
            <Header />
            <Link to='/'>Plan de l'école</Link>
            <Footer />
        </div>
    )
}
