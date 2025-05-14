const viewsPath = require('../utils/pathUtils')
const path = require('path')

const registerRouter = (req, res) => {
    const reqisteredData = {name, email, password, confirmPassword} = req.body;    
    res.sendFile(path.join(viewsPath, 'welcome.html'));
}

module.exports = registerRouter;

