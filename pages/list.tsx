import Link from "next/link";
import { useContext, useState } from "react";
import CardProduct from "../components/CardProduct";
import { CartContext } from "../components/context/CartProvider";
import { ProductModel } from "../models/product";

const List = () => {
  const {listProduct} = useContext(CartContext)
  return (
    <div>
      <h1>List Page</h1>
      {listProduct.map((item,index)=>{
        return(
          <div key={index}>
           <CardProduct product={item}/>
          </div>
        )
      })}
      <Link href="/">
        <a>
          Ver home
        </a>
      </Link>
    </div>
  );
};
export default List;
