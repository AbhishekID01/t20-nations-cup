

const MainGrid = ({children}) => {
  return (
    <div className="h-[300px] 2xl:h-[450px] w-full cursor-pointer grid grid-cols-4 grid-rows-3 gap-2">
        {children}
    </div>
  )
}

export default MainGrid