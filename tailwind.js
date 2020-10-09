module.exports = {
    prefix: 'sot-',
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            mlg: '1200px',
            xl: '1280px',
        },
        extend: {
            fontSize: {
                'base': '14px',
                'menu': '15px',
                'md': '20px',
                'lg': '24px',
                'title': '34px',
                'cta': '12px',
                'sm': '10px',
                'xs': '9px',
                'xxs': '8px',
            },
            inset: {
                '1/5': '20%',
                '1/2': '50%',
                '1/10': '10%',
            },
            boxShadow: {
              'green': '0 0 25px 5px #00ff9c'
            },
            spacing: {
                px: '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '40': '10rem',
                '48': '12rem',
                '56': '14rem',
                '64': '16rem',
                'sep-sm': '60px',
                'sep-md': '85px',
                'sep-lg': '100px',
                'sep-xl': '130px'
            },
            padding: {
                px: '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '40': '10rem',
                '48': '12rem',
                '56': '14rem',
                '64': '16rem',
                'sep-sm': '60px',
                'sep-md': '85px',
                'sep-lg': '100px',
                'sep-xl': '130px'
            },
            fontFamily: {
                'manuskript': [
                    '"Manuskript"',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                'wind': [
                    '"Windlass"',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ]
            },
            colors: {
                'dark': '#0f0d09',
                menu: {
                    'green': '#a5cbb0',
                    'item-hover': '#fff',
                },
                button: {
                    'green': '#678667',
                    'turq': '#578c85',
                },
                title: {
                    'green': '#00ff9c',
                    'light': '#f1eee5',
                    'dark': '#0f0d09',
                    'gold': '#c39130',
                    'cobaltp': '#9498b3',
                },
                header: {
                    'dark': '#110B1D',
                    'hover': '#678667',
                },
                accent: {
                    'dark': '#A17E42',
                    'light': '#ffcd62',
                },
                'purple': '#6340A1',
                'light-brown': '#d3c8ac',
                'sand': '#e8e6d1',
                footer: {
                    'gray': '#999e9d',
                },
            },
            transitionDuration: {
                '75': '75ms',
                '100': '100ms',
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
                '700': '700ms',
                '1000': '1000ms',
            },
            backgroundPosition: {
                bottom: 'bottom',
                center: 'center',
                left: 'left',
                'left-bottom': 'left bottom',
                'left-top': 'left top',
                right: 'right',
                'right-bottom': 'right bottom',
                'right-top': 'right top',
                top: 'top',
            },
            minHeight: {
                0: '0',
                '1/10': '10%',
                '1/9': '11.11%',
                '1/8': '12.5%',
                '1/7': '14.2857%',
                '1/6': '16.6667%',
                '1/5': '20%',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
            }
        },
        linearGradientDirections: {
            't': '180deg',
        },
        linearGradientColors: {
            'sot-header-gradient': ['#0b1e24 0', 'rgba(11, 30, 36, 0)'],
        },
        conicGradientColors: {
            'menu': ['#0b1e24 180deg', 'rgba(11, 30, 36, 0) 0'],
        }
    },
    variants: {
        backgroundImage: ['responsive', 'hover', 'focus'],
        linearGradients: ['responsive'],
        repeatingLinearGradients: ['responsive'],
        position: ['responsive', 'hover', 'focus'],
    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-aspect-ratio')(),
        require('tailwindcss-transforms')({
            '3d': false
        }),
        require('tailwindcss-transitions')(),
        require('tailwindcss-visuallyhidden')(),
        require('tailwindcss-writing-mode')({
            variants: ['responsive']
        }),
        require('tailwindcss-triangle-after')({
            triangles: {
                select: {
                    color: 'menu-green',
                    direction: 'down',
                    size: [10, 6],
                },
                next: {
                    color: 'item-hover',
                    direction: 'right',
                    right: '2rem',
                    top: '3rem',
                    size: 12
                }
            },
        }),
    ],
    purge: {
        enabled: true,
        content: ['./*.html'],
    },
    experimental: {
        applyComplexClasses: true,
    },
}
