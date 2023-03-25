/*
  * By Heri Store
*/

"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, reSize, generateProfilePicture, calculate_age, makeid } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/respon-list');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const _sewa = require("../lib/sewa");
const _prem = require("../lib/premium");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const { addLogin, deleteLogin, checkLogins } = require("../lib/login");
const { addRespons, checkRespons, deleteRespons } = require('../lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('../lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('../lib/setdone');
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('../lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('../lib/setleft');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("../lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("../lib/setclose");
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { igdl } = require("../lib/igdl");
const { getUser, getPost, searchUser, igstory } = require("../lib/instagram")
const { writeExif } = require("../lib/exif2");
const msgFilter = require("../lib/antispam");
const { TiktokDownloader } = require("../lib/tiktokdl");
const { pinterest } = require("../lib/pinterest")
const { darkjokes } = require("../lib/darkjokes")

const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const toMS = require("ms");
const imgbb = require("imgbb-uploader");
const Dym = require("didyoumean");
const path = require('path');
const clph = require("caliph-api");
const cheerio = require("cheerio")
const nou = require("node-os-utils");
const translate = require("@vitalets/google-translate-api");
let { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// Setting
let mode = 'public'
let own2 = '6289514579847@s.whatsapp.net'
let fakenya = '*Bot By Heri Store*'
let footernya = '_©Heristore_'
const imgbbapi = "48cf36e87c24f5f37c7734f558e7fcbc"
let typemenu = 'document'

// DB Game
let siapaaku = []
let susun = []
let pancing = []
let tp = []

//DMS
let nodms = '6289514579847'
// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const daftar = JSON.parse(fs.readFileSync('./database/daftar.json')); 
const loginnya = JSON.parse(fs.readFileSync('./database/logins.json'))
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");


module.exports = async(conn, msg, m, setting, store, sewa, welcome, left, set_welcome_db, set_left_db, opengc, set_proses, set_done, set_open, set_close) => {
	try {
		let { ownerNumber, ownerName, botName, kodeprem, gamewaktu, limitCount, apikey, apikeylol, sticker: stc } = setting
		let { allmenu } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/20YY')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
                const toJSON = j => JSON.stringify(j, null,'\t')
		if (conn.multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
		} else {
			if (conn.nopref) {
				prefix = ''
			} else {
				prefix = conn.prefa
			}
		}
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : [`${ownerNumber}`, "6285921165857@s.whatsapp.net", `${own2}`].includes(sender) ? true : false
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const isWelcome = isGroup ? welcome.includes(from) ? true : false : false
        const isLeft = isGroup ? left.includes(from) ? true : false : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiWame = antiwame.includes(from) ? true : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isBan = cekBannedUser(sender, ban)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
		const pp_bot = fs.readFileSync(setting.pathimg)
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
		
        const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp_bot, thumbnail: pp_bot,sendEphemeral: true}}}
        const fimage = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "imageMessage": { "title":`${ownerName}`, "h": `Hmm`,'seconds': '359996400', 'caption': `*${ucapanWaktu} ${pushname} 👋*\n© ${fakenya}`, 'jpegThumbnail': pp_bot}}}
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		async function sendStickerFromUrl(from, url, packname1 = stc.packname, author1 = stc.author, options = {}) {
        	var names = Date.now() / 10000;
        	var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	            });
        	};
            exif.create(packname1, author1, `sendstc_${names}`)
        	download(url, './sticker/' + names + '.png', async function () {
                let filess = './sticker/' + names + '.png'
        	    let asw = './sticker/' + names + '.webp'
        	    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
        	        exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        conn.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
        	        })
                })
        	})
        }
		
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
           var url = await yts(query)
           url = url.videos[0].url
           hxz.youtube(url).then(async(data) => {
             var button = [{ buttonId: `!ytmp3 ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, { buttonId: `!ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]
             conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, image: {url: data.thumb}, buttons: button, footer: 'Pilih Salah Satu Button Dibawah⬇️', mentions: [sender] }, { quoted: fimage })
           }).catch((e) => {
             conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
               ownerNumber.map( i => conn.sendMessage(from, { text: `Send Play Error : ${e}` }))
           })
        }
        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
        const replyDeface = (teks) => {
            return conn.sendMessage(from, {
                text: teks, contextInfo: {
                    externalAdReply: {
                        title: `${botName}`,
                        body: `Simple Bot WhatsApp By ${ownerName}`,
                        mediaType: 2,
                        thumbnail: pp_bot,
                        sourceUrl: `https://chat.whatsapp.com/CPyFRH5RlcyBctQsKCexnb`
                    }
                }
            }, { quoted: msg })
        }
        // Auto Reset Limit
setInterval(function() { 
    var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
    var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
    // hasilnes Kalo mau Jam 00 jadi 12:00:00 AM
    if(hasilnes === '12:00:00 AM') {
        limit = []
        fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
        glimit = []
        fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
        console.log("Limit Sudah Di Reset!")
    }
}, 1000);
// Bandwidth
async function checkBandwidth() {
    let ind = 0;
    let out = 0;
    for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: format(ind),
        upload: format(out),
    };
}
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: pp_bot }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, buttons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		const getCase = (cases) => {
            return "case prefix+"+`'${cases}'`+fs.readFileSync(__filename).toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
        }

        async function getGcName(groupHeriBOT) {
            try {
                let data_name = await conn.groupMetadata(groupHeriBOT)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
		
		const buttonsDefault = [
		    { urlButton: { displayText: `${setting.buttonName}`, url : `${setting.buttonLink}` } },
		    { urlButton: { displayText: `${setting.buttonName2}`, url : `${setting.buttonLink2}` } },
			{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `DONASI`, id: `${prefix}donate` } }
		]
		const buttonsDefa = [{buttonId: `${prefix}sewa`, buttonText: { displayText: `SEWA BOT` }, type: 2 }, {buttonId: `${prefix}donasi`, buttonText: { displayText: `DONASI` }, type: 2 }, {buttonId: `${prefix}owner`, buttonText: { displayText: "OWNER" }, type: 2 }]
        
        const login = [{buttonId: `${prefix}login`, buttonText: { displayText: "LOGIN" }, type: 1 }]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

        // Functions
if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
    var get_data_respon = getDataResponList(from, chats, db_respon_list)
    if (get_data_respon.isImage === false) {
        conn.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
            quoted: fimage
        })
    } else {
       conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
            quoted: fimage
        })
    }
}

         // Antispam
        msgFilter.ResetSpam(conn.spam)

		const spampm = () => {
            console.log(color('[ SPAM ]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))
            msgFilter.addSpam(sender, conn.spam)
            replyDeface(`Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik`)
        }
        const spamgr = () => {
            console.log(color('[ SPAM ]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            msgFilter.addSpam(sender, conn.spam)
            replyDeface(`Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik`)
        }
        
        if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
        if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
        if (isCmd && args[0].length > 1 && !isOwner && !isPremium) msgFilter.addFilter(sender)

        // Mode
        if (mode === 'self'){
            if (!fromMe) return
        }
        
        // Mute
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }

        // Banned
        if (isBan) return
        BannedExpired(ban)
        
        // Login 
				for (var i = 0; i < loginnya.length ; i++) {
				}
				
				// Daftar 
				for (var i = 0; i < daftar.length ; i++) {
				}
             
        // Premium
		_prem.expiredCheck(conn, premium)

		// Auto Read & Presence Online
        conn.readMessages([msg.key])
		conn.sendPresenceUpdate('available', from)
		
		// Auto Registrasi
		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
		// Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.includes(`https://chat.whatsapp.com`)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                let number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
        // Anti Wame
        if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(wa.me\/)/gi)) {
                if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)
                reply(`*「 NOMOR LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link wa.me, maaf kamu akan di kick`)
                let number = sender
      conn.groupParticipantsUpdate(from, [number], "remove")
            }
        }
        // Anonymous Chat
        if (!isGroup && !msg.key.fromMe && !isCmd) {
        	this.anonymous = this.anonymous ? this.anonymous : {}
        	let rums = Object.values(this.anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
        	if (rums) {
        	    var partnerJHeriBOT = [rums.a, rums.b].find(user => user !== sender)
        	    if (msg.type == "conversation") {
                    conn.sendMessage(partnerJHeriBOT, { text: chats })
        	    } else if (msg.type == "extendedTextMessage") {
                    conn.sendMessage(partnerJHeriBOT, { text: chats, contextInfo: msg.message["extendedTextMessage"].contextInfo })
        	    } else {
                    var contextInfo = msg.message[msg.type].contextInfo
        	        conn.sendMessageFromContent(partnerJHeriBOT, msg.message, { contextInfo })
        	    }
        	}
        }
        //dashboard
        async function addCountCmdUser(nama, sender, u) {
         var posi = null
         var pos = null
         Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
               posi = i
            }
          })
         if (posi === null) {
            u.push({jid: sender, db: [{nama: nama, count: 0}]})
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
             if (u[i].jid === sender) {
               posi = i
             }
          })
         }
         if (posi !== null) {
         Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
               pos = i
            }
          })
         if (pos === null) {
           u[posi].db.push({nama: nama, count: 1})
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
           u[posi].db[pos].count += 1
           fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
         }
        }

        async function getPosiCmdUser(sender, _db) {
         var posi = null
         Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
             posi = i
          }
         })
          return posi
        }
        async function addCountCmd(nama, sender, _db) {
         addCountCmdUser(nama, sender, _cmdUser)
          var posi = null
            Object.keys(_db).forEach((i) => {
               if (_db[i].nama === nama) {
                 posi = i
               }
            })
            if (posi === null) {
              _db.push({nama: nama, count: 1})
              fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
            } else {
            _db[posi].count += 1
            fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
          }
        }
        var total = 0
            for (let o of _cmd) {
                total = total + o.count
            }
        
        // Game
		cekWaktuGame(conn, susun)
		if (isPlayGame(from, susun) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, susun)) {
		    var htgm = randomNomor(50, 250)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, susun)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [{buttonId: `${prefix}susunkata`, buttonText: { displayText: "Main Lagi" }, type: 1 }]
			 conn.sendMessage(from, { text: texttg, buttons: kus, footer: 'SUSUN KATA', mentions: [sender]} )  
		    susun.splice(getGamePosi(from, susun), 1)
		  }
		}
		cekWaktuGame(conn, siapaaku)
		if (isPlayGame(from, siapaaku) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, siapaaku)) {
		    var htgm = randomNomor(50, 250)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, siapaaku)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [{buttonId: `${prefix}siapakahaku`, buttonText: { displayText: "Main Lagi" }, type: 1 }]
			 conn.sendMessage(from, { text: texttg, buttons: kus, footer: 'TEBAK AKU', mentions: [sender]} )  
		    siapaaku.splice(getGamePosi(from, siapaaku), 1)
		  }
		}
		cekWaktuGame(conn, tp)
		if (isPlayGame(from, tp) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tp)) {
		    var htgm = randomNomor(50, 250)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} 🎉 Jawaban Kamu Benar*\n\nJawaban : ${getJawabanGame(from, tp)}\nHadiah : ${htgm} balance\nKode Game : ${makeid(15)}\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [{buttonId: `${prefix}tebakprovinsi`, buttonText: { displayText: "Main Lagi" }, type: 1 }]
			 conn.sendMessage(from, { text: texttg, buttons: kus, footer: '*TEBAK PROVINSI*', mentions: [sender]} )  
		    tp.splice(getGamePosi(from, tp), 1)
		  }
		}

		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		// Auto Block +212
        if (sender.startsWith('212')) {
            return conn.updateBlockStatus(sender, 'block')
        }
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(50), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(50), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		function triggerSticker() {
            try {
                for (let x = 0; x < responDB.length; x++) {
                    if (msg.message.stickerMessage.fileSha256.toString('hex') == responDB[x].hex) {
                        return responDB[x].balasan;
                    }
                }
            } catch {
                return false;
            }
        }
        switch (command || triggerSticker()) {
			case '#': case '!': case '.': case '/':
			
			if (checkLogins(sender, loginnya) === false) return conn.sendMessage(from, { text: teks, footer: footernya, buttons: login, footer: `© Jangan Lupa Login`, mentions: [sender]}, { quoted: fimage })
			break
			// Main Menu
			/*case prefix+'menu':
			case prefix+'help':
			    var teks = allmenu(sender, prefix, pushname, isOwner)
			    conn.sendMessage(from, { caption: teks, image: {url: `${pickRandom(setting.randommenu)}`}, templateButtons: buttonsDefault, footer: `${setting.footer}`, mentions: [sender] })
				break*/


			case prefix+'runtime':
			    reply(runtime(process.uptime()))
			    break
			case prefix+'speed':
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            textImg(`${latensi.toFixed(4)} Second`)
		            break
            case prefix+'tes':
            case prefix+'test':
            let timestampnya = speed();
                            let latensinya = speed() - timestampnya
                            reply(`*STATUS BOT ONLINE*\n\n_Speed : ${latensinya.toFixed(4)}_\n_Runtime : ${runtime(process.uptime())}_`)
                            break
            case prefix+'login':
case prefix+'sign-in':
if (isGroup) return reply(`Hanya Bisa Di Gunakan Di Private Message!`)
if (args.length < 2) return reply(`Kirim perintah ${command} umur\nContoh ${command} 15`)
if (checkLogins(sender, loginnya) === true) return reply(`Kamu Sudah Login Hari Ini!\nKembalilah Esok hari!`)
addLogin(pushname, sender, loginnya)
var kodelogin = randomNomor(50, 250)
var seri = makeid(7)
var verif = ["https://bit.ly/walpamikel","https://i.ibb.co/D5NSCgf/ff07020871c1.jpg","https://i.ibb.co/sCTMJ1B/53c1c23ac65e.jpg","https://i.ibb.co/wRF0p7x/27084fd0064e.jpg","https://i.ibb.co/7R5vRBL/a63d167d6f3f.jpg"]
var buttonLogin = [{buttonId: `${prefix}menu`, buttonText: { displayText: `MENU` }, type: 2 }]
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
    var buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${pushname}&member=${kodelogin}&seri=${seri}&pp=${profile}&bg=${pickRandom(verif)}`)
var randomLimit = randomNomor(0, 10)
var rndmLimit = randomNomor(0, 5)
var blnc = randomNomor(100, 500)
addBalance(sender, parseInt(blnc), balance)
giveLimit(sender, parseInt(rndmLimit), limit)
givegame(sender, parseInt(randomLimit), glimit)
mentions(`Mengambil Data @${sender.split("@")[0]}`, [sender])
var cpt = `*「 PENDAFTARAN USER 」*\n\n*Nama :* ${pushname}\n*Nomor :* ${sender.split("@")[0]}\n*Umur :* ${q}\n*Kode Pendaftar :* ${seri}\n*Tag :* @${sender.split("@")[0]}\n\n*「 GIVE LOGIN 」*\n\n*Balance :* $${blnc} Balance\n*Limit :* ${randomLimit}\n*Game Limit :* ${rndmLimit}`
conn.sendMessage(sender, {caption: cpt, image: buff, buttons: buttonLogin, footer: footernya, mentions: [sender]}, {quoted: fimage})
console.log(color('[Verification]', 'yellow'))
break
case prefix+'listuser':
case prefix+'listpengguna':
case prefix+'listlogin':
if (!isOwner)return reply(mess.OnlyOwner)
var teks = `「 *_Pengguna ${botName}_* 」\n\nTotal : *${loginnya.length}*\n\n`
for (let i = 0; i < loginnya.length; i ++){
teks += `*Nama :* ${loginnya[i].nama}\n`
teks += `*Nomer :* ${loginnya[i].nomer.split("@")[0]}\n\n`
}
reply(teks)
break
            case prefix+'delete':
  case prefix+'d':
    case prefix+'del':
    addCountCmd('#delete', sender, _cmd)
  conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
  break
			case prefix+'owner':
			    for (let x of ownerNumber) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], `${setting.botName}✅`, msg)

var butMen = [{buttonId: `${prefix}owner`, buttonText: { displayText: `OWNER` }, type: 1 }]
var caption = `*「 BOT ACTIVE 」*\n> Nama : *${setting.ownerName}*\n> Nomor : *${setting.ownerNumber}*\n> Pesan : *Izin menggunakan BOT*`
conn.sendMessage(`${nodms}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/Heri.jpg'), buttons: butMen, footer: `@botbyHeri Storeeloper`}, {quoted: fimage})

addCountCmd('#owner', sender, _cmd)
			    }
			    break
            case prefix+'sc':
