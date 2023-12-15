import { dados } from "./db/dados"

import Header from "./components/Header"
import MenuCategory from "./components/MenuCategory"
import CarroselList from "./components/CarroselList"
import Container from "./components/Container"
import BarMusic from "./components/BarMusic"


function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Container>
        <MenuCategory />
        <CarroselList
          title="Ouvir Novamente"
          dados={dados}
        />
        <CarroselList
          title="Mais Tocadas"
          dados={dados}
          rounded
        />
        <CarroselList
          title="As melhores"
          dados={dados}
        />
      </Container>

      <BarMusic/>

    </div>
  )
}

export default App
