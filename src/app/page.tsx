import { ChevronLeft, ChevronRight, ChevronDown, Play } from "lucide-react"
import Image from "next/image"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"
import justOneNight from "/public/justOneNight.jpg"
import aceOfSpades from "public/aceOfSpades.jpg"
import animals from "/public/animals.jpg"
import album2 from "/public/album2.jpg"
import load from "/public/load.jpg"
import DSM from "/public/DSM.png"

const Albums = [
  {
    "Name" : "Just one Night",
    "Date" : "03/01/1973",
    "Artist" : "Eric Clapton",
    "Cover" : justOneNight
  },
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : DSM
  },
  {
    "Name" : "Ace of Spades",
    "Date" : "03/01/1973",
    "Artist" : "Motorhead",
    "Cover" : aceOfSpades
  },
  {
    "Name" : "Wasting Light",
    "Date" : "03/01/1973",
    "Artist" : "Foo Fighters",
    "Cover" : album2
  },
  {
    "Name" : "Animals",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : animals
  },
  {
    "Name" : "Load",
    "Date" : "03/01/1973",
    "Artist" : "Metallica",
    "Cover" : load
  }]
const Mix = [
  {
    "id":1,
    "Name" : "Mix 1",
    "Description" : "Teste",
    "Cover" : ""
  },
  {
    "id":2,
    "Name" : "Mix 2",
    "Description" : "Teste",
    "Cover" : ""
  },
  {
    "id":3,
    "Name" : "Mix 3",
    "Description" : "Teste",
    "Cover" : ""
  },
  {
    "id":4,
    "Name" : "Mix 4",
    "Description" : "Teste",
    "Cover" : ""
  },
  {
    "id":5,
    "Name" : "Mix 5",
    "Description" : "Teste",
    "Cover" : "",
  },
  {
    "id":6,
    "Name" : "Mix 6",
    "Description" : "Teste",
    "Cover" : "",
  },
  {
    "id":7,
    "Name" : "Mix 7",
    "Description" : "Teste",
    "Cover" : "",
  },
  {
    "id":8,
    "Name" : "Mix 8",
    "Description" : "Teste",
    "Cover" : "",
  },
  {
    "id":9,
    "Name" : "Mix 9",
    "Description" : "Teste",
    "Cover" : "",
  },
  {
    "id":10,
    "Name" : "Mix 10",
    "Description" : "Teste",
    "Cover" : "",
  },
]

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-1">
            <ChevronRight/>
            </button>
            <div className="bg-zinc-400/20 rounded-full overflow-hidden flex items-center gap-2 font-bold p-0.5 ml-auto">
                <Image className="rounded-full" src="/eu.jpg" width={30} height={30} alt=""></Image>
                Rodrigo C. Meliande
                <a href=""><ChevronDown/></a>
            </div>
          </div>

          <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-1 gap-4 mt-4 overflow-scroll md:grid-cols-3 xl:grid-cols-4">
              {
                Albums.map((album) => (
                  <a key="name" href="" className="bg-white/5 group rounded flex align-middle items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src={album.Cover} alt="" width={104} height={104}></Image>
                    <strong>{album.Name}</strong>
                    <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-400 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                ))
              }
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Rodrigo C. Meliande</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
              {
                Mix.map((mix) => (
                  <a key="id" href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image className="w-full" src="/DSM.png" width={120} height={120} alt=""></Image>
                    <strong className="font-semibold ">{mix.Name}</strong>
                    <span className="text-sm text-zinc-500">{mix.Description}</span>
                  </a>
                ))
              }
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  )
}
