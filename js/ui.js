// UI rendering and card creation methods
class UIManager {
    // Card creation methods
    static createTrackCard(track) {
        return `
            <div class="card">
                <img src="${track.image}" alt="${track.name}" class="card-image">
                <button class="play-overlay">
                    <i class="fas fa-play"></i>
                </button>
                <div class="card-title">${track.name}</div>
                <div class="card-subtitle">${track.artist}</div>
            </div>
        `;
    }

    static createAlbumCard(album) {
        return `
            <div class="card">
                <img src="${album.image}" alt="${album.title}" class="card-image">
                <button class="play-overlay">
                    <i class="fas fa-play"></i>
                </button>
                <div class="card-title">${album.title}</div>
                <div class="card-subtitle">${album.artist} • ${album.year}</div>
            </div>
        `;
    }

    static createPlaylistCard(playlist) {
        return `
            <div class="card">
                <img src="${playlist.image}" alt="${playlist.name}" class="card-image">
                <button class="play-overlay">
                    <i class="fas fa-play"></i>
                </button>
                <div class="card-title">${playlist.name}</div>
                <div class="card-subtitle">${playlist.description}</div>
            </div>
        `;
    }

    static createArtistCard(artist) {
        return `
            <div class="artist-card">
                <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                <div class="artist-name">${artist.name}</div>
                <div class="artist-genre">${artist.genre}</div>
            </div>
        `;
    }

