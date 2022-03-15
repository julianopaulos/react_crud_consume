import styled from 'styled-components';

export const Nav = styled.nav`
    display:flex;
    justify-content: end;
    font-size: 20px;
`;

export const NavComponent = styled.li`
    list-style: none;
    margin: 10px;
    &:first-of-type{
        margin-right: auto;
    }
`

export const LinkStyle = {
    textDecoration: "none",
    color: "black"
};