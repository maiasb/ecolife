import { List, ListItem, Paper, Typography } from "@mui/material";
import { CategoriesContent, Container } from "./styles";
import { CategoriesFetch } from "../../fetches/categories";

export function Categories() {
  const { data } = CategoriesFetch();

  return (
    <Container>
      <Typography>Explorar por categoria</Typography>
      <CategoriesContent>
      <Paper style={{maxHeight: 200, overflow: 'auto'}}>
        <List>
          {
            data && data.map((category) =>
              <ListItem key={category.id}>{category.nome}</ListItem>
            )
          }
        </List>
      </Paper>
      </CategoriesContent>
    </Container>
  )
}
