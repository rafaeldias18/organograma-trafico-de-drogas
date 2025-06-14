// Variáveis globais
let individuos = [];
let filtroStatus = 'todos';
let termoBusca = '';

// Dados iniciais
const dadosIniciais = [
  {
    "id": 1,
    "nome": "Adryan Gustavo Sandoval de Jesus",
    "cpf": "141.387.089-95",
    "dataNascimento": "2008-09-15",
    "ligacoes": [
      {
        "nome": "Laertinho",
        "tipo": "comparsa"
      },
      {
        "nome": "Luiz Gustavo",
        "tipo": "comparsa"
      },
      {
        "nome": "França",
        "tipo": "comparsa"
      }
    ],
    "status": "ativo",
    "foto": "images/adryan.jpeg",
    "outrasInformacoes": ""
  },
  {
    "id": 2,
    "nome": "Luiz Gustavo Corrêa",
    "cpf": "129.923.889-04",
    "dataNascimento": "2009-07-27",
    "ligacoes": [
      {
        "nome": "Adryan",
        "tipo": "comparsa"
      },
      {
        "nome": "Laertinho",
        "tipo": "comparsa"
      },
      {
        "nome": "França",
        "tipo": "comparsa"
      }
    ],
    "status": "ativo",
    "foto": "images/luiz gustavo.jpeg",
    "outrasInformacoes": ""
  },
  {
    "id": 3,
    "nome": "Laerte Candido Júnior",
    "cpf": "100.863.189-26",
    "dataNascimento": "2010-06-26",
    "ligacoes": [
      {
        "nome": "Adryan",
        "tipo": "comparsa"
      },
      {
        "nome": "Luiz Gustavo",
        "tipo": "comparsa"
      },
      {
        "nome": "França",
        "tipo": "comparsa"
      }
    ],
    "status": "ativo",
    "foto": "images/laertinho.jpeg",
    "outrasInformacoes": ""
  },
  {
    "id": 4,
    "nome": "Gabriel Henrique Sandoval de Jesus",
    "cpf": "132.391.689-01",
    "dataNascimento": "2004-09-14",
    "ligacoes": [
      {
        "nome": "Adryan",
        "tipo": "irmão"
      }
    ],
    "status": "tornozeleira",
    "foto": "images/gabriel.jpeg",
    "outrasInformacoes": ""
  },
  {
    "id": 5,
    "nome": "Erick Corrêa de Freitas",
    "cpf": "129.923.719-39",
    "dataNascimento": "2007-08-07",
    "ligacoes": [
      {
        "nome": "Bridinei",
        "tipo": "namorada"
      }
    ],
    "status": "ativo",
    "foto": "images/erick.jpeg",
    "outrasInformacoes": ""
  },
  {
    "id": 6,
    "nome": "Bridinei Llarrana Sandoval Stefani",
    "cpf": "110.082.289-58",
    "dataNascimento": "2008-03-06",
    "ligacoes": [
      {
        "nome": "Erick",
        "tipo": "namorado"
      }
    ],
    "status": "ativo",
    "foto": "images/bridinei.jpeg",
    "outrasInformacoes": ""
  },
  {
    "id": 7,
    "nome": "Wesley André da Rosa",
    "cpf": "114.026.949-62",
    "dataNascimento": "2011-02-22",
    "ligacoes": [
      {
        "nome": "Luiz Gustavo",
        "tipo": "comparsa"
      }
    ],
    "status": "ativo",
    "foto": "images/wesley.jpeg",
    "outrasInformacoes": "conhecido como \"strack\""
  },
  {
    "id": 8,
    "nome": "João Antônio da Silva de Jesus",
    "cpf": "157.247.339-86",
    "dataNascimento": "2007-07-03",
    "status": "ativo",
    "foto": "images/joao antonio.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 9,
    "nome": "João Vitor Candido Appel",
    "cpf": "098.963.389-65",
    "dataNascimento": "2005-05-29",
    "status": "ativo",
    "foto": "images/joao vitor.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Michele",
        "tipo": "namorada"
      }
    ]
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

