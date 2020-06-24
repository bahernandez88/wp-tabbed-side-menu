window.onload = function(){
	var sideTab1 = document.getElementById("sideTab1");
	var sideTab2 = document.getElementById("sideTab2");
	var sideTab3 = document.getElementById("sideTab3");
	var tab1Content = document.getElementById("tab1Content");
	var tab2Content = document.getElementById("tab2Content");
	var tab3Content = document.getElementById("tab3Content");
	
	sideTab2.style.backgroundColor = "#00639C";
	sideTab3.style.backgroundColor = "#00639C";
	
	
	
	sideTab1.addEventListener("click", function(){
		sideTab1.setAttribute("active", "");
		sideTab1.style.backgroundColor = "#0095EB";
		sideTab2.style.backgroundColor = "#00639C";
		sideTab3.style.backgroundColor = "#00639C";
		tab1Content.removeAttribute("hidden");
		tab2Content.setAttribute("hidden", "");
		tab3Content.setAttribute("hidden", "");
		
	});
	document.getElementById("sideTab2").addEventListener("click",function(){
		sideTab1.setAttribute("active", "");
		sideTab2.style.backgroundColor = "#0095EB";
		sideTab1.style.backgroundColor = "#00639C";
		sideTab3.style.backgroundColor = "#00639C";
		tab2Content.removeAttribute("hidden");
		tab1Content.setAttribute("hidden", "");
		tab3Content.setAttribute("hidden", "");
		
	});
	document.getElementById("sideTab3").addEventListener("click", function(){
		sideTab1.setAttribute("active", "");
		sideTab3.style.backgroundColor = "#0095EB";
		sideTab2.style.backgroundColor = "#00639C";
		sideTab1.style.backgroundColor = "#00639C";
		tab3Content.removeAttribute("hidden");
		tab1Content.setAttribute("hidden", "");
		tab2Content.setAttribute("hidden", "");
	});
