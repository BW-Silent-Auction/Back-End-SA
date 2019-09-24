const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
const secret = require('./secrets');

cloudinary.config({
    cloud_name: secret.cloudinaryName,
    api_key: secret.cloudinaryApiKey,
    api_secret: secret.cloudinarySecret
});

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'bw-silent-auction',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        if (file.mimetype === 'image/png' || 'image/jpg') {
            cb(null, true)
        } else {
            const err = new Error();
            err.message = 'Invalid image type. Ensure the image is either jpg or png';
            cb(err.message, false)
        };
    },
});

const parser = multer({ storage });

module.exports = parser.single('image');
