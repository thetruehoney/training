"use client";
import React from "react";
import PropertyTile from "../components/PropertyTile";
import "./dashboard.css";

export default function Dashboard() {
    const properties = [
        { id: 1, name: "Property 1", value: "£1000" },
        { id: 2, name: "Property 2", value: "£2000" },
        { id: 3, name: "Property 3", value: "£3000" },
    ];

    const chartData = {
        labels: properties.map((property) => property.name),
        datasets: [
            {
                data: properties.map((property) => parseInt(property.value.replace("£", ""), 10)),
                backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
                hoverBackgroundColor: ["#0056A3", "#007A6F", "#CC9A1E"],
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <div className="side-menu">
                <ul>
                    <li>Overview</li>
                    <li>Properties</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className="main-content">
                <div className="property-grid">
                    {properties.map((property, index) => (
                        <PropertyTile key={property.id} data={property} tileIndex={index} />
                    ))}
                </div>
                <div className="flex-container">
                <div className="chart-container"></div>
                <div className="chart-container"></div>
                <div className="chart-container"></div>
                <div className="chart-container"></div>
                </div>
                
            </div>
        </div>
    );
}
