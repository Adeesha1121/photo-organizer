document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');

    // Initialize Dropzone
    const myDropzone = new Dropzone('#myDropzone', {
        url: '/upload', // You can set the upload URL or handle it on the server side
        autoProcessQueue: false,
        maxFilesize: 5, // Maximum file size in MB
        acceptedFiles: 'image/*', // Only allow image files
        init: function () {
            this.on('addedfile', function (file) {
                // Handle added files (if needed)
            });

            this.on('complete', function (file) {
                // Handle completed uploads (if needed)
            });
        }
    });

    // Handle file drop
    myDropzone.on('addedfile', function (file) {
        // Handle added files (if needed)
        const thumbnail = createThumbnail(URL.createObjectURL(file));
        gallery.appendChild(thumbnail);
    });

    function createThumbnail(src) {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';

        const img = document.createElement('img');
        img.src = src;

        thumbnail.appendChild(img);

        return thumbnail;
    }
});
