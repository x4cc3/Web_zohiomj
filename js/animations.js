// Animation and observer functionality
class AnimationManager {
    static initAnimations() {
        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        const observeCards = () => {
            document.querySelectorAll('.card, .artist-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        };

        // Initial observation
        setTimeout(observeCards, 100);

        // Re-observe when page content changes
        const pageContent = document.getElementById('page-content');
        const mutationObserver = new MutationObserver(() => {
            setTimeout(observeCards, 100);
        });

        mutationObserver.observe(pageContent, {
            childList: true,
            subtree: true
        });
    }
}