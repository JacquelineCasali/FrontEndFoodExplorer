import { Container, Banner} from "./styles";
import { Header} from "../../components/header";
import logo from "../../assets/logo.svg"
import maskgroup from "../../assets/Maskgroup-1.png"

export function Home() {
  
    
        return(
        <Container>
            <Header />

            <Banner>
                {/* <img src="../../assets/logo.svg" alt="" /> */}
                <img src={logo} alt=''/>
                <img src={maskgroup} alt=''/>
                <div className="description">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Banner>

        </Container>
    )
}
