// import logo from './logo.svg';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Contactform from './components/Contactform';

function App() {
  let [finalProduct,setFinalProduct]=useState([]);
  let [categoryName,setCategoryName] = useState("");
  let [modalStatus,setModalStatus] = useState(false);

  let getProducts = () => {
    axios
    .get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalRes)=>{
      // console.log(finalRes)
      setFinalProduct(finalRes.products)
    })
  }
useEffect(()=>{
  getProducts();
},[])

//search by category name
useEffect(()=> {
  if(categoryName !== "") {
    console.log(categoryName);
    axios
    .get(`https://dummyjson.com/products/category/${categoryName}`)
    .then((res)=>res.data)
    .then((finalRes)=>{
      // console.log(finalRes)
      setFinalProduct(finalRes.products)
    })
  }
},[categoryName])

//loop for products
let pitems;
if (finalProduct.length > 0) {
  pitems = finalProduct.map((v,i)=>{
    return(
      <ProductItems key={i} pdata={v}/>
    )
  })
} else {
  pitems = <p style={{color:"red", textAlign:"center"}}>No Matches products found</p>
}


  return (
    <>
    <div className={`modal-overlay ${modalStatus ? 'modal-show' : ''}`}></div>
    <div className={`modalDiv ${modalStatus ? 'modalDiv-show': ''}`}>
      <span onClick={()=>setModalStatus(false)}>&times;</span>
      <a href='#' className='btnSign'>Sign in</a>
      <p className='signPara'>New Customer? <a href='#'>start here</a></p>
    </div>

      <div className='max-w[1320px] bg-slate-950 text-white'>
        <Header setModalStatus={setModalStatus}/>
      </div>
      <div className='p-[50px]'>
        <div className='max-w[1320px] mx-auto'>
          <h1 className='text-center p-[10px] font-bold text-[30px] font-serif'>Our Products</h1>
          <div className='grid grid-cols-[20%_auto] gap-[20px]'>
            <div>
              <h1>Categories</h1>
              <Category setCategoryName={setCategoryName}/>
            </div>
            <div className='bg-yellow-100'>
              <h1>Products</h1>
              <div className='grid grid-cols-3 gap-5'>
                {/* <ProductItems/> */}
                {pitems}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Contactform/></div>
      <div><Footer/></div> 
  
    </>   
  );
}
export default App;

function ProductItems({pdata}) {
  return(
    <div className='shadow-2xl text-center bg-yellow-50'>
      <img src={pdata.thumbnail}></img>
      <h4>{pdata.title}</h4>
      <p>{pdata.price}</p>
    </div>
  )
}
