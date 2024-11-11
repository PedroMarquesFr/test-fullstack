const userService = require('../services/userService');

const newUser = async (req, res) => {
  const { displayName, email, document, phone, status } = req.body;
  console.log(status)
  const tokenOrError = await userService.newUser(
    displayName,
    email,
    document,
    phone,
    status
  );
  res.status(tokenOrError.message ? tokenOrError.code : 201).json(tokenOrError);
};

const listUser = async (req, res) => {
  const users = await userService.getUsers();

  res.json(users);
};

const listSingleUser = async (req, res) => {
  const { id } = req.params;
  const userOrError = await userService.getSingleUser(id);
  res.status(userOrError.message ? userOrError.code : 200).json(userOrError);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { displayName, email, document, phone, roleId } = req.body;
  const isUpdated = await userService.updateUser({
    id,
    displayName,
    email,
    document,
    phone,
    roleId,
  });
  res.status(200).json(isUpdated);
};

const deleteUser = async (req, res) => {
  const { email } = req.body;
  const isDeleted = await userService.deleteUser(email);
  console.log(isDeleted);
  res.status(isDeleted.deleted ? 200 : 404).json(isDeleted);
};

module.exports = { newUser, listUser, listSingleUser, updateUser, deleteUser };
