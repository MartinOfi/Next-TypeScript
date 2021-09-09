import { ProductModel } from "../models/product";
export const getDataML=async(term:string):Promise<ProductModel[]>=>{
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?${term}`)
  const data=await response.json()
  const products :ProductModel[]=data.results.map((item,index)=>{
    return{
      id:index,
      name:item.title,
      price:item.price
    }
  });
  return products
}