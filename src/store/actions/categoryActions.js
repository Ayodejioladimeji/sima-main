export const RESET_CATEGORIES = 'RESET_CATEGORIES';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

export const fetchCategories = categories => ({
  type: 'FETCH_CATEGORIES',
  payload: categories,
});

export const addCategory = category => ({
  type: 'ADD_CATEGORY',
  payload: category,
});

export const updateCategory = category => ({
  type: UPDATE_CATEGORY,
  payload: category,
});

export const removeCategory = categoryId => ({
  type: 'REMOVE_CATEGORY',
  payload: categoryId,
});

export const resetCategories = () => ({
  type: RESET_CATEGORIES,
});
