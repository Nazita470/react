
export const  Square = ({children, index, isSelected, clickfunction}) => {
    let claseNombre = `square ${isSelected ? `isSelected` : ``}`
    const handleclick = () => { 
      clickfunction(index) 
    }
    return (
        <div className ={claseNombre} onClick={handleclick}>
          {children}
        </div>
    )
  }