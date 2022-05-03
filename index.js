const express = require("express");
const _= require("lodash");
const app = express();
app.listen(3001, ()=>console.log("listening on port 3001"));

app.use(express.json())

app.get("/api", (req, res)=>{
	res.status(200).json({
		message: "Can't deal with this request"
	})

})

const info = {};

class User{
	constructor(role, name){
		this.role = role;
		this.name = name;
	}

}

app.post("/api", (req, res)=>{

	const { role }=req.body;
	const { name }=req.body;

	user = new User(role, name);
	user1 = new User(role, name);
	_.merge(user, req.body.__proto__);
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
	if(user1.isAdmin){
		res.json({
			body: req.body,
			flag: "flag{Pr0t0typ3_P0lluti0n_1s_c00l}",
		})
	}else{
		res.json({
			body: req.body,
		})	
	}

});
