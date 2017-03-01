exports.send = function (res, code, message, payload) {
	if(!payload) {
		payload = {};
	}

	res.send({code: code, message: message, payload: payload});
}
