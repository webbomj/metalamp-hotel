import './styles/index.scss';

const allImports = (context) => context.keys().map(context);
const allPages = require.context('./', true, /\.js$|\.scss$/);
allImports(allPages);
