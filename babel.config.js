module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: false }],
    ['@babel/plugin-transform-private-methods', { loose: false }],
    ['@babel/plugin-transform-private-property-in-object', { loose: false }],
  ],
};
