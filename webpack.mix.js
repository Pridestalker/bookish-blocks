const mix = require('laravel-mix');

const externals = {
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/components': 'wp.components',
    '@wordpress/compose': 'wp.compose',
    '@wordpress/data': 'wp.data',
    '@wordpress/date': 'wp.date',
    '@wordpress/editor': 'wp.editor',
    '@wordpress/element': 'wp.element',
    '@wordpress/hooks': 'wp.hooks',
    '@wordpress/i18n': 'wp.i18n',
    '@wordpress/plugins': 'wp.plugins',
};

mix.webpackConfig({
    externals
});

mix.react('./src/blocks/**/*.js', 'dist/scripts/')
    .react('./src/blocks/**/*.editor.jsx', 'dist/scripts/editor')
    .react('./src/blocks/**/*.frontend.jsx', 'dist/scripts/frontend');
