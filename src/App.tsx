import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`
    }}
    templateColumns={{ 
      base: "1fr",
      md: "200px 1fr"
     }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="md" paddingX={5}>
        <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
