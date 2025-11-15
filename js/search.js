// Search functionality
class SearchManager {
    static performSearch(query, app) {
        if (!query) {
            document.getElementById('search-results').innerHTML = '<p class="text-secondary">Start typing to search...</p>';
            return;
        }

        const results = {
            artists: mockData.artists.filter(artist =>
                artist.name.toLowerCase().includes(query.toLowerCase()) ||
                artist.genre.toLowerCase().includes(query.toLowerCase())
            ),
            albums: mockData.albums.filter(album =>
                album.title.toLowerCase().includes(query.toLowerCase()) ||
                album.artist.toLowerCase().includes(query.toLowerCase())
            ),
            tracks: mockData.recentlyPlayed.filter(track =>
                track.name.toLowerCase().includes(query.toLowerCase()) ||
                track.artist.toLowerCase().includes(query.toLowerCase())
            )
        };

        UIManager.renderSearchResults(document.getElementById('search-results'), results);
    }

    static loadSearchPage() {
        // Initialize search
        const searchInput = document.getElementById('search-input');
        searchInput.value = '';
        searchInput.focus();
    }

    static setupSearchListeners(app) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value, app);
            });
        }
    }
}