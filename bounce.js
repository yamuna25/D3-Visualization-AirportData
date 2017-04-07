
//Width and height of SVG canvas
w = 1300;
h = 500;

//Create SVG element
var svg = d3.select("body")
			.append("svg")
			.attr("width",w)
			.attr("height",h);

// add a circle
var c1 = svg.append("circle")
					  .attr("cx", 20)
					  .style("fill", "red")
					  .attr("cy", 30)
					  .attr("r", 20)
					  .attr("id","c1");

// move the circle with a basic transition  
c1
	.transition()
	.style("fill", "purple")
	.style("opacity", 0.5)
	.attr("cx", 920)
	.attr("cy", 50)
	.ease("bounce")
	.duration(2000)
	.attr("cy", 100)
	.attr("r", 50);
	
// add a bouncy circle
var c2 = svg.append("circle")
					  .attr("cx", 30)
					  .style("fill", "orange")
					  .attr("cy", 50)
					  .attr("r", 30)
					  .attr("id","c1");

// move the circle with a bouncy transition that lasts 2000 ms (2 sec)   
c2
	.transition()
	.style("fill", "red")
	.style("opacity", 0.5)
	.duration(2000)  
	.ease("bounce")
	.attr("r", 40)
	.attr("cx", 1200)
	.attr("cy", 200);

var c3 = svg.append("circle")
					  .style("fill", "green")
					  .attr("cx", 30)
					  .attr("cy", 80)
					  .attr("r", 40)
					  .attr("id","c1");

// move the circle with a bouncy transition that lasts 2000 ms (2 sec)   
c3
	.transition()
	.style("fill", "yellow")
	.style("opacity", 0.5)
	.duration(2000)  
	.ease("bounce")
	.attr("cx", 1050)
	.attr("cy", 200)
	.attr("r", 20)
		.each("end", function(){ // when the last transition ends
		d3.select(this)  	 // 'this' is the object 
		  .transition()      // add a new transition
          .ease("bounce")
		  .style("opacity", 0.5)
	
   });	
