document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');

    fileInput.addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        const files = event.target.files;

        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const thumbnail = createThumbnail(e.target.result);
                    gallery.appendChild(thumbnail);
                };

                reader.readAsDataURL(file);
            }
        }
    }

    function createThumbnail(src) {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';

        const img = document.createElement('img');
        img.src = src;

        thumbnail.appendChild(img);

        return thumbnail;
    }
});
