function toggleAboutSection(sectionId) {
    var aboutSection = document.getElementById(sectionId);
    aboutSection.style.display = (aboutSection.style.display === 'none' || aboutSection.style.display === '') ? 'flex' : 'none';
}

function toggleAboutUsSection(sectionId) {
    var aboutUsSection = document.getElementById(sectionId);
    aboutUsSection.style.display = (aboutUsSection.style.display === 'none' || aboutUsSection.style.display === '') ? 'flex' : 'none';
}
