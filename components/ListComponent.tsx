import CardProduct from "./CardProduct";

const ListComponent = ({ listProduct }) => {
  return (
    <div>
      {listProduct.map((item, index) => {
        return (
          <CardProduct
            product={{ id: index, name: item.name, price: item.price }}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default ListComponent;
