const Crypto = require('crypto-js');
const Cryptomd5 = require('crypto-js/md5')
const CryptoSHA1 = require('crypto-js/sha1')
const CryptoSHA256 = require('crypto-js/sha256')

exports.generateDummyHash = async (req, res, next) => {
  try {
    return res.status(200).json({
        hash: "00000000000000000000000000000000"
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.calculateHash = async (req, res, next) => {
    try {
        var data = req.body.data
        const iteration = req.body.iteration
        const algorithm = req.body.algorithm

        var hashedData
        
        if(algorithm == "md5"){
          for(var i=0; i<iteration; i++){
            hashedData = await Cryptomd5(data)
            data = hashedData
          }
        }
        else if(algorithm == "sha1"){
          for(var i=0; i<iteration; i++){
            hashedData = await CryptoSHA1(data)
            data = hashedData
          }
        }
        else{
          for(var i=0; i<iteration; i++){
            hashedData = await CryptoSHA256(data)
            data = hashedData
          }
        }
  
      return res.status(200).json({
        hash: hashedData.toString()
      });
    } catch (err) {
      return next({
        status: 400,
        message: err.message,
      });
    }
  };


  async function calculateHashWithMD5(data, iteration){
    var done = 1;
    var hash = await Crypto.MD5(data)

        for (var i = 1; i < iteration; i++) {
                hash = await Crypto.MD5(hash)
                done++;
                if(done === iteration)
                    break
        }

        hash = hash.toString()
        return hash
  }

  async function calculateHashWithSHA1(data, iteration){
    var done = 1;
    var hash = await Crypto.SHA1(data)

        for (var i = 1; i < iteration; i++) {
                hash = await Crypto.SHA1(hash)
                done++;
                if(done === iteration)
                    break
        }

        hash = hash.toString()
        return hash
  }

  async function calculateHashWithSHA256(data, iteration){
    var done = 1;
    var hash = await Crypto.SHA256(data)

        for (var i = 1; i < iteration; i++) {
                hash = await Crypto.SHA256(hash)
                done++;
                if(done === iteration)
                    break
        }

        hash = hash.toString()
        return hash
  }