// Variáveis globais
let individuos = [];
let filtroStatus = 'todos';
let termoBusca = '';

// Dados iniciais
const dadosIniciais = [
    {
        id: 1,
        nome: 'Amanda Costa Silva',
        cpf: '123.456.789-01',
        dataNascimento: '1992-08-15',
        ligacoes: [
            { nome: 'Carlos Oliveira Santos', tipo: 'parceiro' },
            { nome: 'Grupo Beta', tipo: 'negociadora' }
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
            { nome: 'João da Silva Santos', tipo: 'subordinada' },
            { nome: 'Rafael Pereira Oliveira', tipo: 'colega' }
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
            { nome: 'Maria Souza Santos', tipo: 'parceira' },
            { nome: 'Banco Offshore', tipo: 'contato' }
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
            { nome: 'Pedro Santos Silva', tipo: 'fornecedor' },
            { nome: 'Diego Alves Ferreira', tipo: 'motorista' }
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
            { nome: 'Carlos Oliveira Santos', tipo: 'parceiro' },
            { nome: 'Fornecedores Externos', tipo: 'contato' }
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
            { nome: 'Pedro Santos Silva', tipo: 'subordinada' },
            { nome: 'Gustavo Rocha Silva', tipo: 'cliente' }
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
            { nome: 'Fernanda Lima Costa', tipo: 'fornecedora' },
            { nome: 'Patrícia Mendes Costa', tipo: 'recrutadora' }
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
            { nome: 'Maria Souza Santos', tipo: 'comparsa' },
            { nome: 'Pedro Santos Silva', tipo: 'fornecedor' },
            { nome: 'Grupo Alfa', tipo: 'líder' }
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
            { nome: 'Roberto Gomes Silva', tipo: 'protetor' },
            { nome: 'Polícia', tipo: 'informante dupla' }
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
            { nome: 'Roberto Gomes Silva', tipo: 'parceiro' },
            { nome: 'Fornecedores de Armas', tipo: 'contato' }
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
            { nome: 'João da Silva Santos', tipo: 'comparsa' },
            { nome: 'Camila Santos Oliveira', tipo: 'parceira' }
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
            { nome: 'Gustavo Rocha Silva', tipo: 'recrutado' },
            { nome: 'Ana Costa Pereira', tipo: 'recrutada' }
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
            { nome: 'João da Silva Santos', tipo: 'fornecedor' },
            { nome: 'Fernanda Lima Costa', tipo: 'subordinada' }
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
            { nome: 'Ana Costa Pereira', tipo: 'colega' },
            { nome: 'Roberto Gomes Silva', tipo: 'informante' }
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
            { nome: 'Lucas Oliveira Pereira', tipo: 'parceiro' },
            { nome: 'Juliana Ferreira Lima', tipo: 'protegida' }
        ],
        status: 'ativo',
        foto: 'images/roberto_seguranca.jpg',
        outrasInformacoes: 'Ex-policial militar, responsável pela segurança do grupo e intimidação.'
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarDados();
    configurarEventListeners();
    renderizarOrganograma();
});

// Configurar event listeners
function configurarEventListeners() {
    // Botões principais
    document.getElementById('addIndividual').addEventListener('click', abrirModalAdicionar);
    document.getElementById('exportData').addEventListener('click', exportarDados);
    document.getElementById('importData').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });
    
    // Filtros
    document.getElementById('filterStatus').addEventListener('change', (e) => {
        filtroStatus = e.target.value;
        renderizarOrganograma();
    });
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        termoBusca = e.target.value.toLowerCase();
        renderizarOrganograma();
    });
    
    // Import file
    document.getElementById('file-input').addEventListener('change', importarDados);
    
    // Modais
    document.querySelectorAll('.close-btn, #cancel-edit, #close-details').forEach(btn => {
        btn.addEventListener('click', fecharModais);
    });
    
    // Botões do modal de edição
    document.getElementById('save-changes').addEventListener('click', salvarIndividuo);
    document.getElementById('delete-individual').addEventListener('click', excluirIndividuo);
    document.getElementById('edit-from-details').addEventListener('click', editarFromDetails);
    
    // Clique fora do modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                fecharModais();
            }
        });
    });
}

