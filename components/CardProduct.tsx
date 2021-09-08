const CardProduct=({product})=>{
  return (
    <div>
      <h2>{product.name}</h2>
      <b>${product.price}</b>
    </div>
  )
}
export default CardProduct