import { Container, Banner} from "./styles";
import { Header} from "../../components/header";


export function Home() {
    return(
        <Container>
            <Header />

            <Banner>
                <img src="../../assets/logo.svg" alt="" />

                <div className="description">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Banner>

        </Container>
    )
}