import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "../styles/header.css";

//import { MdOutlineToggleOn } from "react-icons/md";

export default function Footer() {

    return (
        <>
            <header className="bg-azul bg-radius" >
                <section className="div-header">
                    <div className="container ">
                        <div className="   py-5 d-flex justify-content-between">
                            <h2>JobsDevs</h2>

                            <div className="clima mt-2">
                                <FaFacebook className="ultimosIntes" />
                                <BsTwitterX  className="ultimosIntes" />
                                <FaYoutube  className="ultimosIntes" />
                                <FaInstagram className="ultimosIntes" />
                            </div>
                        </div>
                    </div>
                </section>

            </header>
        </>
    )
}