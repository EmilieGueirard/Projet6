const multer = require('multer');
const fs = require('fs');
const path = require('path');
const webp = require('webp-converter');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

// Middleware pour optimiser l'image téléchargée et la convertir en WebP si besoin
const optimizeImage = async (req, res, next) => {
    if (!req.file) return next();

    const originalImagePath = req.file.path;
    const ext = path.extname(originalImagePath).toLowerCase();
    const isWebP = ext === '.webp';
    let optimizedImageName, optimizedImagePath;

    if (isWebP) {
        optimizedImageName = path.basename(originalImagePath);
        optimizedImagePath = originalImagePath;
    } else {
        optimizedImageName = `optimized_${path.basename(originalImagePath, ext)}.webp`;
        optimizedImagePath = path.join('images', optimizedImageName);

        // Convertir l'image en WebP en utilisant webp-converter
        try {
            const result = webp.cwebp(originalImagePath, optimizedImagePath, "-q 80");
            await result;

            // Supprimer l'image originale après optimisation
            fs.unlink(originalImagePath, (error) => {
                if (error) {
                    console.error("Impossible de supprimer l'image originale :", error);
                    return next(error);
                }
            });
        } catch (error) {
            return next(error);
        }
    }

    req.file.path = optimizedImagePath;
    req.file.filename = optimizedImageName;

    next();
};

const upload = multer({ storage }).single('image');

module.exports = {
    upload,
    optimizeImage,
};
