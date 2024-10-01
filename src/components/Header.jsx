/**import { WiSolarEclipse } from "react-icons/wi";
import { FaMoon } from "react-icons/fa6";
import { MdToggleOff } from "react-icons/md"; */
import "../styles/header.css";

//import { MdOutlineToggleOn } from "react-icons/md";

export default function Header() {

    return (
        <>
            <header className="bg-azul" >
                <section className="div-header">
                    <div className="container ">
                        <div className="   py-5 d-flex justify-content-between">
                            <h2>JobsDevs</h2>

                            <div className="clima mt-2">
                                <button className="btnConecta btn">Conecta-se</button>
                                {/**<WiSolarEclipse className="text-white icones-clima" />
                                <MdToggleOff className="text-white icones-clima" />
                                <FaMoon className="text-white icones-clima" /> */}
                            </div>
                        </div>
                    </div>
                </section>

            </header>
        </>
    )
}