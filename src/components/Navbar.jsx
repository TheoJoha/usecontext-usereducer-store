import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-eveenly mt-2 pt-4 text-lg
        font-medium">
            <Link to="/">Home</Link>
            <Link to="/basket">Basket</Link>
        </div>
    )
}

export default Navbar