import { Link } from 'react-router-dom';

import { Nav, NavComponent, LinkStyle } from './styles';

const links = [
    {title: 'Login', path: process.env.REACT_APP_BASE_URL + '/'},
    {title: 'Cadastro', path: process.env.REACT_APP_BASE_URL + '/register'}
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
