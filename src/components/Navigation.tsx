import {Link} from "react-router-dom";

export function Navigation () {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">GitHub search</h3>
            <span>
                <Link to="/" className="mr-2">Home</Link>
                <Link to="/favorite">Fav pages</Link>
            </span>
        </nav>
    )
}