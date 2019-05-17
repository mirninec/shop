const path = require('path');
const consoleColor = require('./util/ConsoleColor'); 

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5cda15d8cd9a8414f0c2bff7')
    .then(user => {
      const userName = user.name;
      consoleColor.blue('Пользователь "'+userName+ '" добавлен в запрос к приложению. (app.js, 26)');
      req.user = new User(user.name, user.email, user._id);
      next();
    })
    .catch(
      err => {
        consoleColor.red('Ошибка поиска пользователя в базе данных "user".');
        consoleColor.red(err);
      });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000, consoleColor.blue('  Приложение слушает 3000 порт! (app.js, 43)'));
});
