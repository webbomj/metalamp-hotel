import './styles/index.scss';

const setAllImports = (context) => context.keys().map(context);
const allPages = require.context('./', true, /\.js$|\.scss$/);
setAllImports(allPages);
