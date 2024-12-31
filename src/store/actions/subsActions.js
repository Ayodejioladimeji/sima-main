export const FETCH_SUBSCRIPTION = 'FETCH_SUBSCRIPTION';
export const UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION';
export const RESET_SUBSCRIPTION = 'RESET_SUBSCRIPTION';

export const fetchSubscription = subscription => ({
  type: FETCH_SUBSCRIPTION,
  payload: subscription,
});

export const updateSubscription = newSubscription => ({
  type: UPDATE_SUBSCRIPTION,
  payload: newSubscription,
});

export const resetSubscription = () => ({
  type: RESET_SUBSCRIPTION,
});
