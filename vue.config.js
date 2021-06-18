function publicPath() {
    switch (process.env.NODE_ENV) {
        case "production": {
            return "/tim-harding/"
        }
        default: {
            return "/"
        }
    }
}

module.exports = {
    publicPath: publicPath(),
}