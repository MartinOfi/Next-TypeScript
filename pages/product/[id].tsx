import { ProductModel } from "../../models/product";
import { getDataML } from "../../util/api-ml";

const Detail = (props) => {
  
  return (<div>
    <h1>{props.title}</h1>
    <p>{props.producto.name}</p>
  </div>)
};

export default Detail;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "Zapatillas" } },
      { params: { id: "Botas" } },
      { params: { id: "Consolas" } },
      { params: { id: "Flautas" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  
  const response = await getDataML(`q=${params.id}`)
  return {
    props: {
      title: params.id,
      producto:response[0]
    },
  };
}
/* export async function getServerSideProps(context) {
  let data: ProductModel = { id: 3, name: "Shirt", price: 4444 };
  return {
    props: {
      producto: data,
    },
  };
} */
