/** Apply autoprefixr / any custom postcss properties for generation for TailwindCSS **/
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
}