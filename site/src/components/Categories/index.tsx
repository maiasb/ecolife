import { List, Paper, Typography } from "@mui/material";
import { CategoriesContent, Container } from "./styles";

export function Categories() {
  return (
    <Container>
      <Typography>Explorar por categoria</Typography>
      <CategoriesContent>
      <Paper style={{maxHeight: 200, overflow: 'auto'}}>
  <List>
    ...
  </List>
</Paper>
      </CategoriesContent>
    </Container>
  )
}
