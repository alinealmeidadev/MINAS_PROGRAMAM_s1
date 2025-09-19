interface Notificacao {
    id: number;
    titulo: string;
    tipo: "alerta" | "aviso" | "informacao";
    lida: boolean
}

const inbox1: Notificacao[] = [
    {
        id: 01,
        titulo: "Agendamento de prova disponível",
        tipo: "alerta",
        lida: "false"
    }
    {
        id: 02,
        titulo: "O prazo para agendamento é em 2 dias",
        tipo: "informacao",
        lida: "false"
    }
    {
        id: 03,
        titulo: "Você não agendou sua prova. Entre em contato com o suporte",
        tipo: "informação",
        lida: "false"
    }
]

function statusLeitura(notificacao: Notificacao): string {
    if (notificacao.lida === true) {
        return "Mensagem lida!"
    }
    else {
        return "você possui mensagens não lidas!"   

    }
}