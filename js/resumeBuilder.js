/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var role = "Web Developer"

 var foarmattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(foarmattedRole);

 var formattedName = HTMLheaderName.replace("%data%", "Pat Walter");
 $("#header").prepend(formattedName);


 var bio = {
     "name": "Pat Walter",
     "role": "Web Developer",
     "contact": {
         "email":"patwalter@mac.com", 
         "mobile": "586-382-6390",
         "github": "patwalter",
         "location": "Detroit MI, USA",
        },
    "welcomeMesg":"Welcome to Pat Walter's interactive application!  Feel free to look around and contact Pat for any further information you may require!",
    "skills": [
        "HTML5 ", " CSS3 " , " JavaScript ", " Github "
    ],
     "biopic": "images/patteddy.png"
 };


   
     formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
     formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
     formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
     formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    formattedpic = HTMLbioPic.replace("%data%", bio.biopic)
    formattedSkills = HTMLskills.replace("%data%", bio.skills);
    formattedWelcome =  HTMLwelcomeMsg.replace("%data%", bio.welcomeMesg)

    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedmobile);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
   $("#topContacts").prepend(formattedpic);
   $("#topContacts").append(formattedWelcome);


   $("#topContacts").append(HTMLskillsStart);
   $("#topContacts").append(formattedSkills);


 var projects ={
    "projects": [
     {"title":"Movie Preview Web Site",
     "dates":"April 2017",
     "description":"A website built with Python that previews movie trailrs for 6 movies.",
     "images": ["images/moviewebsite.png"]
    },
    {"title":"Portfolio Website",
     "dates":"May 2017",
     "description":"A website to house and show my online works for employers.",
     "images":["images/resumeJune.png"],
    },
    {"title": "Animal Trading Card",
    "dates": "May 2017",
    "description": "A trading card with information on my favorie animal, the Pangolin.",
    "images":["images/pangolin.png"]
    }
      ] 
};

projects.display = function(){
    for (project in projects.projects){ 
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

var work = {
   "jobs": [
       {"title": "Medical Clerk",
        "employer" : "Beaumont",
        "yearsWorked" : "2014 - Present",
        "city" : "Rochester Hills",
        "description" : "Support various specialties including internal medicine, geriatrics, thoracic surgery and infectious disease within a single multi-specialty environment, Maintain a smooth patient flow and support within the practice in a manner that is friendly, inviting and focused on patient’s needs and to insure patient satisfaction.  Strong working knowledge of EMR (Epic).  Perform charge entry of CPT and ICD-10 codes.",
        "url":"https://www.baker.edu/campus-locations/michigan/owosso/"
       },
       {"title": "Persoanl Trainer",
       "employer": "LA Fitness",
       "yearsWorked":"2016 - Present",
       "city": "Clinton Township",
       "description": "Design and execute programs specifically tailored for client’s specific goals and needs. Create a welcoming and inviting space for members and clients to feel supported and comfortable.  Inform members and clients of fitness information, execution and practice so that all members are safe and can pursue their health and fitness goals.",
       "url":"https://www.baker.edu/campus-locations/michigan/owosso/"
    },
    {"title": "Residence Hall Coordinator",
    "employer": "Baker College, Owosso",
    "yearsWorked": "2013-2014",
    "city": "Owosso",
    "description":"Supervised and trained a staff of six resident assistants. Worked on diversity training, fire and disaster training and leadership training.  Charged with the day to day functions of the hall, including, addressing parent and resident concerns and working with the Campus Safety Department.  Supervised the Work Study students hired by the department of Residence Life, scheduling a staff of forty students, monitor students ability to follow expectations.",
    "url": "https://www.baker.edu/campus-locations/michigan/owosso/"
}
       ]  
} ;

//function displayWork()

//for (job in work.job){
    work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace ("%data%", job.employer);
    var foarmattedTitle =  HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + foarmattedTitle;
   
    $(".work-entry:last").append(
        formattedEmployerTitle);

       var formattedDates = HTMLworkDates.replace("%data%", job.yearsWorked); 
        
        $(".work-entry:last").append(
            formattedDates);

            var foramttedcity = HTMLworkLocation.replace("%data%", job.city);

            $(".work-entry:last").append(
                foramttedcity);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(
                formattedDescription);
    });



//displayWork();



var school =
       {
        "schoolName": "Central Michigan University",
        "yearsAttended" : "2010-2013",
        "city" : "Mount Pleasant, MI USA",
        "degree": " Bachelors of Science",
        "major" : "History",
        "url": "https://go.cmich.edu/",
       };
var foramttedSchoolName = HTMLschoolName.replace("%data%", school.schoolName);
var formattedDates = HTMLschoolDates.replace("%data%", school.yearsAttended);
var formatedDegree = HTMLschoolDegree.replace("%data%", school.degree)
var formattedCity = HTMLschoolLocation.replace("%data%", school.city)
var foarmattedMajor = HTMLschoolMajor.replace("%data%", school.major)

       $("#education").append(HTMLschoolStart);
       $("#education").append(foramttedSchoolName);
       $("#education").append(formattedCity);
       $("#education").append(formatedDegree);
       $("#education").append(foarmattedMajor);
       $("#education").append(formattedDates);


var onlineCourses = {
    "courses" :[
{
    "title":"Programming Foundations with Python",
    "school": "Udacity",
    "dates": "April 2017",
    "url":"https://www.udacity.com/course/programming-foundations-with-python--ud036"
},
 {"title":"Web Foundations",
    "school": "Udacity",
    "dates": "May 2017",
    "url":"https://www.udacity.com/course/intro-to-html-and-css--ud304" 
 },
 { "title":"Responsive Websites",
    "school": "Udacity",
    "dates": "May 2017",
    "url":"https://www.udacity.com/courses/responsive-web-design-fundamentals--ud893"
 },
 { "title":"JavaScript Basics",
     "school": "Udacity",
     "dates": "June 2017",
     "url": "https://www.udacity.com/course/javascript-basics--ud804"
 }
]
}

function displayOnline()
{
for (course in onlineCourses.courses){
    $("#education").append(HTMLschoolStart);
    var formattedClassTitle = HTMLonlineTitle.replace("%data%", onlineCourses.courses[course].title);

    $(".education-entry:last").append(
        formattedClassTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.courses[course].school);
     $(".education-entry:last").append(
         formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", onlineCourses.courses[course].dates); 
     $(".education-entry:last").append(
         formattedDates);
    
    var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourses.courses[course].url);
        $(".education-entry:last").append(
            formattedUrl);
        
}
}
displayOnline();

var education = {
    school: [school.city]
};

var work = {
    jobs: [work.job.city]
};


$("#mapDiv").append(googleMap);

//function inName(name) {
  // name = name.trim().split(" ");
   //console.log(name);
   //name[1] = name[1].toUpperCase();
   //name[0] = name[0].slice(0,1).toUpprCase() + name[0].slice(1).toLowerCase();
   
   //return name[0] + " " + name[1];
//}
//inName()

//$("#topContacts").append(internationalizeButton);

