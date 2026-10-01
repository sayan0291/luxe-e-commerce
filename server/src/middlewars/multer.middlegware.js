import crypto from "node:crypto"
import multer from "multer"
import path from "node:path"

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/temp')
    },
    filename: function (req,file,cb) {
        crypto.randomBytes(16, function (err,raw) {
            if(err) return cb(err)
            const extName = path.extname(file.originalname)
            const filename = raw.toString('hex') + extName
            
            console.log(extName)
            console.log(filename)
            cb(null,filename);
        })
    }
})

export const Upload = multer({storage: storage})