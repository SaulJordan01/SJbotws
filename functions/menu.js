exports.menu = (v) => {
  return `
┌─⊷ *MAIN* 
▢ ${v}chatbot on/off
▢ ${v}bot <text>
▢ ${v}info
▢ ${v}language
▢ ${v}ping
▢ ${v}owner
▢ ${v}join <link>
▢ ${v}report <text>
└──────────────
≡ List Menu
┌─⊷ *FUN* 
▢ ${v}fake text|@user|text
▢ ${v}pregunta
└──────────────
┌─⊷ *GAMES* 
▢ ${v}verdad
▢ ${v}reto
▢ ${v}ppt
└──────────────
┌─⊷ *STICKER* 
▢ ${v}sticker <nombre>|<autor>
▢ ${v}take <nombre>|<autor>
▢ ${v}toimg
▢ ${v}attp
└──────────────
┌─⊷ *PICTURE* 
▢ ${v}pinterest
▢ ${v}imagen
▢ ${v}girl
▢ ${v}man
▢ ${v}wallpaper
└──────────────
┌─⊷ *TOOLS*
▢ ${v}fakethumb
▢ ${v}tomp3
▢ ${v}toav
├ ${v}q
└──────────────
┌─⊷ *EDUCACIÓN* 
▢ ${v}translate <lang><text>
└──────────────
┌─⊷ *BUSQUEDA* ❳
▢ ${v}playstore
▢ ${v}ytsearch
└──────────────
┌─⊷ *DOWNLOAD* 
▢ ${v}play
▢ ${v}play2
▢ ${v}playvid
▢ ${v}ytmp3 <link yt>
▢ ${v}ytmp4 <link yt>
▢ ${v}igdl <link>
▢ ${v}tiktok <link>
▢ ${v}tiktoknowm <link>
▢ ${v}tiktokaudio <link>
└──────────────
┌─⊷ *TEXT MAKER*
▢ ${v}nameninja <text>
▢ ${v}typewriter <text>
▢ ${v}blackpill <text>
▢ ${v}sans <text>
▢ ${v}castle <text>
└──────────────
┌─⊷ *DATABASE* 
▢ ${v}addimg <text>
▢ ${v}addvid <text>
▢ ${v}addstick <text>
▢ ${v}addav <text>
▢ ${v}getimg <text>
▢ ${v}getvid <text>
▢ ${v}getstick <text>
▢ ${v}getav <text>
▢ ${v}listmedia
└──────────────
┌─⊷ *VOTING* 
▢ ${v}voting <text>
▢ ${v}delvote
▢ ${v}checkvote
└──────────────
┌─⊷ *ADMIN* 
▢ ${v}setwelcome
▢ ${v}seybye
▢ ${v}delwelcome
▢ ${v}delbye
▢ ${v}simulate <welcome/bye>
▢ ${v}group <open/close>
▢ ${v}resetlink
▢ ${v}online
▢ ${v}offline
▢ ${v}hidetag
▢ ${v}notify
▢ ${v}tagall
▢ ${v}setppgp
▢ ${v}setname <text>
▢ ${v}setdesc <text>
▢ ${v}add <numero>
▢ ${v}kick @user
▢ ${v}okick <reply msg>
▢ ${v}promote @user
▢ ${v}demote @user
▢ ${v}warn @user
▢ ${v}delwarn @user
▢ ${v}warns @user
└──────────────
┌─⊷ *GRUPO*
▢ ${v}welcome on/off
▢ ${v}antidelete on/off
▢ ${v}detect on/off
▢ ${v}antilink on/off
▢ ${v}link
▢ ${v}infogp
▢ ${v}profile
▢ ${v}invite <549xxxx> 
└──────────────
┌─⊷ *OWNER* 
▢ ${v}addpremium @user
▢ ${v}delpremium @user
▢ ${v}ban @user
▢ ${v}unban @user
▢ ${v}view
▢ ${v}grouplist
▢ ${v}update
▢ ${v}setppbot
▢ ${v}setfakethumb
▢ ${v}setprefix
▢ ${v}listreport
▢ $
▢ >
└──────────────`;
};