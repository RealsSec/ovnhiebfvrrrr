tailwind.config = {
    theme: {
        extend: {
            dropShadow: {
                'pink': '0 0px 6px rgba(255, 117, 255, 0.5)'
            },
            transitionDelay: {
                '0': '0ms',
                '2000': '2000ms',
            },
            colors: {
                'awesome-pink': '#ff75ff',
                'grey-background': '#0f0f0f'
            },
            keyframes: {
                'fade-in-center': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-1000px)'
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '80%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
            },
            animation: {
                'fade-in-center': 'fade-in-center 1.5s ease-out',
                'fade-in-down': 'fade-in-down 2s ease-out'
            }
        }
    }
}