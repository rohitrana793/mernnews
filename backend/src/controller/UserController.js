class UserController {
  index(req, res) {
    return res.json({ message: "All users" });
  }
  show(req, res) {
    console.log(req.body);
    return res.json({ message: "Show users" });
  }
  store(req, res) {
    return res.json({ message: "Users created" });
  }
  update(req, res) {
    return res.json({ message: "User updated" });
  }
  delete(req, res) {
    return res.json({ message: "User deleted" });
  }
}

export default UserController;
