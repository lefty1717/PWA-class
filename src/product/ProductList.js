import React, {useState, useEffect} from 'react';
import ProductAdd from './ProductAdd';
import Fab from '@mui/material/Fab';
import AppMenu from '../ui/AppMenu';
//list
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//delete
import { doc, deleteDoc } from "firebase/firestore";
//firebase
import { db } from '../firebase/GetFirestore';
import { getDocs, collection } from '@firebase/firestore';

export default function ProductList() {
  //set list
  const [products, setProducts] = useState([]);
  const insert = function(newProduct){
    setProducts(oldProducts=>[...oldProducts, newProduct]);
  }

  //control dialog open
  const [open, setopen] = useState(false);
  const OpenDialog = () => {
    setopen(open?false:true)
  }

  //display list in database
  useEffect(()=>{
    async function readData() {
      const querySnapshot = await getDocs(collection(db, "product"));
      const temp = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        temp.push({id: doc.id, desc:doc.data().desc, price:doc.data().price});
      });
      console.log(temp);
      setProducts([...temp]);
    }
    readData();
  },[db]);

  //delete
  const deleteData = async function(id){
    await deleteDoc(doc(db, "product", id));
  }

  return (
    <div>
      <AppMenu/>

      <List subheader="Product list" aria-label="product list">
      {products.map((product, index) =>
        <ListItem divider key={index}>
          <ListItemText primary={product.desc} secondary={"NT$"+product.price}></ListItemText>
          <IconButton edge="end" aria-label="delete" onClick={()=>deleteData(product.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>)}
      </List>

      <ProductAdd OpenDialog={OpenDialog} open = {open} update = {insert}/>
      <Fab color="primary" aria-label="add" onClick={OpenDialog}>
        +
      </Fab>
    </div>
  );
}