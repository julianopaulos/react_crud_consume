import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Div, H3, Span } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import Form from '../../components/Form/index';

export default function Home() {
    const [userName, setUserName] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    return (
        <Div>
            <Form onSubmit={(e) => {e.preventDefault(); console.log('teste')}}>
                <H3>
                    Bem vindo de volta
                </H3>
                <Input
                    height={35}
                    width={300}
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Nome de usuário ou e-mail"
                    max="100"
                    min="4"
                    onChange={input => setUserName(input.target.value)}
                    required
                />
                <Input
                    height={35}
                    width={300}
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Senha"
                    max="100"
                    min="4"
                    onChange={input => setPassword(input.target.value)}
                    required
                />
                <Button
                    type="submit"
                    text={'Login'}
                    width={150}
                    height={35}
                    color="#fff"
                    background={'rgba(120, 120, 250, 0.9)'}
                    hoverBackground={'rgba(100, 100, 230, 0.5)'}
                />
                <Span>
                    Esqueceu sua senha? <Link to={process.env.REACT_APP_BASE_URL + '/'}>Crie sua conta</Link>
                </Span>
            </Form>
        </Div>
    )
}
