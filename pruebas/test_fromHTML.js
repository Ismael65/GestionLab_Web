/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*var name = prompt('What is your name?');
var multiplier = prompt('Enter a number:');
multiplier = parseInt(multiplier);

var doc = new jsPDF();
doc.setFontSize(22);
doc.text(20, 20, 'Questions');
doc.setFontSize(16);
doc.text(20, 30, 'This belongs to: ' + name);

for(var i = 1; i <= 12; i ++) {
    doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ___');
}

doc.addPage();
doc.setFontSize(22);
doc.text(20, 20, 'Answers');
doc.setFontSize(16);

for(var i = 1; i <= 12; i ++) {
    doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ' + (i * multiplier));
}
doc.save('Test.pdf');*/

// ***************************************************

    
   function crearPDF(){
     var nomArchivo = document.getElementById("nombre").value;
        var pdf = new jsPDF('p', 'pt', 'letter')

// source can be HTML-formatted string, or a reference
// to an actual DOM element from which the text will be scraped.
, source = $('#imprimir')[0] 

// we support special element handlers. Register them with jQuery-style
// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
// There is no support for any other type of selectors
// (class, of compound) at this time.
                   , specialElementHandlers = {
// element with id of "bypass" - jQuery style selector
                       '#bypassme': function (element, renderer) {
// true = "handled elsewhere, bypass text extraction"
                           return true
                       }
                   }

           margins = {
               top: 10,
               bottom: 60,
               left: 40,
               width: 522
           };
// all coords and widths are in jsPDF instance's declared units
// 'inches' in this case
           pdf.fromHTML(
                   source // HTML string or DOM elem ref.
                   , margins.left // x coord
                   , margins.top // y coord
                   , {
                       'width': margins.width // max width of content on PDF
                       , 'elementHandlers': specialElementHandlers
                   },
                   function (dispose) {
// dispose: object with X, Y of the last line add to the PDF
//          this allow the insertion of new lines after html
                       pdf.save(nomArchivo + '.pdf');
                   },
                   margins
                   );
       
var cedula, nombre2, apellido, texto, nombre;

var cedula = document.getElementById("cedula").value;
var nombre2 = document.getElementById("nombre2").value;
var apellido = document.getElementById("apellido").value;
var texto = document.getElementById("texto").value;


pdf.setFontSize(22);
pdf.text(20, 140, "Prueba de archivo TXT");

pdf.setFontSize(16);
pdf.text(10, 160, "_________________________________________________________________");
pdf.text(10, 180, "Cliente");
pdf.text(20, 200, "Cedula: " + cedula);
pdf.text(180, 200, "Nombre: " + nombre2);
pdf.text(400, 200, "Apellido: " + apellido);
pdf.text(20, 260, "Texto: " + texto);
pdf.text(20, 300, "Nombre del Archivo" + nomArchivo);
getImageFromUrl("imagenes/diablo.png");
   }
        
    /*<!-- function crearPDF() {
        var valor = document.getElementById("nombre").value;        
        var pdf = new jsPDF('p', 'pt', 'letter')
        , source = $('#imprimir')[0]

        , specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true
            }
        }
        margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };

        pdf.fromHTML(
            source 
            , margins.left // x coord
            , margins.top 
            , { // y coord
                'width': margins.width, 
                'elementHandlers': specialElementHandlers
            },

            function (dispose) {
                pdf.save(valor + '.pdf');
            }, 
            margins
        )
    }-->*/
// **********************************************************************        





