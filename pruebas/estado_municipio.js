/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 05/06/2021, 06:51:31 PM
    Author     : ismael
*/

    /*<script type="text/javascript" language="javascript"> */
    var direccionesRoc=new Array();
    var direccionesAca=new Array();
    direccionesRoc[0]="rock1.htm";
    direccionesRoc[1]="rock2.htm";
    direccionesAca[0]="barroco.htm";
    direccionesAca[1]="sigloxx.htm";
    direccionesAca[2] = "romantico.htm";

        function direccion(form){
            var selec= form.tipos.options;
            var combo = form.estilo.options;
            
            if(selec[1].selected == true){
                document.form.action = direccionesRoc[combo.selectedIndex];
            } if(selec[2].selected == true){
                form.action = direccionesAca[combo.selectedIndex];
            }            
        }



        function agregarOpciones(form)
        {
            var selec = form.tipos.options;
            var combo = form.estilo.options;
            combo.length = null;

            if (selec[0].selected == true)
            {
                var seleccionar = new Option("Esperando selección");
                combo[0] = seleccionar;
            }

            if (selec[1].selected == true)
            { /* AMAZONAS */
                var municipio1_1 = new Option("Alto Orinoco");
                var municipio1_2 = new Option("Atabapo");
                var municipio1_3 = new Option("Atures");
                var municipio1_4 = new Option("Autana");
                var municipio1_5 = new Option("Maroa");
                var municipio1_6 = new Option("Manapiare");
                var municipio1_7 = new Option("Río Negro");
                combo[0] = municipio1_1;
                combo[1] = municipio1_2;
                combo[2] = municipio1_3;
                combo[3] = municipio1_4;
                combo[4] = municipio1_5;
                combo[5] = municipio1_6;
                combo[6] = municipio1_7;
            }

            if (selec[2].selected == true)
            { /* ANZOÁTEGUI */
                var municipio2_1 = new Option("Anaco");
                var municipio2_2 = new Option("Aragua");
                var municipio2_3 = new Option("Fernando Peñalver");
                var municipio2_4 = new Option("Francisco del Carmen Carvajal");
                var municipio2_5 = new Option("Francisco de Miranda");
                var municipio2_6 = new Option("Guanta");
                var municipio2_7 = new Option("Independencia");
                var municipio2_8 = new Option("Juan Antonio Sotillo");
                var municipio2_9 = new Option("Juan Manuel Cajigal");
                var municipio2_10 = new Option("José Gregorio Monagas");
                var municipio2_11 = new Option("Libertad");
                var municipio2_12 = new Option("Manuel Ezequiel Bruzual");
                var municipio2_13 = new Option("Pedro María Fréites");
                var municipio2_14 = new Option("Píritu");
                var municipio2_15 = new Option("San José de Guanipa");
                var municipio2_16 = new Option("San Juan de Capistrano");
                var municipio2_17 = new Option("Santa Ana");
                var municipio2_18 = new Option("Simón Bolívar");
                var municipio2_19 = new Option("Simón Rodríguez");
                var municipio2_20 = new Option("Sir Arthur Mc Gregor");
                var municipio2_21 = new Option("Diego Baustista Urbaneja");
                combo[0] = municipio2_1;
                combo[1] = municipio2_2;
                combo[2] = municipio2_3;
                combo[3] = municipio2_4;
                combo[4] = municipio2_5;
                combo[5] = municipio2_6;
                combo[6] = municipio2_7;
                combo[7] = municipio2_8;
                combo[8] = municipio2_9;
                combo[9] = municipio2_10;
                combo[10] = municipio2_11;
                combo[11] = municipio2_12;
                combo[12] = municipio2_13;
                combo[13] = municipio2_14;
                combo[14] = municipio2_15;
                combo[15] = municipio2_16;
                combo[16] = municipio2_17;
                combo[17] = municipio2_18;
                combo[18] = municipio2_19;
                combo[19] = municipio2_20;
                combo[20] = municipio2_21;
            }
            if (selec[3].selected == true)
            { /*APURE */
                var municipio3_1 = new Option("Achaguas");
                var municipio3_2 = new Option("Biruaca");
                var municipio3_3 = new Option("Muñoz");
                var municipio3_4 = new Option("Páez");
                var municipio3_5 = new Option("Pedro Camejo");
                var municipio3_6 = new Option("Rómulo Gallegos");
                var municipio3_7 = new Option("San Fernando");
                combo[0] = municipio3_1;
                combo[1] = municipio3_2;
                combo[2] = municipio3_3;
                combo[3] = municipio3_4;
                combo[4] = municipio3_5;
                combo[5] = municipio3_6;
                combo[6] = municipio3_7;
            }
            if (selec[4].selected == true)
            { /* ARAGUA */
                var municipio4_1 = new Option("Bolívar");
                var municipio4_2 = new Option("Camatagua");
                var municipio4_3 = new Option("Giraldot");
                var municipio4_4 = new Option("José Ángel Lamas");
                var municipio4_5 = new Option("José Félix Ribas");
                var municipio4_6 = new Option("José Rafael Revenga");
                var municipio4_7 = new Option("Libertador");
                var municipio4_8 = new Option("Mario Briceño Iragorry");
                var municipio4_9 = new Option("San Casimiro");
                var municipio4_10 = new Option("San Sebastián");
                var municipio4_11 = new Option("Santiago Mariño");
                var municipio4_12 = new Option("Santos Michelena");
                var municipio4_13 = new Option("Sucre");
                var municipio4_14 = new Option("Tovar");
                var municipio4_15 = new Option("Urdaneta");
                var municipio4_16 = new Option("Zamora");
                var municipio4_17 = new Option("Francisco Linares Alcántara");
                var municipio4_18 = new Option("Ocumare de la Costa de Oro");
                combo[0] = municipio4_1;
                combo[1] = municipio4_2;
                combo[2] = municipio4_3;
                combo[3] = municipio4_4;
                combo[4] = municipio4_5;
                combo[5] = municipio4_6;
                combo[6] = municipio4_7;
                combo[7] = municipio4_8;
                combo[8] = municipio4_9;
                combo[9] = municipio4_10;
                combo[10] = municipio4_11;
                combo[11] = municipio4_12;
                combo[12] = municipio4_13;
                combo[13] = municipio4_14;
                combo[14] = municipio4_15;
                combo[15] = municipio4_16;
                combo[16] = municipio4_17;
                combo[17] = municipio4_18;                
            }
            if (selec[5].selected == true)
            { /* BARINAS */
                var municipio5_1 = new Option("Alberto Arvelo Torrealba");
                var municipio5_2 = new Option("Antonio José de Sucre");
                var municipio5_3 = new Option("Arismendi");
                var municipio5_4 = new Option("Barinas");
                var municipio5_5 = new Option("Bolívar");
                var municipio5_6 = new Option("Cruz Paredez");
                var municipio5_7 = new Option("Ezequil Zamora");
                var municipio5_8 = new Option("Obispo");
                var municipio5_9 = new Option("Pedraza");
                var municipio5_10 = new Option("Rojas");
                var municipio5_11 = new Option("Sosa");
                var municipio5_12 = new Option("Andrés Eloy Blanco");                
                combo[0] = municipio5_1;
                combo[1] = municipio5_2;
                combo[2] = municipio5_3;
                combo[3] = municipio5_4;
                combo[4] = municipio5_5;
                combo[5] = municipio5_6;
                combo[6] = municipio5_7;
                combo[7] = municipio5_8;
                combo[8] = municipio5_9;
                combo[9] = municipio5_10;
                combo[10] = municipio5_11;
                combo[11] = municipio5_12;                                
            }
            if (selec[6].selected == true)
            { /* BOLIVAR */
                var municipio6_1 = new Option("Caroní");
                var municipio6_2 = new Option("Cedeño");
                var municipio6_3 = new Option("El Callao");
                var municipio6_4 = new Option("Gran Sabana");
                var municipio6_5 = new Option("Heres");
                var municipio6_6 = new Option("Piar");
                var municipio6_7 = new Option("Angostura");
                var municipio6_8 = new Option("Roscio");
                var municipio6_9 = new Option("Sifontes");
                var municipio6_10 = new Option("Sucre");
                var municipio6_11 = new Option("Padre Pedro Chien");                                
                combo[0] = municipio6_1;
                combo[1] = municipio6_2;
                combo[2] = municipio6_3;
                combo[3] = municipio6_4;
                combo[4] = municipio6_5;
                combo[5] = municipio6_6;
                combo[6] = municipio6_7;
                combo[7] = municipio6_8;
                combo[8] = municipio6_9;
                combo[9] = municipio6_10;
                combo[10] = municipio6_11;                                                
            }
            if (selec[7].selected == true)
            { /* CARABOBO */
                var municipio7_1 = new Option("Bejuma");
                var municipio7_2 = new Option("Carlos Arvelo");
                var municipio7_3 = new Option("Diego Ibarra");
                var municipio7_4 = new Option("Guacara");
                var municipio7_5 = new Option("Juan José Mora");
                var municipio7_6 = new Option("Libertador");
                var municipio7_7 = new Option("Guayos");
                var municipio7_8 = new Option("Miranda");
                var municipio7_9 = new Option("Montalbán");
                var municipio7_10 = new Option("Naguanagua");
                var municipio7_11 = new Option("Puerto Cabello");
                var municipio7_12 = new Option("San Diego");
                var municipio7_13 = new Option("San Joaquin");
                var municipio7_14 = new Option("Valencia");                
                combo[0] = municipio7_1;
                combo[1] = municipio7_2;
                combo[2] = municipio7_3;
                combo[3] = municipio7_4;
                combo[4] = municipio7_5;
                combo[5] = municipio7_6;
                combo[6] = municipio7_7;
                combo[7] = municipio7_8;
                combo[8] = municipio7_9;
                combo[9] = municipio7_10;
                combo[10] = municipio7_11;
                combo[11] = municipio7_12;
                combo[12] = municipio7_13;
                combo[13] = municipio7_14;                               
            }
            if (selec[8].selected == true)
            { /* COJEDES */
                var municipio8_1 = new Option("Anzoátegui");
                var municipio8_2 = new Option("Tinaquillo");
                var municipio8_3 = new Option("Girardot");
                var municipio8_4 = new Option("Lima Blanco");
                var municipio8_5 = new Option("Pao de San Juan Bautista");
                var municipio8_6 = new Option("Ricaute");
                var municipio8_7 = new Option("Rómulo Gallegos");
                var municipio8_8 = new Option("Ezequiel Zamora");
                var municipio8_9 = new Option("Tinaco");                                
                combo[0] = municipio8_1;
                combo[1] = municipio8_2;
                combo[2] = municipio8_3;
                combo[3] = municipio8_4;
                combo[4] = municipio8_5;
                combo[5] = municipio8_6;
                combo[6] = municipio8_7;
                combo[7] = municipio8_8;
                combo[8] = municipio8_9;                                               
            }
            if (selec[9].selected == true)
            { /* DESLTA AMACURO */
                var municipio9_1 = new Option("Antonio Díaz");
                var municipio9_2 = new Option("Casacoima");
                var municipio9_3 = new Option("Pedernales");
                var municipio9_4 = new Option("Tucupita");                
                combo[0] = municipio9_1;
                combo[1] = municipio9_2;
                combo[2] = municipio9_3;
                combo[3] = municipio9_4;                
            }
            if (selec[10].selected == true)
            { /* FALCO */
                var municipio10_1 = new Option("Acosta");
                var municipio10_2 = new Option("Bolívar");
                var municipio10_3 = new Option("Buchivacoa");
                var municipio10_4 = new Option("Cacique Manaure");
                var municipio10_5 = new Option("Carirubana");
                var municipio10_6 = new Option("Colina");
                var municipio10_7 = new Option("Dabajuro");
                var municipio10_8 = new Option("Democracia");
                var municipio10_9 = new Option("Falcón");
                var municipio10_10 = new Option("Federación");
                var municipio10_11 = new Option("Jacura");
                var municipio10_12 = new Option("Los Tanques");
                var municipio10_13 = new Option("Mauroa");
                var municipio10_14 = new Option("Miranda");
                var municipio10_15 = new Option("Monseñor Iturriza");
                var municipio10_16 = new Option("Palmasola");
                var municipio10_17 = new Option("Petit");
                var municipio10_18 = new Option("Píritu");
                var municipio10_19 = new Option("San Francisco");
                var municipio10_20 = new Option("Silva");
                var municipio10_21 = new Option("Sucre");
                var municipio10_22 = new Option("Tocópero");
                var municipio10_23 = new Option("Unión");
                var municipio10_24 = new Option("Urumaco");
                var municipio10_25 = new Option("Zamora");
                combo[0] = municipio10_1;
                combo[1] = municipio10_2;
                combo[2] = municipio10_3;
                combo[3] = municipio10_4;
                combo[4] = municipio10_5;
                combo[5] = municipio10_6;
                combo[6] = municipio10_7;
                combo[7] = municipio10_8;
                combo[8] = municipio10_9;
                combo[9] = municipio10_10;
                combo[10] = municipio10_11;
                combo[11] = municipio10_12;
                combo[12] = municipio10_13;
                combo[13] = municipio10_14;
                combo[14] = municipio10_15;
                combo[15] = municipio10_16;
                combo[16] = municipio10_17;
                combo[17] = municipio10_18;
                combo[18] = municipio10_19;
                combo[19] = municipio10_20;
                combo[20] = municipio10_21;
                combo[21] = municipio10_22;
                combo[22] = municipio10_23;
                combo[23] = municipio10_24;
                combo[24] = municipio10_25;
            }
            if (selec[11].selected == true)
            { /* GUÁRICO */
                var municipio11_1 = new Option("Camaguán");
                var municipio11_2 = new Option("Chaguaramas");
                var municipio11_3 = new Option("El Socorro");
                var municipio11_4 = new Option("San Gerónimo de Guayabal");
                var municipio11_5 = new Option("Leonardo Infante");
                var municipio11_6 = new Option("Las Mercedes");
                var municipio11_7 = new Option("Julián Mellado");
                var municipio11_8 = new Option("Francisco de Miranda");
                var municipio11_9 = new Option("José Tadeo Monagas");
                var municipio11_10 = new Option("Ortiz");
                var municipio11_11 = new Option("José Félix Ribas");
                var municipio11_12 = new Option("Juan Germán Roscio");
                var municipio11_13 = new Option("San José de Guaribe");
                var municipio11_14 = new Option("Santa María de Ipire");
                var municipio11_15 = new Option("Pedro Zaraza");                
                combo[0] = municipio11_1;
                combo[1] = municipio11_2;
                combo[2] = municipio11_3;
                combo[3] = municipio11_4;
                combo[4] = municipio11_5;
                combo[5] = municipio11_6;
                combo[6] = municipio11_7;
                combo[7] = municipio11_8;
                combo[8] = municipio11_9;
                combo[9] = municipio11_10;
                combo[10] = municipio11_11;
                combo[11] = municipio11_12;
                combo[12] = municipio11_13;
                combo[13] = municipio11_14;
                combo[14] = municipio11_15;                
            }
            if (selec[12].selected == true)
            { /* LARA */
                var municipio12_1 = new Option("Andrés Eloy Blanco");
                var municipio12_2 = new Option("Crespo");
                var municipio12_3 = new Option("Irribarren");
                var municipio12_4 = new Option("Jiménez");
                var municipio12_5 = new Option("Morán");
                var municipio12_6 = new Option("Palavecino");
                var municipio12_7 = new Option("Simón Planas");
                var municipio12_8 = new Option("Torres");
                var municipio12_9 = new Option("Urdaneta");                                
                combo[0] = municipio12_1;
                combo[1] = municipio12_2;
                combo[2] = municipio12_3;
                combo[3] = municipio12_4;
                combo[4] = municipio12_5;
                combo[5] = municipio12_6;
                combo[6] = municipio12_7;
                combo[7] = municipio12_8;
                combo[8] = municipio12_9;                                               
            }
            if (selec[13].selected == true)
            { /* MERIDA */
                var municipio13_1 = new Option("Alberto Adriani");
                var municipio13_2 = new Option("Andrés Bello");
                var municipio13_3 = new Option("Antonio Pinto Salinas");
                var municipio13_4 = new Option("Aricagua");
                var municipio13_5 = new Option("Arzobispo Chacón");
                var municipio13_6 = new Option("Campo Elías");
                var municipio13_7 = new Option("Caracciolo Parra Olmedo");
                var municipio13_8 = new Option("Cardenal Quintero");
                var municipio13_9 = new Option("Guaraque");
                var municipio13_10 = new Option("Julio César Salas");
                var municipio13_11 = new Option("Justo Briceño");
                var municipio13_12 = new Option("Libertador");
                var municipio13_13 = new Option("Miranda");
                var municipio13_14 = new Option("Obíspo Ramos de Lora");
                var municipio13_15 = new Option("Padre Noguera");
                var municipio13_16 = new Option("Pueblo LLano");
                var municipio13_17 = new Option("Rangel");
                var municipio13_18 = new Option("Rivas Dávila");
                var municipio13_19 = new Option("Santos Marquina");
                var municipio13_20 = new Option("Sucre");
                var municipio13_21 = new Option("Tovar");
                var municipio13_22 = new Option("Tulio Febres Cordero");
                var municipio13_23 = new Option("Zea");                
                combo[0] = municipio13_1;
                combo[1] = municipio13_2;
                combo[2] = municipio13_3;
                combo[3] = municipio13_4;
                combo[4] = municipio13_5;
                combo[5] = municipio13_6;
                combo[6] = municipio13_7;
                combo[7] = municipio13_8;
                combo[8] = municipio13_9;
                combo[9] = municipio13_10;
                combo[10] = municipio13_11;
                combo[11] = municipio13_12;
                combo[12] = municipio13_13;
                combo[13] = municipio13_14;
                combo[14] = municipio13_15;
                combo[15] = municipio13_16;
                combo[16] = municipio13_17;
                combo[17] = municipio13_18;
                combo[18] = municipio13_19;
                combo[19] = municipio13_20;
                combo[20] = municipio13_21;
                combo[21] = municipio13_22;
                combo[22] = municipio13_23;                
            }
            if (selec[14].selected == true)
            { /* MIRANDA */
                var municipio14_1 = new Option("Acevedo");
                var municipio14_2 = new Option("Andrés Bello");
                var municipio14_3 = new Option("Baruta");
                var municipio14_4 = new Option("Brión");
                var municipio14_5 = new Option("Buroz");
                var municipio14_6 = new Option("Carrizal");
                var municipio14_7 = new Option("Chacao");
                var municipio14_8 = new Option("Cristóbal Rojas");
                var municipio14_9 = new Option("El Hatillo");
                var municipio14_10 = new Option("Guaicapuro");
                var municipio14_11 = new Option("Independencia");
                var municipio14_12 = new Option("Lander");
                var municipio14_13 = new Option("Los Salias");
                var municipio14_14 = new Option("Páez");
                var municipio14_15 = new Option("Pas Castillo");
                var municipio14_16 = new Option("Pedro Gual");
                var municipio14_17 = new Option("Plaza");
                var municipio14_18 = new Option("Simón Bolívar");
                var municipio14_19 = new Option("Sucre");
                var municipio14_20 = new Option("Urdaneta");
                var municipio14_21 = new Option("Zamora");                                
                combo[0] = municipio14_1;
                combo[1] = municipio14_2;
                combo[2] = municipio14_3;
                combo[3] = municipio14_4;
                combo[4] = municipio14_5;
                combo[5] = municipio14_6;
                combo[6] = municipio14_7;
                combo[7] = municipio14_8;
                combo[8] = municipio14_9;
                combo[9] = municipio14_10;
                combo[10] = municipio14_11;
                combo[11] = municipio14_12;
                combo[12] = municipio14_13;
                combo[13] = municipio14_14;
                combo[14] = municipio14_15;
                combo[15] = municipio14_16;
                combo[16] = municipio14_17;
                combo[17] = municipio14_18;
                combo[18] = municipio14_19;
                combo[19] = municipio14_20;
                combo[20] = municipio14_21;                                
            }
            if (selec[15].selected == true)
            { /* MONAGAS */
                var municipio15_1 = new Option("Acosta");
                var municipio15_2 = new Option("Aguasay");
                var municipio15_3 = new Option("Bolívar");
                var municipio15_4 = new Option("Caripe");
                var municipio15_5 = new Option("Cedeño");
                var municipio15_6 = new Option("Ezequiel Zamora");
                var municipio15_7 = new Option("Libertador");
                var municipio15_8 = new Option("Maturín");
                var municipio15_9 = new Option("Piar");
                var municipio15_10 = new Option("Punceres");
                var municipio15_11 = new Option("Santa Bárbara");
                var municipio15_12 = new Option("Sotillo");
                var municipio15_13 = new Option("Uracoa");                                                
                combo[0] = municipio15_1;
                combo[1] = municipio15_2;
                combo[2] = municipio15_3;
                combo[3] = municipio15_4;
                combo[4] = municipio15_5;
                combo[5] = municipio15_6;
                combo[6] = municipio15_7;
                combo[7] = municipio15_8;
                combo[8] = municipio15_9;
                combo[9] = municipio15_10;
                combo[10] = municipio15_11;
                combo[11] = municipio15_12;
                combo[12] = municipio15_13;                                                
            }
            if (selec[16].selected == true)
            { /* NUEVA ESPARTA */
                var municipio16_1 = new Option("Antolín del Campo");
                var municipio16_2 = new Option("Arismendi");
                var municipio16_3 = new Option("Díaz");
                var municipio16_4 = new Option("García");
                var municipio16_5 = new Option("Gómez");
                var municipio16_6 = new Option("Maneiro");
                var municipio16_7 = new Option("Marcano");
                var municipio16_8 = new Option("Mariño");
                var municipio16_9 = new Option("Península de Macanao");
                var municipio16_10 = new Option("Tubores");
                var municipio16_11 = new Option("Villalba");                                                                
                combo[0] = municipio16_1;
                combo[1] = municipio16_2;
                combo[2] = municipio16_3;
                combo[3] = municipio16_4;
                combo[4] = municipio16_5;
                combo[5] = municipio16_6;
                combo[6] = municipio16_7;
                combo[7] = municipio16_8;
                combo[8] = municipio16_9;
                combo[9] = municipio16_10;
                combo[10] = municipio16_11;                                                                
            }
            if (selec[17].selected == true)
            { /* PORTUGUESA */
                var municipio17_1 = new Option("Agua Blanca");
                var municipio17_2 = new Option("Araure");
                var municipio17_3 = new Option("Esteller");
                var municipio17_4 = new Option("Guanare");
                var municipio17_5 = new Option("Guamarito");
                var municipio17_6 = new Option("Monseñor José Vicente de Unda");
                var municipio17_7 = new Option("Ospino");
                var municipio17_8 = new Option("Páez");
                var municipio17_9 = new Option("Papelón");
                var municipio17_10 = new Option("San Genaro de Boconoito");
                var municipio17_11 = new Option("San Rafael de Onoto");
                var municipio17_12 = new Option("Santa Rosalía");
                var municipio17_13 = new Option("Sucre");
                var municipio17_14 = new Option("Turen");
                combo[0] = municipio17_1;
                combo[1] = municipio17_2;
                combo[2] = municipio17_3;
                combo[3] = municipio17_4;
                combo[4] = municipio17_5;
                combo[5] = municipio17_6;
                combo[6] = municipio17_7;
                combo[7] = municipio17_8;
                combo[8] = municipio17_9;
                combo[9] = municipio17_10;
                combo[10] = municipio17_11;
                combo[11] = municipio17_12;
                combo[12] = municipio17_13;
                combo[13] = municipio17_14;
            }
            if (selec[18].selected == true)
            { /* SUCRE */
                var municipio18_1 = new Option("Andrés Eloy Blanco");
                var municipio18_2 = new Option("Andrés Mata");
                var municipio18_3 = new Option("Arismendi");
                var municipio18_4 = new Option("Benítez");
                var municipio18_5 = new Option("Bermúdez");
                var municipio18_6 = new Option("Bolívar");
                var municipio18_7 = new Option("Cajigal");
                var municipio18_8 = new Option("Cruz Salmerón Acosta");
                var municipio18_9 = new Option("Libertador");
                var municipio18_10 = new Option("Mariño");
                var municipio18_11 = new Option("Mejía");
                var municipio18_12 = new Option("Montes");
                var municipio18_13 = new Option("Ribero");
                var municipio18_14 = new Option("Sucre");
                var municipio18_15 = new Option("Valdez");
                combo[0] = municipio18_1;
                combo[1] = municipio18_2;
                combo[2] = municipio18_3;
                combo[3] = municipio18_4;
                combo[4] = municipio18_5;
                combo[5] = municipio18_6;
                combo[6] = municipio18_7;
                combo[7] = municipio18_8;
                combo[8] = municipio18_9;
                combo[9] = municipio18_10;
                combo[10] = municipio18_11;
                combo[11] = municipio18_12;
                combo[12] = municipio18_13;
                combo[13] = municipio18_14;
                combo[14] = municipio18_15;
            }
            if (selec[19].selected == true)
            { /* TÁCHIRA */
                var municipio19_1 = new Option("Andrés Bello");
                var municipio19_2 = new Option("Antonio Rómulo Costa");
                var municipio19_3 = new Option("Ayacucho");
                var municipio19_4 = new Option("Bolívar");
                var municipio19_5 = new Option("Cárdenas");
                var municipio19_6 = new Option("Córdoba");
                var municipio19_7 = new Option("Fernández Feo");
                var municipio19_8 = new Option("Francisco de Miranda");
                var municipio19_9 = new Option("García de Hevia");
                var municipio19_10 = new Option("Guásimo");
                var municipio19_11 = new Option("Independencia");
                var municipio19_12 = new Option("Jáuregui");
                var municipio19_13 = new Option("José María Vargas");
                var municipio19_14 = new Option("Junín");
                var municipio19_15 = new Option("Libertad");
                var municipio19_16 = new Option("Libertador");
                var municipio19_17 = new Option("Lobatera");
                var municipio19_18 = new Option("Michelena");
                var municipio19_19 = new Option("Panamericano");
                var municipio19_20 = new Option("Pedro María Ureña");
                var municipio19_21 = new Option("Rafael Urdaneta");
                var municipio19_22 = new Option("Samuel Darío Maldonado");
                var municipio19_23 = new Option("San Cristóbal");
                var municipio19_24 = new Option("Seboruco");
                var municipio19_25 = new Option("Simón Rodríguez");
                var municipio19_26 = new Option("Sucre");
                var municipio19_27 = new Option("Torbes");
                var municipio19_28 = new Option("Uribante");
                var municipio19_29 = new Option("San Judas Tadeo");
                combo[0] = municipio19_1;
                combo[1] = municipio19_2;
                combo[2] = municipio19_3;
                combo[3] = municipio19_4;
                combo[4] = municipio19_5;
                combo[5] = municipio19_6;
                combo[6] = municipio19_7;
                combo[7] = municipio19_8;
                combo[8] = municipio19_9;
                combo[9] = municipio19_10;
                combo[10] = municipio19_11;
                combo[11] = municipio19_12;
                combo[12] = municipio19_13;
                combo[13] = municipio19_14;
                combo[14] = municipio19_15;
                combo[15] = municipio19_16;
                combo[16] = municipio19_17;
                combo[17] = municipio19_18;
                combo[18] = municipio19_19;
                combo[19] = municipio19_20;
                combo[20] = municipio19_21;
                combo[21] = municipio19_22;
                combo[22] = municipio19_23;
                combo[23] = municipio19_24;
                combo[24] = municipio19_25;
                combo[25] = municipio19_26;
                combo[26] = municipio19_27;
                combo[27] = municipio19_28;
                combo[28] = municipio19_29;
            }
            if (selec[20].selected == true)
            { /* TRUJILLO */
                var municipio20_1 = new Option("Andrés Bello");
                var municipio20_2 = new Option("Boconó");
                var municipio20_3 = new Option("Bolívar");
                var municipio20_4 = new Option("Candelaria");
                var municipio20_5 = new Option("Carache");
                var municipio20_6 = new Option("Escuque");
                var municipio20_7 = new Option("José Felipe Márquez Cañizales");
                var municipio20_8 = new Option("Juan Vicente Campo Elías");
                var municipio20_9 = new Option("La Ceiba");
                var municipio20_10 = new Option("Miranda");
                var municipio20_11 = new Option("Monte Carmelo");
                var municipio20_12 = new Option("Motatán");
                var municipio20_13 = new Option("Pampán");
                var municipio20_14 = new Option("Pampanito");
                var municipio20_15 = new Option("Rafael Rangel");
                var municipio20_16 = new Option("San Rafael de Carvajal");
                var municipio20_17 = new Option("Sucre");
                var municipio20_18 = new Option("Trujillo");
                var municipio20_19 = new Option("Urdaneta");
                var municipio20_20 = new Option("Valera");
                combo[0] = municipio20_1;
                combo[1] = municipio20_2;
                combo[2] = municipio20_3;
                combo[3] = municipio20_4;
                combo[4] = municipio20_5;
                combo[5] = municipio20_6;
                combo[6] = municipio20_7;
                combo[7] = municipio20_8;
                combo[8] = municipio20_9;
                combo[9] = municipio20_10;
                combo[10] = municipio20_11;
                combo[11] = municipio20_12;
                combo[12] = municipio20_13;
                combo[13] = municipio20_14;
                combo[14] = municipio20_15;
                combo[15] = municipio20_16;
                combo[16] = municipio20_17;
                combo[17] = municipio20_18;
                combo[18] = municipio20_19;
                combo[19] = municipio20_20;                
            }            
            if (selec[21].selected == true)
            { /* VARGAS  */
                var municipio21_1 = new Option("Vargas");
                combo[0] = municipio21_1;
            }
            if (selec[22].selected == true)
            { /* YARACUY */
                var municipio22_1 = new Option("Arístedez Bastidas");
                var municipio22_2 = new Option("Bolívar");
                var municipio22_3 = new Option("Bruzual");
                var municipio22_4 = new Option("Cocorote");
                var municipio22_5 = new Option("Independencia");
                var municipio22_6 = new Option("José Antonio Páez");
                var municipio22_7 = new Option("La Trinidad");
                var municipio22_8 = new Option("Manuel Monge");
                var municipio22_9 = new Option("Nirgua");
                var municipio22_10 = new Option("Peña");
                var municipio22_11 = new Option("san Felipe");
                var municipio22_12 = new Option("Sucre");
                var municipio22_13 = new Option("Urachiche");
                var municipio22_14 = new Option("Veroes");                
                combo[0] = municipio22_1;
                combo[1] = municipio22_2;
                combo[2] = municipio22_3;
                combo[3] = municipio22_4;
                combo[4] = municipio22_5;
                combo[5] = municipio22_6;
                combo[6] = municipio22_7;
                combo[7] = municipio22_8;
                combo[8] = municipio22_9;
                combo[9] = municipio22_10;
                combo[10] = municipio22_11;
                combo[11] = municipio22_12;
                combo[12] = municipio22_13;
                combo[13] = municipio22_14;                                
            }
            if (selec[23].selected == true)
            { /* ZULIA  */
                var municipio23_1 = new Option("Almirante Padilla");
                var municipio23_2 = new Option("Baralt");
                var municipio23_3 = new Option("Cabimas");
                var municipio23_4 = new Option("Catatumbo");
                var municipio23_5 = new Option("Colón");
                var municipio23_6 = new Option("Francisco Javier Pulgar");
                var municipio23_7 = new Option("Jesús Enrique Lossada");
                var municipio23_8 = new Option("Jesús María Semprún");
                var municipio23_9 = new Option("La Canada de Urdaneta");
                var municipio23_10 = new Option("Lagunillas");
                var municipio23_11 = new Option("Machiquez de Perijá");
                var municipio23_12 = new Option("Mara");
                var municipio23_13 = new Option("Maracaibo");
                var municipio23_14 = new Option("Miranda");
                var municipio23_15 = new Option("Indigena Bolivariano Guajira");
                var municipio23_16 = new Option("Rosario de Perijá");
                var municipio23_17 = new Option("San Francisco");
                var municipio23_18 = new Option("Santa Rita");
                var municipio23_19 = new Option("Simón Bolívar");
                var municipio23_20 = new Option("Sucre");
                var municipio23_21 = new Option("Valmore rodríguez");
                combo[0] = municipio23_1;
                combo[1] = municipio23_2;
                combo[2] = municipio23_3;
                combo[3] = municipio23_4;
                combo[4] = municipio23_5;
                combo[5] = municipio23_6;
                combo[6] = municipio23_7;
                combo[7] = municipio23_8;
                combo[8] = municipio23_9;
                combo[9] = municipio23_10;
                combo[10] = municipio23_11;
                combo[11] = municipio23_12;
                combo[12] = municipio23_13;
                combo[13] = municipio23_14;
                combo[14] = municipio23_15;
                combo[15] = municipio23_16;
                combo[16] = municipio23_17;
                combo[17] = municipio23_18;
                combo[18] = municipio23_19;
                combo[19] = municipio23_20;
                combo[20] = municipio23_21;
            }
            
        }
    /*</script> */

