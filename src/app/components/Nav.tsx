import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Nav = () => {
    return (
        <nav className="text-white bg-black w-full h-screen flex flex-col justify-center items-center uppercase text-3xl font-bold tracking-widest">
            <ul className="flex flex-col gap-3 items-center">
                <li className="cursor-pointer">Buy</li>
                <li className="cursor-pointer">Sell</li>
                <li className="cursor-pointer">Lease</li>
                <li className="cursor-pointer">Team</li>
                <li className="cursor-pointer">Our story</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Insights</li>
            </ul>
            <div className="flex gap-5 mt-5 flex-row justify-between items-center">
                <CiInstagram
                    className="cursor-pointer hover:text-black hover:bg-white rounded-full p-2"
                    size={50}
                />
                <CiFacebook
                    className="cursor-pointer hover:text-black hover:bg-white rounded-full p-2"
                    size={50}
                />
                <CiYoutube
                    className="cursor-pointer hover:text-black hover:bg-white rounded-full p-2"
                    size={50}
                />
            </div>
        </nav>
    );
};

export default Nav;
