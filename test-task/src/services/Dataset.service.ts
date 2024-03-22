import { AxiosRequestConfig } from "axios";
import { get, post, deleteMethod, patch } from "./ApiClient.service";

export const getDatasets = async (apiEndpoint?: string) => {
  return get(`${apiEndpoint}`, {}, false);
};
