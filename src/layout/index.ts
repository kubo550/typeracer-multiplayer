import styled from "styled-components"

interface BorderedProps {
  color?: string;
  size?: number;
  bold?: boolean;
  justify?: boolean;
}

export const COLORS = {
  primaryText: "#DBDFCD",
  correct: "#3FB950",
  error: "#D83532",
  info: "#347FE6",
  purple: "#6E40C9",
  orange: "#E4823C",
  white: "#FFFFFF",
  inherit: "inherit",
  navBg: "#161B22",
  hoveredLink: "#8B949E"
}

export const Bordered = styled.div<BorderedProps>`
  width: 100%;
  margin: 15px 0;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 15px;
  border: 2px solid ${({ color }) => color || COLORS.purple};
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  font-size: ${({ size }) => (size ? size + "rem" : "1.1rem")};
  background-color: #161b22;
  text-align: ${({ justify }) => (justify ? "justify" : "left")};
  color: ${COLORS.primaryText};
`;