import { CardHeader, Skeleton, Typography } from '@mui/material'
import { Card, CardContent, Content, Item, ListHeader } from './styles'
import { CategoriesFetch } from '../../../fetches/categories'

export function Categories() {
  const { data } = CategoriesFetch()

  return (
    <Content>
      <CardHeader
        sx={{ paddingLeft: '0px' }}
        title="Categorias"
        subheader="Listagem de categorias cadastradas."
      />

      <CardContent>
        <ListHeader>
          <Item>
            <Typography sx={{ width: '100px' }} color="gray">
              ID
            </Typography>
            <Typography sx={{ width: '100%' }} color="gray">
              Nome
            </Typography>
            <Typography sx={{ width: '100%' }} color="gray">
              Data de Criação
            </Typography>
          </Item>
        </ListHeader>
        {data ? (
          (data.length && (
            <Card>
              {data.map((category) => (
                <Item key={category.id}>
                  <Typography sx={{ width: '100px' }}>{category.id}</Typography>
                  <Typography sx={{ width: '100%' }}>
                    {category.nome}
                  </Typography>
                  <Typography sx={{ width: '100%' }}>
                    {category.created_at}
                  </Typography>
                </Item>
              ))}
            </Card>
          )) || (
            <Typography sx={{ height: '50px', marginLeft: '15px' }}>
              Nenhuma categoria cadastrada
            </Typography>
          )
        ) : (
          <Skeleton />
        )}
      </CardContent>
    </Content>
  )
}
