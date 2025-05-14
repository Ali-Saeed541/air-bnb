const path = require('path');
const viewsPath = require('../utils/pathUtils');
const {user, pass} = require('../models/loginModel');

const welcomeRouter = (req, res) => {
    const {username, password} = req.body;
    if(username != "" && password != "" && user == username && pass == password){
        res.sendFile(path.join(viewsPath, 'welcome.html'));
    }else{
        res.sendFile(path.join(viewsPath, 'register.html'));
    }
    
}

module.exports = welcomeRouter;