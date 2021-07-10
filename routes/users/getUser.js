


module.exports = (req, res) => {

    console.log("get User is called");
    res.status(200).json({
        message: "successful!"
    })
};