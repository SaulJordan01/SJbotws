
// todas las funciones se han simplificado lo más posible si encuentra un error / error tipográfico por escrito, hágamelo saber en el problema


// conectando a WhatsApp web usando Baileys https://www.github.com/adiwajshing/baileys
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys");

// functions node modules
const speed = require('performance-now');
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require("child_process");
let path = require('path');
const translate = require('@iamtraction/google-translate');
const ffmpeg = require("fluent-ffmpeg");
const toMs = require('ms');
const fs = require("fs");
const similarity = require('similarity');
const threshold = 0.72;
const fgx = require('./result/index');
const package = require('./package.json');
//-- library
const simple = require('./whatsapp/connecting');
const { color, bgcolor } = require('./library/color');
const { 
  getBuffer,
  createExif,
  modStick,
  h2k, 
  isUrl,
  pickRandom,
  generateMessageID, 
  getGroupAdmins,
  getRandom,
  kyun,
  weton,
  week,
  date,
  waktu,
  tanggal,
  time,
  WIB,
  WITA,
  WIT,
  ucapanWaktu,
} = require('./library/functions');

// funciones 

const {
  direc,
  addImage,
  addVideo,
  addStiker,
  addAudio
} = require('./functions/directory');


const { 
  User, 
  cekRegis,
  addRegister,
  addUser, 
  cekUser,
  cekPoin, 
  addPoin, 
  addLevel,
  cekLevel,
  cekBanned, 
  addBanned, 
  delBanned,
  cekPremium,
  addPremium,
  delPremium,
  addAfk,
  delAfk,
  cekAfk,
  cekAfkReason,
  cekAfkTime,
  addWarn,
  delWarn,
  cekWarn,
  addBahasa,
  cekBahasa
} = require('./functions/user'); // cambiar y recuperar datos de usuario en ./database/user

const {
  Group,
  addGroup,
  addOffline,
  delOffline,
  cekOffline,
  addWelcome,
  delWelcome,
  cekWelcome,
  addAntilink,
  delAntilink,
  cekAntilink,
  addBadword,
  delBadword,
  cekBadword,
  addAntidelete,
  delAntidelete,
  cekAntidelete,
  addDetect,
  delDetect,
  cekDetect
} = require('./functions/group'); // cambiar y recuperar datos en ./database/group

const {
  st,
  addName,
  addAuthor,
  addPackname,
  addWm,
  addGametime,
  addPoingame,
  addCmd
} = require('./functions/setting-bot'); // cambiar datos en ./database/setting-bot
const { msgFilter } = require('./functions/antispam')
const { menu } = require('./functions/menu'); 
const { espa, ind, eng, } = require('./language/index');

// funciones de  ./functions/setting-bot
let ownerNumber = st.ownerNumber; // número de propietario
let prefix = st.prefix; // prefijo
let listprefix = st.listprefix; // lista de  prefiijos
let isPoingame = st.poinGame; 
let isGametime = st.gameTime; 
let isPoindefect = st.poinDefect; 
let isNama = st.nameB; // nombre del bot
let isAuthor = st.author; // El autor se utiliza en la función de Stickers
let isPackname = st.packname; // El nombre del paquete se utiliza en la función de Stickers
let isWm = st.wm; // wm se usa para la descripción en el botón de mensaje
let isTotalcmd = st.totalcommand; // información sobre el número de comandos utilizados por los usuarios

// -- thumbnail
let thumb = fs.readFileSync('./temp/fg.jpg'); 

let fakethumb = fs.readFileSync('./temp/fake.jpg'); 

let baterai = {
    baterai: 0,
    cas: false
};

