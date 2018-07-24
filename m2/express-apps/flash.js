// npm install --save connect-flash

// -- app.js

const flash = require('connect-flash');

// after the session middleware add the flash middleware

app.use(flash());

// -- route that sends the message

app.post('/form', (req, res, next) => { 
  req.flash('message-name', 'The message content');
  return res.redirect('/form');
});

// -- route that reads message

app.get('/form', (req, res, next) => { 
  const data = {
    messages: req.flash('message-name')
  };
  res.render('template-name', data);
});

// -- template-name.hbs

{{#if messages.length}}
<ul class="validation">
  {{#each messages}}<li>{{this}}</li>{{/each}}
</ul>
{{/if}}
