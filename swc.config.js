module.exports = {
  jsc: {
    parser: {
      jsx: true,
      importAssertions: true
    },
    transform: {
      react: {
        runtime: 'automatic',
      }
    },
    target: 'es2022'
  },
  module: {
    type: 'es6'
  }
}
