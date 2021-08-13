import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Card from './components/Card/Card'
import Contact from './components/Contact/Contact'
import Auth from './components/Auth/Auth'
import Data_manage from './components/Data_manage/Data_manage'
import {Route} from 'react-router-dom'
import {useEffect} from 'react'
import {get_products} from './JS/actions/product_actions'
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const dispatch = useDispatch();

  const products_data = useSelector(state => state)

  const get_all_products = () => {
    dispatch(get_products())
  }

  useEffect(()=> get_all_products(), [])

  return (
    <div className="App">
      <Header/>
      <Route exact path="/" render={Home}/>
      <Route exact path="/contact" render={Contact}/>
      <Route exact path="/produits" render={()=> (<div className="products_list">{products_data.map((el,index) => (<Card key={el._id} product={el}/>))}</div>)}/>
      <Route exact path="/auth" render={Auth}/>
      <Route exact path="/data_manage" component={Data_manage}/>
      <Footer/>
    </div>
  );
}

export default App;
