module.exports.tst = {
    anime() {
        // Object to hold properties
        let obj = {};
        
        // Method to set 'x' property
        obj.x = function(value) {
            obj.x = value;
            return obj;
        };
        
        // Method to set 'y' property
        obj.y = function(value) {
            obj.y = value;
            return obj;
        };
    
        return obj;
    }
}

// Example usage:
console.log(this.tst);            // return {}
