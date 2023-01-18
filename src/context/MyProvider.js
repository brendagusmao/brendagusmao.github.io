//import { useEffect, useState } from "react";
import context from "./MyContext";

function MyProvider({children}) {


  return (
    <context.Provider>
      {children}
    </context.Provider>
  )
}

export default MyProvider;
