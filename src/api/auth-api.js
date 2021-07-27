import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const getUser = async () => {
  try {
    const {email} = await auth().currentUser;

    return new Promise((resolve, reject) => {
      firestore()
        .collection('users')
        .where('email', '==', email)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.size) {
            documentSnapshot.forEach((documentSnapshot1) => {
              resolve(documentSnapshot1.data());
            });
          } else reject({});
          return;
        });
    });
  } catch (error) {
    reject(error);
  }
};

export function createUser(name, email, age) {
  try {
    return new Promise(async (resolve, reject) => {
      try {
        const createdUser = await firestore().collection('users').doc(age).set({
          name,
          email,
          age,
        });
        resolve(createdUser);
      } catch (err) {
        reject(err);
      }
    });
  } catch (error) {
    console.log(error, 'error');
  }
}

export const signInUser = async ({name, email, age, password}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    });

    const user = await createUser(name, email, age);
    console.log(user, 'user');

    return {};
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return {
          error: 'E-mail already in use.',
        };
      case 'auth/invalid-email':
        return {
          error: 'Invalid e-mail address format.',
        };
      case 'auth/weak-password':
        return {
          error: 'Password is too weak.',
        };
      case 'auth/too-many-requests':
        return {
          error: 'Too many request. Try again in a minute.',
        };
      default:
        return {
          error: 'Check your internet connection.',
        };
    }
  }
};

export const loginUser = async ({email, password}) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-email':
        return {
          error: 'Invalid email address format.',
        };
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return {
          error: 'Invalid email address or password.',
        };
      case 'auth/too-many-requests':
        return {
          error: 'Too many request. Try again in a minute.',
        };
      default:
        return {
          error: 'Check your internet connection.',
        };
    }
  }
};

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-email':
        return {
          error: 'Invalid email address format.',
        };
      case 'auth/user-not-found':
        return {
          error: 'User with this email does not exist.',
        };
      case 'auth/too-many-requests':
        return {
          error: 'Too many request. Try again in a minute.',
        };
      default:
        return {
          error: 'Check your internet connection.',
        };
    }
  }
};
