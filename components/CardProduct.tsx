import { CardProps } from "../models/props"

const CardProduct=(props:CardProps)=>{
  return (
    <div>
      <h2>{props.product.name}</h2>
      <b>${props.product.price}</b>
    </div>
  )
}
export default CardProduct