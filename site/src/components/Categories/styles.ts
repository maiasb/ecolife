import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  padding: 150px 150px;
  gap: 50px;

  @media (max-width: 1023px) {
    padding: 40px 15px;
  }
`
export const CategoriesContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CardsCategories = styled.div`
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  overflow: auto;

  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 15px;
  }
`
export const RowCardCategory = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
  }
`
export const CardCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 150px;
  margin: 15px;
  background-color: red;
  border-radius: 8px;

  @media (max-width: 1023px) {
    width: 100%;
    margin: 15px;
  }
`
