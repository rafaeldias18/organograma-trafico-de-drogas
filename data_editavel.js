// Dados dos indivíduos - Estrutura editável
let individuosData = [
    {
        id: 1,
        nome: 'Amanda Costa Silva',
        cpf: '123.456.789-01',
        dataNascimento: '1992-08-15',
        ligacoes: [
            { alvo: 'Carlos Oliveira Santos', tipo: 'parceiro' },
            { alvo: 'Grupo Beta', tipo: 'negociadora' }
        ],
        status: 'ativo',
        foto: 'images/amanda_negociadora.jpg',
        outrasInformacoes: 'Responsável por negociar preços e territórios.'
    },
    {
        id: 2,
        nome: 'Ana Costa Pereira',
        cpf: '234.567.890-12',
        dataNascimento: '1998-12-03',
        ligacoes: [
            { alvo: 'João da Silva Santos', tipo: 'subordinada' },
            { alvo: 'Rafael Pereira Oliveira', tipo: 'colega' }
        ],
        status: 'ativo',
        foto: 'images/ana_novata.jpg',
        outrasInformacoes: 'Recém-chegada ao grupo, ainda em período de observação.'
    },
    {
        id: 3,
        nome: 'Camila Santos Oliveira',
        cpf: '345.678.901-23',
        dataNascimento: '1987-04-22',
        ligacoes: [
            { alvo: 'Maria Souza Santos', tipo: 'parceira' },
            { alvo: 'Banco Offshore', tipo: 'contato' }
        ],
        status: 'ativo',
        foto: 'images/camila_lavadora.jpg',
        outrasInformacoes: 'Especialista em lavagem de dinheiro através de empresas de fachada.'
    },
    {
        id: 4,
        nome: 'Carlos Oliveira Santos',
        cpf: '456.789.012-34',
        dataNascimento: '1985-11-08',
        ligacoes: [
            { alvo: 'Pedro Santos Silva', tipo: 'fornecedor' },
            { alvo: 'Diego Alves Ferreira', tipo: 'motorista' }
        ],
        status: 'ativo',
        foto: 'images/carlos_entregador.jpg',
        outrasInformacoes: 'Responsável pela distribuição na região sul da cidade.'
    },
    {
        id: 5,
        nome: 'Diego Alves Ferreira',
        cpf: '567.890.123-45',
        dataNascimento: '1990-07-14',
        ligacoes: [
            { alvo: 'Carlos Oliveira Santos', tipo: 'parceiro' },
            { alvo: 'Fornecedores Externos', tipo: 'contato' }
        ],
        status: 'ativo',
        foto: 'images/diego_piloto.jpg',
        outrasInformacoes: 'Piloto de aeronaves pequenas, usado para transporte de cargas.'
    },
    {
        id: 6,
        nome: 'Fernanda Lima Costa',
        cpf: '678.901.234-56',
        dataNascimento: '1993-02-28',
        ligacoes: [
            { alvo: 'Pedro Santos Silva', tipo: 'subordinada' },
            { alvo: 'Gustavo Rocha Silva', tipo: 'cliente' }
        ],
        status: 'preso',
        foto: 'images/fernanda_fornecedora.jpg',
        outrasInformacoes: 'Fornecedora de pequenas quantidades para usuários locais.'
    },
    {
        id: 7,
        nome: 'Gustavo Rocha Silva',
        cpf: '789.012.345-67',
        dataNascimento: '1995-09-12',
        ligacoes: [
            { alvo: 'Fernanda Lima Costa', tipo: 'fornecedora' },
            { alvo: 'Patrícia Mendes Costa', tipo: 'recrutadora' }
        ],
        status: 'ativo',
        foto: 'images/gustavo_viciado.jpg',
        outrasInformacoes: 'Usuário que também atua como informante e pequeno distribuidor.'
    },
    {
        id: 8,
        nome: 'João da Silva Santos',
        cpf: '890.123.456-78',
        dataNascimento: '1980-03-15',
        ligacoes: [
            { alvo: 'Maria Souza Santos', tipo: 'comparsa' },
            { alvo: 'Pedro Santos Silva', tipo: 'fornecedor' },
            { alvo: 'Grupo Alfa', tipo: 'líder' }
        ],
        status: 'ativo',
        foto: 'images/joao_chefao.jpg',
        outrasInformacoes: 'Conhecido por sua liderança e por controlar a distribuição na região central.'
    },
    {
        id: 9,
        nome: 'Juliana Ferreira Lima',
        cpf: '901.234.567-89',
        dataNascimento: '1991-06-30',
        ligacoes: [
            { alvo: 'Roberto Gomes Silva', tipo: 'protetor' },
            { alvo: 'Polícia', tipo: 'informante dupla' }
        ],
        status: 'ativo',
        foto: 'images/juliana_informante.jpg',
        outrasInformacoes: 'Suspeita de ser informante dupla, fornecendo informações para ambos os lados.'
    },
    {
        id: 10,
        nome: 'Lucas Oliveira Pereira',
        cpf: '012.345.678-90',
        dataNascimento: '1988-01-25',
        ligacoes: [
            { alvo: 'Roberto Gomes Silva', tipo: 'parceiro' },
            { alvo: 'Fornecedores de Armas', tipo: 'contato' }
        ],
        status: 'tornozeleira',
        foto: 'images/lucas_armeiro.jpg',
        outrasInformacoes: 'Responsável pelo fornecimento e manutenção de armamentos do grupo.'
    },
    {
        id: 11,
        nome: 'Maria Souza Santos',
        cpf: '123.456.789-02',
        dataNascimento: '1983-05-20',
        ligacoes: [
            { alvo: 'João da Silva Santos', tipo: 'comparsa' },
            { alvo: 'Camila Santos Oliveira', tipo: 'parceira' }
        ],
        status: 'ativo',
        foto: 'images/maria_contadora.jpg',
        outrasInformacoes: 'Responsável pela contabilidade e gestão financeira do grupo.'
    },
    {
        id: 12,
        nome: 'Patrícia Mendes Costa',
        cpf: '234.567.890-13',
        dataNascimento: '1989-10-18',
        ligacoes: [
            { alvo: 'Gustavo Rocha Silva', tipo: 'recrutado' },
            { alvo: 'Ana Costa Pereira', tipo: 'recrutada' }
        ],
        status: 'ativo',
        foto: 'images/patricia_recrutadora.jpg',
        outrasInformacoes: 'Especialista em recrutar novos membros, especialmente jovens universitários.'
    },
    {
        id: 13,
        nome: 'Pedro Santos Silva',
        cpf: '345.678.901-24',
        dataNascimento: '1982-12-07',
        ligacoes: [
            { alvo: 'João da Silva Santos', tipo: 'fornecedor' },
            { alvo: 'Fernanda Lima Costa', tipo: 'subordinada' }
        ],
        status: 'ativo',
        foto: 'images/pedro_quimico.jpg',
        outrasInformacoes: 'Químico formado, responsável pelo refino e produção de drogas sintéticas.'
    },
    {
        id: 14,
        nome: 'Rafael Pereira Oliveira',
        cpf: '456.789.012-35',
        dataNascimento: '1994-04-11',
        ligacoes: [
            { alvo: 'Ana Costa Pereira', tipo: 'colega' },
            { alvo: 'Roberto Gomes Silva', tipo: 'informante' }
        ],
        status: 'ativo',
        foto: 'images/rafael_olheiro.jpg',
        outrasInformacoes: 'Responsável pela vigilância e monitoramento de atividades policiais.'
    },
    {
        id: 15,
        nome: 'Roberto Gomes Silva',
        cpf: '567.890.123-46',
        dataNascimento: '1986-08-03',
        ligacoes: [
            { alvo: 'Lucas Oliveira Pereira', tipo: 'parceiro' },
            { alvo: 'Juliana Ferreira Lima', tipo: 'protegida' }
        ],
        status: 'ativo',
        foto: 'images/roberto_seguranca.jpg',
        outrasInformacoes: 'Ex-policial militar, responsável pela segurança do grupo e intimidação.'
    }
];

