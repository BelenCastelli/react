import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer(){
    return (
        <div className="fixed bottom-0 w-full p-5 bg-green-300 h-24 flex items-center justify-center gap-x-28 flex-wrap text-zinc-800">
                <a href="https://www.facebook.com/?locale=es_ES" target="_blank" className="hover:text-lime-600 hover:underline text-3xl">
                    <FaFacebookSquare />
                </a>
                <a href="https://x.com/?lang=es" target="_blank" className="hover:text-lime-600 hover:underline text-3xl">
                <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="hover:text-lime-600 hover:underline text-3xl">
                    <FaInstagramSquare />
                </a>
        </div>
    )

}

export default Footer