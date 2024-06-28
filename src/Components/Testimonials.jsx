import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < -0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <div className='testimonials'>

            <img src="/React-vite-college-web/public/next-icon.png" alt="" className='next-btn' onClick={slideForward} />
            <img src="/React-vite-college-web/public/back-icon.png" alt="" className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="/React-vite-college-web/public/user-1.png" alt="" />
                                <div>
                                    <h3>Julia Santos</h3>
                                    <span>Curitiba,PR</span>
                                </div>
                            </div>

                            <p>Na Universidade Edusity, encontrei minha segunda família. Agradeço por todas as oportunidades e conexões que construí aqu</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="/React-vite-college-web/public/user-2.png" alt="" />
                                <div>
                                    <h3>William Passos</h3>
                                    <span>Apucarana,PR</span>
                                </div>
                            </div>

                            <p>Na Universidade Edusity, descobri um ambiente vibrante e acolhedor, repleto de oportunidades de aprendizado e crescimento pessoal. Os professores são apaixonados e dedicados, e os recursos disponíveis são de primeira qualidade. Estou grato por fazer parte desta comunidade inspiradora</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="/React-vite-college-web/public/user-3.png" alt="" />
                                <div>
                                    <h3>Amanda Cristina</h3>
                                    <span>Londrina,PR</span>
                                </div>
                            </div>

                            <p>Minha jornada na Universidade Edusity tem sido uma verdadeira transformação. A qualidade do ensino, a diversidade cultural e as oportunidades de envolvimento comunitário tornaram minha experiência única e enriquecedora. Estou orgulhoso de fazer parte desta instituição que valoriza tanto o desenvolvimento acadêmico quanto o pessoal</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src="/React-vite-college-web/public/user-4.png" alt="" />
                                <div>
                                    <h3>João Gonçalves</h3>
                                    <span>Pinhais,PR </span>
                                </div>
                            </div>

                            <p>"Estudar na Universidade Edusity foi uma experiência incrível! Encontrei professores dedicados, colegas inspiradores e uma atmosfera de aprendizado envolvente. Esta universidade não apenas me preparou para minha carreira, mas também me ajudou a crescer como pessoa. Sou grato por fazer parte desta comunidade acadêmica excepcional</p>
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Testimonials
