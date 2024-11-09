const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_19_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMFVneXVmQjJMN3ZvZ2d4TUl1bkhSRWE4bTRnVXBxcnQxSHYvNDlyendDUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MjEwODQ2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREYxMkE3Q0VCRkRDQzNDRjJEOEU0OUU3QUIzQzNGNDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMTQwMzg1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzIxMDg0NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4RDQ4Q0U1RTkwQjM2MUZDRkFBQThFNkQ4NzFEN0E4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTE0MDM4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjeGFaRWJxTVFGV0RsVkZuX0lqektBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmZmUwNmQ1LWMwMTMtNDYyNi04MDA0LTlkMGM3MmJiZmIwMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAwLFxuICAgICAgMTEzLFxuICAgICAgMjQ4LFxuICAgICAgMTIzLFxuICAgICAgMTMxLFxuICAgICAgMTI3LFxuICAgICAgOTYsXG4gICAgICA1OSxcbiAgICAgIDEwNixcbiAgICAgIDExMSxcbiAgICAgIDI1MCxcbiAgICAgIDIyMSxcbiAgICAgIDE0NCxcbiAgICAgIDEyNyxcbiAgICAgIDE4NyxcbiAgICAgIDEwMCxcbiAgICAgIDE0MCxcbiAgICAgIDIzMCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDE0MyxcbiAgICAgIDUzLFxuICAgICAgOTgsXG4gICAgICAxMCxcbiAgICAgIDY5LFxuICAgICAgMTU3LFxuICAgICAgMjU1LFxuICAgICAgMTAsXG4gICAgICA0NSxcbiAgICAgIDE4NCxcbiAgICAgIDIzMSxcbiAgICAgIDM4LFxuICAgICAgNjAsXG4gICAgICAxNzEsXG4gICAgICAxOTIsXG4gICAgICA5OSxcbiAgICAgIDksXG4gICAgICA4NixcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5ODM1QjgyR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzIxMDg0NjA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzMwMTQ0NTE3MzQ5MzoyNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmz8J2ZsPCdmoHwnZm6IPCdmoLwnZm38J2ZsPCdmb0g8J2aiPCdmoNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcS8vbmNRbTdhOHVRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1UL3pudFBlenIycjdDYlFDa0JRMENvcnExY0NEeTV1akpzczZBRDFHV1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQVNzZEtoTHcvRkM2QU9JY2dUWERBaTBzQkdxMWhlU0NqYTZEc1laR2lMWFVUR09qRlcrc241V2pkdzlPRm9vbW9VY2hBeEl0b2tWcGVMNGtBVEgwREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUzFtc2hIMnhzTDRzcUZHUTdQSXdmbDFlN3l6cFNMMlFGenZodjk2a3pwbURvckVNVmpBYkJtQisxQkxaNDNxdjh0STdQZDNWMFRxcThhTVhXdlAyQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzIxMDg0NjA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTQwMzgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjF3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpbmFmNW9nc3JyczN4MUI4a1g4UG1BbGgzRkVnUDAwN3NJUTZNcjRHakRJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MTYzMzYxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMTQwMzgzOTE4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
