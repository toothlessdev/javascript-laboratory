import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="fixed h-screen flex">
            <li className=" w-[60px] h-full border-[2px] border-black list-none">
                <Link to="a">A</Link>
            </li>
            <li className=" w-[60px] h-full border-[2px] border-black list-none">
                <Link to="b">A</Link>
            </li>
            <li className=" w-[60px] h-full border-[2px] border-black list-none">
                <Link to="c">A</Link>
            </li>
            <li className=" w-[60px] h-full border-[2px] border-black list-none">
                <Link to="d">A</Link>
            </li>
        </nav>
    );
};
