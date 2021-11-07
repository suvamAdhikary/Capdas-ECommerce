const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb) => {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * IE9);

        cb(null, uniquePrefix + '-' + file.originalname);
    }
});

const fileFilter = (req, res, cb) => {
    if(file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/svg+xml') {
                cb(null, true);
    } else {
        cb(null, false);
    };
};

module.exports = multer ({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 10
    }
});