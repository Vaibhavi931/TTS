export const home = (req,res)=>{
    return res.render('serverRunning',{
        title : "Contacts Directory",
        port : process.env.PORT
    })
}