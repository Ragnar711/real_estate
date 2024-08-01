import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
    return (
        <main className="flex flex-col justify-around items-start h-[90%] w-[90%] p-5">
            <h1 className="text-3xl tracking-widest">GET IN TOUCH</h1>
            <form className="flex flex-col gap-[50px] items-start w-full">
                <div className="relative w-full">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-green-900 transition-colors focus:outline-none peer bg-inherit"
                    />
                    <label
                        htmlFor="username"
                        className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-900"
                    >
                        FULL NAME
                    </label>
                </div>
                <div className="relative w-full">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-green-900 transition-colors focus:outline-none peer bg-inherit"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-900"
                    >
                        EMAIL
                    </label>
                </div>
                <div className="relative w-full">
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-green-900 transition-colors focus:outline-none peer bg-inherit"
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-900"
                    >
                        PHONE
                    </label>
                </div>
                <div className="relative w-full">
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-green-900 transition-colors focus:outline-none peer bg-inherit"
                    />
                    <label
                        htmlFor="message"
                        className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-green-900"
                    >
                        MESSAGE
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full text-green-900 border-2 border-green-900 py-5 hover:bg-green-900 hover:text-white transition-colors"
                >
                    SUBMIT
                </button>
            </form>
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
            <div>
                <div className="flex gap-5 mt-5 flex-row items-center">
                    <FaPhoneAlt color="green" />
                    (123) 456-7890
                </div>
                <div className="flex gap-5 mt-5 flex-row items-center">
                    <IoIosMail color="green" />
                    9Lxkz@example.com
                </div>
            </div>
        </main>
    );
};

export default Contact;
