# The administration testing system
The app is intended for administer tests - creating new and deleting ones, watching statistics of users.
The project consists of 4 pages - Login, Home, Tests and Users. 

## Login

If user visits the app first time or loged out before, he gets into login page. He must enter login and password and after succeess autotification he gets to home page. If he failed autotification it shows him warning. If user closes the window or website he can get to home page without autotification as well. Because his data save in LocalStorage, untill he doesn't want to log out.

## Home

It common page with links to tests and users pages.

## Tests

The test page includes search input to select certain test and watch question and answers related with choosed test.
Also there are action buttons to create and delete choosed test. If user created a new test, it need to fill 5 or more questions and 4 answers with 1 right one for each question. After wrote test name and imagined questions, user can save this test and see it in list of all tests.

## Users

In the user page user can find table with users, search input for faster looking for the certain user. After choosing user it will show you his statistics about passed test, spending time for it and right answers of all. 