// Carregar dados do localStorage
function carregarDados() {
    const dadosSalvos = localStorage.getItem('organogramaIndividuos');
    if (dadosSalvos) {
        individuos = JSON.parse(dadosSalvos);
    } else {
        individuos = dadosIniciais.slice();
        salvarDados();
    }
}

// Salvar dados no localStorage
function salvarDados() {
    localStorage.setItem('organogramaIndividuos', JSON.stringify(individuos));
    mostrarIndicadorSalvamento();
}

// Mostrar indicador de salvamento
function mostrarIndicadorSalvamento() {
    // Criar indicador se não existir
    let indicator = document.getElementById('saveIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'saveIndicator';
        indicator.className = 'save-indicator';
        indicator.textContent = '✓ Dados salvos automaticamente';
        document.body.appendChild(indicator);
    }
    
    indicator.classList.add('show');
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}

// Calcular idade
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

// Renderizar organograma
function renderizarOrganograma() {
    const container = document.getElementById('organograma-container');
    
    // Filtrar indivíduos
    let individuosFiltrados = individuos.filter(individuo => {
        const matchStatus = filtroStatus === 'todos' || individuo.status === filtroStatus;
        const matchBusca = termoBusca === '' || 
            individuo.nome.toLowerCase().includes(termoBusca) ||
            (individuo.cpf && individuo.cpf.includes(termoBusca));
        
        return matchStatus && matchBusca;
    });
    
    // Ordenar alfabeticamente
    individuosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
    
    // Gerar HTML
    container.innerHTML = individuosFiltrados.map(individuo => {
        const idade = calcularIdade(individuo.dataNascimento);
        const statusClass = individuo.status.replace(/\s+/g, '-').toLowerCase();
        
        return `
            <div class="individual-card status-${statusClass}" onclick="abrirModalDetalhes(${individuo.id})">
                <div class="photo-container">
                    <img src="${individuo.foto}" alt="${individuo.nome}" onerror="this.src='images/default.jpg'">
                </div>
                <div class="card-info">
                    <h3 class="individual-name">${individuo.nome}</h3>
                    <span class="status-badge ${statusClass}">${individuo.status}</span>
                    <div class="individual-age">${idade} anos</div>
                </div>
                <button class="card-edit-btn" onclick="event.stopPropagation(); abrirModalEdicao(${individuo.id})" title="Editar">
                    ✏️
                </button>
            </div>
        `;
    }).join('');
}

// Abrir modal de detalhes
function abrirModalDetalhes(id) {
    const individuo = individuos.find(i => i.id === id);
    if (!individuo) return;
    
    const idade = calcularIdade(individuo.dataNascimento);
    const statusClass = individuo.status.replace(/\s+/g, '-').toLowerCase();
    
    // Preencher modal de detalhes
    document.getElementById('details-nome').textContent = individuo.nome;
    document.getElementById('details-foto').src = individuo.foto;
    document.getElementById('details-cpf').textContent = individuo.cpf || 'Não informado';
    document.getElementById('details-idade').textContent = idade;
    
    const statusBadge = document.getElementById('details-status');
    statusBadge.textContent = individuo.status;
    statusBadge.className = `status-badge ${statusClass}`;
    
    // Processar ligações
    const ligacoesContainer = document.getElementById('details-ligacoes');
    if (individuo.ligacoes && individuo.ligacoes.length > 0) {
        ligacoesContainer.innerHTML = individuo.ligacoes.map(ligacao => 
            `<div class="ligacao-item">${ligacao.nome} <em>(${ligacao.tipo})</em></div>`
        ).join('');
    } else {
        ligacoesContainer.innerHTML = '<div class="ligacao-item">Nenhuma ligação registrada</div>';
    }
    
    document.getElementById('details-outras-info').textContent = individuo.outrasInformacoes || 'Nenhuma informação adicional';
    
    // Configurar botão de edição
    document.getElementById('edit-from-details').onclick = () => {
        fecharModais();
        abrirModalEdicao(id);
    };
    
    document.getElementById('details-modal').classList.remove('hidden');
}

