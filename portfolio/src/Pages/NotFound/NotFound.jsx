import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./NotFound.css";

export default function NotFound() {
    return (
        <main className="notfound-page">
            <p className="content-page__eyebrow">Error 404</p>
            <h1>Looks like this page is off the map.</h1>
            <p>The page may have moved, or the address may be incorrect.</p>
            <Link className="content-page__link" to="/">
                <FiArrowLeft /> Back to home
            </Link>
        </main>
    );
}