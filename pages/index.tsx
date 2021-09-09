import Link from "next/link";
import { useContext } from "react";
import CardProduct from "../components/CardProduct";
import { CartContext } from "../components/context/CartProvider";
import { ProductModel } from "../models/product";
export default function Home() {
  const {listProduct} = useContext(CartContext)
  
  return (
    <div>
      <h1>Ecommerce de ejemplo</h1>
      <h3>Productos Destacados</h3>
      {listProduct.map((item,index)=>{
        return(<CardProduct product={item} /> )
      })}
      <Link href="/list">
        <a>Ver Productos</a>
      </Link>
    </div>
  );
}
