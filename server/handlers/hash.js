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
        const Crypto = require('crypto-js');
        const data = req.body.data
        const iteration = req.body.iteration
        const algorithm = req.body.algorithm

        const hash = await Crypto.MD5(data).toString()


      return res.status(200).json({
          hash
      });
    } catch (err) {
      return next({
        status: 400,
        message: err.message,
      });
    }
  };