// Abrir modal de edição
function abrirModalEdicao(id = null) {
    const isEdicao = id !== null;
    const individuo = isEdicao ? individuos.find(i => i.id === id) : {};
    
    // Preencher formulário
    document.getElementById('edit-nome').value = individuo.nome || '';
    document.getElementById('edit-cpf').value = individuo.cpf || '';
    document.getElementById('edit-dataNascimento').value = individuo.dataNascimento || '';
    document.getElementById('edit-status').value = individuo.status || 'ativo';
    document.getElementById('edit-foto').value = individuo.foto || 'images/default.jpg';
    document.getElementById('edit-outrasInformacoes').value = individuo.outrasInformacoes || '';
    
    // Ligações
    const ligacoesText = individuo.ligacoes ? 
        individuo.ligacoes.map(l => `${l.nome} - ${l.tipo}`).join('\n') : '';
    document.getElementById('edit-ligacoes').value = ligacoesText;
    
    // Configurar botões
    const deleteBtn = document.getElementById('delete-individual');
    deleteBtn.style.display = isEdicao ? 'inline-block' : 'none';
    
    // Armazenar ID para uso posterior
    document.getElementById('edit-modal').dataset.editingId = id || '';
    
    document.getElementById('edit-modal').classList.remove('hidden');
}

// Abrir modal de adição
function abrirModalAdicionar() {
    abrirModalEdicao(null);
}

// Editar a partir do modal de detalhes
function editarFromDetails() {
    const detailsModal = document.getElementById('details-modal');
    const nome = document.getElementById('details-nome').textContent;
    const individuo = individuos.find(i => i.nome === nome);
    if (individuo) {
        fecharModais();
        abrirModalEdicao(individuo.id);
    }
}

// Salvar indivíduo
function salvarIndividuo() {
    const id = document.getElementById('edit-modal').dataset.editingId;
    const nome = document.getElementById('edit-nome').value.trim();
    const cpf = document.getElementById('edit-cpf').value.trim();
    const dataNascimento = document.getElementById('edit-dataNascimento').value;
    const status = document.getElementById('edit-status').value;
    const foto = document.getElementById('edit-foto').value.trim();
    const outrasInformacoes = document.getElementById('edit-outrasInformacoes').value.trim();
    const ligacoesText = document.getElementById('edit-ligacoes').value.trim();
    
    if (!nome) {
        alert('Nome é obrigatório!');
        return;
    }
    
    // Processar ligações
    const ligacoes = ligacoesText ? 
        ligacoesText.split('\n').map(linha => {
            const partes = linha.split(' - ');
            return {
                nome: partes[0]?.trim() || '',
                tipo: partes[1]?.trim() || 'não especificado'
            };
        }).filter(l => l.nome) : [];
    
    const dadosIndividuo = {
        nome,
        cpf,
        dataNascimento,
        status,
        foto: foto || 'images/default.jpg',
        outrasInformacoes,
        ligacoes
    };
    
    if (id) {
        // Editar existente
        const index = individuos.findIndex(i => i.id === parseInt(id));
        if (index !== -1) {
            individuos[index] = { ...individuos[index], ...dadosIndividuo };
        }
    } else {
        // Adicionar novo
        const novoId = Math.max(...individuos.map(i => i.id), 0) + 1;
        individuos.push({ id: novoId, ...dadosIndividuo });
    }
    
    salvarDados();
    renderizarOrganograma();
    fecharModais();
}

// Excluir indivíduo
function excluirIndividuo() {
    const id = document.getElementById('edit-modal').dataset.editingId;
    if (id && confirm('Tem certeza que deseja excluir este indivíduo?')) {
        individuos = individuos.filter(i => i.id !== parseInt(id));
        salvarDados();
        renderizarOrganograma();
        fecharModais();
    }
}

// Fechar modais
function fecharModais() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}

// Exportar dados
function exportarDados() {
    const dataStr = JSON.stringify(individuos, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `organograma_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Importar dados
function importarDados(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const dadosImportados = JSON.parse(e.target.result);
            if (Array.isArray(dadosImportados)) {
                individuos = dadosImportados;
                salvarDados();
                renderizarOrganograma();
                alert('Dados importados com sucesso!');
            } else {
                alert('Formato de arquivo inválido!');
            }
        } catch (error) {
            alert('Erro ao importar arquivo: ' + error.message);
        }
    };
    reader.readAsText(file);
    
    // Limpar input
    event.target.value = '';
}

// Máscara para CPF
document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('edit-cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }
});

