import React, {useState} from 'react';
import { Dialog } from '@mui/material';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";

export default function ProductAdd(props) {
  const [product, setProduct] = useState({desc:"",price:0})

  const handleClick = function(e){
    setProduct({...product,[e.target.name]:e.target.value})
  }
  
  const update = function(){
    props.update(product);
  }
  
  const [open, setopen] = useState(false);
  const handleClickopen = () => {
    setopen(open?false:true)
  }

  return (
    <div>
        <Dialog open = {props.open} onClose = {props.OpenDialog}>
            產品描述:<Input type="text" name="desc" value={product.desc} onChange={handleClick}/><br/>
            產品價格:<Input type="number" name="price" value={product.price} onChange={handleClick}/><br/>
            <Button variant="contained" color="primary" onClick={update}>新增</Button>
        </Dialog>
    </div>
  );
}