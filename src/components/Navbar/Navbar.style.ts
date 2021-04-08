import styled from "styled-components";
import { COLORS } from "../../layout";

export const Nav = styled.nav`
    padding: 5px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${COLORS.navBg};
    color: ${COLORS.primaryText};
    margin-bottom: 15px; 
    
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;

        @media (max-width: 640px) { 
            display: none;
        }

        li {
            margin: 0 10px;

            a {
                transition: 0.3s;
                font-size: 1.1rem;
                text-decoration: none;

                &:hover {
                    color: ${COLORS.hoveredLink};
                }
            }
        }
    }

`

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 640px) {
        display: block;
    }
`

export const SocialLinks = styled.div`
    display: block;

    @media screen and (max-width: 768px) {
        display: none;
    }
`