module.exports = Fg = async (Fg, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
   if(mek.key.fromMe) return; // Eliminalo para que el Bot sea self
    if (mek.key && mek.key.remoteJid == 'status@broadcast') return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    let m = simple.smsg(Fg, mek);
    global.prefix;
    global.blocked;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const type = Object.keys(mek.message)[0];
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;
    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fg.user.phone;
//--
    let body =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId 
       ? mek.message[type].singleSelectReply.selectedRowId 
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : '';
      for(var v of listprefix){
			if(body.startsWith(v)){
			  prefix = v ;
			}
      }
     const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '';
     const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
     const args = body.trim().split(/ +/).slice(1);
     const more = String.fromCharCode(8206);
     const readMore = more.repeat(4000);
     const value = args.join(' ');
     const isCmd = body.startsWith(prefix);
     const totalchat = await Fg.chats.all();
     const botNumber = Fg.user.jid;
     const botNumero = botNumber.replace('@s.whatsapp.net', '') // número del bot   
     
//-- Grupo Metadata
     const isGroup = from.endsWith('@g.us');
     const sender = isGroup ? mek.participant : mek.key.remoteJid;
     const groupMetadata = isGroup ? await Fg.groupMetadata(from) : '';
     const groupName = isGroup ? groupMetadata.subject : '';
     const groupId = isGroup ? groupMetadata.jid : '';
     const groupMembers = isGroup ? groupMetadata.participants : '';
     const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
     //const isMods = mods.includes(senderNumber)
      
     const isOwner = ownerNumber.includes(sender) || false;
     const isBotAdmins = groupAdmins.includes(botNumber) || false;
     const isAdmins = groupAdmins.includes(sender) || false;
     let conts = mek.key.fromMe ? Fg.user.jid : Fg.contacts[sender] || { notify: jid.replace(/@.+/, '') };
     const pushname = mek.key.fromMe ? Fg.user.name : conts.name || conts.vname || conts.notify || '-';
     let siapa = mek.quoted ? mek.quoted.sender : mek.mentionedJid && mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.fromMe ? Fg.user.jid : mek.sender;
     let dia = mek.quoted ? mek.quoted.sender : mek.mentionedJid && mek.mentionedJid[0] ? mek.mentionedJid[0] : false;

//--- comprobar la información del usuario
     let isPoin = cekPoin(sender);
     let isLevel = cekLevel(sender);
     let isPremium = cekPremium(sender);
     let isBanned = cekBanned(sender);
     let isAfk = cekAfk(sender);
     let isAfkTime = cekAfkTime(sender);
     let isAfkReason = cekAfkReason(sender);
     let isOffline = cekOffline(from);
     let isWelcome = cekWelcome(from);
     let isAntidelete = cekAntidelete(from);
     let isAntilink = cekAntilink(from);
     let isDetect = cekDetect(from);
     let isRegister = cekRegis(sender);
     let msg = cekBahasa(sender);
     
          // -- Idioma 
     if (msg === "español") {
       msg = espa;
     } else if (msg === "english") {
       msg = eng;
     } else if (msg === "indonesia") {
       msg = ind;
     } else {
       msg = espa;
     }
     
     // funciones de mención de usuario premium
     if (isPremium) {
       prem = "Si";
     } else {
       prem = "No";
     }
     
// -- bateria
Fg.on('CB:action,,battery', json => {
	const a = json[2][0][1].value;
	const b = json[2][0][1].live;
	baterai.baterai = a;
	baterai.cas = b;
});
     
// detect quoted 
     const isMedia = type === "imageMessage" || type === "videoMessage";
     const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
 	 	 const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		 const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		 const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		 const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
	   const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		 const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage');


// comando de registro de la consola cuando está en un chat privado
    if (!isGroup && isCmd) {
      console.log("‣", bgcolor('Cmd en CHAT PRIVADO', 'magenta'));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(tanggal, 'grey'));
      console.log(" Command :", color(command.toUpperCase(), "orange"), "MessageType :", bgcolor(type, "orange"));
    }
    
