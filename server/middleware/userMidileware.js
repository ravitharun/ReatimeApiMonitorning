export const userMidleware = async (req, res, next) => {
    try {

        next()
    } catch (err) {
        console.log(err)

    }
}