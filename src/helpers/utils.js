const getTotalDealer = ( infoDealer) => {
    let total =
    infoDealer != null && infoDealer.length > 0
       ? infoDealer.length > 1
         ? infoDealer
             .map(d => d.total)
             .reduce((a,b) => a + b)
         : infoDealer[0].total
       : 0;
    return total;
}


export {
    getTotalDealer
}