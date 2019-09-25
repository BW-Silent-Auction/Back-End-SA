const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'bw-silent-auction',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
            cb(null, file.url)
        } else {
            const err = new Error();
            err.message = 'Invalid image type. Ensure the image is either jpg or png';
            cb(err.message, false)
        };
    },
});

const parser = multer({ storage });

module.exports = parser.single('image');
