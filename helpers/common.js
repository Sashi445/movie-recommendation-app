export const createUserDoc = (user) => {
  return {
    username: user.email.split("@")[0],
    avatar: user.photoURL,
    email: user.email,
    displayName: user.displayName,
    verified: user.emailVerified,
    uid: user.uid,
    followers: [],
    following: 0,
    recommendations: [],
    recommended: [],
  };
};

export const getUserFromObj = (userObj) => {
  return {
    username: userObj.email.split("@")[0],
    avatar: userObj.photoURL,
    email: userObj.email,
    displayName: userObj.displayName,
    verified: userObj.emailVerified,
    uid: userObj.uid
  };
};
