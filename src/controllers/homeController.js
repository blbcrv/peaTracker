// src/controllers/homeController.js
exports.getHomePage = (req, res) => {
    const data = {
        title: 'Home Page',
        message: 'Welcome to the home page!'
    };
    res.render('../views/home', data);
};
