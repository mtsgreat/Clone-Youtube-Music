import { 
    ChevronUp, 
    MoreVertical, 
    Pause, 
    Repeat, 
    Shuffle, 
    StepBackIcon, 
    StepForwardIcon, 
    ThumbsDownIcon, 
    ThumbsUpIcon, 
    Volume2 
} from "lucide-react"

import imagePlay from "../../images/capa.jpg"


export default function BarMusic(){
    return (
        <div className="bg-slate-950 fixed bottom-0 w-full ">
        <div className="bg-red-700 w-16 lg:w-96 h-1"></div>
        <div className=" h-16 flex justify-center lg:justify-between p-8 items-center">
          <div>
            <div className="flex items-center gap-6">
            <div className="flex gap-10 items-center">
              <StepBackIcon className="cursor-pointer"/>
              <Pause size={35} className="cursor-pointer"/>
              <StepForwardIcon className="cursor-pointer"/>
            </div>
            <span className="text-sm font-light">1:58 / 4:00</span>
            </div>
          </div>
          <div>
            <div className="hidden lg:flex gap-7 items-center ">
              <img src={imagePlay} alt="Switcfoot" width="45px"/>
              <div>
                <h3 className="font-bold">Dare You To Move</h3>
                <p className="cursor-pointer">Switchfoot ° | Fading West ° 2016</p>
              </div>
              <ThumbsDownIcon className="cursor-pointer"/>
              <ThumbsUpIcon className="cursor-pointer"/>
              <MoreVertical className="cursor-pointer"/>
            </div>
          </div>
          <div className="hidden lg:flex gap-6">
            <Volume2 className="cursor-pointer"/>
            <Repeat className="cursor-pointer"/>
            <Shuffle className="cursor-pointer"/>
            <ChevronUp className="cursor-pointer"/>
          </div>
        </div>

      </div>
    )
}