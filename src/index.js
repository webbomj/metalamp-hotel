import "./styles/index.scss";

const allImports = (context) => context.keys().map(context);
const allContext = require.context("./", true, /\.js$|\.scss$/);
allImports(allContext);
