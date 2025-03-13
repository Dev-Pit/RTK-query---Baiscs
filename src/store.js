import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceHolderApi } from "./services/jsonPlaceHolderApi";

export const store = configureStore({
  reducer: { [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceHolderApi.middleware),
});

setupListeners(store.dispatch);
