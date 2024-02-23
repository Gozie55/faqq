function toggleDropdown(index) {
    var dropdownContent = document.getElementById("dropdownContent" + index);
    var dropdownIcon = document.getElementById("dropdownIcon" + index);
    var dropdownButton = document.getElementById("dropdownButton" + index)
  
    dropdownContent.classList.toggle("active");
  
    dropdownIcon.classList.toggle("active");

    dropdownButton.classList.toggle("active")

    if (dropdownIcon.classList.contains("active")) {
        dropdownIcon.style.transform = "rotate(0deg)";
      } else {
        dropdownIcon.style.transform = "rotate(180deg)";
      }

    let allDropdownContents = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < allDropdownContents.length; i++) {
      if (allDropdownContents[i].id !== dropdownContent.id) {
        allDropdownContents[i].classList.remove("active");
        allDropdownContents[i].style.display = "none";
      }
    }
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
}
  