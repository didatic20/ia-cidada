function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}
function dateTime(){
    var data = new Date();
    var dia = data.getDate();
    var dia_s = data.getDay();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var tz = data.getTimezoneOffset();
    hora=checkTime(hora);
    min=checkTime(min);
    seg=checkTime(seg);

    var dia_semana = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')
    var str_data = dia_semana[dia_s] + ', ' + dia + '/' + (mes+1) + '/' + ano;
    var str_hora = hora + ':' + min + ':' + seg;

    document.writeln(""+str_data+' às '+str_hora);
    //t=setTimeout('dateTime()',500);
}