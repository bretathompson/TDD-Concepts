var reuest =require('request');

module.exports = function getUsers(calback){
    request.get('https://www.mysite.com/aip/users', function (err, res){
        callback(JSON.parse(res.body));
    });
}
