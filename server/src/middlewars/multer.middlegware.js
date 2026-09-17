import crypto from "node:crypto"
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/temp')
    },
    filename: function (req,file,cb) {
        crypto.randomBytes(16, function (err,raw) {
            if(err) return cd(err)
            cd(null,file.filename + '-' + raw.toString('hex'))
        })
    }
})

export const Upload = multer({storage: storage})