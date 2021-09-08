import Link from "next/link";
import { useState } from "react";
import CardProduct from "../components/CardProduct";
import { ProductModel } from "../models/product";

const List = () => {
  let list : ProductModel[] = [
    {
      id: 1,
      name: "shoes",
      price: 99999,
    },
  ];
  const [products, setProducts] = useState<ProductModel[]>(list);
  return (
    <div>
      {products.map((item,index)=>{
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
      <p>Pagina de products</p>
    </div>
  );
};
export default List;
