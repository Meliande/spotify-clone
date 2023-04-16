import { Home as HomeIcon, Library, Search } from "lucide-react"

const Playlists = ["Rock","Sertanejo","MPB","TopBrasil","TopSertanejo"]
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
                <a key="playlist" href="" className="text-zinc-400 text-sm hover:text-zinc-100">{playlist}</a>
              )
            )}
          </nav>
        </aside>
    )
}