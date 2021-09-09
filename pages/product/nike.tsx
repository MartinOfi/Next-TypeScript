import { ProductModel } from "../../models/product";

const Detail = () => {

  return <div>Detalles</div>;
};
export default Detail;
 export async function getServerSideProps(context) {
  let data: ProductModel = { id: 3, name: "Shirt", price: 4444 };
  return {
    props: {
      producto: data,
    },
  };
}
 