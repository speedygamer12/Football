import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger } from "./middleware/rtkQueryErrorLogger";
import { footballApi } from "./services/Football";

export const store = configureStore({
  reducer: {
    // Add your other reducers here
    [footballApi.reducerPath]: footballApi.reducer, // Add the RTK Query api reducer
  },
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware().concat(footballApi.middleware), rtkQueryErrorLogger], // Add the RTK Query middleware
});

setupListeners(store.dispatch); // Set up the listeners for automatic cache invalidation

export default store;