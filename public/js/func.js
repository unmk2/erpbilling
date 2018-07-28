$(() => {
    $.post(`http://192.168.10.220:4800/get_aluno`, { id: `<%= id %>` }, (resp) => {
        console.log(resp[0]);

        $('#nome').text(resp[0].NOME);
        $('#nome_assinatura').text(resp[0].NOME);
        $('#cpf_cli').text(resp[0].CPF);
        $('#cpf').text(resp[0].CPF);
        $('#logradouro').text(resp[0].LOGRADOURO);
        $('#matricula').text(resp[0].CODEXT);
        $('#contato').text(resp[0].CONTATO1);
        $('#contato2').text(resp[0].CONTATO2);
        $('#cep').text(resp[0].CEP);


        var dtnas = resp[0].DATANASC.split('-');
        var tdn = `${dtnas[2].slice(0, 2)}/${dtnas[1]}/${dtnas[0]}`;
        setTimeout(() => {
            $('#datanas').text(tdn);
            var citi = resp[0].CIDADE;
            $.post(`http://192.168.10.220:4800/get_cidade`, { id: citi }, (res_cit) => {
                //console.log(res_cit)
                $('#cidade').text(res_cit[0].DESCRICAO);
            })
        }, 1000)
        setTimeout(() => {
            var idbairro = resp[0].BAIRRO;
            $.post(`http://192.168.10.220:4800/get_bairro`, { id: idbairro }, (res_bairro) => {
                console.log(res_bairro)
                $('#bairro').text(res_bairro[0].DESCRICAO);
                //$('#bairro').text(resp[0].BAIRRO);
            })
        }, 2000)


        $('#rg').text(resp[0].RG);
        if (resp[0].SEXO == 'M') {
            $('#sexo').text('o');
        } else {
            $('#sexo').text('a');
        }
    })
})