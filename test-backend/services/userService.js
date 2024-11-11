const { Users } = require('../models');
const errMessage = require('./errMessage');
const { createNewToken } = require('./createNewToken');
const { validateCPF } = require('./tools/validateCPF');

const validateCamps = (displayName, email, document, phone) => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) return errMessage('"email" is required', 400);

  if (displayName.length < 4)
    return errMessage(
      '"displayName" length must be at least 4 characters long',
      400
    );
  if (!EMAIL_REGEX.test(email))
    return errMessage('"email" must be a valid email', 400);
  if (phone.length < 8)
    return errMessage('"phone" length must be at least 8 characters long', 400);
  // if (validateCPF(document)) return errMessage('"CPF" must be valid', 400);

  return { ok: 'ok' };
};

const newUser = async (displayName, email, document, phone, status) => {
  const isValid = validateCamps(displayName, email, document, phone);
  if (!isValid.ok) return isValid;
  if(status == null){
    status = 1;
  }
  try {
    const [user, created] = await Users.findOrCreate({
      where: { email },
      defaults: { displayName, email, document, phone, roleId: status },
    });

    if (!created) return errMessage('Usuário já existe', 409);
    return { ok: 'Usuário criado com sucesso.' };
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const checkUserByEmail = async (email) => {
  if (!email) return errMessage('Email nao enviado', 404);
  try {
    const user = Users.findOne({ where: { email } });
    console.log(user);
    if (!user) return errMessage('usuario nao encontrado', 404);
    return { user };
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const getUsers = async () => {
  try {
    const users = Users.findAll();
    return users;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const getSingleUser = async (id) => {
  try {
    const user = await Users.findByPk(id);
    if (!user) return errMessage('Usuário não existe', 404);
    return user;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const updateUser = async ({
  id,
  displayName,
  email,
  document,
  phone,
  roleId,
}) => {
  console.log( "XD", id,
    displayName,
    email,
    document,
    phone,
    roleId,)
  const isValid = validateCamps(displayName, email, document, phone);
  if (!isValid.ok || isNaN(id)) return isValid;
  const idNumber = parseInt(id);
  console.log({ idNumber, displayName, email, document, phone, roleId });
  console.log("opaAntes");
  try {
    const updated = await Users.update(
      { id: idNumber, displayName, email, document, phone, roleId },
      {
        where: {
          id: idNumber,
        },
      }
    );
    console.log("opaOk");
    return { ok: 'ok', updated };
  } catch (error) {
    console.log("opa");
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const deleteUser = async (email) => {
  if (!email) return errMessage('"email" is required', 400);
  try {
    const deleted = await Users.destroy({
      where: {
        email,
      },
    });
    console.log(deleted);
    return { ok: 'ok', deleted };
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

module.exports = {
  newUser,
  checkUserByEmail,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
