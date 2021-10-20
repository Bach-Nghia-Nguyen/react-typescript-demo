import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
// import { Validation } from "./components/Validation";

function App() {
  const personName = {
    first: "Bruce",
    last: "Lee",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* Basic Props */}
      <Greet name="Nghia" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      {/* Advanced Props */}
      <Status status="loading" />
      <Heading>Ranged weapons</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Greet name="Eden" isLoggedIn={false} />

      {/* Event Props */}
      <Button
        handleClick={(event, id) => {
          console.log("Button is clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />

      {/* Style Props */}
      <Container styles={{ border: "1px solid tomato", padding: "1rem" }} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
