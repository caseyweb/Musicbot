const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"😤"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝖒𝖚𝖘𝖎𝖈𝖇𝖔𝖙 𝖗𝖊𝖘𝖙𝖆𝖗𝖙𝖎𝖓𝖌....🫨");

  exec("pm2 restart all");
  

  



})
