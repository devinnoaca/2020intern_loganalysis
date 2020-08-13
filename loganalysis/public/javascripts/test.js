
let margin = {top: 20, right: 20, bottom: 30, left: 40},  // 여백   
    width = 1500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
let x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);
let y = d3.scaleLinear()
        .range([height, 0]);
let chart2 = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

// get the data
    d3.json("/b.json", function(error, data) { //빈칸으로 뚫어놔야함
         if (error) throw error;
        // format the data
         data.forEach(function(d) {
            d.count = + d.count;
        });
    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.url; }));
    y.domain([0, d3.max(data, function(d) { return d.count; })]);

    // append the rectangles for the bar chart
    chart2.selectAll(".bar")
       .data(data)
       .enter().append("rect")
       .attr("class", "bar")
       .attr("x", function(d) { return x(d.url); }) //고정된값 
       .attr("width", x.bandwidth())
       .attr("y", function(d) { return y(d.count); })
       .attr("height", function(d) { return height - y(d.count); });

    // add the x Axis
    chart2.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x));

    // add the y Axis
    chart2.append("g")
       .call(d3.axisLeft(y));
});
