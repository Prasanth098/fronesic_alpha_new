
import React, { createContext, useState } from "react";


export const AppContext = createContext();

const { Provider } = AppContext;


export const AppProvider = (props) => { 
    
    const [openTour,setOpenTour] = useState(false)

    return (
      <Provider
        value={{
            openTour,
            setOpenTour,
        }}
      >
        {props.children}
      </Provider>
    );
  };