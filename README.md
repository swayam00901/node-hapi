# Node-Hapi server
simple crud operation using node and hapi

Steps:
To Install package
 - git clone https://github.com/swayam00901/node-hapi.git

 - cd node-hapi
- npm install

Run:
open git bash
- node app.js
Supports GET and POST requests
Test :
- http://localhost:7000/api/share
- - Output :Hello To Node HAPI server
- http://localhost:7000/api/share/Swayam%20pattanayak
- - Output : Hello Swayam pattanayak
- http://localhost:7000/api/share/query?name=swayam%20pattanayak
- - Output : Hello swayam pattanayak
- In git bash you can Post like below or you can use postman
-curl -X POST http://localhost:7000/api/share -d "{\"name\":\"Swayam Pattanayak               \"}" --header "Content-Type: application/json"
-- Output :
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    51  100    23  100    28     98    119 --:--:-- --:--:-- --:--:--   217He               llo Swayam Pattanayak

