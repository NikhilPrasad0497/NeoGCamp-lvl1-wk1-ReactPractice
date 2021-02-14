import React from "react";

export default function PriceDetails({previousValue, discount}){
        var value
        function disccal(previousValue, discount){
            return value = Number(previousValue) - (Number(previousValue) * (parseFloat(discount)/100))
        }
    return(
        <div className="price-details">Rs. {disccal(previousValue, discount)} <span><del>Rs. {previousValue}</del></span> <span><strong><em>{discount} %</em></strong></span></div>
    )

}