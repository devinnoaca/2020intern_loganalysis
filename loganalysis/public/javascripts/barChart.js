let margin = {top: 20, right: 20, bottom: 30, left: 40},  // 여백   
    width = 1500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
let x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);
let y = d3.scaleLinear()
      .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
let svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.json("123.json", function(error, data) { //빈칸으로 뚫어놔야함
    if (error) throw error;
// format the data
    data.forEach(function(d) {
        d.count = + d.count;
});

// Scale the range of the data in the domains
x.domain(data.map(function(d) { return d.ip; }));
y.domain([0, d3.max(data, function(d) { return d.count; })]);

// append the rectangles for the bar chart
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.ip); }) //고정된값 
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.count); })
    .attr("height", function(d) { return height - y(d.count); });

// add the x Axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// add the y Axis
svg.append("g")
    .call(d3.axisLeft(y));
});