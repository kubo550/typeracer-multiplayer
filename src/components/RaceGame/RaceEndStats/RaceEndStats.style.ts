import styled from "styled-components";
import { COLORS } from "../../../layout";


export const Header = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 150px;
    width: 70%;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const Details = styled.div`
  flex: 3;
`;

export const Author = styled.div`
  border-bottom: 2px solid ${COLORS.orange};
  padding-bottom: 8px;
  margin-bottom: 15px;

  a {
    text-decoration: none;
  }

  h6 {
      margin-left: 20px;
  }
  
`;

export const StatsTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 350px;

  img {
      margin-right: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;