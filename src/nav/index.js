
module.exports={
    pagePagination:(offset, limit)=>{
     
        if(offset == 1 || offset == 0 || !offset){
            
         return 0
      
        }else{
          return (offset * limit) - limit
        }
    },
    itemPagination:(offset, limit)=>{
        return offset * limit
    }
}