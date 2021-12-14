import React, {useState, useEffect} from 'react'
import requestProductsApi from "../services/requestProductsApi";
import Product from './Product';
import monitor from '../images/monitor.png'
import lupa from '../images/search.svg'
import './ProductList.css'
import Loading from './Loading';
import NoResults from './NoResults';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const genericProduct = {
      thumbnail: monitor,
      title: `Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50`,
      price: 2813.99,
      original_price: 2599.90,
    }
    setProducts([genericProduct])
  }, [])

  const handleChangeProducts = async (event) => {
    event.preventDefault();
    setProducts([])
    setLoading(true)
    const teste = await requestProductsApi(input)
      .then((response) => response)
      setProducts(teste.slice(0, 10).filter((element) => element.original_price));
      setLoading(false)
      setInput('')
  }

  return (
    <div>
      <div className="input-container">
        <form onSubmit={(event, input) => {handleChangeProducts(event, input)}}>
          <img src={lupa} alt="" />
          <label htmlFor="input">
            <input
              type="text"
              id="input"
              placeholder="Digite o nome do produto desejado"
              value={input}
              onChange={(event) => setInput(event.target.value) }
            />
          </label>
          <button type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="product-list">
      {products.map((element) => <Product key={products.indexOf(element)} productInfo={element}/>)}
      {loading && <Loading />}
      {!loading && products.length === 0 && <NoResults />}
      </div>
    </div>
  )
}

export default ProductList;