case prefix+'sourcecode': case prefix+'sc':
var no = '6289514579847'
sendContact(from, no.split('@s.whatsapp.net')[0], 'Heri Store', msg)
reply(`Jika kamu ingin membeli Script bot ini, silahkan chat ke nomor dibawah\n_wa.me/6289514579847_`)
addCountCmd('#sc', sender, _cmd)
break
            case prefix+'donasi':
            case prefix+'donate':
var teks = `*-------「 DONATE 」 -------*


Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Contact person Owner:
> https://wa.me/${setting.ownerNumber}`
 conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/qris.jpg') }, { quoted: fimage })
 addCountCmd('#donasi', sender, _cmd)
 break
            case prefix+'sewa':
            case prefix+'sewabot':
var teks = `*-------「 SEWA BOT 」 -------*


Minat? Hubungi Owner :
> https://wa.me/${setting.ownerNumber}`
 conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/sewa.jpg') }, { quoted: fimage })
 addCountCmd('#sewa', sender, _cmd)
			    break

case prefix+'biodataowner':
var teks = `*-------「 BIODATAOWNER 」 -------*

*- NAMA : ${ownerName}*
*- GENDERS : COWOK*
*- AGAMA : ISLAM*
*- TANGGAL LAHIR : PRIVATE*
*- UMUR : 16*
*- KELAS : SUDAH TAMAT*
*- HOBBY : CODING*`
conn.sendMessage(from, { caption: teks, image: fs.readFileSync('media/owner.jpg') }, { quoted: fimage })
 addCountCmd('#biodataowner', sender, _cmd)
break
case prefix+'textchat':
case prefix+'menfess':
  case prefix+'kirim':{
if (isGroup) return reply(`Hanya Bisa Private Message`)

  //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`> Perintah ${command} Nama|Nomer|Pesan\n> Contoh ${command} ${setting.ownerName}|6289514579847|Ilopyu hahaha`)
    var butMen = [{buttonId: `${prefix}balasan ${sender.split("@")[0]}`, buttonText: { displayText: `Terima Menfess` }, type: 1 }]
    var nama = q.split('|')[0] ? q.split('|')[0] : q
                var number = q.split('|')[1] ? q.split('|')[1] : ''
                var text = q.split('|')[2] ? q.split('|')[2] : ''
                reply(`Berhasil Mengirim Menfess Ke ${number}`)
                                var caption = `*「 ADA YG MENFESS NIH 」*\n> Nama : *${nama}*\n> Nomor : *Tersembunyi*\n> Pesan : *${text}*`
if (isImage || isQuotedImage) {
let media = await downloadAndSaveMediaMessage("image", `${pushname}.jpeg`)
var njay = await imgbb(imgbbapi, media)
//send ke nomor custom
conn.sendMessage(`${number}@s.whatsapp.net`, {caption: caption, image: {url: `${njay.display_url}`}, buttons: butMen, footer: `@botbyHeri Storeeloper`}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
} else {
	var nama = q.split('|')[0] ? q.split('|')[0] : q
                var number = q.split('|')[1] ? q.split('|')[1] : ''
                var text = q.split('|')[2] ? q.split('|')[2] : ''
                reply(`Berhasil Mengirim Menfess Ke ${number}`)
                  var caption = `*「 ADA YG MENFESS NIH 」*\n> Nama : *${nama}*\n> Nomor : *Tersembunyi*\n> Pesan : *${text}*`

conn.sendMessage(`${number}@s.whatsapp.net`, {caption: caption, image : fs.readFileSync('./media/menfess.jpg'), buttons: butMen, footer: `@botbyHeri Storeeloper`}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#menfess', sender, _cmd)
}
}
break
case prefix+'balasan':{
	if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
reply(`_> Menfess Telah Diterima_`)
var capt = `*_> Sudah Di Confirmasi Nih Menfess nyaa_*`
conn.sendMessage(`${q}@s.whatsapp.net`, {text: capt}, {quoted: msg})
}
break
case prefix+'cekdrive': case prefix+'drive':
            var result = await nou.drive.info();
            addCountCmd('#cekdrive', sender, _cmd)
            reply(`*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
            break
        case prefix+'cekbandwidth': case prefix+'bandwidth':
            addCountCmd('#cekbandwidth', sender, _cmd)
            var { download, upload } = await checkBandwidth();
            reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
            break
/*case prefix+'hai':
case prefix+'bot':
  var sections = [
    {
	title: `Menu - ${setting.botName}`,
	rows: [
	    {title: `1. Menu Random`, rowId: `${prefix}menurandom`},
	    {title: `2. Menu Convert & Maker`, rowId: `${prefix}menuconvert`},
	    {title: `3. Menu Download`, rowId: `${prefix}menudownload`},
	    {title: `4. Menu Search`, rowId: `${prefix}menusearch`},
	    {title: `5. Menu Meme`, rowId: `${prefix}menumeme`},
	    {title: `6. Menu Store`, rowId: `${prefix}menustore`},
	    {title: `7. Menu Stalk`, rowId: `${prefix}menustalk`},
	    {title: `8. Menu Anonymous`, rowId: `${prefix}menuanonymous`},
	    {title: `9. Menu Game`, rowId: `${prefix}menugame`},
	    {title: `10. Menu Bank`, rowId: `${prefix}menubank`},
	    {title: `11. Menu Group`, rowId: `${prefix}menugroup`},
	    {title: `12. Menu Owner`, rowId: `${prefix}menuowner`},
	]
    },
]
  var listMessage = {
  text: `${ucapanWaktu} @${sender.split("@")[0]} 👋\n\nSaya ${setting.botName}, Bot Ini Adalah Beta Multi-Device Whatsapp\nJika Ada Fitur Yang Eror Segera Hubungi Owner Agar Segera Diperbaiki`,
  footer: ``,
  mentions: [sender],
  buttonText: "Click Here!",
  sections
}
conn.sendMessage(from, listMessage, { quoted: msg })
addCountCmd('#bot', sender, _cmd)
  break*/
case prefix+'menurandom':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*RANDOM MENU*
 ${prefix}runtime
 ${prefix}runtime
 ${prefix}speed
 ${prefix}owner
 ${prefix}sc
 ${prefix}donasi
 ${prefix}thanksto
 ${prefix}delete
 ${prefix}kirim
 ${prefix}cekprem
 ${prefix}listprem
 ${prefix}listban
 ${prefix}listsewa
 ${prefix}topbalance
 ${prefix}login
 ${prefix}listuser`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menurandom', sender, _cmd)
 break
case prefix+'menuconvert':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*CONVERTER & MAKER*
 ${prefix}sticker *reply/kirim gambar*
 ${prefix}toimg *reply stickernya*
 ${prefix}tovid *reply stickernya*
 ${prefix}attp *teks*
 ${prefix}ttp *teks*
 ${prefix}emojimix *emoji1+emoji2*
 ${prefix}smeme *teks1|teks2*
 ${prefix}tahta *teks*
 ${prefix}gaminglogo *teks*
 ${prefix}fpslogo *teks*
 ${prefix}ffbanner *teks*
 ${prefix}removebg *reply/kirim gambar*
 ${prefix}wanted *reply/kirim gambar*
 ${prefix}wasted *reply/kirim gambar*
 ${prefix}triggered *reply/kirim gambar*
 ${prefix}ssweb *url*
 ${prefix}nulis *teks*
 ${prefix}nulis2 *teks*`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menuconvert', sender, _cmd)
 break
case prefix+'menudownload':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*DOWNLOADER*
 ${prefix}play *query* error
 ${prefix}tiktok *url*
 ${prefix}tiktoknowm *url*
 ${prefix}tiktokaudio *url*
 ${prefix}ig *url*
 ${prefix}igstory *username*
 ${prefix}ytmp4 *url* _error_
 ${prefix}ytmp3 *url* _error_
 ${prefix}ytmp3vn *url* _error_
 ${prefix}getvideo _error_
 ${prefix}getmusic _error_
 ${prefix}tomp3 _error_`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menudownload', sender, _cmd)
 break
case prefix+'menusearch':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*SEARCH MENU*
 ${prefix}pinterest *query*
 ${prefix}grupwa *query*
 ${prefix}ringtone *query*
 ${prefix}ytsearch *query*`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menusearch', sender, _cmd)
 break
case prefix+'menumeme':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*MEME MENU*
 ${prefix}meme1
 ${prefix}meme2
 ${prefix}meme3
 ${prefix}meme4
 ${prefix}meme5
 ${prefix}meme6
 ${prefix}meme7
 ${prefix}meme8`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menumeme', sender, _cmd)
 break
case prefix+'menusound':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*MENU SOUND*
 ${prefix}sound1
 ${prefix}sound2
 ${prefix}sound3
 ${prefix}sound4
 ${prefix}sound5`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menusound', sender, _cmd)
 break
case prefix+'menustore':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*STORE MENU*
 ${prefix}addlist *judul=isi*
 ${prefix}dellist *judul*
 ${prefix}updatelist *judul=isi*
 ${prefix}list
 ${prefix}jeda`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menustore', sender, _cmd)
 break
case prefix+'menupd':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*PROSES / DONE*
 proses < reply chat >
 done < reply chat >
 ${prefix}setproses
 ${prefix}changeproses
 ${prefix}delsetproses
 ${prefix}setdone
 ${prefix}changedone
 ${prefix}delsetdone`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menupd', sender, _cmd)
 break
case prefix+'menustalk':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*STALK MENU*
 ${prefix}stalkml
 ${prefix}stalkff
 ${prefix}stalkgenshin
 ${prefix}stalkcod
 ${prefix}stalkdomino
 ${prefix}stalkpubg
 ${prefix}stalksausage`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menustalk', sender, _cmd)
 break
case prefix+'menuanonymous':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*ANONYMOUS CHATS*
 ${prefix}anonymous
 ${prefix}start
 ${prefix}next
 ${prefix}stop
 ${prefix}sendprofile`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menuanonymous', sender, _cmd)
 break
case prefix+'menugame':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*GAME MENU*
 ${prefix}susunkata
 ${prefix}siapakahaku
 ${prefix}mancing
 ${prefix}tebakprovinsi`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menugame', sender, _cmd)
 break
case prefix+'menubank':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*PAYMENT & BANK*
 ${prefix}buylimit
 ${prefix}buyglimit
 ${prefix}transfer
 ${prefix}ceklimit
 ${prefix}cekbalance`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menubank', sender, _cmd)
 break
case prefix+'menugroup':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*GROUP MENU*
 ${prefix}linkgrup
 ${prefix}setppgrup
 ${prefix}setnamegc *text*
 ${prefix}setdesc *text*
 ${prefix}group *open/close*
 ${prefix}imgtag *text*
 ${prefix}mute
 ${prefix}unmute
 ${prefix}revoke
 ${prefix}hidetag *text*
 ${prefix}tagall *text*
 ${prefix}add *@tag*
 ${prefix}kick *@tag*
 ${prefix}promote *@tag*
 ${prefix}demote *@tag*
 ${prefix}welcome *enable/disable*
 ${prefix}left *enable/disable*
 ${prefix}setwelcome
 ${prefix}changewelcome
 ${prefix}delsetwelcome
 ${prefix}setleft
 ${prefix}changeleft
 ${prefix}delsetleft
 ${prefix}antilink *enable/disable*`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menugroup', sender, _cmd)
 break
case prefix+'menuislami':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*MENU ISLAMI*
 ${prefix}jadwalsolat`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menuislami', sender, _cmd)
 break
case prefix+'menuowner':
try {
    var profile = await conn.profilePictureUrl(`${sender}`, 'image')
    } catch {
    var profile = 'https://i.ibb.co/YZdzhGt/522cd54e9767.jpg'
    }
var teks = `${ucapanWaktu} @${sender.split("@")[0]} 👋

*OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 ${prefix}broadcast *text*
 ${prefix}setppbot *reply/kirim gambar*
 ${prefix}setexif *text1 | text2*
 ${prefix}setowner *nomor*
 ${prefix}setmenu *type*
 ${prefix}setfake *teks*
 ${prefix}setfooter *teks*
 ${prefix}setthumb *reply/kirim gambar*
 ${prefix}setfotoowneri *reply/kirim gambar*
 ${prefix}setdonasi *reply/kirim gambar*
 ${prefix}addlimit *nomor@jumlah*
 ${prefix}addglimit *nomor@jumlah*
 ${prefix}addbalance *nomor@jumlah*
 ${prefix}addprem *nomor* *waktu*
 ${prefix}delprem *nomor*
 ${prefix}resetlimit
 ${prefix}join *link*
 ${prefix}leave
 ${prefix}mode
 ${prefix}public
 ${prefix}self
 ${prefix}ban *nomor waktu*
 ${prefix}unban *nomor*
 ${prefix}block *nomor*
 ${prefix}unblock *nomor*
 ${prefix}sewa *add/del*`
 var buff = await getBuffer(profile)
 var butnya = [{buttonId: `${prefix}menu`, buttonText: { displayText: `> Back To Menu <` }, type: 1 }]
 conn.sendMessage(from, {caption: teks, image: buff, buttons: butnya, footer: footernya, mentions: [sender]}, {quoted: msg})
 addCountCmd('#menuowner', sender, _cmd)
 break
            case prefix+'allmenu':
			case prefix+'help':
			  case prefix+'m':
			
			var { download, upload } = await checkBandwidth();
			let mundur = hitungmundur(1, 1)
			addCountCmd('#menu', sender, _cmd)
if (typemenu === 'button') {
	var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, download, upload, total, mundur)
			    conn.sendMessage(from, { caption: teks, image : pp_bot, buttons: buttonsDefa, footer: footernya, mentions: [sender]}, { quoted: msg })
}
if (typemenu === 'buttons5') {
	            var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, download, upload, total, mundur)
			    conn.sendMessage(from, { caption: teks, image: pp_bot, templateButtons: buttonsDefault, footer: `${setting.footer}`, mentions: [sender] })
}
if (typemenu === 'text') {
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, download, upload, total, mundur)
			    conn.sendMessage(from, {text: teks, mentions: [sender]}, {quoted: fimage})
}
if (typemenu === 'image') {
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, download, upload, total, mundur)
			    conn.sendMessage(from, {caption: teks, image: pp_bot, mentions: [sender]}, {quoted: fimage})
}
if (typemenu === 'sections') {
	var sections = [
    {
	title: `MENU BOT`,
	rows: [
	    {title: `1. Menu Random`, rowId: `${prefix}menurandom`},
	    {title: `2. Menu Convert & Maker`, rowId: `${prefix}menuconvert`},
	    {title: `3. Menu Download error`, rowId: `${prefix}menudownload`},
	    {title: `4. Menu Search`, rowId: `${prefix}menusearch`},
	    {title: `5. Menu Meme`, rowId: `${prefix}menumeme`},
	    {title: `6. Menu Sound`, rowId: `${prefix}menusound`},
	    {title: `7. Menu Store`, rowId: `${prefix}menustore`},
	    {title: `8. Menu Proses & Done`, rowId: `${prefix}menupd`},
	    {title: `9. Menu Stalk`, rowId: `${prefix}menustalk`},
	    {title: `10. Menu Anonymous`, rowId: `${prefix}menuanonymous`},
	    {title: `11. Menu Game`, rowId: `${prefix}menugame`},
	    {title: `12. Menu Group`, rowId: `${prefix}menugroup`},
	    {title: `13. Menu Owner`, rowId: `${prefix}menuowner`},
	]
    },
    {
	title: `INFO BOT`,
	rows: [
	    {title: `OWNER`, rowId: `${prefix}owner`, description: "Menampilkan Owner"},
	    {title: `DONASI`, rowId: `${prefix}donasi`, description: "Menampilkan Donasi"},
	    {title: `SEWA BOT`, rowId: `${prefix}sewa`, description: "Menampilkan Sewa"},
	]
	},
	]
var listMessage = {
  text: `${ucapanWaktu} @${sender.split("@")[0]} 👋`,
  footer: ``,
  mentions: [sender],
  buttonText: "LIHAT!",
  sections
}
conn.sendMessage(from, listMessage, { quoted: msg })
}

//allmenu
if (typemenu === 'document') {
var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, download, upload, total, mundur)
var hudu = [ 'application/pdf' , 'application/vnd.openxmlformats-officedocument.presentationml.presentation' , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
let filerdm = hudu[Math.floor(Math.random() * hudu.length)]
let buttons = [
{buttonId: `.simplemenu`, buttonText: {displayText: 'SIMPLE MENU'}, type: 1},{buttonId: `.menu`, buttonText: {displayText: 'TOKO'}, type: 1},{buttonId: `.owner`, buttonText: {displayText: 'OWNER'}, type: 1}
]
 let pp_bot = await getBuffer('https://i.postimg.cc/xT4BQJ8J/image.jpg')
conn.sendMessage(from, { document: fs.readFileSync('./media/Anya.jpg'), mimetype: filerdm, caption: teks, pp_bot, fileName: `[👤] Halo ${pushname}`, fileLength: '99999999999999999', mentions: [m.sender, "6289514579847@s.whatsapp.net"], buttons: buttons, footer: footernya, headerType: 4, contextInfo:{externalAdReply:{
showAdAttribution: true,
mediaType: 1,
               title: `©Heri_BOT✅`,
               renderLargerThumbnail: true,
               thumbnail: pp_bot,
               sourceUrl: 'https://chat.whatsapp.com/EwG67M77eJTFJiYYXLcPbz'
}} }, msg)
}
  break
case prefix+'setmenu':
  if (!args[1])return reply(`*Silakan Pilih Typenya*\n\n-button\n-buttons5\n-text\n-image\n-sections\n-document\n\nContoh Penggunaan :\n${prefix}setmenu button`)
  if (!isOwner)return reply(mess.OnlyOwner)
  // Button
  if (args[1] == "button") {
  typemenu = 'button'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Buttons 5
  else if (args[1] == "buttons5") {
  typemenu = 'buttons5'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Text Ajah anjing
  if (args[1] == "text") {
  typemenu = 'text'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Image
  if (args[1] == "image") {
  typemenu = 'image'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Sections
  if (args[1] == "sections") {
  typemenu = 'sections'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  // Document
  if (args[1] == "document") {
  typemenu = 'document'
  reply(`Sukses Mengubah Menu Menjadi ${q}`)
  }
  break
case prefix+'spesialpromo':
var teks = `${ucapanWaktu} @${sender.split('@')[0]} 👋

*SPESIAL PROMO HUT RI*

*- Sewa Bot 60 Hari*
*- Rp ~25.000~ > Rp 15.000*

*NOTE : HANYA BERLAKU HARI INI SAJA!!!*
*MINAT CHAT OWNER*`
conn.sendMessage(from, {caption: teks, image: {url: `https://i.ibb.co/1GHb53T/340695da0268.jpg`}, mentions: [sender]}, {quoted: fimage})
break
case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvipp = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnyaa = `*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)`
                reply(premiumnyaa)
                addCountCmd('#cekprem', sender, _cmd)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*HeriBOT :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                addCountCmd('#listprem', sender, _cmd)
                break
case prefix+'iklan':
case prefix+'iklanbot':
  var sections = [
    {
	title: `Iklan ${setting.botName}`,
	rows: [
	    {title: `Iklan Bot 1`, rowId: `${prefix}iklan1`, description: `Iklan Bot ${setting.botName} Dari Buyer ${setting.botName}`},
	    {title: `Iklan Bot 2`, rowId: `${prefix}iklan2`, description: `Iklan Bot ${setting.botName} Dari Owner ${setting.botName}`},
	]
    },
]
var listMessage = {
  text: `${ucapanWaktu} @${sender.split("@")[0]} 👋\nSilakan Pilih Iklannya Kak\n\n*📝 Iklan : ${setting.botName}*`,
  footer: `⌚ Jam : ${jam}\n📆 Tanggal : ${tanggal}`,
  mentions: [sender],
  title: `Iklan Bot ${setting.botName}`,
  buttonText: "Click Here!",
  sections
}
conn.sendMessage(from, listMessage, { quoted: fimage })
addCountCmd('#iklanbot', sender, _cmd)
  break
case prefix+'iklan1':

var but = [{buttonId: `${prefix}mrzxstore`, buttonText: { displayText: "Nomor Penjual" }, type: 1 }]
var capt = `DIAMOND FREEFIRE BY MRZXSTORE
100% LEGAL ,MURAH,DAN AMAN
HANYA MENGUNAKAN NICNAME DAN HeriBOT

*STOK✅*
5 Diamond = 1.000
20 Diamond = 2.980
50 Diamond = 7.500
70 Diamond = 9.500
100 Diamond = 13.500
140 Diamond = 18.400
210 Diamond = 27.400
280 Diamond = 35.890
355 Diamond = 44.425
425 Diamond = 53.400
500 Diamond = 62.981
720 Diamond = 89.000

 M.Mingguan  27.500
 M.Bulanan   82.000
 Mm+Mb   107.000

OWNER 
http://Wa.me/6288708224082`
conn.sendMessage(from, { caption: capt, image: {url: `https://i.ibb.co/zhFRHSk/Iklan1.jpg` }, buttons: but, footer: `© *Iklan Bot Dari Mrzx Store*`, mentions: [sender]}, { quoted: fimage })
break
case prefix+'mrzxstore':
var no = '6288708224082'
sendContact(from, no.split('@s.whatsapp.net')[0], 'Heri Store', msg)
break
case prefix+'iklan2':

var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: "Owner" }, type: 1 }]
var capt = `*── 「 SEWABOT 」 ──*

*Harga Sewa*
7 Hari = 5.000
30 Hari = 15.000
Permanen = 25.000

*Keuntungan :*
- Bot Masuk Sesuai Waktu Sewa
- Antilink
- On 24 Jam
- Fitur Banyak
- Welcome
- Addlist
- Dellist
- Cocok Buat Store
- Dan Lainnya`
conn.sendMessage(from, { caption: capt, image: {url: `https://i.ibb.co/CnK8RgV/Thumb.jpg` }, buttons: but, footer: `© *Iklan Bot Dari Owner HeriBOT*`, mentions: [sender]}, { quoted: fimage })
break
	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker':
			
			////if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])

			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio caption ${command}`)
			    }
			////limitAdd(sender, limit)
			////reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
			addCountCmd('#sticker', sender, _cmd)

            case prefix+'s':
            //if (!isPremium) return replyDeface(mess.OnlyPrem)
            var packname = '@ByHeriBOT'
            var author = '0881026434930'
            if (isImage || isQuotedImage) {

                addCountCmd('#s', sender, _cmd)
                var media = await downloadAndSaveMediaMessage('image', `./sticker/${sender}.jpeg`)
                var opt = { packname, author }
                conn.sendImageAsSticker(from, media, msg, opt)
                .then( res => {
                    fs.unlinkSync(media)
                })
            } else if (isVideo || isQuotedVideo) {
                

                addCountCmd('#s', sender, _cmd)
                var media = await downloadAndSaveMediaMessage('video', `./sticker/${sender}.jpeg`)
                var opt = { packname, author }
                conn.sendImageAsSticker(from, media, msg, opt)
                .then( res => {
                    fs.unlinkSync(media)
                })
            } else if (isQuotedSticker) {
                if (args.length < 2) return replyDeface(`Perintah : ${command} Reply Gambar/Vidio`)
  
                addCountCmd('#stickerwm', sender, _cmd)
                var media = await downloadAndSaveMediaMessage("sticker", `./sticker/swm.webp`)
                var opt = { packname, author }
                conn.sendImageAsSticker(from, media, msg, opt)
                .then( res => {
                    fs.unlinkSync(media)
                })
            } else {
                reply(`Kirim gambar/vidio caption ${command}`)

            }
            break

                break
            case prefix+'swm': case prefix+'wm': case prefix+'stikerwm': case prefix+'stickerwm':
            if (!isPremium) return replyDeface(mess.OnlyPrem)
            var packname = q.split('|')[0] ? q.split('|')[0] : q
            var author = q.split('|')[1] ? q.split('|')[1] : ''
            if (isImage || isQuotedImage) {
                if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} nama|author\n\nContoh : ${command} Heri|HeriBOT`)
                addCountCmd('#stickerwm', sender, _cmd)
                var media = await downloadAndSaveMediaMessage('image', `./sticker/${sender}.jpeg`)
                var opt = { packname, author }
                conn.sendImageAsSticker(from, media, msg, opt)
                .then( res => {
                    fs.unlinkSync(media)
                })
            } else if (isVideo || isQuotedVideo) {
                if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} nama|author\n\nContoh : ${command} Heri|HeriBOT`)

                addCountCmd('#stickerwm', sender, _cmd)
                var media = await downloadAndSaveMediaMessage('video', `./sticker/${sender}.jpeg`)
                var opt = { packname, author }
                conn.sendImageAsSticker(from, media, msg, opt)
                .then( res => {
                    fs.unlinkSync(media)
                })
            } else if (isQuotedSticker) {
                if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} nama|author\n\nContoh : ${command} Heri|HeriBOT`)

                addCountCmd('#stickerwm', sender, _cmd)
                var media = await downloadAndSaveMediaMessage("sticker", `./sticker/swm.webp`)
                var opt = { packname, author }
                conn.sendImageAsSticker(from, media, msg, opt)
                .then( res => {
                    fs.unlinkSync(media)
                })
            } else {
                replyDeface(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
            }
            break
            break
            case prefix+'tomp3': case prefix+'toaudio':
            
			if (checkLogins(sender, loginnya) === false) return conn.sendMessage(from, { text: teks, footer: footernya, buttons: login, mentions: [sender]}, { quoted: fimage })
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (isVideo || isQuotedVideo) {
                let media = await downloadAndSaveMediaMessage('video', `./sticker/${sender}.mp4`)
                reply(mess.wait)
                addCountCmd('#tomp3', sender, _cmd)
                let ran = './sticker/'+getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                    fs.unlinkSync(media)
                    if (err) return replyDeface('Gagal :V')
                    conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3` }, { quoted: msg })
                    //limitAdd(sender, limit)
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                })
                //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            } else {
                reply(`Kirim/reply video dengan caption ${command}`)
            }
            break
case prefix+'tovn':

  if (!isQuotedAudio)return reply(`Reply Audionya!`)
  //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(mess.wait)
if (isQuotedAudio) {
var media = await downloadAndSaveMediaMessage('audio', 'audio.mp3')
conn.sendMessage(from, {audio :{url: media}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})}
//limitAdd(sender, limit)
addCountCmd('#tovn', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//conn.sendMessage(from, {audio :fs.readFileSync('./sound/sound1.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
break
			case prefix+'toimg': case prefix+'toimage':
                case prefix+'tovid': case prefix+'tovideo':
                
                //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (!isQuotedSticker) return reply(`Reply stikernya!`)
                   var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                   var buffer = Buffer.from([])
                   for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                   }
                   var rand1 = 'sticker/'+getRandom('.webp')
                   var rand2 = 'sticker/'+getRandom('.png')
                   fs.writeFileSync(`./${rand1}`, buffer)
                   if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                     reply(mess.wait)
                     exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                       fs.unlinkSync(`./${rand1}`)
                       if (err) return reply(mess.error.api)
                       conn.sendMessage(from, {caption: `*Nih Kak ${pushname}*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                       fs.unlinkSync(`./${rand2}`)
                     })
                   } else {
                     reply(mess.wait)
                     webp2mp4File(`./${rand1}`).then(async(data) => {
                       fs.unlinkSync(`./${rand1}`)
                       conn.sendMessage(from, {caption: `*Nih Kak ${pushname}*`, video: await getBuffer(data.data) }, { quoted: msg })
                     })
                   }
                   //limitAdd(sender, limit)
                   //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
                   addCountCmd('#toimg', sender, _cmd)
                   break
