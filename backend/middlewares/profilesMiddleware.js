const fs = require('fs')
const multer = require('multer')
const {v4: uuidv4} = require('uuid')


const createFolder = phone => {
    const path = `./public/uploads/profiles/${phone}`
        if(!fs.existsSync(path)){
            fs.mkdirSync(path)
        }
        return path
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,createFolder(req.user.phone))
    },
    filename: function(req,file,cb){
        cb(null,`${uuidv4()}-${file.originalname}`)
    }
})

const upload = multer({storage})

module.exports = {
    upload
}