(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes: [string,string] = [batman,superman];
    const villano: [string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Poder {
        powerAcuaman = 0,
        powerBatman = 1,
        powerFlash = 5,
        powerSuperman = 100,
    }
    const fuerzaFlash: Poder = Poder.powerFlash;
    const fuerzaSuperman: Poder = Poder.powerSuperman;
    const fuerzaBatman: Poder = Poder.powerBatman;
    const fuerzaAcuaman: Poder = Poder.powerAcuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  