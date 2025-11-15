// Music player functionality
class PlayerManager {
    static playTrack(track, app) {
        app.currentTrack = track;
        app.isPlaying = true;
        this.updatePlayer(app);
        this.updatePlayerUI(app);

        // Simulate playing
        this.simulatePlayback(app);
    }

    static togglePlay(app) {
        if (!app.currentTrack) {
            // Play first track if nothing is selected
            this.playTrack(mockData.tracks[0], app);
            return;
        }

        app.isPlaying = !app.isPlaying;
        this.updatePlayerUI(app);

        if (app.isPlaying) {
            this.simulatePlayback(app);
        }
    }

    static playPrevious(app) {
        // Find previous track in all tracks
        const currentIndex = mockData.tracks.findIndex(track => track.id === app.currentTrack?.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : mockData.tracks.length - 1;
        this.playTrack(mockData.tracks[prevIndex], app);
    }

    static playNext(app) {
        // Find next track in all tracks
        const currentIndex = mockData.tracks.findIndex(track => track.id === app.currentTrack?.id);
        const nextIndex = currentIndex < mockData.tracks.length - 1 ? currentIndex + 1 : 0;
        this.playTrack(mockData.tracks[nextIndex], app);
    }

    static toggleShuffle(app) {
        app.isShuffled = !app.isShuffled;
        const shuffleBtn = document.getElementById('shuffle-btn');
        shuffleBtn.style.color = app.isShuffled ? 'var(--primary-purple)' : 'var(--text-secondary)';
    }

    static toggleRepeat(app) {
        const modes = ['off', 'all', 'one'];
        const currentIndex = modes.indexOf(app.repeatMode);
        app.repeatMode = modes[(currentIndex + 1) % modes.length];

        const repeatBtn = document.getElementById('repeat-btn');
        switch(app.repeatMode) {
            case 'off':
                repeatBtn.style.color = 'var(--text-secondary)';
                break;
            case 'all':
                repeatBtn.style.color = 'var(--primary-purple)';
                break;
            case 'one':
                repeatBtn.style.color = 'var(--primary-orange)';
                break;
        }
    }

    static toggleFavorite(app) {
        app.isFavorite = !app.isFavorite;
        const favoriteBtn = document.getElementById('favorite-btn');
        favoriteBtn.classList.toggle('active', app.isFavorite);
        favoriteBtn.innerHTML = app.isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    }

    static toggleFullscreen(app) {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const musicPlayer = document.getElementById('music-player');

        if (!document.fullscreenElement) {
            // Enter fullscreen
            if (musicPlayer.requestFullscreen) {
                musicPlayer.requestFullscreen();
            } else if (musicPlayer.webkitRequestFullscreen) {
                musicPlayer.webkitRequestFullscreen();
            } else if (musicPlayer.msRequestFullscreen) {
                musicPlayer.msRequestFullscreen();
            }
            fullscreenBtn.classList.add('active');
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            fullscreenBtn.classList.remove('active');
        }
    }

    static navigateToArtist(app) {
        if (!app.currentTrack) return;

        // Find the artist
        const artist = mockData.artists.find(a => a.name === app.currentTrack.artist);
        if (artist) {
            // Navigate to artists page
            NavigationManager.navigateToPage('artists', app);
            // Show artist modal
            ModalManager.showArtistModal(artist, app);
        }
    }

    static seekTo(percent, app) {
        app.currentTime = app.duration * percent;
        this.updateProgressBar(app);
    }

    static setVolume(percent, app) {
        app.volume = Math.max(0, Math.min(1, percent));
        this.updateVolumeBar(app);
    }

    static updatePlayer(app) {
        if (app.currentTrack) {
            document.getElementById('player-track-image').src = app.currentTrack.image;
            document.getElementById('player-track-name').textContent = app.currentTrack.name;
            document.getElementById('player-track-artist').textContent = app.currentTrack.artist;

            // Parse duration
            const [minutes, seconds] = app.currentTrack.duration.split(':').map(Number);
            app.duration = minutes * 60 + seconds;
            app.currentTime = 0;
        }
    }

    static updatePlayerUI(app) {
        const playBtn = document.getElementById('play-btn');
        playBtn.innerHTML = app.isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }

    static updateProgressBar(app) {
        const percent = app.duration > 0 ? (app.currentTime / app.duration) * 100 : 0;
        document.getElementById('progress-fill').style.width = `${percent}%`;
        document.getElementById('progress-handle').style.left = `${percent}%`;

        // Update time displays
        document.getElementById('current-time').textContent = this.formatTime(app.currentTime);
        document.getElementById('total-time').textContent = this.formatTime(app.duration);
    }

    static updateVolumeBar(app) {
        const percent = app.volume * 100;
        document.getElementById('volume-fill').style.width = `${percent}%`;
        document.getElementById('volume-handle').style.left = `${percent}%`;

        // Update volume icon
        const volumeBtn = document.getElementById('volume-btn');
        if (app.volume === 0) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else if (app.volume < 0.5) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
        } else {
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }

    static formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    static simulatePlayback(app) {
        if (!app.isPlaying || !app.currentTrack) return;

        const interval = setInterval(() => {
            if (!app.isPlaying) {
                clearInterval(interval);
                return;
            }

            app.currentTime += 0.1;

            if (app.currentTime >= app.duration) {
                app.currentTime = 0;

                // Handle repeat modes
                if (app.repeatMode === 'one') {
                    // Replay current track
                    app.currentTime = 0;
                } else if (app.repeatMode === 'all' || app.repeatMode === 'off') {
                    // Play next track
                    this.playNext(app);
                    clearInterval(interval);
                    return;
                }
            }

            this.updateProgressBar(app);
        }, 100);
    }

    static setupPlayerListeners(app) {
        // Player controls
        document.getElementById('play-btn').addEventListener('click', () => this.togglePlay(app));
        document.getElementById('prev-btn').addEventListener('click', () => this.playPrevious(app));
        document.getElementById('next-btn').addEventListener('click', () => this.playNext(app));
        document.getElementById('shuffle-btn').addEventListener('click', () => this.toggleShuffle(app));
        document.getElementById('repeat-btn').addEventListener('click', () => this.toggleRepeat(app));
        document.getElementById('favorite-btn').addEventListener('click', () => this.toggleFavorite(app));
        document.getElementById('fullscreen-btn').addEventListener('click', () => this.toggleFullscreen(app));

        // Artist name click
        document.getElementById('player-track-artist').addEventListener('click', () => this.navigateToArtist(app));

        // Fullscreen change listener
        document.addEventListener('fullscreenchange', () => this.handleFullscreenChange(app));
        document.addEventListener('webkitfullscreenchange', () => this.handleFullscreenChange(app));
        document.addEventListener('mozfullscreenchange', () => this.handleFullscreenChange(app));
        document.addEventListener('MSFullscreenChange', () => this.handleFullscreenChange(app));

        // Progress bar
        const progressBar = document.querySelector('.progress-bar');
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            this.seekTo(percent, app);
        });

        // Volume slider
        const volumeSlider = document.querySelector('.volume-slider');
        volumeSlider.addEventListener('click', (e) => {
            const rect = volumeSlider.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            this.setVolume(percent, app);
        });
    }

    static handleFullscreenChange(app) {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            // Exited fullscreen
            fullscreenBtn.classList.remove('active');
        }
    }
}