import { Container, Content } from './styles'
import { Header } from '../../components/header/Index'
import { Tags } from '../../components/Tags/Index'
import { Counter } from '../../components/Counter/Index'
import { Button } from '../../components/Button/Index'
import { MdOutlineArrowBackIos } from 'react-icons/md'

export function Details() {
  return(
    <Container>
      <Header />

        <button className='buttonBack'>
          <MdOutlineArrowBackIos />
           Voltar
        </button>

      <Content>

        <img src="https://github.com/drigodeveloper.png" alt="" />

        <div className="dishDescription">
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <div className="tags">
              <Tags title="alface"/>
              <Tags title="Cebola"/>
              <Tags title="pão naan"/>
              <Tags title="pepino"/>
              <Tags title="rabanete"/>
              <Tags title="tomate"/>
            </div>
            
          <div className="includeDish">
            <Counter />
            <Button title="incluir ∙ R$ 25,00"/>
          </div>

        </div>
      </Content>
    </Container>
)
}





        




      