const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_01_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Q0lUY2p2R2dhSHpLM3NCcWhMNHpQWEM5SUdDcTliRzdUY2t3QldMWEZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNDQwNjg3ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOTk5RTA4RkU4NDY4MzVGMzZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTcyODg4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6QWZEZmU0NVJPS2xXWFU0X0tHcGRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5OTgwYWVjLTAxNWMtNDE4ZS1iYWQ0LTM1M2IxYTc4MmI0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDk5LFxuICAgICAgMTAzLFxuICAgICAgMTk4LFxuICAgICAgMzIsXG4gICAgICAyMjIsXG4gICAgICAxMzEsXG4gICAgICA2NyxcbiAgICAgIDMxLFxuICAgICAgMTI0LFxuICAgICAgMTY0LFxuICAgICAgNTIsXG4gICAgICAyMzQsXG4gICAgICAyMjUsXG4gICAgICAyMDgsXG4gICAgICA5MixcbiAgICAgIDY1LFxuICAgICAgMTQsXG4gICAgICAyNDQsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMjE4LFxuICAgICAgMjI1LFxuICAgICAgNTYsXG4gICAgICAxNzYsXG4gICAgICAxMDgsXG4gICAgICAxMjIsXG4gICAgICAxNSxcbiAgICAgIDI0MCxcbiAgICAgIDE4OSxcbiAgICAgIDc1LFxuICAgICAgMzYsXG4gICAgICAxODksXG4gICAgICAxMzgsXG4gICAgICAyNDIsXG4gICAgICAxMTcsXG4gICAgICAxMzMsXG4gICAgICAxMDQsXG4gICAgICAxMjEsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQU1FN1YzVFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDQwNjg3ODc6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODQzNDYwMDkwNjg5OToxN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNciBSZXZ5IPCfkZFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM1ovdkFJRU8zKy9iUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxlQjdHdmZaSFltSjI3OGhmVW15K2F1N1diOGZOb044SUozOVkzekoyM1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR3ZZdkRFOFhuWktiSjdxL2VoVFBONHkzZnZRcE1mam1zMFBkZEVneTB1Q0NrdkdXandMU2V4L1p1eFlmY1hldEM5Tit2T2Fod2JjaHgzMXNIRUw0aGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNU9zNFFMV3RPTEtnY2szQ0ppbUpoRHBVZmQwdGwzb1k4UUptRmQ1TnB2NXlmTi82cmRPN0hneUduS2FOeWM0Y1RSbHFSRmd2bVpZWk9wYUplZHAvQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0NDA2ODc4NzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3Mjg4ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLK05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsrTi5qc29uIjogIntcImtleURhdGFcIjpcImIyZnZSREhSYTc2akl1eThMQ3Y1NFFiRC9WaXlHeHpyaTdpdEpPSzJ4d0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM4NDQ0MDUyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2MzY1MjA5MzUyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
