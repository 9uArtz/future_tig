module.exports = function() {
    this.route = function (app) {
        var self = this;
        app.get('/chat/:chatId([0-9]+)', function (req, res) {
            if (req.session.userId === undefined) {
                res.redirect('/');
                return;
            }
            res.render('chat', {userId : req.session.userId});
        });
    };
};
