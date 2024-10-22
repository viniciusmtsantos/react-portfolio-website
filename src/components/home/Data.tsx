import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";

export function Data() {
    return (
        <div className="max-[768px]:col-span-3">
            <h1 className="text-[2.75rem] mb-1 max-[992px]:text-[2.55rem] max-[950px]:text-[2.05rem] max-[400px]:text-[2.25rem] max-[360px]:text-[2.05rem] flex items-center">
                Vinicius Santos
                <img className="size-9 ml-2 max-[992px]:size-7 max-[350px]:size-6" src={hand} alt="hand" />
            </h1>

            <h3 className="home__subtitle relative pl-[5.4rem] font-normal mb-4 before:absolute before:w-[70px] before:h-[1px] before:bg-zinc-800 before:left-0 before:top-4 max-[992px]:pl-14 max-[992px]:before:w-10 max-[992px]:before:top-[0.8rem]">Software Engineer</h3>
            <p className="max-w-[400px] mb-12 max-[992px]:max-w-[initial] max-[992px]:mb-10">
                Atuando há mais de dois anos com Golang, Java e Node em sistemas robustos de Managed File Transfer e Highway Transport System
            </p>
            <a href="contact" className="bg-zinc-800 text-zinc-100 p-[1.25rem_2rem] rounded-md font-medium gap-2 hover:bg-zinc-900 max-[992px]:p-[1rem_1.75rem] inline-flex items-center">
                Meu contato
                <img src={send} alt="send" />
            </a>
        </div>
    )
}