// comando de registro de la consola cuando está en el grupo
    if (isGroup && isCmd) {
      console.log("‣", bgcolor('Cmd en', 'magenta'), "Grupo", color(groupName, "aqua"));
      console.log(" De:", color(pushname, "yellow"), "Fecha :", bgcolor(tanggal, 'grey'));
      console.log(" Cmd :", color(command.toUpperCase(), "blue"), "MessageType :", bgcolor(type, "orange"));
    }
  
// mensaje de registro de la consola sin comando
    if (!isCmd && !mek.key.fromMe && !mek.isBaileys) {
      console.log("‣", bgcolor('Message','magenta'));
      console.log(" De :", color(pushname, "yellow"), "Fecha :", bgcolor(tanggal, 'grey'));
      console.log(" Mensaje :", color(budy, "orange"), "MessageType :", bgcolor(type, "orange"));
    }

// Anti spam que se suma al spam :v
    if (isCmd && msgFilter.isFiltered(from)) {
         return m.reply('⚠️ no spam')
					}
    if (isCmd && !isOwner) msgFilter.addFilter(from)


if (budy) addUser(sender); // agregar información de usuario a la base de datos
if (budy) addGroup(from); // agregar información de grupo a la base de datos
if (isCmd) addCmd() // aumentar el número total de comandos cuando el usuario usa el comando
if (isCmd) addPoin(sender); // agregar puntos de usuario al usar comandos

// suma puntos al nivel y acumula para subir de nivel
const Amount = isPoindefect * (Math.pow(2, isLevel) - 1)
if (Amount <= isPoin) {
           await addLevel(sender) // puntos acumulados para subir de nivel
          }

// comando especial cuando el estado fuera de línea  está activado en el grupo
switch (command) {
  
  case 'offline': // escribe  offline el bot no responderá a ningún comando en ciertos grupos
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if (isOffline === true ) {
      return m.reply('✅ Bot offline')
    }
    await addOffline(from)
    m.reply(msg.offline)
    break

  case 'online':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    if (isOffline === false ) {
      return m.reply('✅ Bot online')
    }
    await delOffline(from)
    m.reply(msg.online)
    break 
    default:
}


if (isGroup && isOffline === true) return; 
if (isBanned) return; // los usuarios con estado baneado no podrán usar el comando

