// controllers/authController.js
exports.getLogin = (req, res) => {
    res.render('login');
};

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.postLogin = (req, res) => {
    // Lógica de autenticación
    res.send('Login Successful');
};

exports.postSignup = (req, res) => {
    // Lógica de registro
    res.send('Signup Successful');
};
