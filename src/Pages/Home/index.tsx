import { Div } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import Form from '../../components/Form/index';

export default function Home() {
    return (
        <Div>
            <Form>

                <Input
                    height={35}
                    width={300}
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Nome de usuário ou e-mail"
                    max="100"
                    min="4"
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
                    required
                />
                <Button
                    text={'Hello World'}
                    width={150}
                    height={35}
                    color="rgba(50, 50, 50, 0.9)"
                    background={'rgba(200, 200, 200, 0.9)'}
                    hoverBackground={'rgba(100, 230, 230, 0.7)'}
                />
            </Form>
        </Div>
    )
}
