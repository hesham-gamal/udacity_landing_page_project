# Landing Page Project

This project aims to give you real-world scenarios of manipulating the DOM. The functionality being used serves two purposes: to append dynamically added data to the DOM, and to show how javascript can improve the usability of an otherwise static site.

# Gettiing Started

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

The project will be evaluated by a Udacity code reviewer according to the Landing Page project [rubric](https://review.udacity.com/#!/rubrics/2658/view)


# Instructions

* The starter code has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.  

* To get started, open `js/app.js` and start building out the app's functionality  

* For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

# Development

* First challenge is to build the navbar dynamically based on the sections of the page. This can be achieved by using the below mentioned methods of javascript
    > `for or forEach loop` </br>
      `document.getElementById` or  `document.querySelector` </br>
      `document.createElement` </br>
      `.setAttribute` </br>
      `.appendChild` </br>
* Next step would be to add functionality to distinguish the section in view. This can be achieved by using the `.getBoundingClientRect()` method of javascript. Active states have to be added to the sections as well as the corresponding nav-links.  

* Last part is to add the functionality to scroll to sections. This can be achieved by using the below mentioned methods of javascript
    >  scroll(), scrollBy(), and scrollIntoView()
# Features

* Active State change for sections and nav links as user scrolls the viewport
* Smooth scrolling using `scrollIntoView` when a nav link is clicked 


