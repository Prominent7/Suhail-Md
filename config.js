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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348148106643";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidkVMclY4cnYxcmxGVDExcWNwbUFuNnlaeHJBYWpVZGNVaDZnY1Q4a21Ycz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ4MTA2NjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOUIzQTdFQkJDNjU0MDZGRjNFNDlEOTA3OUNENTA3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMDAwNjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY3RBaHlzajZUZWlZNDNuT2txSHM3d1wiLFxuICBcInBob25lSWRcIjogXCJkNmM1OWQ1NC04MzgzLTQ1YzAtODE1NC03ZWYzY2RlN2YwYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjE2LFxuICAgICAgMzMsXG4gICAgICA4LFxuICAgICAgMjExLFxuICAgICAgMTg0LFxuICAgICAgNjgsXG4gICAgICA2LFxuICAgICAgMjA4LFxuICAgICAgMjE1LFxuICAgICAgOTgsXG4gICAgICAyMzgsXG4gICAgICAxMDIsXG4gICAgICA5MSxcbiAgICAgIDI1NSxcbiAgICAgIDE4MyxcbiAgICAgIDI0OSxcbiAgICAgIDk0LFxuICAgICAgNzcsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTE3LFxuICAgICAgMjIsXG4gICAgICAxNjksXG4gICAgICAxLFxuICAgICAgMTg5LFxuICAgICAgMTU3LFxuICAgICAgMTQ3LFxuICAgICAgMjMzLFxuICAgICAgMjA0LFxuICAgICAgMjUxLFxuICAgICAgMjA2LFxuICAgICAgMTMwLFxuICAgICAgMjUxLFxuICAgICAgMTEwLFxuICAgICAgMjQ1LFxuICAgICAgMTIwLFxuICAgICAgMTg3LFxuICAgICAgMTUzLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk4TUdUQzZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4MTA2NjQzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZWUudWx0aW1hdGUuc3RvcmVcIixcbiAgICBcImxpZFwiOiBcIjIzNDQyNzk4ODg2MTEyMjo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IQXBoNFFtdVNtdEFZWUNDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1hhTFJtbU92Y0lsdnk2Y1JRNU1IbHhPbTRwcmdyK0o4ZVBuQXZuZEJBRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMUzlNY3pOdWJGYkRrTnRSaEc2REFmM2hrTzlDYktDUGNqZzMzejAzY2JGanQ5UlVLWlhwRG1HSzkrVkQvVTJPeitVZlAyeGtmelcxYloxWC9jSUFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhQWd6MDIxTFlaUy91U1F0cCttaUJ3SkUwSklqRHBDRGZuVE1Ma2dNdDRBUzQ0ci8wZ2lQa2RRNnQ2OVlwV1FWN2NWRlY0VWRWdm1jYm9md01EdjlCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4MTA2NjQzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMDAwNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQTWJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBNYi5qc29uIjogIntcImtleURhdGFcIjpcIklFUGt5MDRVTGxEbnRDcWVySlR6MG53R1ltTGRzM1J5YkFLc2plMkNjaWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjM1NDU0NDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA1NjQ1Njc4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
