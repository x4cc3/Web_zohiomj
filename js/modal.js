// Modal functionality
class ModalManager {
    static showArtistModal(artist, app) {
        const modal = document.getElementById('artist-modal');
        document.getElementById('modal-artist-image').src = artist.image;
        document.getElementById('modal-artist-name').textContent = artist.name;
        document.getElementById('modal-artist-genre').textContent = artist.genre;
        document.getElementById('modal-artist-followers').textContent = `${artist.followers} followers`;
        document.getElementById('modal-artist-albums').textContent = `${artist.albums} albums`;

        const tracksList = document.getElementById('artist-tracks-list');
        tracksList.innerHTML = artist.tracks.map((track, index) => `
            <div class="track-item" data-track-id="${track.id}">
                <span class="track-number">${index + 1}</span>
                <div class="track-item-info">
                    <div class="track-item-name">${track.name}</div>
                    <div class="track-item-album">${track.album}</div>
                </div>
                <span class="track-duration">${track.duration}</span>
            </div>
        `).join('');

        // Add click listeners to tracks
        tracksList.querySelectorAll('.track-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                // Find the full track object from the main tracks collection
                const trackId = artist.tracks[index].id;
                const fullTrack = mockData.tracks.find(track => track.id === trackId);
                if (fullTrack) {
                    PlayerManager.playTrack(fullTrack, app);
                } else {
                    // Fallback: create a complete track object
                    const basicTrack = artist.tracks[index];
                    const completeTrack = {
                        id: basicTrack.id,
                        name: basicTrack.name,
                        artist: artist.name,
                        album: basicTrack.album,
                        image: artist.image,
                        duration: basicTrack.duration
                    };
                    PlayerManager.playTrack(completeTrack, app);
                }
                this.closeArtistModal();
            });
        });

        modal.classList.add('active');
    }

    static closeArtistModal() {
        document.getElementById('artist-modal').classList.remove('active');
    }

    static setupModalListeners(app) {
        // Modal close
        const modalClose = document.getElementById('artist-modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeArtistModal());
        }

        // Close modal on background click
        document.getElementById('artist-modal').addEventListener('click', (e) => {
            if (e.target.id === 'artist-modal') {
                this.closeArtistModal();
            }
        });
    }
}