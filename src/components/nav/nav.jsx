import { BrowserRouter as Router, Link } from "react-router-dom";

export function Nav(){
    return (
    <div className="nav">
        <Link className="nav-element" to="/">Home</Link>
        <Link className="nav-element ml-2" to="/about">About</Link>
    </div>
    );
}