'use strict'

var Koa = require('koa')
var sha1 = require('sha1')
var config = {
	wechat: {
		appID: 'wx9eae6d5f4a1826a4',
		appSecret: '78cfaa157314d832705e1c27f2de1c00',
		token: 'todoornottodoisaquestionlyt9304'
	}
}

var app = new Koa()

app.use(function *(next) {
	console.log(this.query)

	var token = config.wechat.token
	var signature = this.query.token
	var nonce = this.query.nonce
	var timestamp = this.query.timestamp
	var echostr = this.query.echostr

	var str = [token, timestamp, nonce].sort().join('')
	var sha = sha1(str)

	if(sha === signature) {
		this.body = ecostr + ''
	} else {
		this.body = 'wrong'
	}

})

app.listen(1234)
console.log("listen:1234")