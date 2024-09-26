import '../css/error.css'
import Header2 from "../components/Header";
import { Link } from 'react-router-dom';
import {Container, Header} from "semantic-ui-react";

export default function ErrorPage() {
    return (
        <div className='error'>
            <Header2 />
            <Container className="error_infos" textAlign={"center"} text>
                <Header as="h1" className='error_infos_title'>404</Header>
                <p className='error_infos_content'>La page que vous recherchez n'existe pas.</p>
                <Link className='error_infos_return' to='/'>Retourner sur la page d'accueil</Link>
            </Container>
        </div>
    )
}
