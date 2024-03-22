"use client";

import { getDatasets, getProductDatasets } from "@/services/Dataset.service";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Rectangle,
  BarChart,
} from "recharts";
import { useRouter, useParams } from "next/navigation";
import TableLayout from "../../components/TableLayout";

export default function DataInsights() {
  const router = useRouter();
  const params = useParams();
  const [dataProductList, setDataProductList] = useState([]);
  const data = [
    { name: "1990", uv: 400, pv: 200, amt: 2400 },
    { name: "1995", uv: 200, pv: 200, amt: 2400 },
    { name: "2000", uv: 600, pv: 80, amt: 2400 },
    { name: "2005", uv: 100, pv: 1600, amt: 2400 },
    { name: "2010", uv: 900, pv: 1000, amt: 2400 },
    { name: "2015", uv: 800, pv: 400, amt: 2400 },
    { name: "2020", uv: 450, pv: 500, amt: 2400 },
    { name: "2025", uv: 2300, pv: 1700, amt: 2400 },
    { name: "2030", uv: 400, pv: 2400, amt: 2400 },
  ];

  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {
    getProductDatasets("/product", {
      params: {
        parent: params?.id,
      },
    })
      .then((res) => {
        setDataProductList(res?.data);
      })
      .catch((err) => console.log("err", err));
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center p-24 py-10">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-bold text-2xl">Fashion</h1>
        <button
          className="w-40 h-10 bg-stone-500 rounded-xl text-white"
          onClick={() => router.push("/")}
        >
          Go back
        </button>
      </div>
      <TableLayout dataProductList={dataProductList} />
      <div className="flex flex-col w-full items-center justify-center min-h-screen mt-10">
        <h1 className="text-4xl mb-5">Data Insights 01</h1>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={dataProductList}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <Line type="monotone" dataKey="saleCount" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <h1 className="text-4xl mt-10 mb-5">Data Insights</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={dataProductList}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="price"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="saleCount"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
