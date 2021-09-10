import CardProduct from "./CardProduct";

const CardContainer = ({ products }) => {
  return (
    <div>
      {products.map((item, index) => {
        return <CardProduct product={item} key={index} />;
      })}
    </div>
  );
};
export default CardContainer;
