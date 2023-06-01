import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  padding: 150px 150px;
  gap: 50px;

  @media (max-width: 1023px) {
    margin-top: 100px;
    padding: 0px;
  }
`

export const PopularProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  padding: 150px 150px;
  gap: 50px;

  @media (max-width: 1023px) {
    margin-top: 100px;
    padding: 0px;
  }
`
