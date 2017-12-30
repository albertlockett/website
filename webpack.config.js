const rules = [
  {
    test: /\.scss$/,
    use: [
      { loader: "style-loader" }, 
      { loader: "css-loader" }, 
      { loader: "sass-loader" }
    ]
  },
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader" }, 
      { loader: "css-loader" }
    ]
  }
];


export default {
  output: {
    filename: "index.js"
  },
  module: { rules }
}

export const webmail = {
  output: {
    filename: 'webmail.js'
  },
  module: { rules }
}