case prefix+'ttp':
             //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return replyDeface(`> Perintah ${command} [text]\n> Contoh : ${command} Heri`)
            conn.sendMessage(from, {sticker: {url: `https://api.lolhuman.xyz/api/ttp5?apikey=${apikeylol}&text=${args[1]}`}})   	
            limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#ttp', sender, _cmd)
break
               case prefix+'attp':
               
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} text\n\nContoh : ${command}`)
            if (q.length > 75) return replyDeface(`Teksnya terlalu panjang`)
            addCountCmd('#attp', sender, _cmd)
            var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var rand2 = 'sticker/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                //limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            break
        case prefix+'semoji':
               
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} emoji\n\nContoh : ${command} 😎`)
            addCountCmd('#semoji', sender, _cmd)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURIComponent(q)}?apikey=${apikeylol}`)
            var rand2 = 'sticker/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
                //limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            break
        case prefix+'emojimix': case prefix+'mixemoji':
           
            if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
            if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} emoji1+emoji2\n\nContoh : ${command} 😎+😅`)
            var emo1 = q.split("+")[0]
            var emo2 = q.split("+")[1]
            if (!isEmoji(emo1) || !isEmoji(emo2)) return replyDeface(`Itu bukan emoji!`)
            addCountCmd('#emojimix', sender, _cmd)
            fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`)
            .then(data => {
                sendStickerFromUrl(from, data.results[0]. url, stc.packname, stc.author, { quoted: msg })
                //limitAdd(sender, limit)
            })
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            break
case prefix+'smeme': case prefix+'stikermeme': case prefix+'stickermeme': case prefix+'memestiker':
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            var atas = q.includes('|') ? q.split('|')[0] ? q.split('|')[0] : q : '-'
            var bawah = q.includes('|') ? q.split('|')[1] ? q.split('|')[1] : '' : q
            var opt = { packname: stc.packname, author: stc.author }
            if (isImage || isQuotedImage) {
                try {
                    if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} text atas|text bawah\n\nContoh : ${command} Beliau|Awikawok`)
                    addCountCmd('#smeme', sender, _cmd)
                    reply(mess.wait)
                    var media = await downloadAndSaveMediaMessage("sticker", `./sticker/stmeme.jpeg`)
                    var media_url = await imgbb(imgbbapi, media)
                    var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url.display_url}`
                    conn.sendImageAsSticker(from, meme_url, msg, opt)
                    //limitAdd(sender, limit)
                    fs.unlinkSync(media)
                } catch (e) {
                    console.log(color('[ ERROR ]', 'red'), e)
                    reply(mess.error.api)
                    conn.sendMessage(ownerNumber, { text: `${command} error : ${e}` })
                }
            } else if (isQuotedSticker) {
                try {
                    if (args.length < 2) return replyDeface(`Gunakan dengan cara ${command} text atas|text bawah\n\nContoh : ${command} Beliau|Awikawok`)
                    addCountCmd('#smeme', sender, _cmd)
                    reply(mess.wait)
                    var media = await downloadAndSaveMediaMessage("sticker", `./sticker/smeme.webp`)
                    var media_url = await imgbb(imgbbapi, media)
                    var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url.display_url}`
                    conn.sendImageAsSticker(from, meme_url, msg, opt)
                    //limitAdd(sender, limit)
                    fs.unlinkSync(media)
                } catch (err) {
                    console.log(color('[ ERROR ]', 'red'), err)
                    reply(mess.error.api)
                    conn.sendMessage(ownerNumber, { text: `${command} error : ${err}` })
                }
            } else {
                reply(`Kirim Gambar atau balas Sticker dengan caption ${command} teks atas|teks bawah`)
            }
            break
