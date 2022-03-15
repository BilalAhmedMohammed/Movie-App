import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import listMovie from "./Components/Pages/listMovie";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Favourit from "./Components/Favourit/Favourit";
import { LanguageContext } from "./Components/context/language";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }} >
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={"/Login"} exact component={Login}></Route>
        <Route path={'/Register'} exact component={Register}></Route>
        <Route path={'/'} exact component={listMovie}></Route>
        <Route path={'/Movies'} exact component={listMovie}></Route>
        <Route path={'/Favourit'} exact component={Favourit}></Route>
        <Route path={"/movie-details/:id"} exact component={MovieDetails} />
      </Switch>
    </BrowserRouter>
    </LanguageContext.Provider>

  );
}

export default App;
