// "use client";
// import { useRef } from "react";
// import { Provider } from "react-redux";
// import { store, AppStore } from "../store/index";
// import datasetSlice from "../store/dataSet/dataset.slice";

// export default function StoreProvider({
//   count,
//   children,
// }: {
//   count: any;
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore>();
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = store();
//     storeRef.current.dispatch(datasetSlice(count));
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }
