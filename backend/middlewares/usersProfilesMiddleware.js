const fs = require('fs')
const multer = require('multer')
const {v4: uuidv4} = require('uuid')

const folderCreater = (req,file) => {
    const path = `./public/uploads/profiles/${req.user.phone}`
    if(!fs.existsSync(path)){
        fs.mkdirSync(path,{recursive: true})
    }
    return path
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,folderCreater(req,file))
    },
    filename: function(req,file,cb){
        cb(null,`${uuidv4()}-${file.originalname}`)
    }
})


const upload = multer({storage})

module.exports = upload