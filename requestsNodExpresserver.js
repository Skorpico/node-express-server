/*.::CORALESoftware::.
Name of the proyect: 𝙉𝙤𝙙𝙚 𝙀𝙭𝙥𝙧𝙚𝙨𝙨 𝙎𝙚𝙧𝙫𝙚𝙧
Name of the archive: requestsNodExpresserver
Made by: Asdrúbal José Corales Pérez
Description: This is a project made in Node.Js, for my briefcase
License: MIT.
Contac me in: asdrubalcorales92@gmail.com
My phone number is: +58 412 4811678 */

//Funtions:
function xinit()
{
    console.log('Ha entrado en la página de inicio');
    return 'xinit';
}

function pagina1()
{
    console.log('Ha entrado en la página 01');
    return 'pagina1';
}

function pagina2()
{
    console.log('Ha entrado en la página 02');
    return 'pagina2';
}

exports.xinit = xinit;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;