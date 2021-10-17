module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './*.{html,js}',
    ],
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    // themes:['light']
  }
}