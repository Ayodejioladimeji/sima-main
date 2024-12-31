import axios from 'axios';
import {baseUrl} from './baseUrl';
import catchErrors from './catchErrors';

export const checkServerConnection = async () => {
  const serverUrl = baseUrl;
  try {
    const response = await fetch(`${serverUrl}server`, {
      method: 'HEAD',
      timeout: 5000,
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const loadWebData = async setError => {
  try {
    const res = await axios.get(`${baseUrl}load-website-data`);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userSignup = async (data, setError) => {
  try {
    const res = await axios.post(`${baseUrl}signup`, data);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userSignupComplete = async (data, setError) => {
  try {
    const res = await axios.post(`${baseUrl}signup/complete`, data);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userLogin = async (data, setError) => {
<<<<<<< HEAD
=======
  console.log(`${baseUrl}login`);
>>>>>>> f31f635 (Mobile new features)
  try {
    const res = await axios.post(`${baseUrl}login`, data);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const googleLoginUser = async (newdata, setError) => {
  try {
    const res = await axios.post(`${baseUrl}google-login`, newdata);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const appleLoginUser = async (newdata, setError) => {
  try {
    const res = await axios.post(`${baseUrl}apple-login`, newdata);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userCategoryAdd = async (data, token, setError) => {
  try {
    const res = await axios.post(`${baseUrl}add-new-category`, data, {
      headers: {
        Authorization: token,
      },
    });

    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

<<<<<<< HEAD
=======
export const userCategoryDelete = async (categoryId, token, setError) => {
  try {
    const res = await axios.delete(`${baseUrl}category-delete/${categoryId}`, {
      headers: {
        Authorization: token,
      },
    });

    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

>>>>>>> f31f635 (Mobile new features)
export const userSavedReceipt = async (data, token, setError) => {
  try {
    const res = await axios.post(`${baseUrl}save-receipt`, data, {
      headers: {
        Authorization: token,
      },
    });

    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userLoad = async (authtoken, setError) => {
  try {
    const res = await axios.get(`${baseUrl}user-data`, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userRequestReport = async (authtoken, setError) => {
  try {
    const res = await axios.post(
      `${baseUrl}user-generate-report`,
      (data = null),
      {
        headers: {
          Authorization: authtoken,
        },
      },
    );
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const updateUserInfo = async (data, authtoken, setError) => {
  try {
    const res = await axios.put(`${baseUrl}user-data-update`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const updateUserCategory = async (
  data,
  categoryId,
  authtoken,
  setError,
) => {
  try {
    const res = await axios.put(
      `${baseUrl}category-update/${categoryId}`,
      data,
      {
        headers: {
          Authorization: authtoken,
        },
      },
    );
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const updateUserLang = async (data, authtoken, setError) => {
  try {
    const res = await axios.put(`${baseUrl}user-lang-update`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const updatePassword = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}user-password-update`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userForgotPasswordRequest = async (data, setError) => {
  try {
    const res = await axios.post(`${baseUrl}user-forgot-password-email`, data);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userForgotPasswordCheckOtp = async (data, setError) => {
  try {
    const res = await axios.post(`${baseUrl}user-forgot-password-otp`, data);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userForgotPasswordCheckUpdate = async (data, setError) => {
  try {
    const res = await axios.post(`${baseUrl}user-forgot-password-update`, data);
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userLoadSavedImages = async (authtoken, setError) => {
  try {
    const res = await axios.get(`${baseUrl}get-user-saved-images`, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const updateUserReceipt = async (data, authtoken, setError) => {
  try {
    const res = await axios.put(`${baseUrl}user-receipt-update`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const deleteUserReceiptData = async (id, authtoken, setError) => {
  try {
    const res = await axios.delete(`${baseUrl}user-receipt-delete/${id}`, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userStripePayment = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}payment`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const cancelUserStripePlan = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}cancel-subs`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userStripePaymentMade = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}payment-made`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userUpdateScanFrontend = async (authtoken, setError) => {
  try {
    const res = await axios.post(
      `${baseUrl}handle-url-scan-backend`,
      {},
      {
        headers: {
          Authorization: authtoken,
        },
      },
    );
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const userSendImageToEmail = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}user-send-image`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userAddTicket = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}add-new-contact`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userGetAllTicket = async (authtoken, setError) => {
  try {
    const res = await axios.get(`${baseUrl}get-all-contact`, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const userGetAllPlans = async (authtoken, setError) => {
  try {
    const res = await axios.get(`${baseUrl}list-plans`, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
export const userGetAllPayments = async (authtoken, setError) => {
  try {
    const res = await axios.get(`${baseUrl}payment-list`, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userUpdateTicket = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}reply-to-ticket`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userPasswordConfirmDel = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}check-acc-pass`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userDeleteAccountFrontend = async (authtoken, setError) => {
  try {
    const res = await axios.put(
      `${baseUrl}user-delete-acc`,
      {},
      {
        headers: {
          Authorization: authtoken,
        },
      },
    );
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userRefreshToken = async (token, setError) => {
  try {
    const res = await axios.post(
      `${baseUrl}user-refresh-token`,
      {},
      {
        headers: {
          Authorization: token,
        },
      },
    );

    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userVerifyIosReceipt = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}get-receipt-verify-ios`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const userVerifyAndroidReceipt = async (data, authtoken, setError) => {
  try {
    const res = await axios.post(`${baseUrl}get-receipt-verify-android`, data, {
      headers: {
        Authorization: authtoken,
      },
    });
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};

export const removeUserImageFrontend = async (authtoken, setError) => {
  try {
    const res = await axios.put(
      `${baseUrl}user-remove-image`,
      {},
      {
        headers: {
          Authorization: authtoken,
        },
      },
    );
    setError(null);
    return res;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};
