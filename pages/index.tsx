import Link from "next/link";
import { useContext } from "react";
import CardContainer from "../components/CardContainer";
import CardProduct from "../components/CardProduct";
import { CartContext } from "../components/context/CartProvider";
import { ProductModel } from "../models/product";
import { getDataML } from "../util/api-ml";
export default function Home({title,data}) {
  const { listProduct } = useContext(CartContext);  
  return (
    <div>
      <h1>{title}</h1>
      <h3>Productos Destacados</h3>
      <CardContainer products={listProduct}/>
      <h3>Productos ML</h3>
     <CardContainer products={data}/>
      <Link href="/list">
        <a>Ver Productos</a>
      </Link>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      title: "Home Static Props",
      data: await getDataML("q=notebook"),
    },
  };
}
