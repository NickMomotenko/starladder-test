import React from "react";

import Header from "./UI/Header";
import Container from "./UI/Container";

import Event from "./components/Event";
import EventStages from "./components/EventStages";
import EventBar from "./components/EventBar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Event />
      <Container main>
        <EventBar />
        <EventStages />
      </Container>
    </div>
  );
};

export default App;
