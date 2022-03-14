import { Link } from 'react-router-dom';

const links = [
    {main: true, title: 'Home', path: process.env.BASE_URL + '/'},
    {main: false, title: 'Home', path: process.env.BASE_URL + '/'}
];

export default function Header() {
  return (
    <nav>
        {links.map((link, key) => {
            return (
                <li>
                    <Link key={key} to={link.path}>{link.title}</Link>
                </li>
            )
        })}
    </nav>
  )
}
