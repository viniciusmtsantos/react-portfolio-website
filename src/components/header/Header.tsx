import { useState } from "react";

export function Header() {
  const [Toggle, showMenu] = useState(false)
  return (
    // <header className="w-full fixed top-0 left-0 z-50 bg-zinc-50 max-[768px]:bottom-0 max-[768px]:top-[initial]">
    <header className="w-full fixed top-0 left-0 z-50 border-b border-t bg-zinc-50 max-[768px]:bottom-0 max-[768px]:top-[initial]">
      <nav className="h-[4.5rem] max-[768px]:h-12 flex justify-between items-center gap-x-4 max-w-[968px] mx-auto max-[992px]:mx-6 max-[350px]:mx-4">
        <a href="index.html" className="text-zinc-800 font-medium">
          Vinicius Santos
        </a>

        <div className={
          Toggle ?
            "max-[768px]:fixed max-[768px]:bottom-0 max-[768px]:left-0 max-[768px]:w-full bg-zinc-50 max-[768px]:px-6 max-[768px]:pb-16 max-[768px]:pt-8 max-[768px]:shadow-[0px_-1px_4px_rgba(0,0,0,0.15)] max-[768px]:rounded-t-3xl max-[768px]:duration-500 max-[350px]:p-[2rem_0.25rem_4rem]" :
            "max-[768px]:fixed max-[768px]:-bottom-full max-[768px]:left-0 max-[768px]:w-full bg-zinc-50 max-[768px]:px-6 max-[768px]:pb-16 max-[768px]:pt-8 max-[768px]:shadow-[0px_-1px_4px_rgba(0,0,0,0.15)] max-[768px]:rounded-t-3xl max-[768px]:duration-500 max-[350px]:p-[2rem_0.25rem_4rem]"}>
          <ul className="flex gap-x-8 max-[768px]:grid max-[768px]:grid-cols-3 max-[768px]:gap-8 max-[350px]:gap-x-0">
            <li className="nav__item">
              <a href="#home" className="flex flex-col items-center text-[0.875rem] max-[992px]:text-[0.813rem] text-zinc-700 hover:text-zinc-900 font-medium duration-300">
                <i className="uil uil-estate hidden max-[768px]:text-[1.2rem] max-[768px]:block"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="flex flex-col items-center text-[0.875rem] max-[992px]:text-[0.813rem] text-zinc-700 hover:text-zinc-900 font-medium duration-300">
                <i className="uil uil-user hidden max-[768px]:text-[1.2rem] max-[768px]:block"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="flex flex-col items-center text-[0.875rem] max-[992px]:text-[0.813rem] text-zinc-700 hover:text-zinc-900 font-medium duration-300">
                <i className="uil uil-file-alt hidden max-[768px]:text-[1.2rem] max-[768px]:block"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="flex flex-col items-center text-[0.875rem] max-[992px]:text-[0.813rem] text-zinc-700 hover:text-zinc-900 font-medium duration-300">
                <i className="uil uil-briefcase-alt hidden max-[768px]:text-[1.2rem] max-[768px]:block"></i> Serviços
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="flex flex-col items-center text-[0.875rem] max-[992px]:text-[0.813rem] text-zinc-700 hover:text-zinc-900 font-medium duration-300">
                <i className="uil uil-scenery hidden max-[768px]:text-[1.2rem] max-[768px]:block"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="flex flex-col items-center text-[0.875rem] max-[992px]:text-[0.813rem] text-zinc-700 hover:text-zinc-900 font-medium duration-300">
                <i className="uil uil-message hidden max-[768px]:text-[1.2rem] max-[768px]:block"></i> Contato
              </a>
            </li>
          </ul>
          <i className="uil uil-times hidden absolute right-6 bottom-4 text-2xl cursor-pointer text-zinc-800 hover:text-zinc-900 max-[768px]:block" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="text-zinc-800 font-medium hidden text-lg max-[768px]:block" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>

      </nav>
    </header>
  )
}
