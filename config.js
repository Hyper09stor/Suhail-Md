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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+601175043952";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_45_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidjRNNXRIVmlzdUkxSkVXdmFQVEFwcFV0MjJISmU3MXlTVm9zbEJsQU9BVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieDl5X1RCRjdTV09WMGxZdlBXQl94UVwiLFxuICBcInBob25lSWRcIjogXCIxMGI1MDc5Yy1lMGY4LTQ4YzItYmJmYi0wNWUzOTgyMjEyNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTgsXG4gICAgICAyNTQsXG4gICAgICA3NSxcbiAgICAgIDIwNyxcbiAgICAgIDkyLFxuICAgICAgMTg1LFxuICAgICAgMjE4LFxuICAgICAgMjE3LFxuICAgICAgMTU4LFxuICAgICAgMTcxLFxuICAgICAgMTYwLFxuICAgICAgMTAyLFxuICAgICAgMTYxLFxuICAgICAgMzEsXG4gICAgICAyMTMsXG4gICAgICAxMTcsXG4gICAgICA0NyxcbiAgICAgIDIzMSxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICAyMjcsXG4gICAgICAxNzMsXG4gICAgICAxNDksXG4gICAgICA2MSxcbiAgICAgIDExLFxuICAgICAgMjQ3LFxuICAgICAgNzcsXG4gICAgICAxMSxcbiAgICAgIDg0LFxuICAgICAgMTMyLFxuICAgICAgOTEsXG4gICAgICA1NSxcbiAgICAgIDE2MSxcbiAgICAgIDI1MCxcbiAgICAgIDE1OSxcbiAgICAgIDIwOSxcbiAgICAgIDE0MixcbiAgICAgIDE0NSxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4NlE4SjdRU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjAxMTc1MDQzOTUyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIWVBFUnhTVE9SRVwiLFxuICAgIFwibGlkXCI6IFwiMTQwOTMxMjQ4NDg0Mzk1OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSys5MDNzUTM0SGJzZ1lZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXck9IMGNjcHd1RXdrd0hvdWhzcHRyd2xwbExIeWtkVGkvVzdTemJCTUhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImg4SW9qd2h1c1JuckduS2tsc1JzWlI1TlhuemFMZGJveWNTR0ZFbWhqc2VMeTFXalhydURvMWNITUJ0N29pNHdCaTV4aytEU0Nac3B0a3cvSDQ1TkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIksycE54K29xL08rUHd6N1RvYytXN2RPR0pucjVIMm1waGdhVHVZcUFBY3plYmNxNUNDL1VaVUlOajFLL1FvdmRSd2V2YVRLajQyNGlsV3YvYmEzY0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYwMTE3NTA0Mzk1Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjk2MTUwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUlBQUEzNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBSUFBQTM2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiREJObGVlWW9LcVd0cG1vR3BnZmp1MXhQaTRVS1hDQ1lXWGRXS1ZIV0FhYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTkzMTc0MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjk0NzEwOTI2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
