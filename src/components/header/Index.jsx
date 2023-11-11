import { Container, Logo } from "./styles";
import { Button } from '../Button'
import { Input } from '../Input'
import { FiMenu } from 'react-icons/fi'
import { BsFillHexagonFill, BsSearch } from 'react-icons/bs'
import { PiReceipt, PiSignOutFill } from 'react-icons/pi'

export function Header() {
    return(
        <Container>
            <Logo>
                <BsFillHexagonFill />
                <h1>Food explorer</h1>
            </Logo>

            <button className="signOut">
                <PiReceipt />
                <area shape="" coords="" href="" alt="" />
            </button>

            <Input 
            placeholder="Busque por pratos ou ingredientes"
            />


            <Button 
            title="Pedidos"
            icon={PiReceipt}
            />

            <button className="buttonLogout">
                <PiSignOutFill />
            </button>
        </Container>
    )
}