const zod = require("zod")

const signupBody = zod.object({
    username : zod.string().email() ,
    password: zod.string(),
    firstName: zod.string(),
    lastName :zod.string()
})

const signinBody =zod.object({
    username : zod.string().email(),
    password:zod.string()
})

module.exports = {
    signupBody,
    signinBody
}