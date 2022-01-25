const { post } = require('../../models')
const { user } = require('../../models')
const { genre } = require('../../models')             // 테이블명이 요청 바디 키값이랑 같아서 인식을 못함...

const {checkAccessToken} = require('../tokenFunctions')

module.exports = async (req, res) => {

  console.log(checkAccessToken)
  
  const jwt = checkAccessToken(req)

  // 1. 토큰 유효한지 확인
  if (!jwt) {
    res.status(401).send({data: null, message: 'not authorized'})
  }

  // 토큰이 유효할 경우
  else {
    const { email } = jwt.email;
    const userInfo = await user.findOne({
      where : {email : email}
    })

    // 2. 가입된 유저인지 확인
    // if (userInfo) {
      
      const {image, movie_title, movie_theater, movie_date, movie_time, movie_seat, movie_genre} = req.body

      // 3. 모든 정보가 제공됐는지 확인      // genre는 관계형
      if (!image || !movie_title || !movie_theater || !movie_date || !movie_time || !movie_seat || !movie_genre) {
        res.status(422).send({data: null, message: 'Insufficient parameters supplied'})
      }
      // 토큰도 있고, 모든 정보가 담겨있을 경우 -> post db에 레코드 추가, 포스트-장르 조인테이블 레코드 추가
      else {
        const newPost = await post.create({
          email,
          image,
          movie_title,
          movie_theater,
          movie_date,
          movie_time,
          movie_seat,
          // include : [
          //   genre
          // ]
        })

        // 장르 테이블에서 요청으로 받은 장르 레코드의 id 찾아서 조인 테이블에 추가해주기
        const genreRecord = await genre.findOne({
          where : ({
            genre : movie_genre
          })
        })

        await Post_Genre.create({
          post_id : newPost.id,
          genre_id : genreRecord.id
        })

        // const genreId = await post.findOne({
        //   include : genre
        // })
        
        res.statsu(201).json({
          data : {
            uploading : newPost
          },
          message : 'ok'
        })
      }
    // }
  }
};