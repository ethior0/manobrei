export const loginAdmGet = (req, res) => {
	res.render("loginAdm");
}  

export const loginAdmPost = (req, res) => {
	console.log(req.body);
} 