// 19. Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function questao19poo():void{
    class sensor{
        codigo:number
        leitura:number
        constructor(codigo:number,leitura:number){
            this.codigo=codigo
            this.leitura=leitura
        }
        alerta(){
            return false
        }
        mostrar(){
            return "codigo: "+this.codigo+" | leitura: "+this.leitura
        }
    }
    class sensorTemperatura extends sensor{
        alerta(){
            return this.leitura>40
        }
        mostrar(){
            return "codigo: "+this.codigo+" | leitura: "+this.leitura+"°C"
        }
    }
    class sensorPressao extends sensor{
        alerta(){
            return this.leitura>5
        }
        mostrar(){
            return "codigo: "+this.codigo+" | leitura: "+this.leitura+" atm"
        }
    }
    let sensores:sensor[]=[]
    while(true){
        let tipo=prompt("1 - temperatura\n2 - pressao\n3 - sair")
        if(tipo=="3"){
            break
        }
        let codigo=Number(prompt("digite o codigo: "))
        let leitura=Number(prompt("digite a leitura: "))

        if(tipo=="1"){
            sensores.push(new sensorTemperatura(codigo,leitura))
        }else if(tipo=="2"){
            sensores.push(new sensorPressao(codigo,leitura))
        }
    }
    let resultado="SENSORES EM ALERTA:\n"
    for(let i=0;i<sensores.length;i++){
        if(sensores[i].alerta()){
            resultado+=sensores[i].mostrar()+" - PERIGO!\n"
        }
    }
    alert(resultado)
}