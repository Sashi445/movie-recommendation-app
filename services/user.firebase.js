import {
  arrayUnion,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  where,
  arrayRemove,
  writeBatch,
  increment,
} from "firebase/firestore";
import { auth, firestore } from "./firebase.config";

export const getUser = async (uid) => {
  try {
    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("User doesn't exist!!");
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const isFollowing = async (targetId, uid) => {
  try {
    const targetUserDocRef = doc(firestore, "users", targetId);
    const targetUserDoc = await getDoc(targetUserDocRef);
    if (targetUserDoc.exists()) {
      const data = targetUserDoc.data();
      const followers = data.followers;
      let follows = false;
      followers.forEach((e) => {
        if (e === uid) follows = true;
      });
      return follows;
    } else {
      throw new Error("User doesn't exist");
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getFollowing = async (uid) => {
  try {
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("followers", "array-contains", uid));
    const followingDocs = await getDocs(q);
    let following = [];
    followingDocs.forEach((doc) => {
      if (doc.data()) following.push(doc.data());
    });
    console.log(following)
    return following;
  } catch (error) {
    console.log(error.message);
    console.log("Something went wrong while fetching following");
    return error.message;
  }
};

export const getFollowers = async (uid) => {
  try {
    const userDocRef = doc(firestore, "users", uid);

    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log(userData);
      return userData.followers.length;
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const followUser = async (targetId) => {
  try {
    const uid = auth.currentUser.uid;

    const currUserDocRef = doc(firestore, "users", uid);
    const targetUserDocRef = doc(firestore, "users", targetId);

    const batch = writeBatch(firestore);

    batch.update(currUserDocRef, { following: increment(1) });
    batch.update(targetUserDocRef, { followers: arrayUnion(uid) });

    await batch.commit();

    return true;
  } catch (error) {
    // TODO: Implement error handling
    console.log(error.message);
    return false;
  }
};

export const unfollowUser = async (targetId) => {
  try {
    const uid = auth.currentUser.uid;
    const targetUserDocRef = doc(firestore, "users", targetId);
    const currUserDocRef = doc(firestore, "users", uid);
    const batch = writeBatch(firestore);
    batch.update(currUserDocRef, { following: increment(-1) });
    batch.update(targetUserDocRef, { followers: arrayRemove(uid) });
    await batch.commit();
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getDbUsers = async () => {
  try {
    const q = query(collection(firestore, "users"));
    const querySnapshot = await getDocs(q);
    let users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

