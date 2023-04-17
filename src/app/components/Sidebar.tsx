import { Home as HomeIcon, Library, Plus, Search } from "lucide-react"

const Playlists = ["Rock","Sertanejo","MPB","TopBrasil","TopSertanejo"]

const Menu = ["Home", "Search", "Your Library"]
export function Sidebar() {
    return(
        <aside className="w-64 bg-zinc-950 p-6">
          <nav className="space-y-5 text-sm font-semibold text-zinc-200">
            {
              Menu.map((menu) => (
                <a href="" className="flex items-center gap-3 hover:text-white">
                  {menu}
                </a>
              ))
            }
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