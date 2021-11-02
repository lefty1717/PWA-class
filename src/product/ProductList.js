import ProductAdd from './ProductAdd'
import Fab from '@mui/material/Fab';
import React, {useState, useEffect} from 'react';
import AppMenu from '../ui/AppMenu';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from '../settings/firebaseConfig';
import { getDocs, collection } from '@firebase/firestore';

export default function ProductList() {

  const [products, setProducts] = useState([]);

  const insert = function(newProduct){
    setProducts(oldProducts=>[...oldProducts, newProduct]);
  }

  const [open, setopen] = useState(false);
  const OpenDialog = () => {
    setopen(open?false:true)
  }

  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  
  useEffect(()=>{
    async function readData() {
      const querySnapshot = await getDocs(collection(db, "product"));
      const temp = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        temp.push({desc:doc.data().desc, price:doc.data().price});
      });
      console.log(temp);
      setProducts([...temp]);
    }
    readData();
  },[db]);
  
  return (
    <div>
      <AppMenu/>
      <ul>
        {products.map((product, index) => <li key={index}>{index} / {product.desc} / {product.price}</li>)}
      </ul>
      <ProductAdd OpenDialog={OpenDialog} open = {open} update = {insert}/>
      <Fab color="primary" aria-label="add" onClick={OpenDialog}>
        +
      </Fab>
    </div>
  );
}