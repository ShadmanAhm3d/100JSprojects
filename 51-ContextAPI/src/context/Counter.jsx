import React,{createContext , useState} from "react";

export const CounterContext = createContext(null);


export const Context_CounterProvider = (props)=>{


  const [count ,setCount] = useState(0);


  return(
   <CounterContext.Provider value={{count,setCount,fname: "Shadman"}} >
      {props.children}
    </CounterContext.Provider>
  ); 
}

