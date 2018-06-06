# Samewave Frontend Assessment
This test aims to assess your frontend proficiency and expertise level with regards to HTML5, CSS3 (using SASS) and JavaScript (core &amp; jQuery)

## Instructions

### Code Requirements
In the `_resources` directory you will find 3 designs of what forms a common [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) pattern for people.  
Your job is to code the designs into HTML5, CSS3 and JavaScript (ES6) to represent the visual representation and provide basic interactivity.  
Basic HTML files have been provided (`people.html`, `person.html` and `person-profile.html`) and you should add your code in these.  
Additional assets have been added in the `_resources` directory which you may choose to use if you want to.

#### HTML
You should write HTML that conforms to the HTML5 specification and is semantically correct.

#### CSS
You should write CSS that conforms to the CSS3 specification.  
You should ideally be using SASS (a gulp task has been provided to compile your SASS to CSS).  
You should preferably be using the BEM methodology for naming your classes.

#### JavaScript
You should write JavaScript that confirms to the ES6 (ECMAScript 2015) specification.  
You should preferably use core JavaScript, but the use of jQuery is permitted.   

#### Device Support
You should code your layout so that it supports both mobile and tablet device dimensions in portrait layout only.  
To this point the minimum supported resolution is `325 x 568px` and the maximum supported resolution is `768 x 1024px`.  
It's up to you to decide if or how many breakpoints in between these resolutions you want to introduce. 

#### Browser Support
You do not have to (_but you may_) code with cross-browser support in mind.  
The only browser you need to support is Chrome (latest stable version).

### Code submission
You are required to fork this repo into your own GitHub account, make all your commits there, and then when done submit a pull request on this repo with your changed code.  
Please ensure your commit messages are succinct as we will be looking at it as part of the assessment.

### Page Specific Requirements
#### People
- Toolbar 
  - When clicking on the search icon an input area should appear inside the toolbar allowing someone to enter text that filters the results in the list.
  - When clicking on the edit link in the toolbar, each row should show a delete icon and the edit link should change into a cancel link.
- List
  - Clicking on any row in the list should navigate you to the person-profile.html page

#### Person Profile
- Blocks
  - Clicking on the contact block should initiate a phone call on a mobile device
  - Clicking on the edit block should take you to the person.hml page     
  - No other block actions are required

#### Person
- Wallpaper/Photo
  - Clicking on the camera icons should open the browser file dialog
- Form
  - Add basic input validation for required fields and email validation  
- Enable admin access
  - Make the toggle switch interactive so that it shows an active/inactive state   

### Assessment criteria
We will be looking at the following aspects when assessing your code:
- Visual accuracy in matching the design 
- Whether your HTML validates against the HTML5 specification
- Use of semantic markup in your HTML
- Syntactically correct CSS that validates against the CSS3 specification
- Correct BEM class naming
- Whether your JavaScript validates against the ES6 specification.

 