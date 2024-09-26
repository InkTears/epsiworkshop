import '../css/home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from "react";


const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlInput = '<div id="corps">\n' +
    '\n' +
    '    <div className="line1">\n' +
    '        <form action="/recherche" method="get">\n' +
    '            <input type="text" name="query" placeholder="Recherche..."/>\n' +
    '            <button type="submit">Rechercher</button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div className="line2">\n' +
    '        <ul>\n' +
    '            <li className="campus">\n' +
    '                <img src="campus_epsiParis.jpeg" alt=""/>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <p className="textanime">Bienvenue dans votre école de cybersécurité à Paris, le choix idéal si vous\n' +
    '                    aspirez à exceller dans le domaine de la cybersécurité au cœur de la capitale française ! Paris,\n' +
    '                    reconnue pour son effervescence technologique et son innovation constante, offre un cadre\n' +
    '                    exceptionnel pour vous plonger dans les complexités de la sécurité informatique. Nous vous préparons\n' +
    '                    à affronter les défis de la cybersécurité avec une formation rigoureuse, intégrant théorie et\n' +
    '                    pratique. Profitez pour cela d’un réseau étendu de partenaires technologiques et de start-ups,\n' +
    '                    enrichissant votre parcours avec des expériences réelles et des opportunités de carrière dans une\n' +
    '                    ville qui est à la pointe de la technologie mondiale.</p>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '\n' +
    '</div>';

const htmlToReactParser = new HtmlToReactParser();
const reactElement = htmlToReactParser.parse(htmlInput);
ReactDOMServer.renderToStaticMarkup(reactElement);

export default function Home() {
    return (
        <div className='home'>
            <Header/>
            {reactElement}
            <Footer/>
        </div>
    )
}

