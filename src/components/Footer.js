import '../css/footer.css'
import {Segment} from 'semantic-ui-react'

const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlInput = '<footer>\n' +
    '        <div>\n' +
    '            <ul class="foot">\n' +
    '                <p>&copy; 𝟚𝟘𝟚𝟜/𝟚𝟘𝟚𝟝  ＭＡＰＳＩ. 𝚃𝚘𝚞𝚜 𝚍𝚛𝚘𝚒𝚝𝚜 𝚛é𝚜𝚎𝚛𝚟é𝚜.</p>\n' +
    '                <li>Politique de confidentialité</li>\n' +
    '                <li>Conditions d\'utilisation</li>\n' +
    '            </ul>\n' +
    '            <ul class="contact">\n' +
    '                <h3>CONTACTS</h3>\n' +
    '                <li><p>INSTA: @epsi_ecoles</p></li>\n' +
    '                <li><p>X: @EPSI_Ecoles</p></li>\n' +
    '                <li><p>TEL: 0 805 38 30 30</p></li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </footer>';

const htmlToReactParser = new HtmlToReactParser();
const reactElement = htmlToReactParser.parse(htmlInput);
ReactDOMServer.renderToStaticMarkup(reactElement);




export default function Footer() {
    return (
        <Segment>
            {reactElement}
        </Segment>

    )
}
