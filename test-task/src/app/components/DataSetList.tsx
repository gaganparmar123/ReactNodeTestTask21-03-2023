"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDatasets } from "@/services/Dataset.service";

const DataSetList = () => {
  const router = useRouter();
  const [datasetList, setDatasetList] = useState<any>([]);

  useEffect(() => {
    getDatasets("/catagory")
      .then((res) => {
        setDatasetList(res);
      })
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <div className="flex items-center p-4 w-full">
        <div className="bg-white w-full sm:w-1/2 lg:w-196 border border-gray-200 divide-y divide-gray-200">
          {datasetList &&
            datasetList?.data?.map((item: any) => (
              <details key={item?._id}>
                <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">
                  {item?.name}
                </summary>
                <div className="ml-10">
                  {item?.subcategories?.map((sub: any) => (
                    <button
                      key={sub?._id}
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                      onClick={() => router.push(`/data-insights/${sub?._id}`)}
                    >
                      <li> {sub?.name} </li>
                    </button>
                  ))}
                </div>
              </details>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DataSetList;
