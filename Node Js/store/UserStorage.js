let userDetails = [];

const displayUser = () => {
  return userDetails;
};

const postUsers = (user) => {
  userDetails.push(user);
};

const deleteUser = (name) => {
  const afterUsersDelete = userDetails.filter((user) => user.name != name);
  userDetails = afterUsersDelete;
};

const displayUserBasedEmail = (email) => {
  const afterEmailFilterUser = userDetails.filter(
    (user) => user.email == email,
  );
  return afterEmailFilterUser;
};

//edit name based Email
const updateName = (name, email) => {
  const foundUser = userDetails.filter((user) => user.email == email);
  if (foundUser.length == 1) {
    foundUser[0].name = name;
  } else {
    console.log("email not found");
  }
};

module.exports = {
  updateName,
  displayUser,
  postUsers,
  deleteUser,
  displayUserBasedEmail,
};
