function toggleAboutSection(sectionId) {
    var aboutSection = document.getElementById(sectionId);
    aboutSection.style.display = (aboutSection.style.display === 'none' || aboutSection.style.display === '') ? 'block' : 'none';
}
