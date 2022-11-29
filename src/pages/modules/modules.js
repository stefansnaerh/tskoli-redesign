import EachModulepage from "../../components/EachModulepage/eachModulePage"
import MyReturns from "../../components/MyReturnspage/myReturns"


import { useState, createContext } from "react"

export const SwitchToReturns = createContext()

const Modules = () => {

const [displayReturns, setDisplayReturns] = useState(true)


    return (

        <>
        <SwitchToReturns.Provider value={{displayReturns, setDisplayReturns}}>
        {displayReturns ? (<EachModulepage/>) : 
        (
            <MyReturns/>
        )}
        </SwitchToReturns.Provider>
        </>
    )
}


export default Modules