/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Play } from "lucide-react"
export default function CarroselList({title, dados, rounded = false}){
    return (
        <>
        <div className="h-[350px] lg:h-[430px] ml-3 lg:ml-0" >
        <h1 className="text-[45px] text-white font-bold mb-[10px]">{title}</h1>
            <div className="h-[300px] flex  gap-[20px]">
          {dados.map(({id, banda, albun, capa}) => (
             <div className="w-[250px] cursor-pointer" key={id}>
             <div className="lg:h-[230px] mb-[10px] relative group">
               <img className={`w-[100%] h-[50%] lg:h-[100%] hover:opacity-50 ${rounded ? 'rounded-full' : 'rounded-none' } `} src={capa} alt="Capa Albun" />
               <span className="invisible absolute top-[50%] left-[45%] text-white group-hover:visible"><Play/></span>
             </div>
               <p className={`text-white font-bold ${rounded && 'text-center' }`}>{banda}</p>
               <p className={`text-zinc-300" ${rounded && 'text-center' }`}>Álbum - {albun}</p>
             </div>
            ))}
            </div>
         </div>
         </>
    )
}