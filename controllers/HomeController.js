var db = require("../db");
var util = require("../utils.js");

//get user list
exports.userList = function (req, res) {
  console.log("userList girildi");
  db.query("SELECT * FROM user", function (err, result) {
    if (err) {
      return util.send(res, 404, "Database Error");
    }
    util.send(res, 200, "Success", result);
  });
}

//send entering or leaving status
exports.enteringLeaving = function (req, res) {

  var body = req.body;
  var userid = body.userid;
  var direct = body.direct;
  var type = body.type;

  console.log(body);

  db.query("INSERT INTO `psh_raw` (`rid`, `fk_user`, `time`, `direct`, `type`) VALUES (?, ?, NOW(), ?, ?)", [null, userid, direct, type], function (err, result) {
    if (err) {
      return util.send(res, 404, "Database Error");
    }
    util.send(res, 200, "Success", result);
  });
}

//get user last status
exports.lastStatus = function (req, res) {
  console.log("lastStatus girildi");
  var userid = req.body.userid;
  console.log(userid);
  db.query("SELECT direct FROM `psh_raw` WHERE fk_user = ? ORDER BY rid DESC LIMIT 1", [userid], function (err, result) {
    if (err) {
      return util.send(res, 400, "Database Error");
    }
    util.send(res, 200, "Success", result);
  });
}

//get users working times
exports.worktime = function (req, res) {
  console.log("Work Time girildi");
  var time = req.body.time;
  console.log(time);
  db.query("SELECT fk_user as userid, SUM(UNIX_TIMESTAMP(time) - UNIX_TIMESTAMP(GIRIS_ZAMANI)) AS fark FROM" +
    "(SELECT CIK.*,(SELECT MAX(GIR.time) FROM psh_raw GIR WHERE GIR.fk_user = CIK.fk_user AND GIR.time <= CIK.time and GIR.direct = 1) AS GIRIS_ZAMANI" +
    " FROM `psh_raw` CIK WHERE CIK.direct = 0 AND date_format( time, '%Y-%m' ) between ? and ?" +
    ") AS V1 GROUP BY fk_user", [time, time], function (err, result) {
      if (err) {
        return util.send(res, 400, "Database Error");
      }
      util.send(res, 200, "Success", result);
    });
}
