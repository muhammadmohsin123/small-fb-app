
// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "mohsin",
		password: "ali"
	},
	{
		username: "junaid",
		password: "123"
	},
	{
		username: "mohsin2",
		password: "444"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function validuser(username,password){
	for (var i=0; i<database.length;i++){
		if (database[i].username===username && database[i].password===password){
			return true
		}
	}false
}

 function signIn (username,password){
     if (validuser(username,password)){
         console.log(newsfeed);
     }else{
         alert('sorry, wrong password')
     }
}
username= prompt('what is your username');
password=prompt('what is your password');
 signIn(username,password)