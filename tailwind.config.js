 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'cream': '#F5F0E8',
                        'warm-white': '#FDFAF5',
                        'teal-deep': '#0D3B38',
                        'teal-mid': '#1A5C56',
                        'teal-light': '#2E8B7A',
                        'coral': '#E8533A',
                        'gold': '#D4A843',
                        'sage': '#8BB5A0',
                    },
                    fontFamily: {
                        display: ['Fraunces', 'serif'],
                        sans: ['DM Sans', 'sans-serif'],
                    },
                    animation: {
                        'scroll-left': 'scroll-left 25s linear infinite',
                    },
                    keyframes: {
                        'scroll-left': {
                            'from': { transform: 'translateX(0)' },
                            'to': { transform: 'translateX(-50%)' },
                        }
                    }
                }
            }
        }