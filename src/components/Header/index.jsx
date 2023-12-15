import logoIcon from "../../assets/logo-player.png"
import {Settings, UserCircle2} from "lucide-react"

export default function Header(){
    return (
        <div className="max-w-full sm:max-w-full flex items-center justify-between px-3.5 py-3.5 bg-black ">
        <div className="flex items-center gap-[5px]">
          <img className="w-[45px] sm:w-[25px]" src={logoIcon} alt="Logo" />
          <span className="text-white text-[25px] sm:text-[16px]">Music</span>
        </div>

        <div className="block sm:hidden mr-[10px]">
          <label className="btn btn-circle swap swap-rotate">
            
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
            
            {/* hamburger icon */}
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            
            {/* close icon */}
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            
          </label>
        </div>

        <nav className="hidden sm:flex">
          <ul className="flex gap-[60px] text-lg">
            <li className="text-white"><a href="#">Inicio</a></li>
            <li className="text-white"><a href="#">Explorar</a></li>
            <li className="text-white"><a href="#">Biblioteca</a></li>
            <li className="text-white"><a href="#">Pesquisar</a></li>  
          </ul>
        </nav>
        <div className=" gap-2.5 hidden sm:flex">
          <Settings className="cursor-pointer" color="white"/>
          <UserCircle2 className="cursor-pointer"  color="white"/>
        </div>
     </div>
    )
}