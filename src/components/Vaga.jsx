import { useState } from 'react';
import "../styles/vagas.css";
import dados from "../utils/vagas.js";
import { SiMysql, SiPostgresql, SiPytorch, SiHaskell } from "react-icons/si";
import { TbBrandJavascript, TbBrandCSharp } from "react-icons/tb";
import { FaReact, FaPhp, FaLaravel, FaAngular, FaNode, FaJava, FaPython } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

export default function Vagas() {
    // Estado para armazenar o valor da pesquisa
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleVagas, setVisibleVagas] = useState(8); // Número inicial de vagas visíveis

    // Função para filtrar os dados com base no termo de pesquisa
    const filteredVagas = dados.filter((item) => {
        const search = searchTerm.toLowerCase();
        return (
            item.titulo.toLowerCase().includes(search) ||
            item.tecnologia.toLowerCase().includes(search)
        );
    });

    // Função para carregar mais vagas
    const loadMore = () => {
        setVisibleVagas((prevVisibleVagas) => prevVisibleVagas + 8); // Carrega mais 8 vagas
    };

    return (
        <>
            <section className="seccao-vagas">
                <div className="container">
                    <div className="row mx-auto barra-pesquisa py-4 w-50 bg-white">
                        <div className="col-md-9 linhaPesquisa">
                            <div className="input-group">
                                
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Título da vaga ou tecnologia"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span className="input-group-text bg-white">
                                    <IoSearch className='text-black' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        {filteredVagas.slice(0, visibleVagas).map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-12 py-3" key={index}>
                                <div className="bg-white efeitoDiv w-100 p-3 mt-3 h-100">
                                    <div className='icone-tecnologia'>
                                        {item.id === "1" && <i className='bg-danger'><SiHaskell className='tecnologia' /></i>}
                                        {item.id === "2" && <i className='bg-primary'><SiMysql className='tecnologia' /></i>}
                                        {item.id === "3" && <i className='bg-success'><SiPostgresql className='tecnologia' /></i>}
                                        {item.id === "4" && <i className='bg-dark'><SiPytorch className='tecnologia' /></i>}
                                        {item.id === "5" && <i className='bg-primary'><TbBrandJavascript className='tecnologia' /></i>}
                                        {item.id === "6" && <i className='bg-warning'><FaReact className='tecnologia' /></i>}
                                        {item.id === "7" && <i className='bg-primary'><FaPhp className='tecnologia' /></i>}
                                        {item.id === "8" && <i className='bg-success'><FaLaravel className='tecnologia' /></i>}
                                        {item.id === "9" && <i className='bg-info'><FaAngular className='tecnologia' /></i>}
                                        {item.id === "10" && <i className='bg-warning'><FaNode className='tecnologia' /></i>}
                                        {item.id === "11" && <i className='bg-primary'><FaJava className='tecnologia' /></i>}
                                        {item.id === "12" && <i className='bg-dark'><BiLogoSpringBoot className='tecnologia' /></i>}
                                        {item.id === "13" && <i className='bg-info'><TbBrandCSharp className='tecnologia' /></i>}
                                        {item.id === "14" && <i className='bg-warning'><FaPython className='tecnologia' /></i>}
                                        {item.id === "15" && <i className='bg-primary'><TbBrandJavascript className='tecnologia' /></i>}
                                        {item.id === "16" && <i className='bg-warning'><FaReact className='tecnologia' /></i>}
                                        {item.id === "17" && <i className='bg-primary'><FaPhp className='tecnologia' /></i>}
                                        {item.id === "18" && <i className='bg-success'><FaLaravel className='tecnologia' /></i>}
                                        {item.id === "19" && <i className='bg-info'><FaAngular className='tecnologia' /></i>}
                                        {item.id === "110" && <i className='bg-warning'><FaNode className='tecnologia' /></i>}
                                        {item.id === "111" && <i className='bg-primary'><FaJava className='tecnologia' /></i>}
                                        {item.id === "112" && <i className='bg-dark'><BiLogoSpringBoot className='tecnologia' /></i>}
                                        {item.id === "113" && <i className='bg-info'><TbBrandCSharp className='tecnologia' /></i>}
                                        {item.id === "114" && <i className='bg-warning'><FaPython className='tecnologia' /></i>}
                                    </div>
                                    <div className='mt-3 grupoParagrafos'>
                                        <p>{item.datapub}</p>
                                        <p>{item.titulo}</p>
                                        <p>{item.tecnologia}</p>
                                        <p>{item.localizacao}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleVagas < filteredVagas.length && (
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-plus w-50 my-4" onClick={loadMore}>
                                    Ver Mais
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
