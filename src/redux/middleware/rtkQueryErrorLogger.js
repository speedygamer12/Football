import { isRejectedWithValue } from '@reduxjs/toolkit';
import handleError from '../../utils/handleError';
/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  if (isRejectedWithValue(action)) {
    handleError(action.payload)
  }

  return next(action);
};