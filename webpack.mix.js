const mix = require('laravel-mix');
const tailwind = require('tailwindcss');
require('laravel-mix-purgecss');
const simpleParallax = require('simple-parallax-js');
let LiveReloadPlugin = require('webpack-livereload-plugin');

/** General WebPack configuration **/
mix.webpackConfig({
    externals: {
        jquery: 'jQuery',
        _: 'underscore'
    },
    plugins: [
        new LiveReloadPlugin()
    ]
});

/** BrowserSync w/ PHPStorm Live View Support **/
mix.browserSync({
    proxy: 'http://localhost:63342/SeaOfThieves/index.html',
    files: [
        './*.html'
    ],
});

/** Mix Our Assets **/
mix.sass('./assets/scss/main.scss', './dist/css/')
    .copyDirectory('./assets/images/', './dist/images/')
    .copyDirectory('./assets/fonts/', './dist/fonts/')
    .js('./assets/js/main.js', './dist/js/')
    .options({
        processCssUrls: false,
        postCss: [
            tailwind('./tailwind.js'),
        ],
    })
    .purgeCss();