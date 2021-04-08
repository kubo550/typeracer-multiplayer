import styled from "styled-components"

export const Road = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  transform: translateY(-25px);
  display: flex;
  justify-content: flex-end; 

   background: 
    linear-gradient(
      to right,
      rgba(56,57,68,1) 92%, rgba(144,22,22,1) 93%
    )
    left
    bottom
    transparent
    no-repeat;
  background-size:100% 5px ;
  
  div {
    transform: translateY(-15px);
    display: flex;
    flex-direction:column;
    align-items: center;
  }

`;

interface CarImageProps {
  label: string
}

export const CarImage = styled.img<CarImageProps>`

  &::after {
    content: ${({ label }) => label};
    position: absolute;
    width: 70px;
    background-color: #d83532;
    height: 100%;
    left: 20px;
    right: 0;
  }
`;