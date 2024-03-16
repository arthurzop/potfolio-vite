import * as I from "iconoir-react"
// import {hero} from './assets/Home_art 1.svg'

export default function App() {
  return (
    <body className="flex-col font-mono overflow-x-hidden">
      <header className="flex w-full justify-evenly items-center mt-4">
        <div className="flex gap-4 text-4xl items-center">
          <I.Code className="mt-1" />
          <h1 className="font-mono font-bold ">artur medeiros</h1>
        </div>
        <nav className="flex gap-10">
          <h4 className="text-2xl cursor-pointer hover:border-b border-blue-950">home</h4>
          <h4 className="text-2xl cursor-pointer hover:border-b border-blue-950">about me</h4>
          <h4 className="text-2xl cursor-pointer hover:border-b border-blue-950">portfolio</h4>
          <h4 className="text-2xl cursor-pointer hover:border-b border-blue-950">contact</h4>
        </nav>
      </header>
      <section className="flex items-center justify-evenly mt-32">
        <div className="grid gap-y-32">
          <div className="text-7xl">
            <h1 className="font-semibold">front-end developer</h1>
            <h2 className="font-semibold">/ web designer</h2>
          </div>
          <div className="">
            <button className="bg-blue-950 border-none outline-none py-2 px-8 rounded-lg hover:bg-blue-900"><h1 className=" text-white text-xl">saiba mais</h1></button>
          </div>
          <div className="flex gap-5 ">
            <a href="https://github.com/arthurzop" target="_blank"><I.Github className="text-lg cursor-pointer" /></a>
            <a href="https://github.com/arthurzop" target="_blank"><I.Linkedin className="text-lg cursor-pointer" /></a>
            <a href="https://instagram.com/arthurzop" target="_blank"><I.Instagram className="text-lg cursor-pointer" /></a>
          </div>
        </div>
        <img src="../public/hero.png" alt="" />
      </section>
      <section className="mt-36 grid gap-24 w-full items-center justify-center text-center content-center">
        <div className="grid items-center gap-10">
          <img src="../public/eu.png" className="size-60 place-self-center" />
          <h1 className="font-bold text-4xl">artur medeiros</h1>
          <h2 className="text-lg">
            i'm 20 years old, from são paulo, brazil. <br />
            currently in the third semmester of system analysis at senai suiço brasileira <br />
            focused in front-end, web development and ui/ux design.
          </h2>
        </div>
        <div className="grid w-full gap-10">
          <h1 className="font-bold text-4xl">hard skills</h1>
          <div className="flex gap-10 justify-center">
            <div className="">
              <h2 className="">Html</h2>

            </div>
            <div className="">
              <h2 className="">Css</h2>

            </div>
            <div className="">
              <h2 className="">React</h2>

            </div>
            <div className="">
              <h2 className="">Github</h2>

            </div>
          </div>
          <div className="flex gap-10 justify-center">
            <div className="">
              <h2 className="">JavaScript</h2>

            </div>
            <div className="">
              <h2 className="">React Native</h2>

            </div>
            <div className="">
              <h2 className="">Figma</h2>

            </div>
          </div>
        </div>
      </section>
    </body>
  )
}