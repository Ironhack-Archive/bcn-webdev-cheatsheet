// npm install --save express-ejs-layouts

const expressLayouts = require('express-ejs-layouts');
// --

app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
