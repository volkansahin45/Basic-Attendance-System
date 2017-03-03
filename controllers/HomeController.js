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
  var startDate = req.body.startDate;
  var finishDate = req.body.finishDate;

  console.log("StartDate : " + startDate + "-FinishDate : " + finishDate);
  var query = "SELECT V2.fk_user,U.name, V2.Date, SUM(V2.Fark) AS 'workingtime' FROM (SELECT V1.fk_user, date_format( V1.Cikis_Zamani, '%Y-%m-%d') AS 'date', V1.Fark FROM (SELECT CIK.rid, CIK.fk_user ,(SELECT MAX(GIR.time) FROM psh_raw GIR WHERE GIR.fk_user = CIK.fk_user AND GIR.time <= CIK.time AND GIR.direct = 1) AS 'Giris_Zamani', CIK.time AS 'Cikis_Zamani', (SELECT UNIX_TIMESTAMP(Cikis_Zamani) - UNIX_TIMESTAMP(Giris_Zamani)) AS Fark FROM `psh_raw` CIK WHERE CIK.direct = 0) AS V1) AS V2 INNER JOIN user U ON V2.fk_user = U.uid GROUP BY V2.fk_user, V2.Date HAVING V2.Date BETWEEN ? AND ? ORDER BY fk_user";

  db.query(query, [startDate, finishDate], function (err, result) {
      if (err) {
        return util.send(res, 400, "Database Error");
      }
      util.send(res, 200, "Success", result);
    });
}
