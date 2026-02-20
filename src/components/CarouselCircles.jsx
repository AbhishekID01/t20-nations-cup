

const CarouselCircles = ({type="black"}) => {
  return (
    <div className={`absolute h-5 w-30 centered-row justify-between ${type === "white" ? "bg-zinc-100" : "bg-zinc-800"} right-0 bottom-0 p-2 px-4 cursor-pointer rounded-tl-2xl`}>
        <div className="w-3 h-3 bg-amber-300 rounded-full hover:w-4 hover:h-4 transition-all duration-100 ease-in"></div>

        <div className="w-3 h-3 bg-zinc-400 rounded-full hover:w-4 hover:h-4 transition-all duration-100 ease-in"></div>

        <div className="w-3 h-3 bg-zinc-400 rounded-full hover:w-4 hover:h-4 transition-all duration-100 ease-in"></div>

        <div className="w-3 h-3 bg-zinc-400 rounded-full hover:w-4 hover:h-4 transition-all duration-100 ease-in"></div>
    </div>
  )
}

export default CarouselCircles