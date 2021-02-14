import React from "react"
import ProdImage from "./ProdImage"
import ProdTitle from "./ProdTitle"
import ProdDescription from "./ProdDescription"
import PriceDetails from "./PriceDetails"


export default function ProductCard({imgsrc, title, description, prevValue, discount}){
    return (
        <div className="Card">
            <ProdImage image={imgsrc}/>
            <ProdTitle title={title}/>
            <ProdDescription description={description}/>
            <PriceDetails previousValue={prevValue} discount={discount}/>
        </div>
    )
}