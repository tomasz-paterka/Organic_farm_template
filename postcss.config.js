module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 11']
    }),
    require("css-mqpacker"),
    require('cssnano')({
      preset: 'default'
    }),
    require('precss')
  ]
}