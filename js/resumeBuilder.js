var skill = ["programming", "maths", "teaching", "learning"];
var bio = {
	"name" : "Stanisław Strzelecki",
	"role" : "developer",
	"contacts" : {
		"mobile" : "123454321",
		"email" : "generaldirector@gmail.com",
		"github" : "bestdeveloper",
		"twitter" : "mytwitter",
		"location" : "Warsaw"
	},
	"skills" : skill,
	"welcomeMessage" : "Hi everyone!",
	"biopic" : "images/ja_01.jpg",
	"display" : function()
	{
		var myName=HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(myName);
		var myRole=HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(myRole);
		var myImg = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(myImg);
		var welcome=HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(welcome);
		if (bio.skills.length>0)
		{
			$("#header").append(HTMLskillsStart);
			for (var i=0; i<bio.skills.length; i++)
			{
				var jeden_skill=HTMLskills.replace("%data%", bio.skills[i]);
				$("#header").append(jeden_skill);
			}
		}
		var contact_gener_m=HTMLcontactGeneric.replace("%contact%", "mobile:").replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(contact_gener_m);
		var contact_gener_e=HTMLcontactGeneric.replace("%contact%", "email:").replace("%data%", bio.contacts.email);
		$("#topContacts").append(contact_gener_e);
		var contact_gener_g=HTMLcontactGeneric.replace("%contact%", "github:").replace("%data%", bio.contacts.github);
		$("#topContacts").append(contact_gener_g);
		var contact_gener_t=HTMLcontactGeneric.replace("%contact%", "twitter:").replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(contact_gener_t);
		var addmobile=HTMLmobile.replace("%data%", bio.contacts.mobile).replace("white-text", "black-text");
		$("#footerContacts").append(addmobile);
		var addemail=HTMLemail.replace("%data%", bio.contacts.email).replace("white-text", "black-text");
		$("#footerContacts").append(addemail);
		var addgithub=HTMLgithub.replace("%data%", bio.contacts.github).replace("white-text", "black-text");
		$("#footerContacts").append(addgithub);
		var addtwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("white-text", "black-text");
		$("#footerContacts").append(addtwitter);
		var addlocation=HTMLlocation.replace("%data%", bio.contacts.location).replace("white-text", "black-text");
		$("#footerContacts").append(addlocation);
	}
};
var education = {
	"schools" : [
	{
		"name" : "XIV LO im. Stanisława Staszica",
		"location" : "Warsaw",
		"degree" : "student",
		"majors" : ["maths"],
		"dates" : 2018,
		"url" : "http://www.staszic.waw.pl"
	},
	{
		"name" : "MIM Uniwersity of Warsaw",
		"location" : "Warsaw",
		"degree" : "student",
		"majors" : ["maths"],
		"dates" : 2021,
		"url" : "https://www.mimuw.edu.pl"
	}
	],
	"onlineCourses" : [
	{
		"title" : "intro to HTML and CSS",
		"school" : "udacity.com",
		"date" : 2015,
		"url" : "http://www.udacity.com"
	},
	{
		"title" : "intro to JS",
		"school" : "udacity.com",
		"date" : 2015,
		"url" : "http://www.udacity.com"
	}
	],
	"display" : function()
	{
		for (school in education.schools)
		{
			$("#education").append(HTMLschoolStart);
			var nazwa=HTMLschoolName.replace("%data%", education.schools[school].name);
			//$(".education-entry:last").append(nazwa);
			var stopien = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(nazwa+stopien);
			var kiedy=HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(kiedy);
			var gdzie=HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(gdzie);
			for (one in education.schools[school].majors)
			{
				var szczegoly=HTMLschoolMajor.replace("%data%", education.schools[school].majors[one]);
				$(".education-entry:last").append(szczegoly);
			}
		}
	}
};
var work = {
	"jobs" : [
	{
		"title" : "junior PHP developer",
		"employer" : "Google",
		"dates" : "2022-2026",
		"location" : "Wroclaw",
		"info" : "My first work where I had a chance to incerase my knowledge and my skills. I'm glad I had a chance to work in there."
	},
	{
		"title" : "senior PHP developer",
		"employer" : "Microsoft",
		"dates" : "2027-now",
		"location" : "Warsaw",
		"info" : "That's my work now. It's a serious everyday challange which I have to face. But that's what I always wanted to do."
	}
	],
	"display" : function()
	{
		for (job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var szef=HTMLworkEmployer.replace("%data%", work.jobs[job].title);
			var kto=HTMLworkTitle.replace("%data%", work.jobs[job].employer);
			var szefija=szef+kto;
			$(".work-entry:last").append(szefija);
			var kiedy=HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(kiedy);
			var gdzie=HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(gdzie);
			var szczegoly=HTMLworkDescription.replace("%data%", work.jobs[job].info);
			$(".work-entry:last").append(szczegoly);
		}
	}
};
var project = {
	"projects" : [
	{
		"title" : "portfolio",
		"description" : "That was my first project in HTML. I learned a lot and now it's my portfolio that keeps all my done projects. <a href='http://aimaster.pl/portfolio_bootstrap'>You can find it here</a>",
		"dates" : "May 2015",
		"images" : ["images/p2_01.jpg"]
	},
	{
		"title" : "resume",
		"description" : "That's my second project. It help me master my JS skills. In future I will be able to use it as my professional resume. <a href='aimaster.pl/resume'>You can find it here</a>",
		"dates" : "April 2015",
		"images" : ["images/p1_01.jpg"]
	}
	],
	"display" : function()
	{
		for (one in project.projects)
		{
			$("#projects").append(HTMLprojectStart);
			var name=HTMLprojectTitle.replace("%data%", project.projects[one].title);
			$(".project-entry:last").append(name);
			var date=HTMLprojectDates.replace("%data%", project.projects[one].dates);
			$(".project-entry:last").append(date);
			var info=HTMLprojectDescription.replace("%data%", project.projects[one].description);
			$(".project-entry:last").append(info);
			for (pic in project.projects[one].images)
			{
				var pict=HTMLprojectImage.replace("%data%", project.projects[one].images[pic]);
				$(".project-entry:last").append(pict);
			}
		}
	}
};
function inName(imie)
{
	var imiona = imie.split(" ");
	var nazwisko=imiona[1].toUpperCase();
	imie=imiona[0]+" "+nazwisko;
	var pierwsza=imie[0].toUpperCase();
	imie=imie.replace(imie[0], pierwsza);
	return imie;
}
//$("#main").append(internationalizeButton);
bio.display();
work.display();
project.display();
education.display();
$("#mapDiv").append(googleMap);
//$("#projects").append(inName("stas strzelecki"));