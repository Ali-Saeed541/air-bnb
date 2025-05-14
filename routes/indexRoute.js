    
    const path = require('path');
    const viewsPath = require('../utils/pathUtils');

    const indexRouter = (req, res)=>{
        res.sendFile(path.join(viewsPath, 'index.html'));
    };

    module.exports = indexRouter;