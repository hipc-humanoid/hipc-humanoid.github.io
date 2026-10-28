document.addEventListener('DOMContentLoaded', () => {
	const videos = document.querySelectorAll('video.paper-video, video.gallery-video');

	videos.forEach((video) => {
		const setOrientationClass = () => {
			const width = video.videoWidth;
			const height = video.videoHeight;
			if (!width || !height) return;

			const isLandscape = width >= height;
			video.classList.toggle('is-landscape', isLandscape);
			video.classList.toggle('is-portrait', !isLandscape);
		};

		if (video.readyState >= 1) {
			setOrientationClass();
		} else {
			video.addEventListener('loadedmetadata', setOrientationClass, { once: true });
		}
	});
});


// Reserved video paths are configured only in index.html via data-src.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-slot').forEach(slot => {
    const video = slot.querySelector('video');
    const placeholder = slot.querySelector('.media-placeholder');
    video.addEventListener('loadedmetadata', () => {
      video.hidden = false;
      placeholder.hidden = true;
    });
    video.addEventListener('error', () => {
      video.hidden = true;
      placeholder.hidden = false;
    });
    if (video.dataset.src) video.src = video.dataset.src;
  });
});
