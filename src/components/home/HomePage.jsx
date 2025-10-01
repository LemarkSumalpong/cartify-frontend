import api from '../../../api'
import CardContainer from './CardContainer'
import Header from './Header'
import HomeCard from './HomeCard'

const HomePage = () => {

  api.get("products")

  return (
   <>
   <Header />
   <CardContainer />
   </>
  )
}

export default HomePage