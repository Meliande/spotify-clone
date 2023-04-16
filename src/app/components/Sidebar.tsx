import { Home as HomeIcon, Library, Search } from "lucide-react"

const Playlists = ["Rock","Sertanejo","MPB","TopBrasil","TopSertanejo"]
const Albums = [
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : "/public/DSM.png"
  },
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : "/public/DSM.png"
  },
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : "/public/DSM.png"
  },
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : "/public/DSM.png"
  },
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : "/public/DSM.png"
  },
  {
    "Name" : "Dark Side of The Moon",
    "Date" : "03/01/1973",
    "Artist" : "Pink Floyd",
    "Cover" : "/public/DSM.png"
  }
]
const Mix = [
  {
    "Name" : "Mix 1",
    "Description" : "Teste"
  },
  {
    "Name" : "Mix 2",
    "Description" : "Teste"
  },
  {
    "Name" : "Mix 3",
    "Description" : "Teste"
  },
  {
    "Name" : "Mix 4",
    "Description" : "Teste"
  },
  {
    "Name" : "Mix 5",
    "Description" : "Teste"
  },
]
export function Sidebar() {
    return(
        <aside className="w-64 bg-zinc-950 p-6">
          <nav className="space-y-5 text-sm font-semibold text-zinc-200">
            <a href="" className="flex items-center gap-3">
              <HomeIcon/> Home
            </a>
            <a href="" className="flex items-center gap-3 ">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-3">
              <Library/>
              Your Library
            </a>
          </nav>
          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            {
              Playlists.map((playlist)  => (
                <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">{playlist}</a>
              )
            )}
          </nav>
        </aside>
    )
}