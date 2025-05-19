import { users } from "../products/users.js";

export const getUsers = (req, res) => {
  res.json(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === Number(id));

  if (!findUser) {
    return res.json("user Not found");
  }
  res.json(findUser);
};
