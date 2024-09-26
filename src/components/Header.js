import '../css/header.css'
import {Container} from "semantic-ui-react";

const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlInput = '<header>\n' +
    '    <div class="hautP">\n' +
    '        <ul>\n' +
    '            <li class="logoepsi"> <img src="LogoEpsi.jpeg" alt=""></li>\n' +
    '            <li><a href="/">ACCUEIL</a></li>\n' +
    '            <li><a href="/plan">PLAN INTERACTIF</a></li>\n' +
    '            <li><a href="/apropos">A PROPOS</a></li>\n' +
    '            <li class="logomapsi"><img src="LogoMapsi.png" alt=""></li>    \n' +
    '        </ul>            \n' +
    '    </div>\n' +
    '</header>';

const htmlToReactParser = new HtmlToReactParser();
const reactElement = htmlToReactParser.parse(htmlInput);
ReactDOMServer.renderToStaticMarkup(reactElement);

export default function SiteHeader() {
    return (
        <Container as='header' textAlign='center' className="header-container">
            {reactElement}
        </Container>
    )
}

