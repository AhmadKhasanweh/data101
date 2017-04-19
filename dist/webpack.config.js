'use strict';

var path = require('path');

var config = {
  entry: './main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};

module.exports = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiY29uZmlnIiwiZW50cnkiLCJvdXRwdXQiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiZmlsZW5hbWUiLCJkZXZTZXJ2ZXIiLCJpbmxpbmUiLCJwb3J0IiwibW9kdWxlIiwibG9hZGVycyIsInRlc3QiLCJleGNsdWRlIiwibG9hZGVyIiwicXVlcnkiLCJwcmVzZXRzIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFJQyxTQUFTO0FBQ1hDLFNBQU8sV0FESTs7QUFHWEMsVUFBUTtBQUNOSixVQUFNQSxLQUFLSyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsUUFBeEIsQ0FEQTtBQUVOQyxjQUFVO0FBRkosR0FIRzs7QUFRWEMsYUFBVztBQUNUQyxZQUFRLElBREM7QUFFVEMsVUFBTTtBQUZHLEdBUkE7O0FBYVhDLFVBQVE7QUFDTkMsYUFBUyxDQUNQO0FBQ0VDLFlBQU0sU0FEUjtBQUVFQyxlQUFTLGNBRlg7QUFHRUMsY0FBUSxjQUhWO0FBSUVDLGFBQU87QUFDTEMsaUJBQVMsQ0FBQyxRQUFELEVBQVcsT0FBWDtBQURKO0FBSlQsS0FETztBQURIO0FBYkcsQ0FBYjs7QUEyQkFOLE9BQU9PLE9BQVAsR0FBaUJoQixNQUFqQiIsImZpbGUiOiJ3ZWJwYWNrLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG52YXIgY29uZmlnID0ge1xyXG4gIGVudHJ5OiAnLi9tYWluLmpzJyxcclxuICBcclxuICBvdXRwdXQ6IHtcclxuICAgIHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2Rpc3QnKSxcclxuICAgIGZpbGVuYW1lOiAnaW5kZXguanMnLFxyXG4gIH0sXHJcbiAgXHJcbiAgZGV2U2VydmVyOiB7XHJcbiAgICBpbmxpbmU6IHRydWUsXHJcbiAgICBwb3J0OiA4MDgwXHJcbiAgfSxcclxuICBcclxuICBtb2R1bGU6IHtcclxuICAgIGxvYWRlcnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC5qc3g/JC8sXHJcbiAgICAgICAgZXhjbHVkZTogL25vZGVfbW9kdWxlcy8sXHJcbiAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJyxcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgcHJlc2V0czogWydlczIwMTUnLCAncmVhY3QnXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29uZmlnOyJdfQ==