import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from  './components/WelcomePage'

export default function App() {
  return (
    <main>
      <div>
      <Link to="/">My home page</Link>
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path="/" component={CharacterList} />
    </main>
  );
}
