function hourString(horario24) {
    const hora = parseInt(horario24.split(":")[0]);
    const minutos = horario24.split(":")[1];
    
    console.log[hora,minutos, hora12] = horario24.split(":")[1];
    const hora12 = hora % 12 || 12;
    let periodo = "AM";
    if (hora >= 12) {
    periodo = "PM";
    }
    console.log(`${hora12}:${minutos} ${periodo}`);
    hourString("11:22");
}    
