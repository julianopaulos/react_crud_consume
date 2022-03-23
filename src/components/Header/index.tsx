import { NavLink } from 'react-router-dom';

import { Nav, NavComponent, LinkStyle } from './styles';

const links = [
    {title: 'Home', path: process.env.REACT_APP_BASE_URL + '/'},
    {title: 'Home', path: process.env.REACT_APP_BASE_URL + '/'},
    {title: 'Home', path: process.env.REACT_APP_BASE_URL + '/'}
];

export default function Header() {
  return (
    <Nav>
        {links.map((link, key) => {
            return (
                <NavComponent key={key}>
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
