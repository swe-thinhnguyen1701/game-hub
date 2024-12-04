import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      md: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">Nav</GridItem>
      <GridItem area="aside" hideBelow="md">Aside</GridItem>
      <GridItem area="main">Main</GridItem>
    </Grid>
  )
}

export default App