// Maker Menu
case prefix+'gaminglogo':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${apikeylol}&text=${q}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#gaminglogo', sender, _cmd)
break
case prefix+'fpslogo':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${apikeylol}&text=${q}`}}, {quoted: fimage})
//limitAdd(sender, limit)
addCountCmd('#fpslogo', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
break
case prefix+'tahta':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
reply(mess.wait)
const tahta = args.join(" ")
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${args[1]}&apikey=IkyOgiwara`}}, {quoted: fimage})
//limitAdd(sender, limit)
addCountCmd('#tahta', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
break
case prefix+'ffbanner':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${apikeylol}&text=${q}`}}, {quoted: fimage})
//limitAdd(sender, limit)
addCountCmd('#ffbanner', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
break
case prefix+'removebg':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedImage && !isImage)return reply(`Kirim/Reply Gambar Dengan Caption ${command}`)
reply(mess.wait)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `removebg.jpeg`)
var njay = await imgbb(imgbbapi, media)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/removebg?apikey=${apikeylol}&img=${njay.display_url}`}}, {quoted: fimage})
//limitAdd(sender, limit)
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#removebg', sender, _cmd)
break
case prefix+'wanted':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedImage && !isImage)return reply(`Kirim/Reply Gambar Dengan Caption ${command}`)
reply(mess.wait)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `wanted.jpeg`)
var njay = await imgbb(imgbbapi, media)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/creator1/wanted?apikey=${apikeylol}&img=${njay.display_url}`}}, {quoted: fimage})
//limitAdd(sender, limit)
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#wanted', sender, _cmd)
break
case prefix+'wasted':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedImage && !isImage)return reply(`Kirim/Reply Gambar Dengan Caption ${command}`)
reply(mess.wait)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `wasted.jpeg`)
var njay = await imgbb(imgbbapi, media)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/editor/wasted?apikey=${apikeylol}&img=${njay.display_url}`}}, {quoted: fimage})
//limitAdd(sender, limit)
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#wasted', sender, _cmd)
break
case prefix+'triggered':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedImage && !isImage)return reply(`Kirim/Reply Gambar Dengan Caption ${command}`)
reply(mess.wait)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `triggered.jpeg`)
var njay = await imgbb(imgbbapi, media)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/creator1/trigger?apikey=${apikeylol}&img=${njay.display_url}`}}, {quoted: fimage})
//limitAdd(sender, limit)
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#triggered', sender, _cmd)
break
case prefix+'ssweb':

if (args.length < 2) return reply(`Kirim perintah ${command} link`)
//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(`_Sedang Screenshot Gambar..._`)
var ssweb = q
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://hadi-api.herokuapp.com/api/ssweb2?url=${ssweb}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#ssweb', sender, _cmd)
break
case prefix+'nulis':

            addCountCmd('#nulis', sender, _cmd)
            reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Jangan Lupa Donasi`)
            break
        case prefix+'nuliskiri': {
        	
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} conn`)
            reply(mess.wait)
            const tulisan = body.slice(11)
            addCountCmd('#nuliskiri', sender, _cmd)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './media/nulis/images/buku/sebelumkiri.jpg',
                '-font',
                './media/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '22',
                '-interline-spacing',
                '2',
                '-annotate',
                '+140+153',
                fixHeight,
                './media/nulis/images/buku/setelahkiri.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    conn.sendMessage(from, { caption: 'Jangan males pak...', image: fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg') }, { quoted: msg, thumbnail: Buffer.alloc(0) })
                })
            }
            break
        case prefix+'nuliskanan': {
        	
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} conn`)
            reply(mess.wait)
            const tulisan = body.slice(12)
            addCountCmd('#nuliskanan', sender, _cmd)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', [
                './media/nulis/images/buku/sebelumkanan.jpg',
                '-font',
                './media/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '2',
                '-annotate',
                '+128+129',
                fixHeight,
                './media/nulis/images/buku/setelahkanan.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    conn.sendMessage(from, { caption: 'Jangan males pak...', image: fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg') }, { quoted: msg, thumbnail: Buffer.alloc(0) })
                })
            }
            break
        case prefix+'foliokiri': {
        	
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} conn`)
            reply(mess.wait)
            const tulisan = body.slice(11)
            addCountCmd('#foliokiri', sender, _cmd)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', [
                './media/nulis/images/folio/sebelumkiri.jpg',
                '-font',
                './media/nulis/font/Indie-Flower.ttf',
                '-size',
                '1720x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '4',
                '-annotate',
                '+48+185',
                fixHeight,
                './media/nulis/images/folio/setelahkiri.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    conn.sendMessage(from, { caption: 'Jangan males pak...', image: fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg') }, { quoted: msg, thumbnail: Buffer.alloc(0) })
                })
            }
            break
        case prefix+'foliokanan': {
        	
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} conn`)
            reply(mess.wait)
            const tulisan = body.slice(12)
            addCountCmd('#foliokanan', sender, _cmd)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', [
                './media/nulis/images/folio/sebelumkanan.jpg',
                '-font',
                './media/nulis/font/Indie-Flower.ttf',
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '3',
                '-annotate',
                '+89+190',
                fixHeight,
                './media/nulis/images/folio/setelahkanan.jpg'
            ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    conn.sendMessage(from, { caption: 'Jangan males pak...', image: fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg') }, { quoted: msg, thumbnail: Buffer.alloc(0) })
                })
            }
            break
case prefix+'listbahasa':

            addCountCmd('#listbahasa', sender, _cmd)
            var clear = ["auto", "isSupported", "getCode"]
            var teks = `List Bahasa Yang Tersedia\n\n`
            for (let i in translate.languages) {
                if (!clear.includes(i)) {
                    teks += `*${i}* untuk ${translate.languages[i]}\n`
                }
            }
            reply(teks)
            break
case prefix+'translate': case prefix+'tr':{
	
            if (args.length < 2) return reply(`Gunakan dengan cara :\n${command} kodebahasa text\n${command} kodebahasa < reply chat >\n\nContoh :\n${command} id what\n${command} id < reply chat >`)
            if (isQuotedMsg){
                addCountCmd('#translate', sender, _cmd)
                let bahasanya = args[1].toString()
                const trans = await translate(quotedMsg.chats, {
                    to: bahasanya
                })
                .then((res) => reply(res.text))
                .catch((err) => {
                    reply(`Kode bahasa salah!`)
                })
                trans
            } else {
                if (args.length < 3) return reply(`Gunakan dengan cara :\n${command} kodebahasa text\n${command} kodebahasa < reply chat >\n\nContoh :\n${command} id what\n${command} id < reply chat >`)
                addCountCmd('#translate', sender, _cmd)
                let bahasanya = args[1].toString()
                let textnya = q.slice(args[1].length + 1, q.length)
                const trans = await translate(textnya, {
                    to: bahasanya
                })
                .then((res) => reply(res.text))
                .catch((err) => {
                    reply(`Kode bahasa salah!`)
                })
                trans
            }
            }
            break
// Logo Menu
case prefix+'lolimaker':
case prefix+'kanekimaker':
case prefix+'remmaker':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api-kaysa.herokuapp.com/api/${command.slice(1)}?text=${q}&apikey=keyapi`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
break
case prefix+'sadboymaker':
case prefix+'girlmaker':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}|Ganteng`)
var teks1 = q.includes('|') ? q.split('|')[0] ? q.split('|')[0] : q : '-'
var teks2 = q.includes('|') ? q.split('|')[1] ? q.split('|')[1] : '' : q
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api-kaysa.herokuapp.com/api/${command.slice(1)}?text=${encodeURIComponent(teks1)}&text2=${encodeURIComponent(teks2)}&apikey=keyapi`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd(`#${command.slice(1)}`, sender, _cmd)
break
// Download Menu
case prefix+'play':

			    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                reply(mess.wait)
                await sendPlay(from, q)
				//limitAdd(sender, limit)
				addCountCmd('#play', sender, _cmd)
				//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
                break
			case prefix+'ytmp4': case prefix+'mp4':
			
			    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    y2mateV(args[1]).then ( data => {
			      var capt = monospace(`Title : ${data[0].judul}`)
			      conn.sendMessage(from, {caption: capt, video: {url: data[0].link}}, {quoted: fimage})
			    }).catch(() => reply(mess.error.api))
			//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
			addCountCmd('#ytmp4', sender, _cmd)
			    break
/*case prefix+'ytmp3': case prefix+'mp3':
			    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[7].quality}\n*≻ Size :* ${data.medias[7].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { audio: { url: data.medias[7].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			      //limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break*/
				///SCRAPER YTMP3 BY HeriBOT 
case prefix+'ytmp3':

      //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)

			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				y2mateA(q).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: fimage}) 
					
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: fimage})
					  }
					  )
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#ytmp3', sender, _cmd)
              break
/*case prefix+'yts': case prefix+'ytsearch':

			    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ HeriBOT :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: fimage })
				//limitAdd(sender, limit)
				addCountCmd('#ytsearch', sender, _cmd)
				//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
				}).catch(() => reply(mess.error.api))
			    break*/
			case prefix+'yts':
case prefix+'yts': case prefix+'ytsearch':{
	
			//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} *query*\n\n_Contoh_\n\n${command} Bila Nanti`)
            reply(mess.wait)
            addCountCmd('#ytsearch', sender, _cmd)
            let search = await yts(q)
            let listSerch = []
            for (let i of search.all) {
                listSerch.push({
                    title: i.title, rowId: `${prefix}play ${i.url}`, description: `\n\n• Channel : ${i.author.name}\n• Duration : ${i.timestamp}`
                })
            }
            const listSearch = {
                text: `*Youtube Search*\n\nResult From ${q}`,
                footer: footernya,
                buttonText: "List Search",
                sections: [{
                   title: "Total Search " + search.all.length, rows: listSerch
                }]
            }
            conn.sendMessage(from, listSearch, { quoted: msg })
            //limitAdd(sender, limit)
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            }
            break
case prefix+'getvideo': case prefix+'getvidio':

			    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateV(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var capt = monospace(`Judul : ${data[0].judul}`)
			      conn.sendMessage(from, { video: { url: data[0].link }, caption: capt }, { quoted: fimage })
			       //limitAdd(sender, limit)
			addCountCmd('#getvideo', sender, _cmd)
				//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
				}).catch(() => reply(mess.error.api))
		        break
			case prefix+'getmusik': case prefix+'getmusic':
			
			    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateA(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      conn.sendMessage(from, {document: {url: data[0].link}, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3'}, {quoted: fimage})
			      //limitAdd(sender, limit)
			addCountCmd('#getmusik', sender, _cmd)
				//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
				}).catch(() => reply(mess.error.api))
			    break


//downloader apikey
        case prefix+'tiktoknowm': case prefix+'tiktok':
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return reply(`> Contoh : ${command} https://vt.tiktok.com/ZSRoa3TGp/`) 
            reply(mess.wait)
        fetchJson(`https://api.neoxr.my.id/api/tiktok?url=${args[1]}&apikey=${apikey}`).then(x => {
        var capt = `*TIKTOK DOWNLOAD NO WM*\n\n> Caption : ${x.caption}`
        var but = [{buttonId: `.owner`, buttonText: { displayText: "Owner Bot" }, type: 1 }]
            conn.sendMessage(from, {video : { url: x.data.video }, caption: capt,  buttons: but, footer: "© *Tiktok Downloader*" })
            //limitAdd(sender, limit)
            })
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#tiktoknowm', sender, _cmd)
break
        case prefix+'ig':
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return reply(`Masukkan link, Contoh ${prefix}ig https://www.instagram.com/reel/CknaRpIv6Hj/?igshid=YmMyMTA2M2Y=`)
            reply(mess.wait)
            const x1 = await fetchJson(`https://api.neoxr.my.id/api/ig?url=${args[1]}&apikey=${apikey}`)
            var capt = `*INSTAGRAM DOWNLOADER*\n\n> Done ~`
            var but = [{buttonId: `.owner`, buttonText: { displayText: "Owner Bot" }, type: 1 }]
        if (x1.data[0].type == "jpg"){ 
        conn.sendMessage(from, {image: {url: x1.data[0].url}, caption: capt, buttons: but, footer: "© *IG Downloader*"})
}
        if (x1.data[0].type == "mp4"){
        conn.sendMessage(from, {video: {url: x1.data[0].url}, caption: capt, buttons: but, footer: "© *IG Downloader*"})
}
        if (x1.data[0].type == "mp3"){
        conn.sendMessage(from, {audio: {url: x1.data[0].url}, mimetype: "audio/mp4"})
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#ig', sender, _cmd)
break
		case prefix+'tiktokaudio':
		    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return reply(`> Contoh : ${command} https://vt.tiktok.com/ZSRoa3TGp/`)
            reply(mess.wait)
            fetchJson(`https://api.neoxr.my.id/api/tiktok?url=${args[1]}&apikey=${apikey}`).then(x => {
            conn.sendMessage(from, {audio : { url: x.data.audio },  mimetype:"audio/mp4"})
})
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#tiktokaudio', sender, _cmd)
break
        case prefix+'igstory':
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return reply(`Masukkan username, Contoh ${prefix}igstory Heri_souvenir`)
            reply(mess.wait)
            const x2 = await fetchJson(`https://api.neoxr.my.id/api/igstory?username=${args[1]}&apikey=${apikey}`)
            var capt = `*INSTAGRAM DOWNLOADER*\n\n•Done ~`
            var but = [{buttonId: `.owner`, buttonText: { displayText: "Owner Bot" }, type: 1 }]
            if (x2.data[0].type == "jpg"){ 
            conn.sendMessage(from, {image: {url: x2.data[0].url}, caption: capt, buttons: but, footer: "© *IG Downloader*"})
}
            if (x2.data[0].type == "mp4"){
            conn.sendMessage(from, {video: {url: x2.data[0].url}, caption: capt, buttons: but, footer: "© *IG Downloader*"})
}
            if (x2.data[0].type == "mp3"){
            conn.sendMessage(from, {audio: {url: x2.data[0].url}, mimetype: "audio/mp4"})
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#igstory', sender, _cmd)
break
    case prefix+'fb': 
            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return reply(`Masukkan link, Contoh ${prefix}fb https://fb.watch/7B5KBCgdO3/`)
            reply(mess.wait)
            const x4 = await fetchJson(`https://api.neoxr.my.id/api/fb?url=${args[1]}&apikey=${apikey}`)
            var capt = `*FACEBOOK DOWNLOADER*\n\n• Type : ${x4.data[0].type}\n• Size : ${x4.data[0].size}\n• Quality : ${x4.data[0].quality}`
            var but = [{buttonId: `.owner`, buttonText: { displayText: "Owner Bot" }, type: 1 }]
        if (x4.data[0].type == "jpg"){ 
        conn.sendMessage(from, {image: {url: x4.data[0].url}, caption: capt, buttons: but, footer: "© Fb Downloader*"})
}
        if (x4.data[0].type == "mp4"){
        conn.sendMessage(from, {video: {url: x4.data[0].url}, caption: capt, buttons: but, footer: "© *Fb Downloader*"})
}
        if (x4.data[0].type == "mp3"){
        conn.sendMessage(from, {audio: {url: x4.data[0].url}, mimetype: "audio/mp4"})
}
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#ig', sender, _cmd)
break
//Islami Menu
        case prefix+'jadwalsolat':
            if (!args[1]) return reply(`Masukan nama kota nya, Contoh : Bandung`)
            reply(mess.wait)
            const x3 = await fetchJson(`https://api.neoxr.my.id/api/sholat?q=${args[1]}&apikey=${apikey}`)
reply(`
• *J A D W A L  S H O L A T* • 

✓ *N A M A  K O T A* : ${x3.city}
✓ *T A N G G A L* : ${x3.date}

✓ *I M S A K* : ${x3.data.imsak}
✓ *S U B U H* : ${x3.data.subuh}
✓ *D H U H A* : ${x3.data.dhuha}
✓ *D Z U H U R* : ${x3.data.dzuhur}
✓ *A S H A R* : ${x3.data.ashar}
✓ *M A G H R I B* : ${x3.data.magrib}
✓ *I S Y A* : ${x3.data.isya}
`)
break
        case prefix+'listsurah':
            if (!args[0]) return reply(`Alhamdulillah`)
            reply(mess.wait)
            const listsurah = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikeylol}`)
           var xx = ""
Object.keys(listsurah.result).forEach((i) => {
xx = listsurah.result[i]
})
reply(xx)
break
// Search Menu
case prefix+'pinterest':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Gajah`)
reply(mess.wait)
var gmbrnya = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${apikeylol}&query=${q}`)
var but = [{buttonId: `${prefix}pinterest ${q}`, buttonText: { displayText: "Next Gambar" }, type: 1 }]
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: gmbrnya.result}, buttons: but, footer: "© *Pinterest*" }, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#pinterest', sender, _cmd)
break
case prefix+'groupwa': case prefix+'grupwa':
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} Mobile Legends`)
//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let grupnya = q
reply(mess.wait)
let jum = await fetchJson(`https://rest-api-hitomi.herokuapp.com/api/search/linkgroupwa?text=${grupnya}`)
let googlee = jum.result

