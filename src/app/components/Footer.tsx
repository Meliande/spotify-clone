'use client';
import { 
  ListMusic,
  Maximize,
  Mic2,
  MonitorSpeaker,
  Pause,
  Play,
  Repeat,
  SkipBack,
  SkipForward,
  Volume,
  Shuffle 
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";


export function Footer() {

const [isPlaying, toggleisPlaying ] = useState<boolean>(true)

return(
    <footer className="w-full bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between sticky bottom-0">
      <div className="flex items-center gap-3">
        <Image src="/DSM.png" width={56} height={56} alt=""></Image>
        <div className="flex flex-col">
          <strong className="font-normal">Money</strong>
          <span className="text-sx text-zinc-400">Pink Floyd</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            <button onClick={() => toggleisPlaying(!isPlaying)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
              {
                isPlaying ? <Play className="pl-1"/> : <Pause/>
              }
            </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-500 w-24 h-1 rounded-full"/>
            </div>
            <span className="text-sm text-zinc-500">4:44</span>
          </div>
      </div>
      <div className="flex items-center gap-4">
          <Mic2 size={20}/>
          <ListMusic size={20}/>
          <MonitorSpeaker size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-500 w-10 h-1 rounded-full"/>
            </div>
          </div>
          <Maximize size={20}/>
      </div>
  </footer>
)}