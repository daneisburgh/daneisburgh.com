var time = 1200;

var windowWidth = $(window).width();
var windowHeight = $(window).height();

var welcome = ["The one, the only", "The great and powerful", "A man with a plan", "\"He's cool\" - Batman", "An outgoing introvert"];

var welcomeWidth = ["520px", "680px", "530px", "590px", "610px", "620px"];
var welcomeWidthSmall = ["231px", "308px", "250px", "270px", "285px", "288px"];

$(document).ready(function() {
	var num = Math.floor(Math.random()*welcome.length);

	if(windowWidth < 768){
		document.getElementById("resume-link").style.paddingRight = "10px";
		document.getElementById("icon-button").style.display = "none";
		document.getElementById("footer").style.display = "none";
		document.getElementById("ww").style.display = "none";
		document.getElementById("container").style.backgroundColor = "var(--gray)";
		document.getElementById("nav").style.width = welcomeWidthSmall[num];
		document.getElementById("home-link").innerHTML = welcome[num];

		$('#home-link').fadeOut(time*1.5, function(){
			document.getElementById("nav").style.width = "185px";
			$(this).text('Dane Isburgh').fadeIn(time*1.5);
		});

		setTimeout(function(){
			$('#nav').animate({width: windowWidth*.944, height: windowHeight}, time);
		}, time*2);

		setTimeout(function(){
			document.getElementById("main-row").className = "row main-row";
			$('#nav').animate({height: "50px"}, 0);
			$('#ww').fadeIn(time);
			$('#footer').fadeIn(time);
			$('#icon-button').fadeIn(time);
			$('#content-links').fadeIn(time);
			document.getElementById("icon-button").style.display = "inline-block";
			document.getElementById("nav").style.position = "static";
			document.getElementById("nav").style.height = "auto";
			document.getElementById("nav").style.width = "auto";
		}, time*3.1);
	}
	else{
		document.getElementById("footer").style.display = "none";
		document.getElementById("ww").style.display = "none";
		document.getElementById("icon-button").style.display = "none";
		document.getElementById("content-links").style.setProperty("display", "none", "important");

		document.getElementById("nav").style.width = welcomeWidth[num];
		document.getElementById("home-link").innerHTML = welcome[num];

		$('#home-link').fadeOut(time*1.5, function(){
			document.getElementById("nav").style.width = "400px";
			$(this).text('Dane Isburgh').fadeIn(time*1.5);
		});

		setTimeout(function(){
			$('#nav').animate({width: "740px", height: "608px"}, time);
		}, time*2);

		setTimeout(function(){
			$('#nav').animate({height: "86px"}, 0);
			$('#ww').fadeIn(time);
			$('#footer').fadeIn(time);
			$('#content-links').fadeIn(time);
			$("body").animate({backgroundColor: "transparent"}, time);
			document.getElementById("nav").style.position = "static";
		}, time*3.1);
	}

	var visited = $.cookie("visited");

	if (visited != null) {
		document.getElementById("again").style.display = "inline";
		document.getElementById("back").style.display = "inline";
	}

	$.cookie('visited', 'yes', { expires: 1, path: '/' });

	if(location.hash == ""){
		document.location.hash = home;
		setContent(home);
	}
	else setContent(location.hash);
});

window.onhashchange = function(){setContent(location.hash);};

var home = "#home", whoami = "#whoami", skills = "#skills", resume = "#resume", projects = "#projects";

var currentContent = "home-link";
var currentContentId = "home";

function setContent(hash){
	if(hash == home) tagContent = "home-link";
	else if(hash == whoami) tagContent = "whoami-link";
	else if(hash == skills) tagContent = "skills-link";
	else if(hash == resume) tagContent = "resume-link";
	else if(hash == projects) tagContent = "projects-link";

	// collpase navbar
    if(document.getElementById("hamburger-menu").className.includes("in") && windowWidth < 768){
		$('.btn-navbar').click(); //bootstrap 2.x
		$('.navbar-toggle').click() //bootstrap 3.x by Richard
	}

	if(currentContent != tagContent){
		document.getElementById(tagContent).style.cursor = "default";
		document.getElementById(currentContent).style.cursor = "pointer";

		if(tagContent != "home-link"){
			document.getElementById(tagContent).style.color = "#ffffff";
			document.getElementById(tagContent).className = "no-hover";
		}
		else{
			document.getElementById(tagContent).className = "navbar-brand no-hover";
		}

		if(currentContent != "home-link"){
			document.getElementById(currentContent).style.color = "";
			document.getElementById(currentContent).className = "";
		}
		else{
			document.getElementById(currentContent).className = "navbar-brand";
		}

		currentContent = tagContent;

		if(tagContent == "home-link"){
			var divId = "home";
			document.title = "Dane Isburgh";
		}
		else if(tagContent == "whoami-link"){
			var divId = "whoami";
			document.title = "Who's Dane?";
		}
		else if(tagContent == "skills-link"){
			var divId = "skills";
			document.title = "Skills";
		}
		else if(tagContent == "projects-link"){
			var divId = "projects";
			document.title = "Projects";
		}

		$('#content').fadeOut(time/4, function(){
			document.getElementById(currentContentId).style.display = "none";
			document.getElementById(divId).style.display = "block";
			currentContentId = divId;
			$('#content').fadeIn(time/4);
		});
	}
}

