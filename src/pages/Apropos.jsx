import '../css/home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from "react";

const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlInput = ' <h1 class="qui">Qui somme nous ?</h1>\n' +
    '    <div class="somme">\n' +
    '    <img src="questions.png" alt="batiment école epsi" srcset="" class="imgbatepsi">\n' +
    '    <p class="paragraphe">Bienvenue dans votre école de cybersécurité à Paris,\n' +
    '         le choix idéal si vous aspirez à exceller dans le domaine\n' +
    '         de la cybersécurité au cœur de la capitale française ! \n' +
    '         Paris, reconnue pour son effervescence technologique et \n' +
    '         son innovation constante, offre un cadre exceptionnel pour\n' +
    '        vous plonger dans les complexités de la sécurité informatique. \n' +
    '        Nous vous préparons à affronter les défis de la cybersécurité avec une formation rigoureuse,\n' +
    '        intégrant théorie et pratique. Profitez pour cela d’un réseau étendu de partenaires technologiques et de start-ups,\n' +
    '         enrichissant votre parcours avec des expériences réelles et des opportunités de carrière dans une ville qui est à la pointe de la technologie mondiale.</p>\n' +
    '    </div> \n' +
    '\n' +
    '    <h1 class="qui">Objectifs de la platforme MAPSI</h1>\n' +
    '    <div class="map">\n' +
    '        <div class="contmapun"><img class="localisation" src="localisation.png" alt=""><div class="mapun">Localisation des étages et salles de classe</div></div>\n' +
    '        <div class="contmapdeux"><img class="acces" src="accès.png" alt=""><div class="mapdeux">Accès aux services et installation</div></div>\n' +
    '        <div class="contmaptrois"><img class="guide" src="Guide.png" alt=""><div class="maptrois">Guidage des nouveaux étudiants et visiteurs</div></div>\n' +
    '    </div>\n' +
    '    <h1 class="qui">Activités et Evènements</h1>\n' +
    '    <div class="container">\n' +
    '        <div class="contun">\n' +
    '        <div class="containerun"><img class="defense" src="defense.png" alt=""><div class="texteun">Un quartier dynamique</div></div>\n' +
    '        <div class="containerdeux"><img class="salle" src="salleconf.png" alt=""><div class="textedeux">Conférences organisées et invitations d\'alummnis</div></div>\n' +
    '        </div>\n' +
    '        <div class="contdeux">\n' +
    '        <div class="containertrois"><img class="work" src="imgwork.png" alt=""><div class="textetrois">Semaine d\'intégration avec le workshop</div></div>\n' +
    '        <div class="containerquatre"><img class="asso" src="imgasso.png" alt=""><div class="textequatre">Vie associative au sein de l\'école</div></div>\n' +
    '        </div>\n' +
    '    </div>';
const htmlToReactParser = new HtmlToReactParser();
const reactElement = htmlToReactParser.parse(htmlInput);
ReactDOMServer.renderToStaticMarkup(reactElement);

export default function Apropos() {
    return (
        <div className='home'>
            <Header />
            {reactElement}
            <Footer />
        </div>
    )
}
