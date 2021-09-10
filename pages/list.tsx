import Link from "next/link";
import { useContext, useState } from "react";
import CardContainer from "../components/CardContainer";
import CardProduct from "../components/CardProduct";
import { CartContext } from "../components/context/CartProvider";
import { ProductModel } from "../models/product";
import { getDataML } from "../util/api-ml";

const List = ({title,data}) => {
  return (
    <div>
      <h1>{title}</h1>
      <CardContainer products={data}/>
      <Link href="/">
        <a>
          Ver home
        </a>
      </Link>
    </div>
  );
};
export default List;
export async function getStaticProps() {
  return {
    props: {
      title: "Home Static Props",
      data: await getDataML("q=notebook"),
    },
  };
}

