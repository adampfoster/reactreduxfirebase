if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  console.log('not prod');
  module.exports = require('./configureStore.dev');
}
