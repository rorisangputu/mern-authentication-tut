import mongoose from "mongoose"
import bcryptjs from 'bcryptjs'
import { User } from '../models/user.model.js';
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        if (!email || !password || !name) {
            throw new Error("All fields are required");
        }
        const userAlreadyExists = await User.findOne({ email: email });

        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        const verificationToken = generateVerificationCode();
        const user = new User({
            email: email,
            password: hashedPassword,
            name: name,
            verificationToken: verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        })
        
        await user.save();

        //jwt
        generateTokenAndSetCookie(res, user._id);
        await sendVerificationEmail(user.email, verificationToken)
        
        res.status(201).json({
            success: true,
            message: "User created succesfully",
            user: {
                ...user._doc,
                password: undefined
            },
        });


    } catch(error) {
        return res.status(400).json({ success: false, message: error.message});
    }
}

export const login = async (req, res) => {
    res.send("Ollllaaa")
}
export const logout = async (req, res) => {

}