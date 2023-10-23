const AboutMeSection = document.getElementById("AboutMe");
const ProjectsSection = document.getElementById("proyectos");
const SkillsSection = document.getElementById("Skills");
const ContactSection = document.getElementById("Contact");


const AboutMeBtn = document.getElementById("AboutMeBtn");
const ProjectsBtn = document.getElementById("ProjectsBtn");
const SkillsBtn = document.getElementById("SkillsBtn");
const ContactBtn = document.getElementById("ContactBtn");


AboutMeBtn.addEventListener("click", function() {
    ProjectsSection.style.display = "none";
    AboutMeSection.style.display = "block";
    SkillsSection.style.display = "none";
    ContactSection.style.display = "none";
});

ProjectsBtn.addEventListener("click", function() {
    ProjectsSection.style.display = "block";
    AboutMeSection.style.display = "none";
    SkillsSection.style.display = "none";
    ContactSection.style.display = "none";
});

SkillsBtn.addEventListener("click", function() {
    ProjectsSection.style.display = "none";
    AboutMeSection.style.display = "none";
    SkillsSection.style.display = "block";
    ContactSection.style.display = "none";
});
ContactBtn.addEventListener("click", function() {
    ProjectsSection.style.display = "none";
    AboutMeSection.style.display = "none";
    SkillsSection.style.display = "none";
    ContactSection.style.display = "block";
});
  
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces dentro de la lista del menú
    var navLinks = document.querySelectorAll('.menu ul a');
  
    // Agregar un evento de clic a cada enlace
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        
        var targetId = this.getAttribute('href'); // Obtener el ID del objetivo del enlace
        var targetElement = document.querySelector(targetId); // Encontrar el elemento correspondiente
  
        // Desplazarse hasta el elemento objetivo
        targetElement.scrollIntoView({
          behavior: 'smooth' // Desplazamiento suave
        });
      });
    });
}); 


  
  