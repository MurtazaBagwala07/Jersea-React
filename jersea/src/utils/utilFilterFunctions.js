const sortData=(data,sortBy)=>{
    if(sortBy==='LOW_TO_HIGH'){
        return [...data].sort((a, b) => a.price - b.price);
    }
    else if (sortBy==='HIGH_TO_LOW'){
        return [...data].sort((a, b) => b.price-a.price);
    }
    else{
        return [...data]
    }
}

const ratingFilter=(data,ratingFilter)=>{
    if(ratingFilter==='4_AND_ABOVE'){
        return data.filter((product) => Number(product.rating) >= 4);
    }
    else if(ratingFilter==='3_AND_ABOVE'){
        return data.filter((product) => Number(product.rating) >= 3);
    }
    else if(ratingFilter==='2_AND_ABOVE'){
        return data.filter((product) => Number(product.rating) >= 2);
    }
    else if(ratingFilter==='1_AND_ABOVE'){
        return data.filter((product) => Number(product.rating) >= 1);
    }
    else{
        return data
    }
    
}

const categoryData=(data,categories)=>{
    const categoryList = Object.keys(categories)
    const newData=categoryList.reduce((acc,curr)=>{
        return categories[curr]?[...acc,...data.filter((item)=>item.categoryName === curr)]:[...acc]
    },[])
    return newData.length?newData:data
}

const stockCheck= (data,stock)=>{
    return stock?[...data.filter((item)=>item.inStock===true)]:[...data]

}

const priceControl=(data,value)=>{
    return [...data.filter((item)=>Number(item.price)<=Number(value))]
}

export {sortData,ratingFilter,categoryData,stockCheck,priceControl}