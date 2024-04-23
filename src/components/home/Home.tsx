import { Data } from "./Data";
import { Social } from "./Social";
import { ScrollDown } from "./ScrollDown";
import "./home.css"

export function Home() {
    return (
        // <section className="home section" id="home">
        <section className="p-[6rem_0px_2rem] max-[768px]:p-[2rem_0px_4rem]" id="home">
            {/* <div className="home__container container grid"> */}
            <div className="gap-y-28 max-w-[968px] mx-auto max-[992px]:mx-6 max-[350px]:mx-4 grid gap-6">
                {/* <div className="home__content grid"> */}
                <div className="
                grid-cols-[116px_repeat(2,1fr)] pt-[5.5rem] gap-x-8 items-center grid gap-6 
                max-[992px]:grid-cols-[100px_repeat(2,1fr)] max-[992px]:gap-5 
                max-[768px]:grid-cols-[0.5fr_3fr] max-[768px]:pt-14
                ">
                    <Social />

                    <div className="home__img"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}