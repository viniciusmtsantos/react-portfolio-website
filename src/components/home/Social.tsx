export function Social() {
    return (
        <div className="grid grid-cols-[max-content] gap-y-4">
            <a href="https://github.com/viniciusmtsantos" className="text-xl text-zinc-800 hover:text-zinc-900" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://linkedin.com/in/viniciusmtsantos" className="text-xl text-zinc-800 hover:text-zinc-900" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.youtube.com/@ViniciusMSantos/videos" className="text-xl text-zinc-800 hover:text-zinc-900" target="_blank">
                <i className="uil uil-focus-target"></i>
            </a>
        </div>
    )
}