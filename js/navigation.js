// Navigation and page routing functionality
class NavigationManager {
    static navigateToPage(page, app) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        // Update pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.add('hidden');
        });
        document.getElementById(`${page}-page`).classList.remove('hidden');

        // Update breadcrumb
        const breadcrumbText = document.getElementById('breadcrumb-text');
        breadcrumbText.textContent = page.charAt(0).toUpperCase() + page.slice(1);

        app.currentPage = page;

        // Load page content
        switch(page) {
            case 'home':
                app.loadHomePage();
                break;
            case 'search':
                app.loadSearchPage();
                break;
            case 'library':
                app.loadLibraryPage();
                break;
            case 'artists':
                app.loadArtistsPage();
                break;
            case 'albums':
                app.loadAlbumsPage();
                break;
            case 'playlists':
                app.loadPlaylistsPage();
                break;
        }

        // Close mobile menu
        document.querySelector('.sidebar').classList.remove('active');
    }

    static switchLibraryTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`${tab}-tab`).classList.remove('hidden');
    }

    static setupNavigationListeners(app) {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                this.navigateToPage(page, app);
            });
        });

        // Mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const sidebar = document.querySelector('.sidebar');

        navToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Library tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                this.switchLibraryTab(tab);
            });
        });
    }
}