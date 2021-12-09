import React from "react";
import NavBar from "./components/NavBar/NavBar";
import UserCard from "./components/UserDirectory/UserCard";
import {ViewProvider} from "./context/Contexts"
function App() {

  return (
    <>
    <ViewProvider>
      <NavBar />
      <UserCard />
    </ViewProvider>
    </>
  );
}

export default App;
