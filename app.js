var json = {
    "users": [
      {
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
      },
      {
        "userId": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123456",
        "emailAddress": "racks.jacson@learningcontainer.com"
      },
      {
        "userId": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "33333333",
        "emailAddress": "denial.roast@learningcontainer.com"
      },
      {
        "userId": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "emailAddress": "devid.neo@learningcontainer.com"
      },
      {
        "userId": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@learningcontainer.com"
      }
    ]
  }

//Loop through json and push into an array. 

function pushJsonToArray(){
    var users = json.users;
    const arr = [];
  
    for (var i = 0; i < users.length; i++ ){
        var user = users[i];
        arr.push(user);
    }

    return arr;
  
}

function getRandomItem(arr){

    //get random index value
    const randomIndex = Math.floor(Math.random() * arr.length );

    //get random item
    const item = arr[randomIndex];
    return item;
}