import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, updateProfile, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { authSlice } from './authSlice';

// Register
export const authSignUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: login });
      const { uid, displayName } = auth.currentUser;

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          userName: displayName,
        })
      );
    } catch (error) {
      throw error;
    }
  };

// LogIn
export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

// LogOut
export const authSignOut = () => async (dispatch, getState) => {
  await signOut(auth);
  dispatch(authSlice.actions.authSignOut());
};

// Change
export const authStateChange = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const { uid, displayName } = auth.currentUser;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          userName: displayName,
        })
      );
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    } else {
      // dispatch(authSlice.actions.authStateChange({ stateChange: false }));
    }
  });
};
