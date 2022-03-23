import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiUser, FiLogIn, FiGithub, FiMail } from 'react-icons/fi';

import { Div, H3, Span, Section } from './styles';

import HeaderHome from '../../components/HeaderHome/index';
import Footer from '../../components/Footer/index';
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

export default function Register() {
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
            <HeaderHome/>
            <Form onSubmit={handleLogin}>
                <H3>
                    Seja bem vindo! <FiGithub style={{...iconStyles, color: '#fff', opacity: '1', position: 'relative'}} />
                </H3>
                <Section>
                    <FiUser style={iconStyles} />
                    <Input
                        height={40}
                        width={270}
                        paddingLeft={35}
                        name="username"
                        type="text"
                        id="username"
                        placeholder="Nome de usuário"
                        max="100"
                        min="4"
                        required
                    />
                </Section>
                <Section>
                    <FiMail style={iconStyles} />
                    <Input
                        height={40}
                        width={270}
                        paddingLeft={35}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        max="100"
                        min="4"
                        required
                    />
                </Section>
                <Section>
                    <FiLock style={iconStyles} />
                    <Input
                        height={40}
                        width={270}
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
                        text={'Registar'}
                        width={150}
                        height={35}
                        color="#fff"
                        background={'rgba(120, 120, 250, 0.9)'}
                        hoverBackground={'rgba(100, 100, 230, 0.5)'}
                    />
                </Section>
                
                <Span>
                    Já tem uma conta? Faça seu <Link to={'/'}>Login</Link>
                </Span>
            </Form>
            <Footer/>
        </Div>
    )
}
