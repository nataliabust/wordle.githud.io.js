        const CALCULAR = document.getElementById('calcular');
        const ERROR = document.getElementById('error');
        const FLU = document.getElementById('flu');
        const MAN = document.getElementById('man');
        const MANY = document.getElementById('many')
        const DETALLE = document.getElementById('detalle');
        const DETALLE2 = document.getElementById('detalle2');

        CALCULAR.addEventListener('click', () => {
            const DATO = parseFloat (document.getElementById('peso').value);
            if (DATO < 0){
                ERROR.textContent = "* El peso no puede ser negativo";
                ERROR.style.display = 'block';
                return;

            }
            if (DATO <= 30){
                ERROR.style.display = 'none'
                let flujo = calcFlujo(DATO);
                let mantenimiento = flujo/24;
                let mantenimientoYmedio = (flujo/24)*1.5;
                
                
                FLU.innerHTML = flujo + ' cc';
                MAN.innerHTML = Math.round(mantenimiento) + ' cc/hr';
                MANY.innerHTML = 'm+m/2 ' + Math.round(mantenimientoYmedio) + ' cc/hr';
                
                FLU.style.display = 'block';
                MAN.style.display = 'block';
                MANY.style.display = 'block';
                
                DETALLE.style.display = 'block';
                DETALLE2.style.display = 'none';

            } else {
                ERROR.style.display = 'none';
                let superficieCorporal = ((DATO * 4) + 7) / (DATO + 90);
                 let volumenDiario = superficieCorporal * 1500;
                 let volumenDiario2 = superficieCorporal * 2000;
                 let mantenimiento = volumenDiario / 24;
                 let mantenimiento2 = volumenDiario2 / 24;
                 let mantenimientoYmedio = (volumenDiario / 24)*1.5;
                 let mantenimientoYmedio2 = (volumenDiario2 / 24)*1.5;


                FLU.innerHTML = Math.round(volumenDiario) + ' cc /' + Math.round(volumenDiario2) + ' cc';
                MAN.innerHTML = Math.round(mantenimiento) + 'cc/hr //' + Math.round(mantenimiento2) + 'cc/h';
                MANY.innerHTML = 'm+m/2 //' + Math.round(mantenimientoYmedio) + 'cc/h //' + Math.round(mantenimientoYmedio2) + 'cc/h';

                FLU.style.display = 'block';
                MAN.style.display = 'block'; 
                MANY.style.display = 'block';
               
                DETALLE.style.display = 'none';
                DETALLE2.style.display = 'block';
            }
        });

            function calcFlujo(peso){
                let resto = peso;
                let flujo = 0;
                if (resto>20){
                    let aux = resto-20;
                    flujo += aux*20;
                    resto -= aux;
                } 
                if (resto>10){
                    let aux = resto-10;
                    flujo += aux*50;
                    resto -= aux;
                } 
                if (peso > 30) {
                    let superficieCorporal = ((peso * 4) + 7) / (peso + 90);
                    return [superficieCorporal*1500, superficieCorporal*2000]; 
            }
                
                flujo += resto*100;
                return flujo;
               
            }
               