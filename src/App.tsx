import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface GDPData {
  data: [string, number][];
  description: string;
  display_url: string;
  name: string;
  source_name: string;
}

function App() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Chart dimensions and margins
    const margin = { top: 80, right: 60, bottom: 80, left: 100 };
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add title
    svg
      .append("text")
      .attr("id", "title")
      .attr("x", (width + margin.left + margin.right) / 2)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .style("font-size", "28px")
      .style("font-weight", "bold")
      .style("fill", "#1e293b")
      .text("United States GDP");

    // Create tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("id", "tooltip")
      .style("position", "absolute")
      .style("padding", "10px")
      .style("background", "rgba(0, 0, 0, 0.8)")
      .style("color", "white")
      .style("border-radius", "5px")
      .style("font-size", "12px")
      .style("opacity", 0)
      .style("pointer-events", "none");

    // Load and process data
    d3.json<GDPData>("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then((data) => {
        if (!data || !data.data) return;

        const dataset = data.data;

        // Parse dates
        const parseDate = d3.timeParse("%Y-%m-%d");
        const formatDate = d3.timeFormat("%Y Q%q");

        const dates = dataset.map(d => parseDate(d[0])!);
        const gdpValues = dataset.map(d => d[1]);

        // Create scales
        const xScale = d3
          .scaleTime()
          .domain(d3.extent(dates) as [Date, Date])
          .range([0, width]);

        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(gdpValues)!])
          .range([height, 0]);

        // Create axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        // Add x-axis
        chart
          .append("g")
          .attr("id", "x-axis")
          .attr("transform", `translate(0,${height})`)
          .call(xAxis);

        // Add y-axis
        chart
          .append("g")
          .attr("id", "y-axis")
          .call(yAxis);

        // Calculate bar width
        const barWidth = width / dataset.length;

        // Create bars
        chart
          .selectAll(".bar")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", (d, i) => i * barWidth)
          .attr("y", d => yScale(d[1]))
          .attr("width", barWidth)
          .attr("height", d => height - yScale(d[1]))
          .attr("data-date", d => d[0])
          .attr("data-gdp", d => d[1])
          .style("fill", "#3b82f6")
          .on("mouseover", function(event, d) {
            const date = parseDate(d[0])!;
            
            tooltip
              .style("opacity", 0.9)
              .attr("data-date", d[0])
              .html(`${formatDate(date)}<br/>$${d[1]} Billion`)
              .style("left", (event.pageX + 10) + "px")
              .style("top", (event.pageY - 28) + "px");
          })
          .on("mouseout", function() {
            tooltip.style("opacity", 0);
          });

        // Add axis labels
        chart
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -60)
          .attr("x", -height / 2)
          .style("text-anchor", "middle")
          .style("font-size", "14px")
          .text("Gross Domestic Product");

        chart
          .append("text")
          .attr("y", height + 50)
          .attr("x", width / 2)
          .style("text-anchor", "middle")
          .style("font-size", "14px")
          .text("More Information: http://www.bea.gov/national/pdf/nipaguid.pdf");

      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });

    // Cleanup function
    return () => {
      d3.select("#tooltip").remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={chartRef}
          className="bg-white rounded-lg shadow-lg p-4"
        />
      </div>
    </div>
  );
}

export default App;