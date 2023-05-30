import {
  FormControl,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import {
  CardCategory,
  CardsCategories,
  CategoriesContent,
  Container,
  RowCardCategory,
  Search,
} from './styles'
import { CategoriesFetch } from '../../fetches/categories'
import SearchIcon from '@mui/icons-material/Search'
import { Category } from '../../models/category'

export function Categories() {
  const { data } = CategoriesFetch()

  const chunk = (arr: any[], size: number) =>
    arr.reduce((chunks: any[], el: any, i: number) => {
      const chunkIndex = Math.floor(i / size)

      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = []
      }

      chunks[chunkIndex].push(el)
      return chunks
    }, [])

  const columnLimit = 2
  const dataChunks = data ? chunk(data, columnLimit) : []

  return (
    <Container>
      <Typography>Explorar por categoria</Typography>
      <CategoriesContent>
        <Search>
          <FormControl variant="standard">
            <TextField
              variant="outlined"
              placeholder="Pesquisar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Paper style={{ maxHeight: '400px', overflow: 'auto' }}>
            <List>
              {data &&
                data.map((category) => (
                  <ListItem key={category.id}>
                    <ListItemButton>{category.nome}</ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Paper>
        </Search>
        <CardsCategories>
          <Paper style={{ maxHeight: '400px', overflow: 'auto' }}>
            {dataChunks.map((group: Category[], columnIndex: number) => (
              <RowCardCategory key={columnIndex}>
                {group.map((category: Category) => (
                  <CardCategory key={category.id}>{category.nome}</CardCategory>
                ))}
              </RowCardCategory>
            ))}
          </Paper>
        </CardsCategories>
      </CategoriesContent>
    </Container>
  )
}
