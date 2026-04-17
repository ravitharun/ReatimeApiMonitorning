const userMidleware = async (req, res, next) => {
    try {
        console.log('hey ia am userMidleware');

        next()
    } catch (err) {
        console.log(err)

    }
}

module.exports = userMidleware