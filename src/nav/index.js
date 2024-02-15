
module.exports={
    pagePagination:(page, limit)=>{
        let page ;
        if(page == 1 || page == 0 || !page){
            
         return 0
      
        }else{
          page = page
          return (page * limit) - limit
        }
    },
    itemPagination:(offset, limit)=>{
        return offset * limit
    }
}