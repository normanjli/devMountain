import React, { useState } from "react";
import data from "../userData";
// Iuser, UserContext,
import { Iuser, ViewCon } from "../type.d";
import { Props } from "../main.d";
export const viewContext = React.createContext<ViewCon | null>(null);

export const ViewProvider = ({ children }: Props) => {
  const usersData:Iuser[] = data
  const [view, setView] = useState<ViewCon["view"]>(1);
  const changeView: ViewCon["changeView"] = (type) => {
    switch (type) {
      case "home":
        setView(1);
        break;
      case "next":
        if (view === data.length) {
          break;
        } else {
          setView(view + 1);
          console.log(view)
          break;
        }
      case "prev":
        if (view > 1) {
          setView(view - 1);
          console.log(view)
          break;
        } else {
          break;
        }
    }
  };

  return (
    <viewContext.Provider value={{ view,usersData, changeView }}>
      {children}
    </viewContext.Provider>
  );
};
