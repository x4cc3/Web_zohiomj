// Main application class and initialization
class FlexitifyApp {
    constructor() {
        this.currentPage = 'home';
        this.currentTrack = null;
        this.isPlaying = false;
        this.isFavorite = false;
        this.currentTime = 0;
        this.duration = 0;
        this.volume = 0.7;
        this.isShuffled = false;
        this.repeatMode = 'off'; // 'off', 'one', 'all'
        this.queue = [];
        this.currentQueueIndex = 0;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadHomePage();
        this.updatePlayer();
        AnimationManager.initAnimations();
    }

    setupEventListeners() {
        NavigationManager.setupNavigationListeners(this);
        PlayerManager.setupPlayerListeners(this);
        SearchManager.setupSearchListeners(this);
        ModalManager.setupModalListeners(this);
    }

    loadHomePage() {
        UIManager.renderRecentlyPlayed(document.getElementById('recently-played'));
        UIManager.renderRecommended(document.getElementById('recommended'));
        UIManager.renderPopularArtists(document.getElementById('popular-artists'));
    }

    loadSearchPage() {
        SearchManager.loadSearchPage();
    }

    loadLibraryPage() {
        UIManager.loadLibraryPlaylists(document.getElementById('library-playlists'));
        UIManager.loadLibraryArtists(document.getElementById('library-artists'));
        UIManager.loadLibraryAlbums(document.getElementById('library-albums'));
    }

    loadArtistsPage() {
        UIManager.loadArtistsPage(document.getElementById('all-artists'));
    }

    loadAlbumsPage() {
        UIManager.loadAlbumsPage(document.getElementById('all-albums'));
    }

    loadPlaylistsPage() {
        UIManager.loadPlaylistsPage(document.getElementById('all-playlists'));
    }

    // Player methods (delegated to PlayerManager)
    playTrack(track) {
        PlayerManager.playTrack(track, this);
    }

    togglePlay() {
        PlayerManager.togglePlay(this);
    }

    playPrevious() {
        PlayerManager.playPrevious(this);
    }

    playNext() {
        PlayerManager.playNext(this);
    }

    toggleShuffle() {
        PlayerManager.toggleShuffle(this);
    }

    toggleRepeat() {
        PlayerManager.toggleRepeat(this);
    }

    toggleFavorite() {
        PlayerManager.toggleFavorite(this);
    }

    seekTo(percent) {
        PlayerManager.seekTo(percent, this);
    }

    setVolume(percent) {
        PlayerManager.setVolume(percent, this);
    }

    updatePlayer() {
        PlayerManager.updatePlayer(this);
    }

    updatePlayerUI() {
        PlayerManager.updatePlayerUI(this);
    }

    updateProgressBar() {
        PlayerManager.updateProgressBar(this);
    }

    updateVolumeBar() {
        PlayerManager.updateVolumeBar(this);
    }

    formatTime(seconds) {
        return PlayerManager.formatTime(seconds);
    }

    simulatePlayback() {
        PlayerManager.simulatePlayback(this);
    }

    // Modal methods (delegated to ModalManager)
    showArtistModal(artist) {
        ModalManager.showArtistModal(artist, this);
    }

    closeArtistModal() {
        ModalManager.closeArtistModal();
    }

    // Navigation methods (delegated to NavigationManager)
    navigateToPage(page) {
        NavigationManager.navigateToPage(page, this);
    }

    switchLibraryTab(tab) {
        NavigationManager.switchLibraryTab(tab);
    }

    // Search methods (delegated to SearchManager)
    performSearch(query) {
        SearchManager.performSearch(query, this);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new FlexitifyApp();
});