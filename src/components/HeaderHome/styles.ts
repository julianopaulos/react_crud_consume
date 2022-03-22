import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    display:flex;
    justify-content: end;
    font-size: 20px;
    top:0;
    position: absolute;
    background-color: rgba(55, 55, 55, .6);
`;

export const NavComponent = styled.li`
    list-style: none;
    margin: 10px;
`

export const LinkStyle = {
    textDecoration: "none",
    color: "rgba(230, 230, 230, 1)"
};