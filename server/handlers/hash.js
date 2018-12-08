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