
module.exports = {
    /** 
    *@param offset Number of page
    *@param limit value you want to show 
    *@return number you need to skip
    *@example
    * Model.find().skip( pagePagination(2, limit) ).limit(limit)
    */
    pagePagination: (offset = 1, limit = 10) => {

        if (offset == 1 || offset == 0 || !offset) {

            return 0

        } else {
            return (offset * limit) - limit
        }
    },
    /** 
    *@param offset Number of page
    *@param limit value you want to show 
    *@return number you need to limit
    *@example
    * Model.find().limit(itemPagination(2, limit))
    */
    itemPagination: (offset, limit) => {
        return offset * limit
    }
}