let hasilnya = ` 「 *Grup Wa Search*  」\n\n*Judul :* ${grupnya}\n\n`
for (let i of googlee) {
hasilnya += `*Nama :* ${i.nama}\n*Link :* ${i.link}\n\n`
}
reply(hasilnya)
//limitAdd(sender, limit)
addCountCmd('#grupwa', sender, _cmd)
break
case prefix+'ringtone':
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} Mobile Legends`)
//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let ringtone = q
reply(mess.wait)
let jum1 = await fetchJson(`https://rest-api-hitomi.herokuapp.com/api/search/ringtone?text=${ringtone}`)
let ring = jum1.result

let hasil = ` 「 *Ringtone Search*  」\n\n*Judul :* ${ringtone}\n\n`
for (let i of ring) {
hasil += `*Title :* ${i.title}\n*Source :* ${i.source}\n*Audio :* ${i.audio}\n\n`
}
reply(hasil)
//limitAdd(sender, limit)
addCountCmd('#ringtone', sender, _cmd)
break
// Meme Menu
case prefix+'meme1':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
var meme = q
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme1?apikey=${apikeylol}&text=${meme}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme1', sender, _cmd)
break
case prefix+'meme2':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} ${setting.ownerName}|Ganteng Banget`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme2?apikey=${apikeylol}&text1=${text1}&text2=${text2}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme2', sender, _cmd)
break
case prefix+'meme3':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} ${setting.ownerName}|Ganteng Banget`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var text3 = q.split('|')[2] ? q.split('|')[2] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme3?apikey=${apikeylol}&text1=${text1}&text2=${text2}&text3=${text3}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme3', sender, _cmd)
break
case prefix+'meme4':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
var meme4 = q
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme4?apikey=${apikeylol}&text=${meme4}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme4', sender, _cmd)
break
case prefix+'meme5':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} ${setting.ownerName}`)
var meme5 = q
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme5?apikey=${apikeylol}&text=${meme}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme5', sender, _cmd)
break
case prefix+'meme6':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} ${setting.ownerName}|Ganteng Banget`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var text3 = q.split('|')[2] ? q.split('|')[2] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme6?apikey=${apikeylol}&text1=${text1}&text2=${text2}&text3=${text3}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme6', sender, _cmd)
break
case prefix+'meme7':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} ${setting.ownerName}|Ganteng Banget`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme7?apikey=${apikeylol}&text1=${text1}&text2=${text2}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme7', sender, _cmd)
break
case prefix+'meme8':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Example :\n${command} text\n\nContoh :\n${command} ${setting.ownerName}|Ganteng Banget`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q
var text2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(mess.wait)
conn.sendMessage(from, {caption: `*_Done By ${setting.botName} ✅_*`, image: {url: `https://api.lolhuman.xyz/api/meme8?apikey=${apikeylol}&text1=${text1}&text2=${text2}`}}, {quoted: fimage})
//limitAdd(sender, limit)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
addCountCmd('#meme8', sender, _cmd)
break
      //  case prefix+'lirik':
      //  //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   //     if (!args[1]) return reply(`Masukan nama lagu nya, Contoh : ${prefix}lirik Bad liar`)
    //        reply(mess.wait)
 //       const x5 = await fetchJson(`https://api.neoxr.my.id/api/lyric?q=${args[1]}&apikey=${apikey}`)
   //     const x6 = await fetchJson(`https://api.neoxr.my.id/api/lyric?q=${url: x5.data[0].url}&apikey=${apikey}`)
  //      var teks = `*JUDUL* : ${x5.data[0].title}`
    //    var img = `${x6.data[0].image}`
 //       conn.sendMessage(from, {teks: {url: x6.data[0].lyric}, caption: teks, image: img}, { quoted: fimage })
  //      reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : //isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
// addCountCmd('#lirik', sender, _cmd)     
  //      break
// Anonymous Chat
        case prefix+'anonymous':
            if (isGroup) return replyDeface(mess.OnlyPM)
            addCountCmd('#anonymous', sender, _cmd)
            this.anonymous = this.anonymous ? this.anonymous : {}
            var but = [{buttonId: `${prefix}start`, buttonText: { displayText: "SEARCH" }, type: 1 }]
            var teks = `Hai ${pushname !== undefined ? pushname : 'Kak'} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}search untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
            conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
            break
        case prefix+'start': case prefix+'search':
            if (isGroup) return replyDeface(mess.OnlyPM)
            addCountCmd('#start', sender, _cmd)
            this.anonymous = this.anonymous ? this.anonymous : {}
            var rooms = Object.values(this.anonymous).find(room => room.check(sender))
            if (rooms) {
                var but = [{buttonId: `${prefix}stop`, buttonText: { displayText: "STOP" }, type: 1 }, {buttonId: `${prefix}skip`, buttonText: { displayText: "SKIP" }, type: 1 }]
                var teks = `[⚠️] Kamu masih dalam sesi chat dengan partner! ❌`
                return conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
            }
            var roomm = Object.values(this.anonymous).find(room => room.state == "WAITING" && !room.check(sender))
            if (roomm) {
                var but = [{buttonId: `${prefix}stop`, buttonText: { displayText: "STOP" }, type: 1 }, {buttonId: `${prefix}skip`, buttonText: { displayText: "SKIP" }, type: 1 }]
                roomm.b = sender
                roomm.state = "CHATTING"
                var teks = `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
                await conn.sendMessage(roomm.a, { text: teks, footer: footernya, buttons: but })
                await conn.sendMessage(roomm.b, { text: teks, footer: footernya, buttons: but })
            } else if (!rooms) {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: sender,
                    b: '',
                    state: "WAITING",
                    check: function(who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function(who = '') {
                        return who == this.a ? this.b : who == this.b ? this.a : ''
                    }
                }
                var but = [{buttonId: `${prefix}stop`, buttonText: { displayText: "STOP" }, type: 1 }]
                var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
                await conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
            }
            break
        case prefix+'next': case prefix+'skip':
            if (isGroup) return replyDeface(mess.OnlyPM)
            addCountCmd('#next', sender, _cmd)
            this.anonymous = this.anonymous ? this.anonymous : {}
            let romeo = Object.values(this.anonymous).find(room => room.check(sender))
            var but = [{buttonId: `${prefix}start`, buttonText: { displayText: "SEARCH" }, type: 1 }]
            if (!romeo) {
                var teks = `[⚠️] Kamu belum pernah memulai chat! ❌`
                await conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
                throw false
            }
            let other = romeo.other(sender)
            var teks1 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu! ❌`
            if (other) await conn.sendMessage(other, { text: teks1, footer: footernya, buttons: but })
            delete this.anonymous[romeo.id]
            let room = Object.values(this.anonymous).find(room => room.state == "WAITING" && !room.check(sender))
            if (room) {
                var but = [{buttonId: `${prefix}stop`, buttonText: { displayText: "STOP" }, type: 1 }, {buttonId: `${prefix}skip`, buttonText: { displayText: "SKIP" }, type: 1 }]
                room.b = sender
                room.state = "CHATTING"
                var teks = `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
                await conn.sendMessage(room.a, { text: teks, footer: footernya, buttons: but })
                await conn.sendMessage(room.b, { text: teks, footer: footernya, buttons: but })
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: sender,
                    b: '',
                    state: "WAITING",
                    check: function(who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function(who = '') {
                        return who == this.a ? this.b : who == this.b ? this.a : ''
                    }
                }
                var but = [{buttonId: `${prefix}stop`, buttonText: { displayText: "STOP" }, type: 1 }]
                var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
                await conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
            }
            break
        case prefix+'stop':
            if (isGroup) return replyDeface(mess.OnlyPM)
            addCountCmd('#stop', sender, _cmd)
            this.anonymous = this.anonymous ? this.anonymous : {}
            var roomo = Object.values(this.anonymous).find(room => room.check(sender))
            if (!roomo) {
                var but = [{buttonId: `${prefix}start`, buttonText: { displayText: "SEARCH" }, type: 1 }]
                var teks = `[⚠️] Kamu belum pernah mulai chat! ❌`
                await conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
                throw false
            } else {
                var but = [{buttonId: `${prefix}start`, buttonText: { displayText: "SEARCH" }, type: 1 }]
                var teks = `[✅] Berhasil memberhentikan chat`
                var teks2 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu`
                await conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
                let other = roomo.other(sender)
                if (other) await conn.sendMessage(other, { text: teks2, footer: footernya, buttons: but })
                delete this.anonymous[roomo.id]
            }
            break
        case prefix+'sendprofile': case prefix+'sendprofil':
            if (isGroup) return replyDeface(mess.OnlyPM)
            this.anonymous = this.anonymous ? this.anonymous : {}
	        let romoe = Object.values(this.anonymous).find(room => room.check(sender))
	        var but = [{buttonId: `${prefix}start`, buttonText: { displayText: "SEARCH" }, type: 1 }]
		    if (!romoe) {
                var teks = `[⚠️] Kamu belum pernah memulai chat!`
                await conn.sendMessage(from, { text: teks, footer: footernya, buttons: but })
                throw false
            } else {
                let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
                var partnerJHeriBOT = rms.other(sender)
                var res = await conn.sendContact(partnerJHeriBOT, [sender.split("@")[0]])
                conn.sendMessage(from, { text: '[✅] Berhasil mengirim profil ke teman chat anda!' }, { quoted: msg })
                conn.sendMessage(partnerJHeriBOT, { text: '[👨👩] Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
            }
            break
// Store Menu
case prefix+'list': case prefix+'menu': case 'store': case prefix+'m':
		if (!isGroup) return reply(mess.OnlyGrup)
            if (db_respon_list.length === 0) return reply(`Belum ada list menu di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list menu di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: `${ucapanWaktu} @${sender.split("@")[0]}`,
                buttonText: 'PILIH MENU!',
                footer: `\n⏳ ${jam} WIB\n📆 ${tanggal}`,
                mentions: [sender],
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            conn.sendMessage(from, listMsg)
            break
         case prefix+'addlist': case prefix+'addmenu':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            var args1 = q.split("==")[0]
            var args2 = q.split("==")[1]                
            if (!q.includes("==")) return reply(`- Perintah : ${command} [judul]==[isi]\n- Contoh : ${command} PAY==DANA,GOPAY`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`menu *${args1}* sudah ada`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage("image", `${pushname}.jpeg`)
                 var njay = await imgbb(imgbbapi, media)
                        addResponList(from, args1, args2, true, `${njay.display_url}`, db_respon_list)
                        reply(`Berhasil menambahkan menu *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Berhasil menambahkan menu *${args1}*`)
            }
            break
        case prefix+'dellist': case prefix+'delete': case prefix+'del':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (db_respon_list.length === 0) return reply(`Belum ada list menu`)
            if (!q) return reply(`- Perintah : ${command} [judul]\n- Contoh : ${command} PAY`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`*${q}* tidak ada di menu`)
            delResponList(from, q, db_respon_list)
            reply(`berhasil menghapus menu *${q}*`)
            break
        case prefix+'updatelist': case prefix+'update':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            var args1 = q.split("==")[0]
            var args2 = q.split("==")[1]
            if (!q.includes("==")) return reply(`- Perintah : ${command} [judul]==[isi]\n- Contoh : ${command} PAY==DANA,GOPAY`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`*${args1}* tidak terdaftar di menu`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage("image", `${pushname}.jpeg`)
                 var njay = await imgbb(imgbbapi, media)
                        updateResponList(from, args1, args2, true, `${njay.display_url}`, db_respon_list)
                        reply(`Berhasil update menu *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Sukses update menu *${args1}*`)
            }
            break
// Proses & Done
case 'p': case 'proses': case prefix+'p': case prefix+'proses':
            if (!isGroup) return
            if (!isOwner && !isGroupAdmins) return
            if (!isQuotedMsg) return
            let proses = `*•======[ ORDER DIPROSES ]======•*\n\n*👤PESANAN :* @${quotedMsg.sender.split("@")[0]}\n*📆TANGGAL :* _${tanggal}_\n*⌚JAM :* _${jam}_\n*📫STATUS :* _PROSES_\n\n_⬡ Mohon antri dan bersabar ya🙏_`
            const getTextP = getTextSetProses(from, set_proses)
            if (getTextP !== undefined) {
                mentions(getTextP.replace('pesan', quotedMsg.chats).replace('nama', quotedMsg.sender.split("@")[0]).replace('jam', jam).replace('tanggal', tanggal), [quotedMsg.sender], true);
            } else {
                mentions(proses, [quotedMsg.sender], true)
            }
            break
        case 'd': case 'done':
            if (!isGroup) return
            if (!isOwner && !isGroupAdmins) return
            if (!isQuotedMsg) return
            let sukses = `*•======[ ORDER SELESAI ]======•*\n\n*👤PESANAN :* @${quotedMsg.sender.split("@")[0]}\n*📆TANGGAL :* _${tanggal}_\n*⌚JAM :* _${jam}_\n*📫STATUS :* _SELESAI_\n\n_⬡ Terimakasih sudah order! Jangan lupa testimoni dan ditunggu order selanjutnya!_`
            const getTextD = getTextSetDone(from, set_done);
            if (getTextD !== undefined) {
                mentions(getTextD.replace('pesan', quotedMsg.chats).replace('nama', quotedMsg.sender.split("@")[0]).replace('jam', jam).replace('tanggal', tanggal), [quotedMsg.sender], true);
            } else {
                mentions(sukses, [quotedMsg.sender], true)
            }
            break
case prefix+'jeda': {
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isBotGroupAdmins) return replyDeface(mess.BotAdmin)
            if (!args[1]) return replyDeface(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
            opengc[from] = { id: from, time: Date.now() + toMS(args[1]) }
            fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
            conn.groupSettingUpdate(from, "announcement")
            .then((res) => replyDeface(`Sukses, group akan dibuka ${args[1]} lagi`))
            .catch((err) => replyDeface('Error'))
            }
            break
case prefix+'resetlist':
		    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            db_respon_list = []
            fs.writeFileSync('./database/list-message.json', JSON.stringify(db_respon_list, null, 2))
            reply(`Sukses Reset List Di Semua Group`)
            break
        case prefix+'setproses': case prefix+'setp':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_p*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama`)
            if (isSetProses(from, set_proses)) return replyDeface(`Set proses already active`)
            addCountCmd('#setproses', sender, _cmd)
            addSetProses(q, from, set_proses)
            replyDeface(`Successfully set proses!`)
            break
        case prefix+'changeproses': case prefix+'changep':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_p*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama`)
            addCountCmd('#changeproses', sender, _cmd)
            if (isSetProses(from, set_proses)) {
                changeSetProses(q, from, set_proses)
                replyDeface(`Sukses change set proses teks!`)
            } else {
                addSetProses(q, from, set_proses)
                replyDeface(`Sukses change set proses teks!`)
            }
            break
        case prefix+'delsetproses': case prefix+'delsetp':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetProses(from, set_proses)) return replyDeface(`Belum ada set proses di sini..`)
            addCountCmd('#delsetproses', sender, _cmd)
            removeSetProses(from, set_proses)
            replyDeface(`Sukses delete set proses`)
            break
        case prefix+'setdone': case prefix+'setd':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_d*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama`)
            if (isSetDone(from, set_done)) return replyDeface(`Set done already active`)
            addCountCmd('#setdone', sender, _cmd)
            addSetDone(q, from, set_done)
            replyDeface(`Successfully set done!`)
            break
        case prefix+'changedone': case prefix+'changed':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_d*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama`)
            addCountCmd('#changedone', sender, _cmd)
            if (isSetDone(from, set_done)) {
                changeSetDone(q, from, set_done)
                replyDeface(`Sukses change set done teks!`)
            } else {
                addSetDone(q, from, set_done)
                replyDeface(`Sukses change set done teks!`)
            }
            break
        case prefix+'delsetdone': case prefix+'delsetd':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetDone(from, set_done)) return replyDeface(`Belum ada set done di sini..`)
            addCountCmd('#delsetdone', sender, _cmd)
            removeSetDone(from, set_done)
            replyDeface(`Sukses delete set done`)
            break

		case prefix+'cariteman': case prefix+'temanrandom': case prefix+'ct': case prefix+'temanbaru':
		 	//if (!isOwner) return reply(mess.OnlyOwner)

                let random = pendaftar[Math.floor(Math.random() * pendaftar.length)]    
        



                reply(`*👤Teman Random* :\n- wa.me/+${random}`)

            break





