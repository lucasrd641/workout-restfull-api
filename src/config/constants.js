const mockResponses = {
    CARTOES: {
        id: 'id',
        localizacao: 'meio',
        componente: 'modal',
        icone: 'https://www.m3.prebanco.com.br/mobileImages/assets/img/ofertaContextual/cartaoSeguroProtegido.svg',
        titulo: 'Uma proteção pra lá de vantajosa!',
        subtitulo: 'Mantenha seu cartão de crédito seguro de transações não autorizadas e ainda concorra a R$ 12 mil toda semana.',
        descricao: 'SeguroSuperprotegido',
        acaoAceitar: {
            textoAcessibilidade: 'Aceitar',
            urlDestino: 'https://wwws.bradescoseguros.com.br/MOBIBradescoSegurosCelular/v2/'
                + '<tecnologia>/tagCampanhaProtecaoDigital.do?scrambled=<scrambled>&tecnologia=<tecnologia>&origem=pix',
            tipoUrlDestino: 'link externo',
        },
    }
};

module.exports = Object.freeze(mockResponses);
