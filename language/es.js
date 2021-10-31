// -- enviar mensaje
exports.wait = `*⌛ _Cargando..._ ▬▬▬▭*`;
exports.bye = `Adios...`;
exports.done = `✅ Finalizado`;
exports.next = (value) => {
  return `Haga click en siguiente para *${value}* `;
};
exports.packon = 'Nombre del paquete ya registrado';
exports.packoff = 'El nombre del paquete de medios no está registrado en la base de datos.';
exports.liston = '✅ Lista de medios almacenados en la base de datos';
exports.getlist = '✳️ Use el comando getimg/getvid/getav/getstik para enviar un paquete de un medio\n*📌Ejemplo* : /getimg auron';
exports.nolink = (value) => {
  return '✳️ Repita agregando un enlace ' + value;
};
// -- message only
exports.admin = '✳️ Este comando es solo para *Admins* del grupo';
exports.group = '✳️ ¡Este comando solo se puede usar en grupos!';
exports.premium = '✳️ Este comando es solo para miembros *Premium*';
exports.premdl = '✳️ Lo sentimos, no es un usuario premium, descárguelo usted mismo usando el enlace\n*LINK* : ';
exports.botadmin = '✳️ ¡Para usar este comando debo ser *Administrador!*';
exports.owner = '✳️ Esta función es solo para *Para el dueño del Bot*';
exports.isprem = '✳️ El usuario es el usuario premium anterior.';
exports.noprem = '✳️ El usuario aún no es un usuario premium.';
exports.ban = '✳️ El estado de usuario ha sido prohibido antes';
exports.noban = '✳️ El usuario no tiene estado prohibido';
exports.isadmin = '✳️ El bot no puede iniciar sesión como administrador';

// -- texto
exports.notag = '✳️ Etiqueta a un miembro del grupo';
exports.nonum = '✳️ Repita agregando el número de destino';
exports.notext = '✳️ Repita agregando texto';
exports.reply = '✳️Responde a un mensaje...';
exports.replyStic = '✳️Responde a un sticker...';
exports.replyVid = '✳️ Responde a un vide...';
exports.replyVn = '✳️ Responde a un audio...';
exports.replyImg = '✳️ Responde a una imagen...';
exports.noreply = '✳️ El mensaje al que respondió no contenía una respuesta';
exports.nolink = (value) => {
  return '✳️ Repita agregando un enlace ' + value;
};
exports.addwarn = `⚠️ Advertencia\nusted obtiene 1 advertencia`;
exports.delwarn = `⚠️ Advertencia\n Se redujo 1 advertencia`;
exports.cekwarn = (warn) => {
  return `✳️ El usuario tiene una advertencia total : *${warn}*`;
};
exports.nowarn = `✳️ El usuario no tiene ninguna advertencia`;
exports.Pbahasa = `✳️ Seleccione el idioma que desea utilizar

*Idiomas disponibles*
- Spanish
- Indonesia
- English`;
exports.nobahasa = `Idioma no disponible

*Idiomas disponibles*
- Spanish
- Indonesia
- English`;
exports.online = '✅ Bot activo  en este grupo'
exports.offline = '✳️ Se desactivo el Bot en este grupo'

// -- grupo
exports.onwa = '✳️ El usuario ya está en el grupo';
exports.sendlink = '✅ Envía una invitación a';
exports.open = '✅ Grupo abierto ahora *todos los participantes* pueden escribir';
exports.close = '✅ Grupo cerrado ahora *solo los admin* pueden escribir';
exports.name = (value) => {
  return `✅ Se cambió el nombre a \n\n*${value}*`;
};
exports.desk = (value) => {
  return `✅ Cambió la descripción del grupo a \n\n${value}`;
};
exports.promote = (value) => {
  return `✅  *${value}* Promovido como administrador`;
};
exports.demote = (value) => {
  return '✅ Admin degradado' + value;
};

exports.kick = (value) => {
  return '✅ Orden recibida, emitida '+value;
};
exports.On = (value) => {
 return `✅ Se activo *${value}* en este grupo`;
};
exports.Off = (value) => {
  return `✅ *${value}* desactivado para este grupo`;
};
exports.Thison = (value) => {
  return `✳️ *${value}* Se activó antes`;
};
exports.Thisoff = (value) => {
return `✳️ *${value}* se desactivo antes`;
};
exports.OnorOff = '✳️ Repita agregando on/off';
exports.antilink = '❎ No permitimos enlaces de otros grupos!\nLo siento seras expulsado';

exports.setwel = (value) => {
  return `✳️ Ingrese el mensaje de *bienvenida*
*📌 Ejemplo:*
/setwelcome Bienvenido @user  a @group

Nombre : @name
Bio : @bio
Fecha : @date
Nombre de Grupo : @group

*Ejemplos para cada función*` + value;
};

exports.setbye = (value) => {
  return `✳️ Ingrese el mensaje de *Despedida*
  
*📌 Ejemplo:*
/setbye Adios  @user

*Ejemplos para cada función*` + value;
};

exports.setweldone = (value, fungsi) => {
  return `✅ Mensaje de Bienvenida Cambiada\n\n`
+ value + `\n\n*Ejemplos para cada función*` + fungsi;
};

exports.setbyedone = (value, fungsi) => {
  return `✅ Mensaje de Depedida Cambiada\n\n`
+ value + `\n\n*Ejemplos para cada función*` + fungsi;
};
//--
exports.default = (value) => {
  return value + ' Volver a la configuración inicial';
};

exports.main = (value) => {
  return '✳️ Todavía hay un ' + value + ' en curso';
};
exports.nomain = (value) => {
  return `✳️ No hay *${value}* en curso`;
};
exports.inmain = (value) => {
  return `Ya has Votado *${value}*`
};
exports.hapus = (value) =>{
  return `✅ Se eliminó *${value}* de este grupo`;
};

// juegos
exports.onGame = '⚠️ Todavía hay preguntas sin respuesta en este chat.';
exports.soal = (text1, text2, text3) => {
  return `${text1}

⏳ *Tiempo*
${text2}

*PUNTOS*
${text3}

Responde este mensaje para responder
La pista de respuesta aparece en los últimos 10 segundos.`;
};

exports.timeout = '⏳ Se acabó el tiempo, la respuesta es ';
exports.salah = '❎ *Incorrecto* !\nIntente otra vez';
exports.hampir = '*✳️ Casi lo logras* \nSigue intentando!';
exports.benar = (value, value2) => {
  return `✅ *Respuesta correcta!*\n\n‣ Ganaste : *${value2}*`;
};