//create panel by Heri       





         case prefix+'createpanel': case prefix+'cpanel': case prefix+'addpanel':
		 	if (!isOwner) return reply(mess.OnlyOwner)
            var args1 = q.split(",")[0]
            var args2 = q.split(",")[1]     
            var args3 = q.split(",")[2]                

            if (!q.includes(",")) return reply(`Perintah : *${command} [ram],[user],[pw]*\nContoh : *${command} 2,Heristore,Heri123*`)
            if (args.length < 2) return reply(`Perintah : *${command} [ram],[user],[pw]*\nContoh : *${command} 2,Heristore,Heri123*`)
            
            reply(`*•=======[ AKUN PANEL ]=======•*\n\n*🌐LINK:* joy.link/Heripanel\n*📁RAM:* ${args1}GB\n*👤USERNAME:* ${args2}\n*🔐PASSWORD:* ${args3}\n*📮EXPIRED :* 1 Bulan (jika tidak overload)`)
            
            break


case prefix+'open': case prefix+'buka':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            addCountCmd('#open', sender, _cmd)
            conn.groupSettingUpdate(from, 'not_announcement')
            .then((res) => {
                const textOpen = getTextSetOpen(from, set_open);
                if (textOpen !== undefined) {
                    reply(textOpen);
                } else {
                    reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
                }
            })
            .catch((err) => reply('Error'))
			break
        case prefix+'close': case prefix+'tutup':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		    addCountCmd('#close', sender, _cmd)
		    conn.groupSettingUpdate(from, 'announcement')
		    .then((res) => {
                const textClose = getTextSetClose(from, set_close);
                if (textClose !== undefined) {
                    reply(textClose);
                } else {
                    reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
                }
            })
            .catch((err) => reply('Error'))
		    break
        case prefix+'setopen':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`)
            if (isSetOpen(from, set_open)) return reply(`Set Open already active`)
            addCountCmd('#setopen', sender, _cmd)
            addSetOpen(q, from, set_open)
            reply(`Successfully set Open!`)
            break
        case prefix+'changeopen':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_open*\n\n_Contoh_\n\n${command} Group telah di buka`)
            addCountCmd('#changeopen', sender, _cmd)
            if (isSetOpen(from, set_open)) {
                changeSetOpen(q, from, set_open)
                reply(`Sukses change set Open teks!`)
            } else {
                addSetOpen(q, from, set_open)
                reply(`Sukses change set Open teks!`)
            }
            break
        case prefix+'delsetopen':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isSetOpen(from, set_open)) return reply(`Belum ada set Open di sini..`)
            addCountCmd('#delsetopen', sender, _cmd)
            removeSetOpen(from, set_open)
            reply(`Sukses delete set Open`)
            break
        case prefix+'setclose':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`)
            if (isSetClose(from, set_close)) return reply(`Set Close already active`)
            addCountCmd('#setclose', sender, _cmd)
            addSetClose(q, from, set_close)
            reply(`Successfully set Close!`)
            break
        case prefix+'changeclose':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_close*\n\n_Contoh_\n\n${command} Group telah di tutup`)
            addCountCmd('#changeclose', sender, _cmd)
            if (isSetClose(from, set_close)) {
                changeSetClose(q, from, set_close)
                reply(`Sukses change set Close teks!`)
            } else {
                addSetClose(q, from, set_close)
                reply(`Sukses change set Close teks!`)
            }
            break
        case prefix+'delsetclose':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isSetClose(from, set_close)) return reply(`Belum ada set Close di sini..`)
            addCountCmd('#delseclose', sender, _cmd)
            removeSetClose(from, set_close)
            reply(`Sukses delete set Close`)
            break
//Menu Sound
        case prefix+'sound1':
        //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/sound1.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
