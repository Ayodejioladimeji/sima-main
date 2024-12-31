<<<<<<< HEAD
import jwtDecode from 'jwt-decode';
=======
import {jwtDecode} from 'jwt-decode';
>>>>>>> f31f635 (Mobile new features)
import moment from 'moment';

const hasTokenExpired = token => {
  const decodedToken = jwtDecode(token);
<<<<<<< HEAD

  const expirationTime = decodedToken.exp * 1000;
  const currentTime = moment().valueOf();

=======
  const expirationTime = decodedToken.exp * 1000; // exp is in seconds, so multiply by 1000 for milliseconds
  const currentTime = Date.now(); // Get current time in milliseconds
>>>>>>> f31f635 (Mobile new features)
  return currentTime > expirationTime;
};

const isTokenExpiringSoon = (token, secondsBeforeExpiry = 28800) => {
  const decodedToken = jwtDecode(token);
<<<<<<< HEAD

  const expirationTime = decodedToken.exp * 1000;

  const currentTime = moment().unix();
  const timeLeft = decodedToken.exp - currentTime;

  return timeLeft < secondsBeforeExpiry;
=======
  const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
  const currentTime = Date.now(); // Get current time in milliseconds
  const timeLeft = expirationTime - currentTime;
  return timeLeft < secondsBeforeExpiry * 1000; // Convert seconds to milliseconds
>>>>>>> f31f635 (Mobile new features)
};

export {hasTokenExpired, isTokenExpiringSoon};
