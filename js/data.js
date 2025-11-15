// Mock Data
const mockData = {
    tracks: [
        // Luna Eclipse tracks
        { id: 101, name: "Neon Dreams", artist: "Luna Eclipse", album: "Cosmic Journey", image: "https://picsum.photos/seed/track1/300/300", duration: "3:24" },
        { id: 102, name: "Electric Hearts", artist: "Luna Eclipse", album: "Cosmic Journey", image: "https://picsum.photos/seed/track2/300/300", duration: "4:12" },
        { id: 103, name: "Digital Love", artist: "Luna Eclipse", album: "Midnight Sessions", image: "https://picsum.photos/seed/track3/300/300", duration: "3:45" },
        { id: 104, name: "Synthwave Sunset", artist: "Luna Eclipse", album: "Midnight Sessions", image: "https://picsum.photos/seed/track4/300/300", duration: "3:58" },

        // Marcus Rivers tracks
        { id: 201, name: "Golden Hour", artist: "Marcus Rivers", album: "Desert Dreams", image: "https://picsum.photos/seed/track5/300/300", duration: "4:23" },
        { id: 202, name: "Highway Lines", artist: "Marcus Rivers", album: "Desert Dreams", image: "https://picsum.photos/seed/track6/300/300", duration: "3:56" },
        { id: 203, name: "Broken Strings", artist: "Marcus Rivers", album: "Acoustic Sessions", image: "https://picsum.photos/seed/track7/300/300", duration: "4:45" },
        { id: 204, name: "City Lights", artist: "Marcus Rivers", album: "Urban Tales", image: "https://picsum.photos/seed/track8/300/300", duration: "3:34" },

        // Aurora Beats tracks
        { id: 301, name: "Midnight Study", artist: "Aurora Beats", album: "Study Vibes", image: "https://picsum.photos/seed/track9/300/300", duration: "2:45" },
        { id: 302, name: "Coffee Shop Rain", artist: "Aurora Beats", album: "Study Vibes", image: "https://picsum.photos/seed/track10/300/300", duration: "3:12" },
        { id: 303, name: "Late Night Thoughts", artist: "Aurora Beats", album: "Contemplation", image: "https://picsum.photos/seed/track11/300/300", duration: "4:03" },
        { id: 304, name: "Sunday Morning", artist: "Aurora Beats", album: "Weekend Chill", image: "https://picsum.photos/seed/track12/300/300", duration: "3:28" },

        // The Cosmic Wanderers tracks
        { id: 401, name: "Space Odyssey", artist: "The Cosmic Wanderers", album: "Interstellar", image: "https://picsum.photos/seed/track13/300/300", duration: "6:12" },
        { id: 402, name: "Purple Haze", artist: "The Cosmic Wanderers", album: "Interstellar", image: "https://picsum.photos/seed/track14/300/300", duration: "5:45" },
        { id: 403, name: "Cosmic Dance", artist: "The Cosmic Wanderers", album: "Galaxy Tours", image: "https://picsum.photos/seed/track15/300/300", duration: "4:34" },
        { id: 404, name: "Stellar Journey", artist: "The Cosmic Wanderers", album: "Galaxy Tours", image: "https://picsum.photos/seed/track16/300/300", duration: "5:23" },

        // Sophia Chen tracks
        { id: 501, name: "Ethereal Strings", artist: "Sophia Chen", album: "Elegance", image: "https://picsum.photos/seed/track17/300/300", duration: "4:56" },
        { id: 502, name: "Moonlight Sonata (Remix)", artist: "Sophia Chen", album: "Modern Classics", image: "https://picsum.photos/seed/track18/300/300", duration: "5:23" },
        { id: 503, name: "Crystal Clear", artist: "Sophia Chen", album: "Elegance", image: "https://picsum.photos/seed/track19/300/300", duration: "3:45" },
        { id: 504, name: "Symphony of Dreams", artist: "Sophia Chen", album: "Orchestral", image: "https://picsum.photos/seed/track20/300/300", duration: "6:34" },

        // DJ Neon tracks
        { id: 601, name: "Drop the Bass", artist: "DJ Neon", album: "Festival Anthems", image: "https://picsum.photos/seed/track21/300/300", duration: "3:45" },
        { id: 602, name: "Laser Lights", artist: "DJ Neon", album: "Festival Anthems", image: "https://picsum.photos/seed/track22/300/300", duration: "4:12" },
        { id: 603, name: "Neon Nights", artist: "DJ Neon", album: "City Rhythms", image: "https://picsum.photos/seed/track23/300/300", duration: "3:34" },
        { id: 604, name: "Electric Paradise", artist: "DJ Neon", album: "Tropical House", image: "https://picsum.photos/seed/track24/300/300", duration: "4:56" }
    ],

    artists: [
        {
            id: 1,
            name: "Luna Eclipse",
            genre: "Electronic Pop",
            image: "https://picsum.photos/seed/artist1/300/300",
            followers: "2.5M",
            albums: 4,
            tracks: [
                { id: 101, name: "Neon Dreams", album: "Cosmic Journey", duration: "3:24" },
                { id: 102, name: "Electric Hearts", album: "Cosmic Journey", duration: "4:12" },
                { id: 103, name: "Digital Love", album: "Midnight Sessions", duration: "3:45" },
                { id: 104, name: "Synthwave Sunset", album: "Midnight Sessions", duration: "3:58" }
            ]
        },
        {
            id: 2,
            name: "Marcus Rivers",
            genre: "Indie Rock",
            image: "https://picsum.photos/seed/artist2/300/300",
            followers: "1.8M",
            albums: 6,
            tracks: [
                { id: 201, name: "Golden Hour", album: "Desert Dreams", duration: "4:23" },
                { id: 202, name: "Highway Lines", album: "Desert Dreams", duration: "3:56" },
                { id: 203, name: "Broken Strings", album: "Acoustic Sessions", duration: "4:45" },
                { id: 204, name: "City Lights", album: "Urban Tales", duration: "3:34" }
            ]
        },
        {
            id: 3,
            name: "Aurora Beats",
            genre: "Lo-Fi Hip Hop",
            image: "https://picsum.photos/seed/artist3/300/300",
            followers: "3.2M",
            albums: 8,
            tracks: [
                { id: 301, name: "Midnight Study", album: "Study Vibes", duration: "2:45" },
                { id: 302, name: "Coffee Shop Rain", album: "Study Vibes", duration: "3:12" },
                { id: 303, name: "Late Night Thoughts", album: "Contemplation", duration: "4:03" },
                { id: 304, name: "Sunday Morning", album: "Weekend Chill", duration: "3:28" }
            ]
        },
        {
            id: 4,
            name: "The Cosmic Wanderers",
            genre: "Psychedelic Rock",
            image: "https://picsum.photos/seed/artist4/300/300",
            followers: "980K",
            albums: 3,
            tracks: [
                { id: 401, name: "Space Odyssey", album: "Interstellar", duration: "6:12" },
                { id: 402, name: "Purple Haze", album: "Interstellar", duration: "5:45" },
                { id: 403, name: "Cosmic Dance", album: "Galaxy Tours", duration: "4:34" },
                { id: 404, name: "Stellar Journey", album: "Galaxy Tours", duration: "5:23" }
            ]
        },
        {
            id: 5,
            name: "Sophia Chen",
            genre: "Classical Crossover",
            image: "https://picsum.photos/seed/artist5/300/300",
            followers: "1.5M",
            albums: 5,
            tracks: [
                { id: 501, name: "Ethereal Strings", album: "Elegance", duration: "4:56" },
                { id: 502, name: "Moonlight Sonata (Remix)", album: "Modern Classics", duration: "5:23" },
                { id: 503, name: "Crystal Clear", album: "Elegance", duration: "3:45" },
                { id: 504, name: "Symphony of Dreams", album: "Orchestral", duration: "6:34" }
            ]
        },
        {
            id: 6,
            name: "DJ Neon",
            genre: "EDM",
            image: "https://picsum.photos/seed/artist6/300/300",
            followers: "4.1M",
            albums: 7,
            tracks: [
                { id: 601, name: "Drop the Bass", album: "Festival Anthems", duration: "3:45" },
                { id: 602, name: "Laser Lights", album: "Festival Anthems", duration: "4:12" },
                { id: 603, name: "Neon Nights", album: "City Rhythms", duration: "3:34" },
                { id: 604, name: "Electric Paradise", album: "Tropical House", duration: "4:56" }
            ]
        }
    ],

    albums: [
        {
            id: 1,
            title: "Cosmic Journey",
            artist: "Luna Eclipse",
            image: "https://picsum.photos/seed/album1/300/300",
            year: 2023,
            tracks: 12
        },
        {
            id: 2,
            title: "Desert Dreams",
            artist: "Marcus Rivers",
            image: "https://picsum.photos/seed/album2/300/300",
            year: 2023,
            tracks: 10
        },
        {
            id: 3,
            title: "Study Vibes",
            artist: "Aurora Beats",
            image: "https://picsum.photos/seed/album3/300/300",
            year: 2023,
            tracks: 15
        },
        {
            id: 4,
            title: "Interstellar",
            artist: "The Cosmic Wanderers",
            image: "https://picsum.photos/seed/album4/300/300",
            year: 2022,
            tracks: 8
        },
        {
            id: 5,
            title: "Elegance",
            artist: "Sophia Chen",
            image: "https://picsum.photos/seed/album5/300/300",
            year: 2023,
            tracks: 9
        },
        {
            id: 6,
            title: "Festival Anthems",
            artist: "DJ Neon",
            image: "https://picsum.photos/seed/album6/300/300",
            year: 2023,
            tracks: 14
        }
    ],

    playlists: [
        {
            id: 1,
            name: "Flexitify Favorites",
            description: "Your most loved tracks",
            image: "https://picsum.photos/seed/playlist1/300/300",
            tracks: 45,
            duration: "2h 45m"
        },
        {
            id: 2,
            name: "Chill Vibes",
            description: "Relax and unwind",
            image: "https://picsum.photos/seed/playlist2/300/300",
            tracks: 32,
            duration: "1h 58m"
        },
        {
            id: 3,
            name: "Workout Energy",
            description: "High intensity training",
            image: "https://picsum.photos/seed/playlist3/300/300",
            tracks: 28,
            duration: "1h 42m"
        },
        {
            id: 4,
            name: "Focus Flow",
            description: "Deep concentration music",
            image: "https://picsum.photos/seed/playlist4/300/300",
            tracks: 50,
            duration: "3h 15m"
        },
        {
            id: 5,
            name: "Party Mix",
            description: "Dance floor hits",
            image: "https://picsum.photos/seed/playlist5/300/300",
            tracks: 38,
            duration: "2h 20m"
        },
        {
            id: 6,
            name: "Acoustic Sessions",
            description: "Unplugged and intimate",
            image: "https://picsum.photos/seed/playlist6/300/300",
            tracks: 24,
            duration: "1h 35m"
        }
    ],

    recentlyPlayed: [
        { id: 101, name: "Neon Dreams", artist: "Luna Eclipse", album: "Cosmic Journey", image: "https://picsum.photos/seed/track1/300/300", duration: "3:24" },
        { id: 201, name: "Golden Hour", artist: "Marcus Rivers", album: "Desert Dreams", image: "https://picsum.photos/seed/track5/300/300", duration: "4:23" },
        { id: 301, name: "Midnight Study", artist: "Aurora Beats", album: "Study Vibes", image: "https://picsum.photos/seed/track9/300/300", duration: "2:45" },
        { id: 401, name: "Space Odyssey", artist: "The Cosmic Wanderers", album: "Interstellar", image: "https://picsum.photos/seed/track13/300/300", duration: "6:12" },
        { id: 501, name: "Ethereal Strings", artist: "Sophia Chen", album: "Elegance", image: "https://picsum.photos/seed/track17/300/300", duration: "4:56" },
        { id: 601, name: "Drop the Bass", artist: "DJ Neon", album: "Festival Anthems", image: "https://picsum.photos/seed/track21/300/300", duration: "3:45" }
    ]
};