//limitAdd(sender, limit)
addCountCmd('#sound1', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
          break    
          case prefix+'sound2':
        //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/sound2.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
//limitAdd(sender, limit)
addCountCmd('#sound2', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
          break
case prefix+'sound3':
        //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/sound3.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
//limitAdd(sender, limit)
addCountCmd('#sound3', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
          break
        case prefix+'sound4':
        //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/sound4.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
//limitAdd(sender, limit)
addCountCmd('#sound4', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
          break
        case prefix+'sound5':
        //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/sound5.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
//limitAdd(sender, limit)
addCountCmd('#sound5', sender, _cmd)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
          break    
        case 'Bot': case 'bot':
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/iyasayang.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
        break
        case 'Bohong': case 'bohong':
        conn.sendMessage(from, {audio :fs.readFileSync('./sound/bohong.mp3'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
        break
case 'Tes': case 'tes':
            var sections = [
                {
	title: `INFO BOT`,
	rows: [
	    {title: `OWNER`, rowId: `${prefix}owner`, description: "Menampilkan Owner"},
	    {title: `DONASI`, rowId: `${prefix}donasi`, description: "Menampilkan Donasi"},
	    {title: `SEWA BOT`, rowId: `${prefix}sewa`, description: "Menampilkan Sewa"},
	    {title: `BIODATA OWNER`, rowId: `${prefix}biodataowner`, description: "Menampilkan Biodata Owner Bot"}
	]
	},
	]
var listMessage = {
  text: `${ucapanWaktu} @${sender.split("@")[0]} 👋\nBOT ON ^^\n\nSaya ${setting.botName}, Bot Ini Adalah Beta Multi-Device Whatsapp\nJika Ada Fitur Yang Eror Segera Hubungi Owner Agar Segera Diperbaiki`,
  footer: ``,
  mentions: [sender],
  buttonText: "Click Here!",
  sections
}
conn.sendMessage(from, listMessage, { quoted: msg })
break
case prefix+'simplemenu':
var sections = [
    {
	title: `MENU BOT`,
	rows: [
	    {title: `1. Menu Random`, rowId: `${prefix}menurandom`},
	    {title: `2. Menu Convert & Maker`, rowId: `${prefix}menuconvert`},
	    {title: `3. Menu Download error`, rowId: `${prefix}menudownload`},
	    {title: `4. Menu Search`, rowId: `${prefix}menusearch`},
	    {title: `5. Menu Meme`, rowId: `${prefix}menumeme`},
	    {title: `6. Menu Sound`, rowId: `${prefix}menusound`},
	    {title: `7. Menu Store`, rowId: `${prefix}menustore`},
	    {title: `8. Menu Proses & Done`, rowId: `${prefix}menupd`},
	    {title: `9. Menu Stalk`, rowId: `${prefix}menustalk`},
	    {title: `10. Menu Anonymous`, rowId: `${prefix}menuanonymous`},
	    {title: `11. Menu Game`, rowId: `${prefix}menugame`},
	    {title: `12. Menu Group`, rowId: `${prefix}menugroup`},
	    {title: `13. Menu Islami`, rowId: `${prefix}menuislami`},
	    {title: `14. Menu Owner`, rowId: `${prefix}menuowner`},
	]
	},
	]
var listMessage = {
  text: `${ucapanWaktu} @${sender.split("@")[0]} 👋\n\n*SIMPLE MENU*`,
  footer: ``,
  mentions: [sender],
  buttonText: "Click Here 📌",
  sections
}
conn.sendMessage(from, listMessage, { quoted: msg })
break
// Random Image
case prefix+'baymax': case prefix+'gambarbaymax':

            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            
            addCountCmd('#cecan', sender, _cmd)
            var query = ["baymax hd","gambar baymax","cewe cantik", "gambar baymax hd", "gambar baymax dan hiro"]
            var data = await pinterest(pickRandom(query))
            var but = [{buttonId: `${prefix}baymax`, buttonText: { displayText: `Next ➡️` }, type: 2 }]
            conn.sendMessage(from, { caption: "Random Baymax", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
            //limitAdd(sender, limit)
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            .catch((e) => {
                console.log(color('[ ERROR ]', 'red'), e)
                replyDeface(mess.error.api)
                conn.sendMessage(ownerNumber, { text: `${command} error : ${e}` })
            })
            break

		case prefix+'meme': case prefix+'memeindo':
		
		    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

		    addCountCmd('#meme', sender, _cmd)
		    fetchJson(`https://api-kaysa.herokuapp.com/api/meme?&apikey=keyapi`).then( meme => {
		        var but = [{buttonId: `${prefix}memeindo`, buttonText: { displayText: `Next ➡️` }, type: 2 }]
		        conn.sendMessage(from, { caption: "Random Meme", video: { url: meme.video }, buttons: but, footer: 'Pencet tombol dibawah untuk meme selanjutnya' }, { quoted: msg })
		        //limitAdd(sender, limit)
		        //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
		    }).catch((e) => {
                console.log(color('[ ERROR ]', 'red'), e)
                replyDeface(mess.error.api)
                conn.sendMessage(ownerNumber, { text: `${command} error : ${e}` })
            })
		    break
		case prefix+'dark': case prefix+'darkjoke': case prefix+'darkjokes':
		
		    //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		    addCountCmd('#darkjoke', sender, _cmd)
		    var darkjoke = JSON.parse(fs.readFileSync('./lib/darkjokes.js')) // posisinya sesuain
            var imgnya = pickRandom(darkjoke)
		    var but = [{buttonId: `${prefix}darkjokes`, buttonText: { displayText: `Next ➡️` }, type: 2 }]
		    conn.sendMessage(from, { caption: "Random Dark Joke", image: { url: imgnya.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
		    //limitAdd(sender, limit)
		    //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
		    .catch((e) => {
                console.log(color('[ ERROR ]', 'red'), e)
                replyDeface(mess.error.api)
                conn.sendMessage(ownerNumber, { text: `${command} error : ${e}` })
            })
		    break
        case prefix+'couple': case prefix+'kapel': case prefix+'ppcp': {
        	
var couple = JSON.parse(fs.readFileSync('./database/couple.json'))
var ppnya = pickRandom(couple)
conn.sendMessage(from, {caption: `Cowo`, image: {url: ppnya.male}}, {quoted: msg})
conn.sendMessage(from, {caption: `Cewe`, image: {url: ppnya.female}}, {quoted: msg})
addCountCmd('#ppcp', sender, _cmd)
}
break 
// Menu Textpro
        case prefix+'blackpink':
        case prefix+'neon':
        case prefix+'greenneon':
        case prefix+'advanceglow':
        case prefix+'futureneon':
        case prefix+'sandwriting':
        case prefix+'sandsummer':
        case prefix+'sandengraved':
        case prefix+'metaldark':
        case prefix+'neonlight':
        case prefix+'holographic':
        case prefix+'text1917':
        case prefix+'minion':
        case prefix+'deluxesilver':
        case prefix+'newyearcard':
        case prefix+'bloodfrosted':
        case prefix+'halloween':
        case prefix+'jokerlogo':
        case prefix+'fireworksparkle':
        case prefix+'natureleaves':
        case prefix+'bokeh':
        case prefix+'toxic':
        case prefix+'strawberry':
        case prefix+'box3d':
        case prefix+'roadwarning':
        case prefix+'breakwall':
        case prefix+'icecold':
        case prefix+'luxury':
        case prefix+'cloud':
        case prefix+'summersand':
        case prefix+'horrorblood':
        case prefix+'thunder': {
        	
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return textImg(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return textImg(`Penggunaan ${command} text\n\nContoh : ${command} ${setting.ownerName}`)
            textImg(mess.wait)
            conn.sendMessage(from, { caption: `*_Done By ${setting.botName} ✅_*`, image: { url: `https://api.lolhuman.xyz/api/textprome/${command.slice(1)}?apikey=${apikeylol}&text=${q}` }}).catch(() => textImg(mess.error.api))
            //limitAdd(sender, limit)
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            }
            break
        case prefix+'pornhub':
        case prefix+'glitch':
        case prefix+'avenger':
        case prefix+'space':
        case prefix+'ninjalogo':
        case prefix+'marvelstudio':
        case prefix+'lionlogo':
        case prefix+'wolflogo':
        case prefix+'steel3d':
        case prefix+'wallgravity': {
        	
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return textImg(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2\n\nContoh : ${command} Buatan|HeriBOT`)
            if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2\n\nContoh : ${command} Buatan|HeriBOT`)
            textImg(mess.wait)
            conn.sendMessage(from, { caption: `*_Done By ${setting.botName} ✅_*`, image: { url: `https://api.lolhuman.xyz/api/textprome2/${command.slice(1)}?apikey=${apikeylol}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}` }}).catch(() => textImg(mess.error.api))
            //limitAdd(sender, limit)
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            }
            break
// Menu Photooxy
        case prefix+'shadow':
        case prefix+'cup':
        case prefix+'cup1':
        case prefix+'romance':
        case prefix+'smoke':
        case prefix+'burnpaper':
        case prefix+'lovemessage':
        case prefix+'undergrass':
        case prefix+'love':
        case prefix+'coffe':
        case prefix+'woodheart':
        case prefix+'woodenboard':
        case prefix+'summer3d':
        case prefix+'wolfmetal':
        case prefix+'nature3d':
        case prefix+'underwater':
        case prefix+'golderrose':
        case prefix+'summernature':
        case prefix+'letterleaves':
        case prefix+'glowingneon':
        case prefix+'fallleaves':
        case prefix+'flamming':
        case prefix+'harrypotter':
        case prefix+'carvedwood': {
        	
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return textImg(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return textImg(`Penggunaan ${command} text\n\nContoh : ${command} conn`)
            textImg(mess.wait)
            conn.sendMessage(from, { caption: `*_Done By ${setting.botName} ✅_*`, image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command.slice(1)}?apikey=${apikeylol}&text=${q}` }}).catch(() => textImg(mess.error.api))
            //limitAdd(sender, limit)
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            }
            break
        case prefix+'arcade8bit':
        case prefix+'battlefield4':
        case prefix+'pubg': {
        	
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return textImg(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2\n\nContoh : ${command} conn|HeriBOT`)
            if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2\n\nContoh : ${command} conn|HeriBOT`)
            textImg(mess.wait)
            conn.sendMessage(from, { caption: `*_Done By ${setting.botName} ✅_*`, image: { url: `https://api.lolhuman.xyz/api/photooxy2/${command.slice(1)}?apikey=${apikeylol}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}` }}).catch(() => textImg(mess.error.api))
            //limitAdd(sender, limit)
            //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            addCountCmd(`#${command.slice(1)}`, sender, _cmd)
            }
            break
// Stalk Menu
case prefix+'stalkml':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalkml', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} Userid/Serverid\nContoh : ${command} 84830127/2169`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${q}?apikey=${apikeylol}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//limitAdd(sender, limit)
break
case prefix+'stalkff':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalkff', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} userid\nContoh : ${command} 318843279`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${q}?apikey=${apikeylol}`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//limitAdd(sender, limit)
break
case prefix+'stalkgenshin':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalkgenshin', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} userid\nContoh : ${command} 811235076`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/genshin/username/${q}?apikey=${apikeylol}`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//limitAdd(sender, limit)
break
case prefix+'stalkcod':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalkcod', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} userid\nContoh : ${command} 6290150021186841472`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/codm/${q}?apikey=${apikeylol}`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//limitAdd(sender, limit)
break
case prefix+'stalkdomino':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalkdomino', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} userid\nContoh : ${command} 291756557`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/higghdomino/${q}?apikey=${apikeylol}`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//limitAdd(sender, limit)
break
case prefix+'stalkpubg':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalkpubg', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} userid\nContoh : ${command} 5119961143`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/pubg/${q}?apikey=${apikeylol}`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//limitAdd(sender, limit)
break
case prefix+'stalksausage':

//if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('#stalksausage', sender, _cmd)
if (args.length < 2) return reply(`Kirim perintah ${command} userid\nContoh : ${command} 40vimt`)
reply(mess.wait)
var data = await fetchJson(`https://api.lolhuman.xyz/api/sausageman/40vimt?apikey=${apikeylol}`)
reply(`➸ *User HeriBOT* : ${q}\n➸ *Nickname* : ${data.result}\n➸ *Tanggal* : ${tanggal}\n➸ *Jam* : ${jam}`)
//reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
//limitAdd(sender, limit)
break
            case prefix+'igstalk': case prefix+'stalkig':

            //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return replyDeface(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!args[1]) return replyDeface(`Gunakan dengan cara ${command} *username*\n\n_Contoh_\n\n${command} Heri_souvenir`)
           var igst = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${args[1]}?apikey=${apikeylol}`)
            reply(mess.wait)
                var capt = `*INSTAGRAM-STALK*\n\n• Name : ${igst.result.fullname}\n• Username : ${igst.result.username}\n• Followers : ${igst.result.followers}\n• Following : ${igst.result.following}\n• Posting : ${igst.result.posts}\n\n*Biography*\n${igst.result.bio}`
                var but = [{buttonId: `.owner`, buttonText: { displayText: "Owner Bot" }, type: 1 }]
                conn.sendMessage(from, { image: { url: igst.result.photo_profile }, caption: capt, button: but, footer: "© Ig Stalk"  })
                //limitAdd(sender, limit)
                //reply(`_Limit Terpakai 1_\n*Sisa Limit Anda : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}*`)
            break
//case prefix+`igstalk':
//if (!args[1]) return reply(`Gunakan dengan cara ${command} *username*\n\n_Contoh_\n\n${command} Heri_souvenir`)
//fechJson(`https://api.lolhuman.xyz/api/stalkig/${args[1]}?apikey=${apikeylol}`)
//var capt = `$
			// Owner Menu
			case prefix+'setexif':
			case prefix+'exif':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
case prefix+'bc': case prefix+'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
			if (!q && !isImage && !isQuotedImage) return reply(`Kirim Gambar Dengan Caption ${command} text\nExample : ${command} Hallo`)
if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `brotkes.jpeg`)
var data = await store.chats.all()
var buttonBc = [{buttonId: `${prefix}menu`, buttonText: { displayText: `📝 MENU` }, type: 2 }]
for (let i of data) {
conn.sendMessage(i.id, { caption: `「 _*BROADCAST ${botName.toUpperCase()}*_ 」\n\nTeks : ${q}`, image: fs.readFileSync(`brotkes.jpeg`), buttons: buttonBc, footer: footernya, mentions: [sender]}, {quoted: fimage})
}
await sleep(1000)
addCountCmd('#broadcast', sender, _cmd)
} else {
		            if (args.length < 2) return reply(`Kirim Perintah ${command} teks\nContoh : ${command} ${setting.ownerName}`)
                            var data = await store.chats.all()
                            for (let i of data) {
                            	
                               conn.sendMessage(i.id, { text: `「 _*BROADCAST ${botName.toUpperCase()}*_ 」\n\n${q}` }, {quoted: fimage})
                               await sleep(1000)
                               addCountCmd('#broadcast', sender, _cmd)
                                  }
                                  }
                           break
case prefix+'bcsewa': {
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            if (!q) return reply("Masukkan teks")
            addCountCmd('#bcsewa', sender, _cmd)
            for (let i of sewa){
                await conn.sendMessage(i.id, { text: `「 *_BROADCAST SEWA_* 」\n\n${q}` })
                await sleep(3000)}
                reply(`Sukses bc ke ${sewa.length} group`)
            }
            break
			case prefix+'setpp': case prefix+'setppbot':
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            if (isImage || isQuotedImage) {
                addCountCmd('#setppbot', sender, _cmd)
                var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
                if (args[1] == '\'panjang\'') {
                    var { img } = await generateProfilePicture(media)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type:'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
					    ]
                    })
					fs.unlinkSync(media)
					reply(`Sukses`)
				} else {
					var data = await conn.updateProfilePicture(botNumber, { url: media })
			        fs.unlinkSync(media)
				    reply(`Sukses`)
				}
            } else {
                reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
            }
            break
case prefix+'setthumb':
if (!isOwner)return reply(mess.OnlyOwner)
if (!isImage && !isQuotedImage)return reply(`Reply Gambar atau kirim gambar dengan caption ${prefix}setthumb`)
if (isImage || isQuotedImage) {
  var media = downloadAndSaveMediaMessage('image', './media/Anyabot.jpg')
  reply(`Sukses Mengganti Thumbnail Bot`)
}
  break
case prefix+'setdonasi':
if (!isOwner)return reply(mess.OnlyOwner)
if (!isImage && !isQuotedImage)return reply(`Reply Gambar atau kirim gambar dengan caption ${prefix}setdonasi`)
if (isImage || isQuotedImage) {
  var media = downloadAndSaveMediaMessage('image', './media/qris.jpg')
  reply(`Sukses Mengganti Gambar Donasi Bot`)
}
break
case prefix+'setsewa':
if (!isOwner)return reply(mess.OnlyOwner)
if (!isImage && !isQuotedImage)return reply(`Reply Gambar atau kirim gambar dengan caption ${prefix}setsewa`)
if (isImage || isQuotedImage) {
  var media = downloadAndSaveMediaMessage('image', './media/sewa.jpg')
  reply(`Sukses Mengganti Gambar Sewa Bot`)
  break
}
case prefix+'setfotoowner':
if (!isOwner)return reply(mess.OnlyOwner)
if (!isImage && !isQuotedImage)return reply(`Reply Gambar atau kirim gambar dengan caption ${prefix}setfotoowner`)
if (isImage || isQuotedImage) {
  var media = downloadAndSaveMediaMessage('image', './media/owner.jpg')
  reply(`Sukses Mengganti Gambar Owner Bot`)
}
  break
case prefix+'setcmd':
            if (!isPremium && !isOwner && !fromMe) return replyDeface(mess.OnlyPrem)
            if (!isQuotedSticker) return replyDeface('Reply stickernya..')
            if (!q) return replyDeface(`Masukan balasannya...\nContoh: ${prefix}setcmd #menu`)
            addCountCmd('#setcmd', sender, _cmd)
            if (checkRespons(msg.quotedMsg.stickerMessage.fileSha256.toString('hex'), responDB) === true) return replyDeface('Key hex tersebut sudah terdaftar di database!')
            addRespons(msg.quotedMsg.stickerMessage.fileSha256.toString('hex'), q, sender, responDB)
            replyDeface(`*Key:* ${msg.quotedMsg.stickerMessage.fileSha256.toString('hex')}\n*Action:* ${q}\n\nBerhasil di set`)
            break
        case prefix+'delcmd':
            if (!isPremium && !isOwner && !fromMe) return replyDeface(mess.OnlyPrem)
            if (!isQuotedSticker) return replyDeface('Reply stickernya..')
            addCountCmd('#delcmd', sender, _cmd)
            if (!deleteRespons(msg.quotedMsg.stickerMessage.fileSha256.toString('hex'), responDB)) return replyDeface('Key hex tersebut tidak ada di database')
            deleteRespons(msg.quotedMsg.stickerMessage.fileSha256.toString('hex'), responDB)
            replyDeface(`Berhasil remove key hex ${msg.quotedMsg.stickerMessage.fileSha256.toString('hex')}`)
            break
            case prefix+'join':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
            case prefix+'self':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'self'
                reply('Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot')
                break
            case prefix+'publik': case prefix+'public':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                mode = 'public'
                reply('Berhasil berubah ke mode public')
                break
            case prefix+'mode':
            case prefix+'set':
   if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
 var teks = `*SELF OR PUBLIC*`
 var but = [{buttonId: `${prefix}self`, buttonText: { displayText: "⬡ SELF" }, type: 1 }, {buttonId: `${prefix}public`, buttonText: { displayText: "⬡ PUBLIC" }, type: 2 }]
 conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu", buttons: but, mentions: [sender]} )  
 break
            case prefix+'block':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} nomer`)
                const block = args.join(" ")
                await conn.updateBlockStatus(args[1] + '@s.whatsapp.net', "block")
                reply(`Sukses Block Target`)
                break
            case prefix+'unblock':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} nomer`)
                const unblock = args.join(" ")
                await conn.updateBlockStatus(args[1] + '@s.whatsapp.net', "unblock")
                reply(`Sukses Unblock Target`)
                break
            case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
            case prefix+'setown':
              case prefix+'setowner':
              addCountCmd('#setowner', sender, _cmd)
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} Nomor\nExample : ${command} 6288213292687`)
                var text = args[1] + '@s.whatsapp.net'
                
                own2 = text
                 mentions(`Sukses Mengganti Nomor Owner Ke Nomor : @${text.split("@")[0]}`, [text])
                break
case prefix+'setfake':
              addCountCmd('#setfake', sender, _cmd)
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} Teks\nExample : ${command} Bot By HeriBOT`)
                var textnya = q
                
                fakenya = textnya
                 reply(`Sukses Mengganti Fake Menjadi : *${q}*`)
                break
case prefix+'setfooter':
              addCountCmd('#setfooter', sender, _cmd)
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah ${command} Teks\nExample : ${command} Bot By HeriBOT`)
                var textnya = q
                
                footernya = textnya
                 reply(`Sukses Mengganti Fake Menjadi : *${q}*`)
                break
            case prefix+'ban':
            addCountCmd('#ban', sender, _cmd)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[2], ban)
                    }
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
                }
                break
            case prefix+'unban':
            addCountCmd('#unban', sender, _cmd)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    reply('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[1])) {
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
                }
                break
            case prefix+'listban':
            addCountCmd('#listban', sender, _cmd)
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*HeriBOT :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break
            case prefix+'addbalance':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor@jumlah*`)
var text1 = q.split('@')[0] ? q.split('@')[0] : q

var text2 = q.split('@')[1] ? q.split('@')[1] : ''
var addbal = addBalance(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), balance)
reply(`*Sukses Menambahkan Balance User Sebanyak* : \n*$${text2}*`)
break
case prefix+'addlimit':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor@jumlah*`)
var text1 = q.split('@')[0] ? q.split('@')[0] : q

var text2 = q.split('@')[1] ? q.split('@')[1] : ''
var addlimit = giveLimit(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), limit)
reply(`*Sukses Menambahkan Limit User Sebanyak* : \n*${text2}*`)
break
case prefix+'addglimit':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} *nomor@jumlah*`)
var text1 = q.split('@')[0] ? q.split('@')[0] : q

var text2 = q.split('@')[1] ? q.split('@')[1] : ''
var addglimit = givegame(`${text1}@s.whatsapp.net`, parseInt(`${text2}`), glimit)
reply(`*Sukses Menambahkan Limit User Sebanyak* : \n*${text2}*`)
break
            case prefix+'dashboard': case prefix+'dash':
	        addCountCmd('#dashboard', sender, _cmd)
            var posi = await getPosiCmdUser(sender, _cmdUser)
            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
            var posi = await getPosiCmdUser(sender, _cmdUser)
            var jumlahCmd = _cmd.length
            if (jumlahCmd > 10) jumlahCmd = 10
            var jumlah = _cmdUser[posi].db.length
            if (jumlah > 5) jumlah = 5
            var totalUser = 0
            for (let x of _cmdUser[posi].db) {
                totalUser = totalUser + x.count
            }
            var total = 0
            for (let o of _cmd) {
                total = total + o.count
            }
            var teks = `*${botName} DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
            teks += `*Most Command Global*\n`
            for (let u = 0; u < jumlahCmd; u ++) {
                teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
            }
            teks += `\n*Most Command User*\n`
            for (let i = 0; i < jumlah; i ++) {
                teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
            }
            reply(teks)
            break
            case prefix+'addsewa':
            if (!isOwner && !fromMe) return replyDeface(mess.OnlyOwner)
            if (args.length < 2) return reply(`> Perintah : ${command} [link GC] [Waktu]\n> Contoh : ${command} https://chat.whatsapp.com/xxxxxxx 30d`)
            if (!isUrl(args[1])) return reply(mess.error.Iv)
            var url = args[1]
            addCountCmd('#addsewa', sender, _cmd)
            url = url.split('https://chat.whatsapp.com/')[1]
            if (!args[2]) return reply(`Waktunya?`)
            var data = await conn.groupAcceptInvite(url)
            if (_sewa.checkSewaGroup(data, sewa)) return reply(`Bot sudah disewa oleh grup tersebut!`)
            _sewa.addSewaGroup(data, args[2], sewa)
            reply(`Success Add Sewa Group Berwaktu!`)
            break
        case prefix+'delsewa':
            if (!isOwner && !fromMe) return replyDeface(mess.OnlyOwner)
            if (!isGroup) return reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
            if (!isSewa) return reply(`Bot tidak disewa di Grup ini`)
            addCountCmd('#delsewa', sender, _cmd)
            sewa.splice(_sewa.getSewaPosition(args[1] ? args[1] : from, sewa), 1)
            fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
            reply(`Sukses`)
            break
       case prefix+'listsewa':
            let list_sewa_list = `*🔽LIST-SEWA-GROUP🔽*\n\n*📌Total : * ${sewa.length}\n\n`
            let data_array = [];
            for (let x of sewa) {
                addCountCmd('#listsewa', sender, _cmd)
                list_sewa_list += `*> Nama GRUP:* ${await getGcName(x.id)}\n`
                if (x.expired === 'PERMANENT') {
                    let ceksewa = 'PERMANENT'
                    list_sewa_list += `*Expire :* PERMANENT\n\n`
                } else {
                    let ceksewa = ms(x.expired - Date.now())
                    list_sewa_list += `*> Expired : * ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
                }
            }
            conn.sendMessage(from, { text: list_sewa_list }, { quoted: msg })
            break
            case prefix+'checksewa': case prefix+'ceksewa':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isSewa) return reply(`Bot tidak di sewa group ini!`)
            addCountCmd('#checksewa', sender, _cmd)
            let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
            let sewanya = `*Sisa :* ${ceksewa.days} Hari ${ceksewa.hours} Jam` //${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)
            reply(sewanya)
            break
            case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`> Perintah : ${prefix}addprem [@tag] [waktu]\n> Contoh : ${command} @Heri 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
// Reset Database
case prefix+'resetlimit':
		    if (!isOwner && !fromMe) return replyDeface(mess.OnlyOwner)
			addCountCmd('#resetlimit', sender, _cmd)
            limit = []
            fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
            glimit = []
            fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
            replyDeface(`Sukses Reset Limit Pengguna`)
            break
			// Group Menu
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (isImage || isQuotedImage) {
            addCountCmd('#setppgrup', sender, _cmd)
            var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
            if (args[1] == '\'panjang\'') {
            	var { img } = await generateProfilePicture(media)
            	await conn.query({
                    tag: 'iq',
                    attrs: {
                        to: from,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                fs.unlinkSync(media)
            	reply(`Sukses`)
            } else {
                await conn.updateProfilePicture(from, { url: media })
                .then( res => {
                    reply(`Sukses`)
                    fs.unlinkSync(media)
                }).catch(() => reply(mess.error.api))
            }
            } else {
			    reply(`Kirim/balas gambar dengan caption ${command}`)
            }
            break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem })
				addCountCmd('#hidetag', sender, _cmd)
			    break
            case prefix+'imgtag':
            
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				if (!isQuotedImage && !isImage)return reply(`Reply Imagenya!`)
				if ( isImage || isQuotedImage ) {
var media = await downloadAndSaveMediaMessage("image", `imgtag.jpeg`)
var data = await store.chats.all()
                 var teks = `${q !== undefined ? q : `Pesan Tidak Ada`}`
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { caption: teks, image: fs.readFileSync(`imgtag.jpeg`), mentions: mem})
				}
				addCountCmd('#imgtag', sender, _cmd)
			    break
            case prefix+'tagall':
      if (!isGroup) return reply(mess.OnlyGrup)
      if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
      if (args.length < 2) return reply(`Kirim perintah ${command} Pesan nya yang ingin disampaikan`)
     var mems = []
      var teks = `╔══ *TAGALL*\n╠ Pesan : ${q !== undefined ? q : `Pesan Tidak Ada`}\n║\n`
      for (let i of groupMembers) {
        teks += `╠ ≻ @${i.id.split("@")[0]}\n`
        mems.push(i.id)
      }
      conn.sendMessage(from, { text: teks, mentions: mems}, { quoted: msg })
      addCountCmd('#tagall', sender, _cmd)
      break
                        case prefix+'welcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
                var teks = `*WELCOME ON/OFF*`
                var but = [{buttonId: `${prefix}welcome enable`, buttonText: { displayText: "ENABLE" }, type: 1 }, {buttonId: `${prefix}welcome disable`, buttonText: { displayText: "DISABLE" }, type: 2 }]
                if (args.length === 1) return conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  

            if (args.length === 1) return replyDeface(`Pilih enable atau disable`)
            if (args[1].toLowerCase() === "enable") {
                addCountCmd('#welcome', sender, _cmd)
                if (isWelcome) return replyDeface(`Udah aktif`)
                welcome.push(from)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                replyDeface('Sukses mengaktifkan welcome di grup ini')
            } else if (args[1].toLowerCase() === "disable") {
                addCountCmd('#welcome', sender, _cmd)
                var posi = welcome.indexOf(from)
                welcome.splice(posi, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                replyDeface('Sukses menonaktifkan welcome di grup ini')
            } else {
                replyDeface(`Pilih enable atau disable`)
            }
            break
        case prefix+'left':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (args.length === 1) return replyDeface(`Pilih enable atau disable`)
            if (args[1].toLowerCase() === "enable") {
                addCountCmd('#left', sender, _cmd)
                if (isLeft) return replyDeface(`Udah aktif`)
                left.push(from)
                fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                replyDeface('Sukses mengaktifkan left di grup ini')
            } else if (args[1].toLowerCase() === "disable") {
                addCountCmd('#left', sender, _cmd)
                var posi = left.indexOf(from)
                left.splice(posi, 1)
                fs.writeFileSync('./database/left.json', JSON.stringify(left, null, 2))
                replyDeface('Sukses menonaktifkan left di grup ini')
            } else {
                replyDeface(`Pilih enable atau disable`)
            }
            break
        case prefix+'setwelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`> Perintah : ${command} [teks]\n> Contoh : ${command} Welcome Kak`)
            if (isSetWelcome(from, set_welcome_db)) return replyDeface(`Set welcome already active`)
            addSetWelcome(q, from, set_welcome_db)
            addCountCmd('#setwelcome', sender, _cmd)
            replyDeface(`Successfully set welcome!`)
            break
        case prefix+'changewelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`> Perintah : ${command} [teks]\n> Contoh : ${command} Welcome Kak`)
            if (isSetWelcome(from, set_welcome_db)) {
                addCountCmd('#changewelcome', sender, _cmd)
                changeSetWelcome(q, from, set_welcome_db)
                replyDeface(`Sukses change set welcome teks!`)
            } else {
                addCountCmd('#changewelcome', sender, _cmd)
                addSetWelcome(q, from, set_welcome_db)
                replyDeface(`Sukses change set welcome teks!`)
            }
            break
        case prefix+'delsetwelcome':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetWelcome(from, set_welcome_db)) return replyDeface(`Belum ada set welcome di sini..`)
            removeSetWelcome(from, set_welcome_db)
            addCountCmd('#delsetwelcome', sender, _cmd)
            replyDeface(`Sukses delete set welcome`)
            break
        case prefix+'setleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Halo @user, Selamat tinggal dari @group`)
            if (isSetLeft(from, set_left_db)) return replyDeface(`Set left already active`)
            addCountCmd('#setleft', sender, _cmd)
            addSetLeft(q, from, set_left_db)
            replyDeface(`Successfully set left!`)
            break
        case prefix+'changeleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!q) return replyDeface(`> Perintah : ${command} [teks]\n> Contoh : ${command} Papay Kak`)
            if (isSetLeft(from, set_left_db)) {
                addCountCmd('#changeleft', sender, _cmd)
                changeSetLeft(q, from, set_left_db)
                replyDeface(`Sukses change set left teks!`)
            } else {
                addCountCmd('#changeleft', sender, _cmd)
                addSetLeft(q, from, set_left_db)
                replyDeface(`Sukses change set left teks!`)
            }
            break
        case prefix+'delsetleft':
            if (!isGroup) return replyDeface(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return replyDeface(mess.GrupAdmin)
            if (!isSetLeft(from, set_left_db)) return replyDeface(`Belum ada set left di sini..`)
            addCountCmd('#delsetleft', sender, _cmd)
            removeSetLeft(from, set_left_db)
            replyDeface(`Sukses delete set left`)
            break
            case prefix+'antilink':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                var teks = `*MODE ANTILINK ON/OFF*`
                var but = [{buttonId: `${prefix}antilink enable`, buttonText: { displayText: "ENABLE" }, type: 1 }, {buttonId: `${prefix}antilink disable`, buttonText: { displayText: "DISABLE" }, type: 2 }]
                if (args.length === 1) return conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Antilink sudah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukses mengaktifkan antilink di grup ini')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Sukses menonaktifkan antilink di grup ini')
                } else {
                conn.sendMessage(from, { text: teks, footer: "Silakan Pilih Salah Satu Dibawah", buttons: but, mentions: [sender]} )  
                }
                addCountCmd('#antilink', sender, _cmd)
                break
            case prefix+'antiwame':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
                if (args[1].toLowerCase() === 'enable'){
                	addCountCmd('#antiwame', sender, _cmd)
                    if (isAntiWame) return reply(`Udah aktif`)
                    antiwame.push(from)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('Sukses mengaktifkan antiwame di grup ini')
                } else if (args[1].toLowerCase() === 'disable'){
                	addCountCmd('#antiwame', sender, _cmd)
                    let anu = antiwame.indexOf(from)
                    antiwame.splice(anu, 1)
                    fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
                    reply('Sukses menonaktifkan antiwame di grup ini')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
                }
                break
case prefix+'mute':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
case prefix+'add':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (groupMembers.length == 512) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
            var mems = []
            groupMembers.map( i => mems.push(i.id) )
            var number;
            if (args.length > 1) {
                number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
                var cek = await conn.onWhatsApp(number)
                if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                addCountCmd('#add', sender, _cmd)
                conn.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else if (isQuotedMsg) {
                number = quotedMsg.sender
                var cek = await conn.onWhatsApp(number)
                if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                addCountCmd('#add', sender, _cmd)
                conn.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin Heriukkan`)
            }
            break
        case prefix+'kick':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            var number;
			if (mentionUser.length !== 0) {
                number = mentionUser[0]
                addCountCmd('#kick', sender, _cmd)
                conn.groupParticipantsUpdate(from, [number], "remove")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else if (isQuotedMsg) {
                number = quotedMsg.sender
                addCountCmd('#kick', sender, _cmd)
                conn.groupParticipantsUpdate(from, [number], "remove")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
            }
            break
        case prefix+'promote': case prefix+'pm':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                addCountCmd('#promote', sender, _cmd)
                conn.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                .catch(() => reply(mess.error.api))
            } else if (isQuotedMsg) {
                addCountCmd('#promote', sender, _cmd)
                conn.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
                .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
                .catch(() => reply(mess.error.api))
            } else {
                reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
            }
            break
        case prefix+'demote':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                addCountCmd('#demote', sender, _cmd)
                conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                .catch(() => reply(mess.error.api))
            } else if (isQuotedMsg) {
                addCountCmd('#demote', sender, _cmd)
                conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
                .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
                .catch(() => reply(mess.error.api))
            } else {
                reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
            }
            break
case prefix+'sewacheck':
       case prefix+'ceksewa': 
              if (!isGroup) return reply(mess.OnlyGrup)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *HeriBOT*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
              reply(premiumnya)
              addCountCmd('#ceksewa', sender, _cmd)
              break
case prefix+'infogc':
  case prefix+'infogrup':
    case prefix+'grupinfo':
      case prefix+'infogroup':
        case prefix+'groupinfo':
  //if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isGroup)return reply(mess.OnlyGrup)
  var owngc = groupMetadata.owner
  var caption = `*[ ${groupMetadata.subject} ]*\n\n*Nama Grup :* ${groupMetadata.subject}\n*Pemilik Grup :* @${owngc.split("@")[0]}\n*Di Buat Pada :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Jumlah Member :* ${groupMembers.length}\n*Jumlah Admin :* ${groupAdmins.length}\n*Antilink :* ${isAntiLink ? 'Aktif' : 'Gak Aktif'}\n*Deskripsi :* ${groupMetadata.desc}`
  conn.profilePictureUrl(from, 'image').then( res => conn.sendMessage(from, {caption: caption, image: { url: res }, mentions: [owngc]}, {quoted: fgif})).catch(() => conn.sendMessage(from, {caption: caption, image: {url: `https://i.ibb.co/YZdzhGt/522cd54e9767.jpg`}, mentions: [owngc]}, {quoted: fimage}))
  //limitAdd(sender, limit)
  addCountCmd('#grupinfo', sender, _cmd)
  break
// Game Menu
case prefix+'siapakahaku':
  case prefix+'siapaaku':
  
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, siapaaku)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, siapaaku[getGamePosi(from, siapaaku)].msg)
			    
				var tebaknya = JSON.parse(fs.readFileSync('./database/siapakahaku.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*Siapa Aku?*\n\n`+monospace(`Soal : ${hayo.soal}\nNomor Soal Ke : ${hayo.index}\nPetunjuk : ${hayo.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'Siapa Aku?', jawab, gamewaktu, res, siapaaku)
					gameAdd(sender, glimit)
				  })
				addCountCmd('#siapakahaku', sender, _cmd)
			    break
case prefix+'susunkata':

		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, susun)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, susun[getGamePosi(from, susun)].msg)
				var ngen = JSON.parse(fs.readFileSync('./database/susunkata.json'))
				var kukus = pickRandom(ngen)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*SUSUN KATA*\n\n`+monospace(`Susunlah Kalimat Berikut :\n${kukus.soal}\nPetunjuk : ${kukus.tipe}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {text: teks}, {quoted: msg})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'Susun Kalimat', jawab, gamewaktu, res, susun)
					gameAdd(sender, glimit)
				  })
				addCountCmd('#susunkata', sender, _cmd)
			    break
