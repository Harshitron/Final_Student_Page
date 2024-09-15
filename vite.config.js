// vite.config.js
export default {
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // This allows `react-router-dom` to handle routes
  },
};