import styled, { createGlobalStyle } from 'styled-components';

export const LinksStyle = createGlobalStyle`
    .nav-link{
        transition: .2s;
    }
    .nav-link:hover{
        color: rgba(250, 250, 250, 1);
        border-bottom: 2px solid rgba(255, 255, 255, 1);
        border-radius: 5px;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: end;
    font-size: 18px;
    min-height: 50px;
    top:0;
    position: absolute;
    background-color: rgba(55, 55, 255, .5);
`;

export const NavComponent = styled.li`
    list-style: none;
    margin: 10px;
`

export const LinkStyle = {
    normal:{
        textDecoration: "none",
        color: "rgba(230, 230, 230, 1)",
        fontWeight: "bold"
    },
    active:{
        textDecoration: "none",
        color: "rgba(250, 250, 250, 1)",
        fontWeight: "bold",
        borderBottom: '3px solid rgba(255, 255, 255, .5)'
    }
    
};