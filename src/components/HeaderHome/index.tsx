import { Link } from 'react-router-dom';

import { Nav, NavComponent, LinkStyle } from './styles';

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
                    <Link to={link.path} style={LinkStyle} >{link.title}</Link>
                </NavComponent>
            )
        })}
    </Nav>
  )
}
