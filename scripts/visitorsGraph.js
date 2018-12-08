var text_color,color_on,color_off;

function graphConfig()
{
    /// CONFIG VARIABLES ///
    text_color = "black";
    color_on = "black";
    color_off = "gray";
    //// END OF CONFIG ////
}


function loadData()
{
    let data = [];
    for (let i = 0; i < 20; i++) {
        data.push
        (
            {
                date: new Date().getUTCDate() + i * 1000 * 60 * 60 * 24, // add one day for each data point
                value: i%5
            }
        );
    }
    return data;
}



function createGraph() {
    var container = d3.select("body").selectAll("div.graph");
    container.append("svg")
        .attr("width", 50)
        .attr("height", 50);

    var svgWidth = 1000, svgHeight = 400;
    var margin = {top: 20, right: 20, bottom: 30, left: 30};
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    let svg = container.append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    var g = svg.append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")"
        );

    var x = d3.scaleTime().rangeRound([0, width]);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var line = d3.line()
        .x(function (d) {
            return x(d.date)
        })
        .y(function (d) {
            return y(d.value)
        })
    x.domain(d3.extent(collection, function (d) {
        return d.date
    }));
    y.domain(d3.extent(collection, function (d) {
        return d.value
    }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();


        g.append("path")
        .datum(collection)
        .on("mouseover", mouseEnter)
        .on("mouseout", mouseLeave)
        .attr("fill", "none")
        .attr("stroke", color_on)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 10)
        .attr("d", line)
        .transition()
        .duration(2000)
        .attr("stroke-width", 3)
        .attr("stroke", color_off);



    g.append("g")

        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", text_color)
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Value");
}

function mouseEnter()
{
    d3.select(this)
        .transition()
        .attr("stroke-width", 10)
        .attr("stroke",color_on);
}

function mouseLeave()
{
    d3.select(this)
        .transition()
        .attr("stroke-width", 6)
        .attr("stroke",color_off);
}