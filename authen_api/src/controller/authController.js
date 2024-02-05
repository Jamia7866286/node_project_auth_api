const authSignUpSchema = require("../schema/authSchema");
const { generateAccessToken } = require("../../utils");

exports.loginAuth = async (req, res, _) => {
    const email = req.body.email
    const password = req.body.password;
    try{
        const emailRes = await authSignUpSchema.findOne({email})
        const passwordRes = await authSignUpSchema.findOne({password})
        if(!emailRes){
            return res.status(404).json({
                status:0,
                error:"Email is not exist!",
            });
        }
        if(!passwordRes){
            return res.status(404).json({
                status:0,
                error:"Password is not same!",
            });
        }
        const token = generateAccessToken({
            email: req.body.email,
            password: req.body.password 
        });
        return res.status(200).json({
            status:"You are successfully log in...",
            token: token,
            username: emailRes.username
        });
    }
    catch(err){
        console.log(err)
    }
}


exports.signupAuth = async (req, res, _) => {
    const {username, email, password, referralcode} = req.body;
    try{
        // const token = generateAccessToken({
        //     username: username,
        //     password: password 
        // });
        res.status(200).json({
            status:"You are successfully sign up...",
            // token: token,
            // email: email,
            // password: password
        });
        const authSignUpResult = await authSignUpSchema.create({
            username, email, password, referralcode
        })
        await authSignUpResult.save();
    }
    catch(err){
        console.log(err)
    }
}