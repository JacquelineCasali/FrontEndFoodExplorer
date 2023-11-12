import { Container, Logo, Form } from "./styles";
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { BsFillHexagonFill } from 'react-icons/bs'


export function Signup() {
    return(
        <Container>
            <Logo>
                <BsFillHexagonFill />
                <h1>Food explorer</h1>
            </Logo>

            <Form>
                <h1>Crie sua conta</h1>

                <label htmlFor="">Seu nome</label>
                <Input 
                placeholder="Exemplo: Maria da Silva"
                />

                <label htmlFor="">Email</label>
                <Input 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <label htmlFor="">Senha</label>
                <Input 
                placeholder="No mínimo 6 caracteres"
                />

                <Button title="Criar conta"/>

                <ButtonText title="Já tenho uma conta"/>
                

            </Form>
               
                    
                
            
            
            
        </Container>
    )
}