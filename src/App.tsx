import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  genre: string | null;
  platform: {
    name: string | null;
    id: string | null;
  };
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({genre: null, platform: {name: null, id: null}});

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
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform ? gameQuery.platform : {name: null, id: null}}
          onSelectPlatform={(platform: { name: string | null; id: string | null }) => setGameQuery({...gameQuery, platform})} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