switch (command) { 
 
 case 'menu': 
 case 'help':
    capt = `Hola *${pushname}*
    
*Nivel* : ${isLevel}
*Total Poin* : ${isPoin}
*Premium* : ${prem}
*Runtime* : ${kyun(process.uptime())}
${readMore}
${menu(prefix)} 
`
    Fg.send2ButtonLoc(from, thumb, capt, `▢ *DyLux  ┃ ᴮᴼᵀ*\n▢ *Total Hits* : ${isTotalcmd}\n\n${isWm}`, '✆ Owner', `${prefix}owner`, '⏍ Info', `${prefix}info`)
    break
    
  case 'restart': 
  case 'reiniciar': 
    if(!isOwner) return m.reply(msg.owner)
    m.reply('Reiniciando bot')
try {
  process.send('reset')
} catch (e) {
  m.reply('...')
}
  break
 
  case 'ping':
    const timestamp = speed();
    const latensi = speed() - timestamp 
    m.reply(`🟢 *Velocidad* : ${latensi.toFixed(3)} _Segundos_`)
  break 
  
  case 'idioma':
case 'bahasa':
case 'language':
case 'lenguaje':
if(!isOwner) return m.reply(msg.owner)
    if(!value) return m.reply(msg.Pbahasa)
    if (value.toLowerCase() === "español") {
      await addBahasa(sender, "español")
      m.reply("✅ Idioma cambiado a Español ")
    } else if (value.toLowerCase() === "indonesia") {
      await addBahasa(sender, "indonesia")
      m.reply("Bahasa Indonesia terpilih\nSekarang bot akan membalas pesanmu dengan bahasa Indonesia")
    } else if (value.toLowerCase() === "english") {
      await addBahasa(sender, "english")
      m.reply("Selected English\nNow the bot will reply to your message in English")
    } else {
      m.reply(msg.nobahasa)
    }
    break; 
    
    case 'owner':
case 'creator':
case 'creador': 
case 'developer':
number = '59172945992@s.whatsapp.net'
    capt = `▢ Numero : @${number.split('@')[0]}\n\n`
    capt += '▢ Instagram : https://www.instagram.com/fg98._'
    await Fg.fakeLink(from, capt, thumb, 'Click aquí', 'https://www.instagram.com/fg98._', mek)
   /* Fg.sendContact(from, '59172945992', 'owner', {
	 key: {
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: from } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"Mi creador"
                        }
	                  }})*/
    break
    
    case 'info':
   const unread = await Fg.loadAllUnreadMessages ();
   i = []
   giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
   uptime = process.uptime()
   teks = `*INFO BOT*
   
*≡ ESTADO*
▢ Contactos : ${Object.keys(Fg.contacts).length}
▢ Total Chats : *${totalchat.length}* 
▢ *${totalchat.length - giid.length}* Chats privados
▢ *${giid.length}* Chats de grupo
▢ *${unread.length}* Mensaje no leídos


*≡ DISPOSITIVO*

▢ Versi Wa : ${Fg.user.phone.wa_version}
` 
  m.reply(teks)
   break
   
    case 'nameninja':
 case 'blackpill':
 case 'typewriter':
 case 'sans':
 case 'castle':
 if(!value) return m.reply(msg.notext)
  if(command === "nameninja" ) {
      hasil = await fgx.namaninja(value)
  } else if(command === "blackpill"){
    hasil = await fgx.blackpill(value)
  } else if(command === "typewriter"){
    hasil = await fgx.typewriter(value)
   } else if(command === "sans"){
    hasil = await fgx.sans(value)
  } else if(command === "castle"){
    hasil = await fgx.castle(value)
  }
   m.reply(hasil)
   break
   
   case 'verdad':
  case 'reto':
    if(command === "verdad" ) {
      hasil = fgx.verdad()
    } else if (command === "reto" ) {
      hasil = fgx.reto()
      }
    capt = `‣ *${command.toUpperCase()}* \n\n${hasil}`
    Fg.sendButton(from, capt, msg.next(command), '▷▷ Siguiente', prefix+command)
    break
    
    case 'fake':
    case 'fitnah':
    if(!value) return m.reply(msg.notext)
    if(!dia) return m.reply(msg.notag)
    text1 = value.split("|")[0]
    text2 = value.split("|")[2]
    Fg.fakeReply(from, text1, dia, text2, from)
    break
    
    case 'pregunta':
    if(!value) return m.reply(msg.notext)
    naon = ["Si","No","En efecto"," Tal vez","No lo se","Quizas","2 dias","Jamas", "Un domingo", "no lo hace", "muy falso"]
random = naon[Math.floor(Math.random() * (naon.length))]
preg = `Pregunta : *${value}*
Respuesta : ${random}`
m.reply(preg)
break

case "s":
  case "stiker":
  case "sticker":
    anu = args.join(" ").split("|");
        a = anu[0] !== "" ? anu[0] : isAuthor;
        b = typeof anu[1] !== "undefined" ? anu[1] : isPackname;
    if ( 
      ((isMedia && !mek.message.videoMessage) || isQuotedImage)
      ) { 
        const encmedia = isQuotedImage 
        ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message .extendedTextMessage.contextInfo : mek;
          media = await Fg.downloadAndSaveMediaMessage(encmedia); 
          await createExif(a, b); 
          out = getRandom(".webp"); 
          ffmpeg(media) 
          .on("error", (e) => { 
            console.log(e); 
            Fg.sendMessage(from, "⚠️ Hay un error", "conversation", { quoted: mek }); 
            fs.unlinkSync(media); 
            })
            .on("end", () => { 
              _out = getRandom(".webp"); 
              spawn("webpmux", [
                "-set",
                "exif",
                "./temp/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                Fg.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11))
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await Fg.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              Fg.sendMessage(from, "⚠️ Hay un error", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./temp/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                Fg.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          m.reply(
            `✳️ Envia una imagen con *${prefix + command}* Nombre|Autor \n o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos*`
          );
        }
        break

  case "take":
  case "robar":
      if (!isQuotedSticker) return m.reply(msg.replyStic);
      encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
        .message.extendedTextMessage.contextInfo;
      media = await Fg.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        a = anu[0] !== "" ? anu[0] : isPackname;
        b = typeof anu[1] !== "undefined" ? anu[1] : isAuthor;
        createExif(a, b);
        modStick(media, Fg, mek, from);
        break 
   
  case "toimg":
    if (!isQuotedSticker) return m.reply(msg.replyStic);
        m.reply(msg.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await Fg.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return m.reply("⚠️ Error, inténtelo de nuevo ");
          buffer = fs.readFileSync(ran);
          Fg.sendMessage(from, buffer, image, {thumbnail: fakethumb, quoted: mek, caption: msg.done})
          fs.unlinkSync(ran);
        });
        break;
        
        case 'pinterest':
        case 'img':
        case 'imagen':
    if(!value) return m.reply(msg.notext)
    m.reply(msg.wait)
    go = await fgx.pinterest(value)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    Fg.sendMessage(from, await getBuffer(pin), image, { quoted: mek, caption: '✅ *Resultado*\n', thumbnail: fakethumb })
 break 

  case 'man':
    mann = ['hombre', 'man', 'joven guapo']
    push = pickRandom(mann)
    m.reply(msg.wait)
    go = await fgx.pinterest(push)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    Fg.sendButtonImg(from, await getBuffer(pin), '*✅ Resultado*\n', msg.next(command), '▷▷ Siguiente', `${prefix + command}`, mek)
 break

  case 'girl':
    woman = ['pretty girl', 'girl','russian girl', 'girl in bikinis', 'russian woman']
    push = pickRandom(woman)
    m.reply(msg.wait)
    go = await fgx.pinterest(push)
    pin = pickRandom(go)
    if(!pin) return m.reply('Error')
    Fg.sendButtonImg(from, await getBuffer(pin), '*✅ Resultado*\n', msg.next(command), '▷▷ Siguiente', `${prefix + command}`, mek)
 break
 
 case 'wallpaper':
 case 'wp':
    if(!value) return m.reply(msg.notext)
    m.reply(msg.wait)
    go = await fgx.pinterest(`Wallpaper hd ${value}`)
    pin = pickRandom(go)
    if(!pin) return m.reply('⚠️ Error')
    Fg.sendButtonImg(from, await getBuffer(pin), '*✅ Resultado*\n', msg.next(command), '▷▷ Siguiente', `${prefix + command} ${value}`, mek)
 break
 
 case 'tomp3':
   if(isMedia || isQuotedVideo) {
     m.reply(msg.wait)
     q = m.quoted ? m.quoted : m 
     mp3 = await q.download()
     Fg.sendMessage(from, mp3, audio, {quoted: mek})
   } else {
     m.reply(msg.replyVid)
   }
   break

 case 'toav':
   if(!isQuotedAudio) return m.reply(msg.replyVn)
   m.reply(msg.wait)
   q = m.quoted ? m.quoted : m 
   vn = await q.download()
  Fg.sendMessage(from, vn, audio, {ptt: true, quoted: mek})
   break
   
   case 'listmedia':
   listimg = direc.image
   listvid = direc.video
   listaud = direc.audio
   liststik = direc.sticker
   teks = msg.liston+'\n\n'
   teks += '┌─⊷ *IMAGE* \n'
   	for ( v of listimg) { 
   	  teks += `▢  ${v}\n`
	  }
	  teks += '└──────────────\n'
	  teks += '┌─⊷ *VIDEO* \n'
	  for ( x of listvid) { 
   	  teks += `▢  ${x}\n`
	  }
	  teks += '└──────────────\n'
	  teks += '┌─⊷ *AUDIO* \n'
	  for ( y of listaud) { 
   	  teks += `▢  ${y}\n`
	  }
	  teks += '└──────────────\n'
	  teks += '┌─⊷ *STICKER* \n'
	  for ( z of liststik) { 
   	  teks += `▢  ${z}\n`
	  }
	  teks += '└──────────────\n'
	  teks += msg.getlist
	  m.reply(teks.trim())
   break
 
 case 'addimg':
   if(!value) return m.reply(msg.notext)
   if(isMedia || isQuotedImage) {
     for ( i of direc.image) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   let img = await q.download() 
   fs.writeFileSync(`./database/media/image/${value.toLowerCase()}.jpeg`, img)
   m.reply(msg.done)
   await addImage(value.toLowerCase())
   } else {
     m.reply(msg.replyImg)
   }
   break

 case 'getimg':
   try { 
     mage = fs.readFileSync(`./database/media/image/${value.toLowerCase()}.jpeg`) 
     Fg.sendMessage(from, mage, image, { quoted: mek, caption: '✅ Resultado : database image', thumbnail: fakethumb })
     } catch {
       m.reply(msg.packoff)
     }
     break

 case 'addvid':
   if(!value) return m.reply(msg.notext)
   if(isMedia || isQuotedVideo) { 
     for ( i of direc.video) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   vid = await q.download()
   fs.writeFileSync(`./database/media/video/${value.toLowerCase()}.mp4`, vid)
   m.reply(msg.done)
   await addVideo(value.toLowerCase())
   } else {
     m.reply(msg.replyVid)
   }
   break

 case 'getvid':
   try { 
     vid = fs.readFileSync(`./database/media/video/${value.toLowerCase()}.mp4`) 
     Fg.sendMessage(from, vid, video, { quoted: mek, caption: '✅ Resultado : database video' })
     } catch {
       m.reply(msg.packoff)
     }
     break


 case 'addav':
   if(!isQuotedAudio) return m.reply(msg.replyVn)
   if(!value) return m.reply(msg.notext)
   for ( i of direc.audio) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   let aud = await q.download()
   fs.writeFileSync(`./database/media/audio/${value.toLowerCase()}.mp3`, aud)
   m.reply(msg.done)
   await addAudio(value.toLowerCase())
   break

 case 'getav':
   try { 
     vn = fs.readFileSync(`./database/media/audio/${value.toLowerCase()}.mp3`) 
     Fg.sendMessage(from, vn, audio, { quoted: mek, ptt: true})
     } catch {
       m.reply(msg.packoff)
     }
     break

 case 'addstick':
   if(!isQuotedSticker) return m.reply(msg.replyStic)
   if (!value) return m.reply(msg.notext)
   for ( i of direc.sticker) {
        if(i === value.toLowerCase()) return m.reply(msg.packon)
        }
   q = m.quoted ? m.quoted : m 
   let stic = await q.download()
   fs.writeFileSync(`./database/media/sticker/${value.toLowerCase()}.webp`, stic) 
   m.reply(msg.done)
   await addStiker(value.toLowerCase())
break

 case 'getstick':
   try { 
     tik = fs.readFileSync(`./database/media/sticker/${value.toLowerCase()}.webp`) 
     Fg.sendMessage(from, tik, sticker, { quoted: mek })
     } catch {
       m.reply(msg.packoff)
     }
     break
     case 'setfakethumb':
   if(!isOwner) return m.reply(msg.owner)
   if(isMedia || isQuotedImage) {
   q = m.quoted ? m.quoted : m 
   thumb = await q.download() 
   fs.writeFileSync(`./temp/fake.jpg`, thumb)
   m.reply(msg.done)
   } else {
     m.reply(msg.replyImg)
   }
   break
   case 'fakethumb':
   if(isMedia || isQuotedImage) {
   q = m.quoted ? m.quoted : m 
   hasil = await q.download() 
   Fg.sendMessage(from, hasil, image, {quoted: mek, caption: msg.done, thumbnail: fakethumb})
   } else {
     m.reply(msg.replyImg)
   }
   break
   
   case 'trad':
 case 'translate':
   if(!value) return m.reply(msg.notext)
   to = args[0]
   bahasa = {
     id: 'indonesia',
     en: 'english', 
     es: 'español'
   }
   var lang = to || 'es' 
   if (!bahasa[lang]) return m.reply('⚠️ Lenguaje no soportado : ' + lang);
   if(!m.quoted) {
     word = value.split(lang)[1]
   } else if(m.quoted){
     word = m.quoted.text
   }
   await translate(word, { to: lang }).then(res => {
     capt = 'a  ' + bahasa[to].toUpperCase()
     capt += '\n✅ trad : ' + res.text
      return m.reply(capt) 
   }).catch(err => {
        return m.reply('⚠️ Error')
      })
   break
   
   case "playstore":
     if(!value) return m.reply(msg.notext)
     m.reply(msg.wait)
     let play = await fgx.playstore(value); 
     store = '          *PLAY STORE*\n\n────────────────\n'
     for (let i of play) {
       store += `▢ *📌Nombre* : ${i.name}
▢ *🔗 Link* : ${i.link}
▢ *👨🏻‍💻 Dev* : ${i.developer}
▢ *🔗 Link Dev* : ${i.link_dev}
────────────────\n`;
        } 
     m.reply(store);
   break;
   
   case 'igvid':
 case 'igimg':
 case 'igdl':
 case 'ig':
   if(!isUrl(value) && !value) return m.reply(msg.nolink('instagram'));
   if(isUrl(value) && !value.match("instagram.com")) return m.reply('⚠️ Link invalido');
   m.reply(msg.wait)
   igdl = await fgx.igDl(value)
   buffer = await getBuffer(igdl.result.link)
   desk = igdl.result.desc
   if(!buffer) return m.reply('Error')
   if(igdl.result.link.match('.mp4')){
     //if(!isPremium) return m.reply(msg.premdl+igdl.result.link)
     Fg.sendMessage(from, buffer, video, {quoted: mek, caption: desk})
   } else {
     Fg.sendMessage(from, buffer, image, {quoted: mek, caption: msg.done, thumbnail: fakethumb})
   }
   break
   
    case 'tiktok':
 case 'tiktoknowm':
 case 'tiktokaudio':
   if(!isUrl(value) && !value) return m.reply(msg.nolink('tiktok'));
   if(isUrl(value) && !value.match("tiktok.com")) return m.reply('⚠️ Link invalido');
   m.reply(msg.wait)
   ttdl = await fgx.Ttdl(value)
   if(command.includes('nowm')) {
   buffer = await getBuffer(ttdl.result.nowatermark)
   if(!buffer) return m.reply('⚠️ Error')
   Fg.sendMessage(from, buffer, video, {quoted: mek, caption: msg.done})
   } else if (command.includes('audio')) {
     buffer = await getBuffer(ttdl.result.nowatermark)
     if(!buffer) return m.reply('⚠️ Error')
     Fg.sendMessage(from, buffer, document, {quoted: mek, mimetype: 'audio/mp4', filename: `Tiktokdescarga.mp3`})
   } else {
     buffer = await getBuffer(ttdl.result.watermark)
     if(!buffer) return m.reply('⚠️ Error')
     Fg.sendMessage(from, buffer, video, {quoted: mek, caption: msg.done})
   }
   break

  case 'hidetag':
  case 'notify':
        if(!isOwner && !isAdmins) return m.reply(msg.admin)
        if (!isGroup) return m.reply(msg.group);
        if(!m.quoted) {
          tag = value
        } else if(m.quoted){
          tag = m.quoted.text
        } else {
          tag = ''
        }
        group = await Fg.groupMetadata(from);
        mention = groupMembers.map(u => u.jid) 
        var optionshidetag = {
          text: tag,
          contextInfo: { mentionedJid: mention },
          quoted: mek,
        };
        Fg.sendMessage(from, optionshidetag, text);
        break;
        
        case 'tagall':
    if(!isGroup) return m.reply(msg.group)
    if(!isAdmins && !isOwner) return m.reply(msg.admin)
    mention = groupMembers.map(u => u.jid) 
    m.reply('TAG ALL\n\n' + mention.map((v, i) => i + 1 + '- @' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: mention }
  })
  break
  
  case 'join':
  case 'entrabot':
    if(!isOwner) return
    if(!value) return m.reply(`✳️Ingrese el link de tu Grupo`) 
    join = value.split('https://chat.whatsapp.com/')[1]
    await Fg.acceptInvite(join).then((res) => {
      Fg.sendMessage(res.gid,`🎈 Hola soy *${Fg.user.name}*\n\n_🛡️ Fui invitado por @${sender.split("@")[0]} para unirme al grupo_\n\n📌 Escriba *${prefix}help* para ver el Menu del bot`, text, {contextInfo:{mentionedJid:[sender]}})
      m.reply(`✅ Me uní correctamente al grupo`)
      }).catch((err) => m.reply("‣ "+jsonformat(err)))
    break 
    
    case 'link':
    if(!isGroup) return m.reply(msg.group)
    if(!isBotAdmins) return m.reply(msg.botadmin)
    code = await Fg.groupInviteCode(from)
    fglink = `Link del Grupo *${groupName}*\n\nhttps://chat.whatsapp.com/${code}`
    m.reply(fglink)
    break
 
    
//---
  default:
  
    if (budy.startsWith('$')){
      if (!mek.key.fromMe && !isOwner) return;
      qur = budy.slice(2);
      exec(qur, (err, stdout) => {
        if (err) return m.reply(`‣  ${err}`);
        if (stdout) {
          m.reply(stdout);
          }
          });
          }
          
    if (budy.startsWith('>')){
      if (!mek.key.fromMe && !isOwner) return;
      try {
        Fg.sendMessage(from, "‣ "+JSON.stringify(eval(budy.slice(2)),null,'\t'), text, {quoted: mek});
        } catch(err) {
          e = String(err);
          m.reply("‣ "+e); }}} 
          
          //---
    let isLink = 'https://chat.whatsapp.com/'
    if(budy.match(isLink) && isAntilink === true ) {
      if(isAdmins) return
      if(!isBotAdmins) return
      code = await Fg.groupInviteCode(from) 
      if(budy.match(isLink+code)) {
        return !0
      } else {
        m.reply(msg.antilink)
        await addWarn(sender)
        m.reply(msg.addwarn)
        cek = await cekWarn(sender)
        if(cek === 3) {
          await Fg.groupRemove(from, sender)
          await delWarn(sender, 3)
        }
      }
    }

// respuestas del juego
   if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.quoted.text) return 
   if (!Fg.game) return
    if (m.quoted.from == Fg.game[from][0].from) {
        let json = JSON.parse(JSON.stringify(Fg.game[from][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            m.reply(msg.benar(json.jawaban.toUpperCase(), isPoingame))
            await addPoin(sender, isPoingame)
            clearTimeout(Fg.game[from][3])
            clearTimeout(Fg.game[from][4])
            delete Fg.game[from]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(msg.hampir)
        else m.reply(msg.salah)
    } return !0
    

} catch (e) {
  console.log(bgcolor('‣ Alerta :', 'red'), e);
}
};

/**
 *  WhatsApp bot  baileys 
 * 
 * Thank to 
 - https://github.com/MhankBarBar/weabot
 - https://github.com/Nurutomo/wabot-aq
 - All owner bot
*/
