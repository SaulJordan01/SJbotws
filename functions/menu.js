exports.menu = (v) => {
  return `
┌─⊷ *ACERCA DE* 
▢ ${v}help
▢ ${v}info
▢ ${v}language
▢ ${v}ping
▢ ${v}owner
▢ ${v}join <link>
└──────────────
┌─⊷ *FUN* 
▢ ${v}fake text|@user|text
▢ ${v}pregunta
└──────────────
┌─⊷ *JUEGOS* 
▢ ${v}verdad
▢ ${v}reto
└──────────────
┌─⊷ *STICKER* 
▢ ${v}sticker <nombre>|<autor>
▢ ${v}take <nombre>|<autor>
▢ ${v}toimg
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
└──────────────
┌─⊷ *DESCARGAS* 
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
┌─⊷ *ADMIN* 
▢ ${v}open
▢ ${v}close
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
▢ ${v}promover @user
▢ ${v}degradar @user
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
└──────────────
┌─⊷ *OWNER* 
▢ ${v}addpremium @user
▢ ${v}delpremium @user
▢ ${v}ban @user
▢ ${v}unban @user
▢ ${v}setppbot
▢ ${v}setfakethumb
▢ $
▢ >
└──────────────`;
};