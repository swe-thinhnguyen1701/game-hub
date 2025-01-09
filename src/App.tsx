import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: {
    id: string | null;
    name: string | null;
  },
  platform: {
    name: string | null;
    id: string | null;
  };
  sortOrder: {
    value: string;
    label: string;
  };
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: {name: null, id: null},
    platform: { name: null, id: null },
    sortOrder: { value: "", label: "Relevance" },
    search: ""
  });

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
        <NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <GridItem area="aside" hideBelow="md" paddingX={5}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre: {name: string | null; id: string | null}) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area="main">
        <HStack spacing={5} marginLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform ? gameQuery.platform : { name: null, id: null }}
            onSelectPlatform={(platform: { name: string | null; id: string | null }) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