var currentResume = "education-link";
var currentResumeId = "education";

function setResume(tagResume){
	if(currentResume != tagResume){
		document.getElementById(tagResume).style.cursor = "default";
		document.getElementById(tagResume).style.color = "#323232";
		document.getElementById(tagResume).style.fontWeight = "bold";
		document.getElementById(tagResume).className = "no-hover";

		document.getElementById(currentResume).style.cursor = "pointer";
		document.getElementById(currentResume).style.fontWeight = "normal";
		document.getElementById(currentResume).style.color = "";
		document.getElementById(currentResume).className = "";

		currentResume = tagResume;

		if(tagResume == "education-link"){
			var divId = "education";
			var header = "Education";
			var dropdown1 = "Experience";
			var dropdown2 = "Extracurricular";
			var dropdown1Onclick = "experience-link";
			var dropdown2Onclick = "extracurricular-link";
		}
		else if(tagResume == "experience-link"){
			var divId = "experience";
			var header = "Experience";
			var dropdown1 = "Education";
			var dropdown2 = "Extracurricular";
			var dropdown1Onclick = "education-link";
			var dropdown2Onclick = "extracurricular-link";
		}
		else if(tagResume == "extracurricular-link"){
			var divId = "extracurricular";
			var header = "Extracurricular";
			var dropdown1 = "Education";
			var dropdown2 = "Experience";
			var dropdown1Onclick = "education-link";
			var dropdown2Onclick = "experience-link";
		}

		document.getElementById("resume-header").innerHTML = header+"<b class='caret'></b>";

		document.getElementById("resume-dropdown1").innerHTML = dropdown1;
		document.getElementById("resume-dropdown2").innerHTML = dropdown2;

		document.getElementById("resume-dropdown1").onclick = function() { setResume(dropdown1Onclick); }
		document.getElementById("resume-dropdown2").onclick = function() { setResume(dropdown2Onclick); }

		$('#resume-info').fadeOut(time/4, function(){
			document.getElementById(currentResumeId).style.display = "none";
			document.getElementById(divId).style.display = "block";
			currentResumeId = divId;
			$('#resume-info').fadeIn(time/4);
		});
	}
}

var currentProject = "sdd-link";
var currentProjectId = "sdd";

var projectNames = ["SDD", "BoxOff", "Rosie", "Stat Calc", "VICC", "IPB", "This site"];
var projectLinks = ["sdd-link", "boxoff-link", "rosie-link", "statcalc-link", "vicc-link", "ipb-link", "thissite-link"];

function setProject(tagProject){
	if(currentProject != tagProject){
		document.getElementById(tagProject).style.cursor = "default";
		document.getElementById(tagProject).style.color = "#323232";
		document.getElementById(tagProject).style.fontWeight = "bold";
		document.getElementById(tagProject).className = "no-hover";

		document.getElementById(currentProject).style.cursor = "pointer";
		document.getElementById(currentProject).style.fontWeight = "normal";
		document.getElementById(currentProject).style.color = "";
		document.getElementById(currentProject).className = "";

		currentProject = tagProject;

		if(tagProject == "sdd-link"){
			var divId = "sdd"
			var header = "SDD";
		}
		else if(tagProject == "boxoff-link"){
			var divId = "boxoff"
			var header = "BoxOff";
		}
		else if(tagProject == "rosie-link"){
			var divId = "rosie";
			var header = "Rosie";
		}
		else if(tagProject == "statcalc-link"){
			var divId = "statcalc";
			var header = "Stat Calc";
		}
		else if(tagProject == "vicc-link"){
			var divId = "vicc";
			var header = "VICC";
		}
		else if(tagProject == "ipb-link"){
			var divId = "ipb";
			var header = "IPB";
		}
		else if(tagProject == "thissite-link"){
			var divId = "thissite";
			var header = "This site";
		}

		document.getElementById("project-header").innerHTML = header+"<b class='caret'></b>";

		var count = 1;
		for(var i = 0; i<projectLinks.length; i++){
			var link = projectLinks[i].slice(0);
			if(link != currentProject && count <= projectLinks.length-1){
				document.getElementById("project-dropdown"+count).innerHTML = projectNames[i];

				if(projectNames[i] == "This site")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("thissite-link"); }
				else if(projectNames[i] == "SDD")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("sdd-link"); }
				else if(projectNames[i] == "BoxOff")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("boxoff-link"); }
				else if(projectNames[i] == "Rosie")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("rosie-link"); }
				else if(projectNames[i] == "Stat Calc")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("statcalc-link"); }
				else if(projectNames[i] == "VICC")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("vicc-link"); }
				else if(projectNames[i] == "IPB")
					document.getElementById("project-dropdown"+count).onclick = function(){ setProject("ipb-link"); }

				count++;
			}
		}

		$('#project-info').fadeOut(time/4, function(){
			document.getElementById(currentProjectId).style.display = "none";
			document.getElementById(divId).style.display = "block";
			currentProjectId = divId;
			$('#project-info').fadeIn(time/4);
		});
	}
}