case prefix+'tebakprovinsi':

		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tp)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tp[getGamePosi(from, tp)].msg)
				var datanya = await fetchJson(`https://api.lolhuman.xyz/api/tebak/provinsi?apikey=${apikeylol}`)
				  datanya.jawaban = datanya.result.title.split('Jawaban ').join('')
				  var teks = `*TEBAK PROVINSI*\n\n`+monospace(`Soal : Tebaklah Provinsi Gambar Diatas\nPetunjuk : ${datanya.result.title.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, {caption: teks, image: {url: datanya.result.img}}, {quoted: msg})
				  .then( res => {
					var jawab = datanya.result.title.toLowerCase()
					addPlayGame(from, 'Tebak Provinsi', jawab, gamewaktu, res, tp)
					gameAdd(sender, glimit)
				  })
				addCountCmd('#tebakjenaka', sender, _cmd)
			    break
case prefix+'mancing':
  case prefix+'mancingikan':
    case prefix+'memancing':
    if (!isOwner) return reply(`*Fitur Ini Dihentikan Oleh Owner Karena Menyebabkan Kecurangan Dalam Push Balance*`)
    
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (isPlayGame(from, pancing)) return conn.reply(from, `Ada Yg lagi Mancing!!`, pancing[getGamePosi(from, pancing)].msg)
  var duid = randomNomor(50, 250)
   var fishing = ["Yah Kamu Hanya Mendapatkan 🗑️","Yah Kamu Hanya Mendapatkan 🔌","Yah Kamu Hanya Mendapatkan 🧷","Yah Kamu Hanya Mendapatkan 🧤","Yah Kamu Hanya Mendapatkan 👙","Yah Kamu Hanya Mendapatkan 📯","Yah Kamu Hanya Mendapatkan 💣","Yah Kamu Hanya Mendapatkan 🥄","Yah Kamu Hanya Mendapatkan 🐜","Yah Kamu Hanya Mendapatkan 🦗","Yah Kamu Hanya Mendapatkan 🐌","Yah Kamu Hanya Mendapatkan ⚓","Yah Kamu Hanya Mendapatkan 🚽","Yah Kamu Hanya Mendapatkan 🛁","Yah Kamu Hanya Mendapatkan 🎩","Yah Kamu Hanya Mendapatkan 🏓","Yah Kamu Hanya Mendapatkan 🎲","Yah Kamu Hanya Mendapatkan 🎗️","Yah Kamu Hanya Mendapatkan 🎃","Yey Kamu mendapatkan 🐟","Yey Kamu mendapatkan 🐠","Yey Kamu mendapatkan 🐡","Yey Kamu mendapatkan 🐬","Yey Kamu mendapatkan 🐳","Yey Kamu mendapatkan 🦈","Yey Kamu mendapatkan 🦐","Yey Kamu mendapatkan 🐙","Yey Kamu mendapatkan 🐋","Yey Kamu mendapatkan 🦑","Yey Kamu mendapatkan 💎","Yey Kamu mendapatkan 🏅"]
  var random1 = pickRandom(fishing)
  reply(`_Siap Memancing!_`)
  addBalance(sender, duid, balance)
  setTimeout( () => {
   reply(monospace(random1) + `\nDan Kamu Mendapatkan $${duid} balance`) // ur cods
   }, 18000) // 1000 = 1s,
   setTimeout( () => {
   reply('_Menunggu Ikan Datang..._ 💤') // ur cods
   }, 12000) // 1000 = 1s,
   setTimeout( () => {
   reply('_Melempar Kail_ 🎣') // ur cods
   }, 5000) // 1000 = 1s,
   setTimeout( () => {
   reply('_Memasang Umpan_ 🐛') // ur cods
   }, 2500) // 1000 = 1s,
   addPlayGame(from, 'Mancing Ikan', pancing)
   gameAdd(sender, glimit)
   addCountCmd('#mancing', sender, _cmd)
  break
// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
            addCountCmd('#topbalance', sender, _cmd)
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6285791458996 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`‣ _⏱️ Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}_\n‣ _🎮 Limit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}_\n‣ _💰 Balance : $${getBalance(mentioned[0], balance)}_\n\n*Kamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit*`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`‣ _⏱️ Limit : ${isPremium ? 'Unlimited' : limitPrib}_\n‣ _🎮 Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}_\n‣ _💰 Balance : $${getBalance(sender, balance)}_\n\n*Kamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit*`)
                }
                addCountCmd('#ceklimit', sender, _cmd)
				break
			default:
			if (isCmd) {
    if (args[0].length > 1) {
        var detect = await Dym(command.split(prefix)[1], listCmd)
        if (detect !== null) {
            replyDeface(`Mungkin yang anda maksud adalah ${prefix + detect} abaikan jika salah!`)
        }
        if (!isGroup && detect === null) {
            replyDeface(`Fitur belum terdaftar`)
        }
    } else {
        var detect2 = await Dym(args[1], listCmd)
        if (!isGroup && detect2 !== null) {
            replyDeface(`Pastikan antara simbol/prefix jangan dipisah, contoh ${prefix+args[1]}`)
        }
	}
}
}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}
