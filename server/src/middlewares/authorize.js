function authorize (permissionRoles) {
    return (req, res, next) => {
        const user = req.user;

        let allowed = false;

        const allowedArray = user.roles.map(role => {
            if(permissionRoles.includes(role)) {
                allowed = true;
            }
        })

        if(! allowed) return res.status(403)
                                    .json({
                                        message: 'You are not allowed to access this page'
                                    });
        next();                            
    }
}

module.exports = authorize;