    // Page rendering methods
    static renderRecentlyPlayed(container) {
        container.innerHTML = mockData.recentlyPlayed.map(track => this.createTrackCard(track)).join('');

        // Add click listeners
        container.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', () => {
                window.app.playTrack(mockData.recentlyPlayed[index]);
            });
        });
    }

    static renderRecommended(container) {
        const recommended = [...mockData.albums, ...mockData.playlists].slice(0, 6);
        container.innerHTML = recommended.map((item, index) => {
            const isAlbum = item.tracks && typeof item.tracks === 'number';
            const cardHtml = isAlbum ? this.createAlbumCard(item) : this.createPlaylistCard(item);
            // Add data attributes to identify the item
            return cardHtml.replace('<div class="card">', `<div class="card" data-recommended-index="${index}" data-item-type="${isAlbum ? 'album' : 'playlist'}">`);
        }).join('');

        // Add click listeners
        container.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', (e) => {
                // Prevent event bubbling from play overlay
                if (e.target.closest('.play-overlay')) {
                    return;
                }

                const itemIndex = parseInt(card.dataset.recommendedIndex);
                const itemType = card.dataset.itemType;
                const item = recommended[itemIndex];

                console.log('Recommended card clicked:', item, 'Type:', itemType, 'Card index:', index, 'Item index:', itemIndex);

                if (itemType === 'album') {
                    // It's an album - play the first track from this album
                    const albumTracks = mockData.tracks.filter(track => track.album === item.title);
                    console.log('Album tracks found:', albumTracks.length, 'for album:', item.title);
                    if (albumTracks.length > 0) {
                        console.log('Playing track:', albumTracks[0]);
                        window.app.playTrack(albumTracks[0]);
                    } else {
                        console.log('No tracks found for album:', item.title, 'Playing fallback track');
                        // Fallback: play any track
                        window.app.playTrack(mockData.tracks[0]);
                    }
                } else {
                    // It's a playlist - play a random track
                    const randomTrack = mockData.tracks[Math.floor(Math.random() * mockData.tracks.length)];
                    console.log('Playing random track for playlist:', item.name, randomTrack);
                    window.app.playTrack(randomTrack);
                }
            });
        });

        // Add click listeners for play overlay buttons
        container.querySelectorAll('.play-overlay').forEach((overlay, index) => {
            overlay.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click
                const card = overlay.closest('.card');
                const itemIndex = parseInt(card.dataset.recommendedIndex);
                const itemType = card.dataset.itemType;
                const item = recommended[itemIndex];

                console.log('Play overlay clicked for:', item.title || item.name);

                if (itemType === 'album') {
                    const albumTracks = mockData.tracks.filter(track => track.album === item.title);
                    if (albumTracks.length > 0) {
                        window.app.playTrack(albumTracks[0]);
                    }
                } else {
                    const randomTrack = mockData.tracks[Math.floor(Math.random() * mockData.tracks.length)];
                    window.app.playTrack(randomTrack);
                }
            });
        });
    }

    static renderPopularArtists(container) {
        container.innerHTML = mockData.artists.slice(0, 6).map(artist => this.createArtistCard(artist)).join('');

        // Add click listeners
        container.querySelectorAll('.artist-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                window.app.showArtistModal(mockData.artists[index]);
            });
        });
    }

    static renderSearchResults(container, results) {
        if (results.artists.length === 0 && results.albums.length === 0 && results.tracks.length === 0) {
            container.innerHTML = '<p class="text-secondary">No results found</p>';
            return;
        }

        let html = '';

        if (results.artists.length > 0) {
            html += '<div class="search-category"><h3>Artists</h3><div class="artist-grid">';
            html += results.artists.map(artist => this.createArtistCard(artist)).join('');
            html += '</div></div>';
        }

        if (results.albums.length > 0) {
            html += '<div class="search-category"><h3>Albums</h3><div class="card-grid">';
            html += results.albums.map(album => this.createAlbumCard(album)).join('');
            html += '</div></div>';
        }

        if (results.tracks.length > 0) {
            html += '<div class="search-category"><h3>Tracks</h3><div class="card-grid">';
            html += results.tracks.map(track => this.createTrackCard(track)).join('');
            html += '</div></div>';
        }

        container.innerHTML = html;

        // Add click listeners for search results
        // Artist cards in search results
        const artistCards = container.querySelectorAll('.artist-card');
        artistCards.forEach((card, index) => {
            const artistIndex = results.artists.findIndex(artist =>
                artist.name === card.querySelector('.artist-name').textContent
            );
            if (artistIndex !== -1) {
                card.addEventListener('click', () => {
                    window.app.showArtistModal(results.artists[artistIndex]);
                });
            }
        });

        // Album cards in search results
        const albumCards = container.querySelectorAll('.card');
        albumCards.forEach((card) => {
            const cardTitle = card.querySelector('.card-title')?.textContent;
            const cardSubtitle = card.querySelector('.card-subtitle')?.textContent;

            if (cardTitle && cardSubtitle) {
                // Check if it's an album (has year in subtitle)
                const albumResult = results.albums.find(album =>
                    album.title === cardTitle && cardSubtitle.includes(album.year.toString())
                );

                if (albumResult) {
                    card.addEventListener('click', () => {
                        const albumTracks = mockData.tracks.filter(track => track.album === albumResult.title);
                        if (albumTracks.length > 0) {
                            window.app.playTrack(albumTracks[0]);
                        }
                    });
                }

                // Check if it's a track
                const trackResult = results.tracks.find(track =>
                    track.name === cardTitle && cardSubtitle.includes(track.artist)
                );

                if (trackResult) {
                    card.addEventListener('click', () => {
                        window.app.playTrack(trackResult);
                    });
                }
            }
        });
    }

    static loadLibraryPlaylists(container) {
        container.innerHTML = mockData.playlists.map(playlist => this.createPlaylistCard(playlist)).join('');
    }

    static loadLibraryArtists(container) {
        container.innerHTML = mockData.artists.map(artist => this.createArtistCard(artist)).join('');

        // Add click listeners
        container.querySelectorAll('.artist-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                window.app.showArtistModal(mockData.artists[index]);
            });
        });
    }

    static loadLibraryAlbums(container) {
        container.innerHTML = mockData.albums.map(album => this.createAlbumCard(album)).join('');
    }

    static loadArtistsPage(container) {
        container.innerHTML = mockData.artists.map(artist => this.createArtistCard(artist)).join('');

        // Add click listeners
        container.querySelectorAll('.artist-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                window.app.showArtistModal(mockData.artists[index]);
            });
        });
    }

    static loadAlbumsPage(container) {
        container.innerHTML = mockData.albums.map(album => this.createAlbumCard(album)).join('');
    }

    static loadPlaylistsPage(container) {
        container.innerHTML = mockData.playlists.map(playlist => this.createPlaylistCard(playlist)).join('');
    }
}