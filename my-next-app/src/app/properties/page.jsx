"use client";
import React from "react";
import PieChart from "../components/piechart";
import { PieChart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PropertyList() {
  const properties = [
    { id: 1, name: "Property 1", value: "$1000" },
    { id: 2, name: "Property 2", value: "$2000" },
    { id: 3, name: "Property 3", value: "$3000" },
  ];

  const chartData = {
    labels: properties.map((property) => property.name),
    datasets: [
      {
        data: properties.map((property) =>
          parseInt(property.value.replace("$", ""), 10)
        ),
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
        hoverBackgroundColor: ["#0056A3", "#007A6F", "#CC9A1E"],
      },
    ],
  };

  return (
    <div className="property-list">
      {properties.map((property) => (
        <Property key={property.id} data={property} />
      ))}
      <Pie data={chartData} />
    </div>
  );
}
