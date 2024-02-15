
module.exports={
    pagePagination:(counter)=>{
        let page ;
        if(counter == 1){
         return 0
      
        }else{
          page = counter
          return page * 10 -10
        }
    },
    itemPagination:(counter, item)=>{
        return counter * item
    }
}