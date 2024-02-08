var crypto = require('crypto');
const algorithm = 'aes-256-cbc';







module.exports.crypto = {
    encrypt(secret, string){
       
            const key = crypto.scryptSync(secret, 'salt', 32);
            const iv = Buffer.alloc(16, 0);
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            let encrypted = cipher.update(string, 'utf8', 'hex');
            return encrypted += cipher.final('hex');
        
        
    },
    decrypt(secret, string){
        const key = crypto.scryptSync(secret, 'salt', 32);
        const iv = Buffer.alloc(16, 0);
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(string, 'hex', 'utf8');
        return decrypted += decipher.final('utf8');
    }

} 

