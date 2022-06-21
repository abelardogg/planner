import { BrowserRouter as Router, Link } from "react-router-dom";

export function Nav(){
    return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link className="ml-2" to="/about">About</Link>
    </div>
    );
}