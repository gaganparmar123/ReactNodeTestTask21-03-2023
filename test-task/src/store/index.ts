import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import loaderSlice from "./loader/loader.slice";
import datasetSlice from "./dataSet/dataset.slice";

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

const rootReducer = combineReducers({
  loader: loaderSlice,
  dataset: datasetSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
