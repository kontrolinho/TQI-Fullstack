// Throw, try/catch e finally

// Throw trata uma string como um erro
// Try vai testar a function/obj... e com o catch, coletar o possivel erro e comunicar, e com o finally, sempre vai retornar alguma mensagem.


function palindromo(string) {
    if (!string) throw 'String Invalida';

    return string === string.split('').reverse().join('');
}

function tryCatch(string) {
    try { // testando a funcao palindromo
        return palindromo(string)
    }
    catch(e) {      // coletando algum possivel erro
        throw e;
        //retornando uma mensagem como um erro no console web
    }
    finally {
        console.log('A string enviada foi: ' + string) 
        // se nao tiver nenhum erro, vai retornar esta mensagem
    }
}

tryCatch('');

// Usar no console do navegador.