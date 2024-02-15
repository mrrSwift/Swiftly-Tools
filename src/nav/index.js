
module.exports={
    pagePagination:(counter, item)=>{
        let page ;
        if(counter == 1 || counter == 0 || !counter){
            
         return 0
      
        }else{
          page = counter
          return (page * item) - item
        }
    },
    itemPagination:(counter, item)=>{
        return counter * item
    }
}