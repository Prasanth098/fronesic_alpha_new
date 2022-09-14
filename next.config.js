/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


const withImages = require("next-images");

const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "fonts/[name].[ext]",
              limit: 50,
            },
          },
        ],
      }
      // ...
    );
    return config;
  },
});
// module.exports = withImages({
//   images: {
//     loader: "imgix",
//     path: "https://noop/"
//   }
// });

// module.exports = {
//   images: {
//     domains: ['s3.ap-south-1.amazonaws.com'],
//     // path: "https://noop/"
//   },
// }
module.exports = withImages({
  images: {
    domains: ['s3.ap-south-1.amazonaws.com'],
    loader: 'akamai',
    path: '/'
  },
});

module.exports = nextConfig

