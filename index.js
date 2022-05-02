const express = require("express");
const http = require("http");
const app = express();
app.listen(3000, ()=>console.log("listening on port 3000"));
//app.use(express.static("api/"));

app.use(express.json())

app.get("/api", (req, res)=>{
	res.status(200).json({
		role: "User",
		name: "user"
	})

})

var merge = function(target, source){
	for(var attr in source){
		if(typeof(target['attr'])=="object" && typeof(source['attr'])=="object"){
			merge(target['attr'], source['attr']);
		}else{
			target['attr'] = source['attr'];
		}
	}
	return target;
}

class User{
	constructor(role, user){
		this.role = role;
		this.user = user;
		this.isAdmin =false;
	}

}

app.post("/api", (req, res)=>{
	const { role }=req.body;
	const { name }=req.body;
	if(!role){
		res.status(200).json({
			message: "Role should be provided",
		})
	}
	if(!name){
		res.status(200).json({
			message: "Name should be provided",
		})
	}
	user = new User(role, name);
	console.log(user.isAdmin);
	if(user.isAdmin==true){
		res.json({
			body: req.body,
			flag: "flag{Pr0t0typ3_P0lluti0n_1s_c00l}",
		})
	}else if(user.isAdmin==false){
		res.json({
			body: req.body,
		})	
	}
	

});
