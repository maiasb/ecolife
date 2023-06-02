import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  gap: 50px;

  @media (max-width: 1023px) {
    margin-top: 100px;
    padding: 0px;
  }
`

export const PopularProductsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 700px;
  padding: 150px 150px;

  @media (max-width: 1023px) {
    margin-top: 100px;
    padding: 0px;
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 500px;
  width: 300px;
  background-color: #fff4e7;
  color: #fff;
`
