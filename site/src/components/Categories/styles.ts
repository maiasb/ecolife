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
  width: 100%;
`
