const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');
const UserModal = require("../models/user.js");

const secret = 'test';
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

const client = new OAuth2Client("662926865161-0thon9k0ialhlglfk2fh1encsjfs6195.apps.googleusercontent.com")
exports.googlelogin = (req, res) => {
    const { tokenId } = req.body;
    client.verifyIdToken({ idToken: tokenId, audience: "662926865161-0thon9k0ialhlglfk2fh1encsjfs6195.apps.googleusercontent.com" }).then(response => {
        const { email_verified, name, email } = response.payload;
        if (email_verified) {
          UserModal.findOne({ email }).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong... "
                    }) 
                } else {
                    if (user) {
                        const token = jwt.sign({ _id: user._id }, process.env.JWT_SIGNING_KEY, { expiresIn: '1h' });
                        const { _id, name, email } = user;

                        res.json({
                            token,
                            user: { _id, name, email }
                        })
                        
                    } else {
                        let password = email + process.env.JWT_SIGNING_KEY;
                        let newUser = new UserModal({email, password, name});
                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error: "Something went wrong... "
                                })
                            }
                            const token = jwt.sign({ _id: data._id }, process.env.JWT_SIGNING_KEY, { expiresIn: '1h' });
                            const { _id, name, email } = newUser;

                            res.json({
                                token,
                                user: { _id, name, email }
                            })
                            
                        })

                    }
                }
            })
        }

    })
}