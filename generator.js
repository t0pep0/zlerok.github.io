document.title = name + " - " + proff;
document.getElementById("description").setAttribute("description", name + " - " + proff +". " +spec[0].toUpperCase()+spec.slice(1));
document.getElementById("photo").setAttribute("src", photo);
document.getElementById("name").innerHTML = name;
document.getElementById("prof").innerHTML = proff;
document.getElementById("spec").innerHTML = spec;
var emailTag = document.getElementById("email");
emailTag.innerHTML = email;
emailTag.setAttribute("href", "mailto:"+email);
document.getElementById("linkedin").setAttribute("href","https://www.linkedin.com/in/"+linkedinName);
document.getElementById("github").setAttribute("href","https://github.com/"+githubName)
