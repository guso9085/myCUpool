## Testing instructions:

0. Please follow this instructions carefully, or errors will be occur. 
   This testing has two parts: One is http test, another is the pages test.
   
1. Open a terminal, use "npm run all" to running our app

2. Open another terminal, use "npm run test"

3. What we did above is http test.

4. Now if you want to do page test, open the corresponding test file, uncomment all the code.

5. Then go to 'website/src/components/', make a bit change a bit to page file.
   For example, if you want to test login page, open 'website/src/components/login/userLogin.js', 
   Comment out the corresponding .css file. (That is, at the very beginning of page file, comment the 'import './login.css';'    line) 
   Note: This is very important, and if we don't do that, the test will not implement successfully. 
   After finishing the test, don't forget to uncomment the .css file!
  
6. Enjoy the testing! 
