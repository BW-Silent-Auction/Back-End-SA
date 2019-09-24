
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'Silence is golden',
    environment: process.env.NODE_ENV,
    cloudinaryName: process.env.CLOUDINARY_NAME || 'argordon',
    cloudinaryApiKey: process.env.API_KEY || '182291414913562',
    cloudinarySecret: process.env.API_Secret || 'sHq9sf5uWL9BazzW9PfLgSNezFY'
};
