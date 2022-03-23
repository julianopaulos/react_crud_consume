import { NavLink } from 'react-router-dom';

import { Nav, NavComponent, LinkStyle, LinksStyle } from './styles';

const links = [
    {title: 'Login', path: '/'},
    {title: 'Cadastro', path: '/register'}
];

export default function Header() {
  return (
    <Nav>
        {links.map((link, key) => {
            return (
                <NavComponent key={key}>
                    <LinksStyle/>
                    <NavLink 
                        className="nav-link"
                        to={link.path} 
                        style={({isActive}) => (isActive?LinkStyle.active:LinkStyle.normal)}
                    >
                        {link.title}
                    </NavLink>
                </NavComponent>
            )
        })}
    </Nav>
  )
}
