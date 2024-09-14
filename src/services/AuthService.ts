import { User } from "@context/AuthContext";

export const authenticate = async (email: string, password: string, fail?: boolean): Promise<{token: string, user: User}> => {
  return new Promise((resolve, reject) => {
    if (!fail && email && password) {
      resolve({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        user: {
          email: email,
          name: "John Doe"
        }
      });
    }
    else {
      reject(new Error('Failed to authenticate the user!'));
    }
  });
}

export const authenticateToken = async (token: string, fail?: boolean): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (!fail && token) {
      resolve({
        email: 'john.doe@test.lk',
        name: "John Doe"
      });
    }
    else {
      reject(new Error('Failed to authenticate the token!'));
    }
  });
}

export const userLogOut = async (fail?: boolean): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!fail) {
      resolve();
    }
    else {
      reject(new Error('Failed to sign the user out!'));
    }
  });
}

export const userRegister = async (user: User, password: string, fail?: boolean): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!fail && user && password) {
      resolve();
    }
    else {
      reject(new Error('Failed to register the user!'));
    }
  });
}
