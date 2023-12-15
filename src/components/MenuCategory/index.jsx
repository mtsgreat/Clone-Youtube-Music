export default function MenuCategory(){
    return (
        <div className="bg-black pt-16 pb-6 flex items-center gap-[10px] justify-center lg:justify-normal">
        <button className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-lg">Relax</button>
        <button className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-lg">Treino</button>
        <button className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-lg">Em Trânsito</button>
        <button className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-lg">Energia</button>
        <button className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-lg">Foco</button>
      </div>
    )
}