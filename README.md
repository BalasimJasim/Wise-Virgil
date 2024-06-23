import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import VerificationToken from "../models/verificationToken.js";

import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
export const registerUser = async (req, res, next) => {
try {
const {
firstName,
lastName,
email,
password,
address: { street, city, state, postalCode },
phoneNumber,
bonusPoints,
} = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      address: { street, city, state, postalCode },
      bonusPoints,
    });

    await newUser.save();
    const verificationToken = new VerificationToken({
      userID: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    });
    await verificationToken.save();

    //*************the link */
    const link = `http://localhost:5000/${user._id}/verify/${verificationToken.token}`;

    //**HTML TEMPLATE */
    const htmlTemplate = `
    <div>
      <p>Click on the link below to verify your email</p>
      <a href="${link}">Verify</a>
    </div>`;
    await sendEmail(user.email, "Verify Your Email", htmlTemplate);

    //**RESPOND TO THE USER  */

    res.status(201).json({
      message: "We sent to you an email, please verify your email address",
    });

} catch (error) {
next(error);
}
};

export const loginUser = async (req, res, next) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) {
return res.status(400).json({ error: "Invalid email or password" });
}
const isPasswordMatch = await bcrypt.compare(password, user.password);
if (!isPasswordMatch) {
return res.status(400).json({ error: "Invalid email or password" });
}
if (!user.isAccountVerified) {
let verificationToken = await VerificationToken.findOne({
userID: user.\_id,
});

      if (!verificationToken) {
        verificationToken = new VerificationToken({
          userID: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        });
        await verificationToken.save();
      }

      //** we send verfication email again here,just in case */
      const link = `http://localhost:5000/${user._id}/verify/${verificationToken.token}`;

      const htmlTemplate = `
      <div>
        <p>Click on the link below to verify your email</p>
        <a href="${link}">Verify</a>
      </div>`;
      await sendEmail(user.email, "Verify Your Email", htmlTemplate);

      res.status(201).json({
        message: "We sent to you an email, please verify your email address",
      });
    }
    const token = user.generateAuthToken();
    res.status(200).json({
      _id: user._id,
      isAdmin: user.isAdmin,

      token,
      username: user.username,
    });

} catch (error) {
next(error);
}
};

//\*\* token sign
const token = jwt.sign({ userID: user.\_id }, process.env.SECRET_KEY, {
expiresIn: "6h",
});
res.status(200).json({ token });
