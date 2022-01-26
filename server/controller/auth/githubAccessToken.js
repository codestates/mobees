require('dotenv').config();

// 깃헙에서 accessToken 발급 받는 과정

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = async(req, res) => {
    
	const githupAuthCode = req.body.authorizationCode
	console.log(githupAuthCode)

	// 1. 깃헙 access token 요청 (클라이언트 요청 바디로 받은 auth code 보내줌)
	const resData = await axios({
		methos: 'post',
		url: 'https://github.com/login/oauth/access_token', 
		headers: {accept: 'application/json'},
		data: {
			client_id: clientID,
			client_secret: clientSecret,
			code: githupAuthCode,
		}
	})
	console.log(resData.data)
	
	// 2. 발급받은 access token 클라이언트에 보내기
	// res.status(200).send({accessToken: resData.data.access_token, message:'ok'})
	await res.status(200).json({accessToken: resData.data.access_token, message:'ok'})
};