
const path = require('path');
const viewsPath = require('../utils/pathUtils');

const loginRouter = (req, res)=>{
    res.sendFile(path.join(viewsPath, 'login.html'));
};

module.exports = loginRouter;