/* Created by :
            ___ ___       __          _____     ____  
  ____  ____/ (_) (_)___  / /_  ____ _/ __(_)___/ / /_ 
 / __ \/ __  / / / / __ \/ __ \/ __ `/ /_/ / __  / __ \
/ /_/ / /_/ / / / / /_/ / / / / /_/ / __/ / /_/ / / / /
\____/\__,_/_/_/_/\____/_/ /_/\__,_/_/ /_/\__,_/_/ /_/  */

function klik() {

	var obj = document.getElementById("sel1");
    var obj2 = document.getElementById("sel2");
	var wew = obj.options[obj.selectedIndex].text;
	var wew2 = obj2.options[obj2.selectedIndex].text;
	
	if(wew == "Dirut" && wew2 == "Kabid1"){
		document.getElementById("dir").style.background = "#000000";
		document.getElementById("dir").style.color = "#FFFFFF";
		document.getElementById("kab1").style.background = "#34B709";
		document.getElementById("kab1").style.color = "#FFFFFF";
		 var txtOutput = document.getElementById("txtOutput");
		 txtOutput.value = "Dirut > Kabid1";
	}else if(wew == "Dirut" && wew2 == "Kabid2"){
		document.getElementById("dir").style.background = "#000000";
		document.getElementById("dir").style.color = "#FFFFFF";
		document.getElementById("kab2").style.background = "#34B709";
		document.getElementById("kab2").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		 txtOutput.value = "Dirut > Kabid2";
	}else if(wew == "Kabid1" && wew2 == "Staf1"){
		document.getElementById("kab1").style.background = "#000000";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("sta1").style.background = "#34B709";
		document.getElementById("sta1").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid1 > Staf1";
	}else if(wew == "Kabid1" && wew2 == "Staf2"){
		document.getElementById("kab1").style.background = "#000000";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("sta2").style.background = "#34B709";
		document.getElementById("sta2").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid1 > Staf2";
	}else if(wew == "Kabid2" && wew2 == "Staf3"){
		document.getElementById("kab2").style.background = "#000000";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("sta3").style.background = "#34B709";
		document.getElementById("sta3").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid2 > Staf3";
	}else if(wew == "Kabid2" && wew2 == "Staf4"){
		document.getElementById("kab2").style.background = "#000000";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("sta4").style.background = "#34B709";
		document.getElementById("sta4").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid2 > Staf4";
	}else if(wew == "Staf1" && wew2 == "Dirut"){
		document.getElementById("sta1").style.background = "#000000";
		document.getElementById("sta1").style.color = "#FFFFFF";
		document.getElementById("kab1").style.background = "#34B709";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Staf1 > Kabid 1 > Dirut";
	}else if(wew == "Staf2" && wew2 == "Dirut"){
		document.getElementById("sta2").style.background = "#000000";
		document.getElementById("sta2").style.color = "#FFFFFF";
		document.getElementById("kab1").style.background = "#34B709";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Staf2 > Kabid 1 > Dirut";
	}else if(wew == "Staf3" && wew2 == "Dirut"){
		document.getElementById("sta3").style.background = "#000000";
		document.getElementById("sta3").style.color = "#FFFFFF";
		document.getElementById("kab2").style.background = "#34B709";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Staf3 > Kabid 2 > Dirut";
	}else if(wew == "Staf4" && wew2 == "Dirut"){
		document.getElementById("sta4").style.background = "#000000";
		document.getElementById("sta4").style.color = "#FFFFFF";
		document.getElementById("kab2").style.background = "#34B709";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Staf4 > Kabid 2 > Dirut";
	}else if(wew == "Kabid1" && wew2 == "Dirut"){
		document.getElementById("kab1").style.background = "#000000";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid 1 > Dirut";
	}else if(wew == "Kabid2" && wew2 == "Dirut"){
		document.getElementById("kab2").style.background = "#000000";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid 2 > Dirut";
	}else if(wew == "Kabid1" && wew2 == "Kabid2"){
		document.getElementById("kab1").style.background = "#000000";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("kab2").style.background = "#34B709";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid 1 > Dirut > Kabid 2";
	}else if(wew == "Kabid2" && wew2 == "Kabid1"){
		document.getElementById("kab2").style.background = "#000000";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("kab1").style.background = "#34B709";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("dir").style.background = "#34B709";
		document.getElementById("dir").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Kabid 2 > Dirut > Kabid 1";
	}else if(wew == "Dirut" && wew2 == "Staf1"){
		document.getElementById("dir").style.background = "#000000";
		document.getElementById("dir").style.color = "#FFFFFF";
		document.getElementById("kab1").style.background = "#34B709";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("sta1").style.background = "#34B709";
		document.getElementById("sta1").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Dirut > Kabid 1 > Staf1";
	}else if(wew == "Dirut" && wew2 == "Staf2"){
		document.getElementById("dir").style.background = "#000000";
		document.getElementById("dir").style.color = "#FFFFFF";
		document.getElementById("kab1").style.background = "#34B709";
		document.getElementById("kab1").style.color = "#FFFFFF";
		document.getElementById("sta2").style.background = "#34B709";
		document.getElementById("sta2").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Dirut > Kabid 1 > Staf2";
	}else if(wew == "Dirut" && wew2 == "Staf3"){
		document.getElementById("dir").style.background = "#000000";
		document.getElementById("dir").style.color = "#FFFFFF";
		document.getElementById("kab2").style.background = "#34B709";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("sta3").style.background = "#34B709";
		document.getElementById("sta3").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Dirut > Kabid 1 > Staf3";
	}else if(wew == "Dirut" && wew2 == "Staf4"){
		document.getElementById("dir").style.background = "#000000";
		document.getElementById("dir").style.color = "#FFFFFF";
		document.getElementById("kab2").style.background = "#34B709";
		document.getElementById("kab2").style.color = "#FFFFFF";
		document.getElementById("sta4").style.background = "#34B709";
		document.getElementById("sta4").style.color = "#FFFFFF";
		var txtOutput = document.getElementById("txtOutput");
		txtOutput.value = "Dirut > Kabid 1 > Staf4";
	}
	
	
	/* var str = "Alkalosis";
    document.getElementById("staf3").style.background = "#0000FF"; */
/* var txtOutput = document.getElementById("txtOutput");
txtOutput.value = "Hi there, " + str +  "!" */
}

/* Created by :
            ___ ___       __          _____     ____  
  ____  ____/ (_) (_)___  / /_  ____ _/ __(_)___/ / /_ 
 / __ \/ __  / / / / __ \/ __ \/ __ `/ /_/ / __  / __ \
/ /_/ / /_/ / / / / /_/ / / / / /_/ / __/ / /_/ / / / /
\____/\__,_/_/_/_/\____/_/ /_/\__,_/_/ /_/\__,_/_/ /_/  */