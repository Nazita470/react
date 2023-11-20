export const NAVIGATON_EVENT = "pushstate"

export function navigate (href) {
    window.history.pushState({}, "", href)
    const navigationEvent = new Event(NAVIGATON_EVENT)
    window.dispatchEvent(navigationEvent)
  }

 export function Link({target, to, ...props}) {
    const handleClick = (event) => {
      
       let isMainClicked = event.button == 0
       let isModified = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
       let isManageableEvent = target == undefined || target == "_self"

        if(isMainClicked && !isModified && isManageableEvent) {
            event.preventDefault()

            navigate(to)
        }
        
    }

    return (
        <a onClick={handleClick} href={to} target={target} {...props}></a>
    )
} 