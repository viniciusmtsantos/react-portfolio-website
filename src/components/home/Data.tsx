import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";

export function Data() {
    return (
        <div className="home__data">
            <h1 className="home__title"> Vinicius Santos
                <img className="home__hand" src={hand} alt="hand" />
            </h1>

            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">Atuando há dois anos com TypeScript, ReactJS, VueJS no frontend,
                NodeJS e Golang no backend </p>
            <a href="contact" className="button button--flex">
                Meu contato
                <img src={send} alt="send" />
            </a>
        </div>
    )
}