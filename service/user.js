class UserService {
  constructor(userModel, jwt, tokenKey) {
    this.userModel = userModel;
    this.jwt = jwt;
    this.tokenKey = tokenKey;
  }

  async list(req, res) {
    const users = await userModel.find();
    res.json({ data: users });
  }

  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      const user = await userModel.findOne({ email });

      if (user)
        return res.status(400).json({ message: "Email already exists" });

      const newUser = new userModel({
        name,
        email,
        password,
        role,
      });

      await newUser.save();

      return res.status(200).json({ message: "User Created Successfully" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Try again later" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) return res.status(404).json({ email: "Email does not exist" });
      const match = compareSync(password, user.password);
      if (match) {
        const payload = {
          id: user.id,
          role: user.role,
        };
        const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
        let isAuth = false;
        if (user.role == "Architect") isAuth = true;
        return res.json({ token: `Bearer ${token}`, isAuth });
      } else return res.status(400).send({ password: "Wrong password" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Try again later" });
    }
  }

  async get(req, res) {
    try {
      const ID = req.params.id;
      const user = await userModel.findById({ _id: ID }).orFail(() => {
        return res.status(401).json({ message: "user not found" });
      });
      const type = user.role;
      console.log(user);
      console.log(type);
      res.json({ data: user });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Try again later" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const user = await userModel.findById(id);
      if (!user) return res.status(404).send({ error: "user does not exist" });
      userModel
        .updateOne({ _id: id }, { $set: req.body })
        .exec()
        .then(() => {
          res.json({ msg: "User updated successfully" });
        });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  }
}

module.exports = UserService;