// Função para calcular idade
function calcularIdade(dataNascimento) {
    if (!dataNascimento) return 'N/A';
    
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    
    return idade;
}

// Função para salvar dados no localStorage
function salvarDados() {
    try {
        localStorage.setItem('organograma_dados', JSON.stringify(individuosData));
        mostrarIndicadorSalvamento();
        return true;
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        return false;
    }
}

// Função para carregar dados do localStorage
function carregarDados() {
    try {
        const dadosSalvos = localStorage.getItem('organograma_dados');
        if (dadosSalvos) {
            individuosData = JSON.parse(dadosSalvos);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return false;
    }
}

// Função para mostrar indicador de salvamento
function mostrarIndicadorSalvamento() {
    let indicador = document.getElementById('save-indicator');
    if (!indicador) {
        indicador = document.createElement('div');
        indicador.id = 'save-indicator';
        indicador.className = 'save-indicator';
        indicador.textContent = '✓ Dados salvos automaticamente';
        document.body.appendChild(indicador);
    }
    
    indicador.classList.add('show');
    setTimeout(() => {
        indicador.classList.remove('show');
    }, 2000);
}

// Função para gerar novo ID único
function gerarNovoId() {
    const ids = individuosData.map(ind => ind.id);
    return Math.max(...ids, 0) + 1;
}

// Função para adicionar novo indivíduo
function adicionarNovoIndividuo() {
    const novoIndividuo = {
        id: gerarNovoId(),
        nome: 'Novo Indivíduo',
        cpf: '',
        dataNascimento: '',
        ligacoes: [],
        status: 'ativo',
        foto: 'images/default.jpg',
        outrasInformacoes: ''
    };
    
    individuosData.push(novoIndividuo);
    salvarDados();
    return novoIndividuo;
}

// Função para remover indivíduo
function removerIndividuo(id) {
    const index = individuosData.findIndex(ind => ind.id === id);
    if (index !== -1) {
        individuosData.splice(index, 1);
        salvarDados();
        return true;
    }
    return false;
}

// Função para atualizar indivíduo
function atualizarIndividuo(id, dadosAtualizados) {
    const index = individuosData.findIndex(ind => ind.id === id);
    if (index !== -1) {
        individuosData[index] = { ...individuosData[index], ...dadosAtualizados };
        salvarDados();
        return true;
    }
    return false;
}

// Função para exportar dados
function exportarDados() {
    const dataStr = JSON.stringify(individuosData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `organograma_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Função para importar dados
function importarDados(arquivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const dadosImportados = JSON.parse(e.target.result);
                if (Array.isArray(dadosImportados)) {
                    individuosData = dadosImportados;
                    salvarDados();
                    resolve(true);
                } else {
                    reject(new Error('Formato de arquivo inválido'));
                }
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsText(arquivo);
    });
}

// Carregar dados salvos ao inicializar
document.addEventListener('DOMContentLoaded', function() {
    carregarDados();
});

