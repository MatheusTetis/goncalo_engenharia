import BarraDeNavegacao from './componentes/BarraDeNavegacao';
import Container from './componentes/Container';
import Linha from './componentes/Linha';
import Coluna from './componentes/Coluna';
import Texto from './componentes/Texto';
import Imagem from './componentes/Imagem';
import Rodape from './componentes/Rodape';
import Cartao from './componentes/Cartao';
import Lista from './componentes/Lista';

function App() {

  const servicos = [
    'Consultoria',
    'Projetos',
    'Regularização',
    'Orçamento e Planejamento',
    'Acompanhamento de Obra',
    'Laudos Técnicos'
  ]

  return (
    <div className="App">
      <BarraDeNavegacao />
      <Container bg="#5BC0EB" className="container-topo">
        <Linha>
          <Coluna>
            <Texto>Temos o material de construção que precisar perto da sua casa</Texto>
          </Coluna>
          <Coluna>
            <Imagem enderecoImagem="./goncalo.png" />
          </Coluna>
        </Linha>
      </Container>
      <Container bg="#E83F6F">
        <Linha>
          <Coluna>
            <Texto>E também te ajudamos a realizar sua obra, com os serviços de:</Texto>
          </Coluna>
          <Coluna>
            <Lista nomeDaClasse="medio" lista={servicos} />
          </Coluna>
        </Linha>
      </Container>
      <Container bg="#32936F">
        <Linha>
          <Coluna>
            <Texto>Você pode visitar nossa loja física</Texto>
          </Coluna>
          <Coluna>
            <iframe 
              src="https://maps.google.com/maps?q=R.+Victória+Simionato,+659+-+Vila+Paranagua,+São+Paulo+-+SP,+03808-170&output=embed" 
              style={{border: 0}}
              width="100%"
              height="400"
              allowFullScreen=""
              aria-hidden="false"
            />
          </Coluna>
        </Linha>
      </Container>
      <Container bg="#2b3035" id="contato">
        <Linha>
          <Coluna>
            <Texto>Ou entrar em contato pelo nosso Whatsapp</Texto>
          </Coluna>
          <Coluna>
            <Cartao imagem="https://media.licdn.com/dms/image/C4D03AQFqY3-9OWIayA/profile-displayphoto-shrink_800_800/0/1654271019988?e=2147483647&v=beta&t=bUQAWkEEQzh-6KjaKzJehEWUeqApZigrx-C6ZB_71p8" />
          </Coluna>
        </Linha>
      </Container>
      <Rodape>
        <Container>
        </Container>
      </Rodape>
    </div>
  );
}

export default App;
