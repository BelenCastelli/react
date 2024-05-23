import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer(){
    return (
        <footer className="w-full p-5 bg-green-300 flex items-center justify-center gap-x-8 flex-wrap text-zinc-800">
                <a href="https://www.facebook.com/?locale=es_ES" target="_blank" className="hover:text-lime-600 hover:underline">
                    <FaFacebookSquare size={20} />
                </a>
                <a href="https://x.com/?lang=es" target="_blank" className="hover:text-lime-600 hover:underline">
                <FaSquareXTwitter size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="hover:text-lime-600 hover:underline">
                    <FaInstagramSquare size={20} />
                </a>
        </footer>
    )

}

export default Footer