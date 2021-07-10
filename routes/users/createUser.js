
module.exports = async (req, res) => {
    try {


    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error",
            result: false,
        });
}