import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiUser, FiLogIn } from 'react-icons/fi';

import { Div, H3, Span, Section } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import Form from '../../components/Form/index';

const iconStyles = {
    width: '1.2em',
    height: '1.2em',
    paddingLeft: '10px',
    position: 'absolute',
    opacity: '0.6',
} as React.CSSProperties;

export default function Home() {
    const [userName, setUserName] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    async function handleLogin(event: FormEvent){
        event.preventDefault();
        if(!userName || !password) {
            alert('Por favor, preencha todos os campos');
            return false;
        }
        
        await console.log('teste');
    }


    return (
        <Div>
            <Form onSubmit={handleLogin}>
                <H3>
                    Bem vindo de volta
                </H3>
                <Section>
                    <FiUser style={iconStyles} />
                    <Input
                        height={35}
                        width={300}
                        paddingLeft={35}
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Nome de usuário ou e-mail"
                        max="100"
                        min="4"
                        onChange={input => setUserName(input.target.value)}
                        required
                    />
                </Section>
                <Section>
                    <FiLock style={iconStyles} />
                    <Input
                        height={35}
                        width={300}
                        paddingLeft={35}
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Senha"
                        max="100"
                        min="4"
                        onChange={input => setPassword(input.target.value)}
                        required
                    />
                </Section>
                <Section>
                    <FiLogIn style={{...iconStyles, color: '#fff', opacity: '1'}}/>
                    <Button
                        type="submit"
                        text={'Login'}
                        width={150}
                        height={35}
                        color="#fff"
                        background={'rgba(120, 120, 250, 0.9)'}
                        hoverBackground={'rgba(100, 100, 230, 0.5)'}
                    />
                </Section>
                
                <Span>
                    Esqueceu sua senha? <Link to={process.env.REACT_APP_BASE_URL + '/'}>Crie sua conta</Link>
                </Span>
            </Form>
        </Div>
    )
}
