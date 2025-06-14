// Variáveis globais
// 'individuosData' é definida em data_editavel.js e será a nossa única fonte de dados
let filtroStatus = 'todos';
let termoBusca = '';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Chama a função carregarDados definida em data_editavel.js
    carregarDados();
    configurarEventListeners();
    renderizarOrganograma();
});

// Configurar event listeners
function configurarEventListeners() {
    // Botões principais
    document.getElementById('addIndividual').addEventListener('click', abrirModalAdicionar);
    document.getElementById('exportData').addEventListener('click', exportarDados); // exportarDados é global de data_editavel.js
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
    document.getElementById('file-input').addEventListener('change', importarDados); // importarDados é global de data_editavel.js
    
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

// Renderizar organograma
function renderizarOrganograma() {
    const container = document.getElementById('organograma-container');
    
    // Filtrar indivíduos usando individuosData
    let individuosFiltrados = individuosData.filter(individuo => { // Usa individuosData
        const matchStatus = filtroStatus === 'todos' || individuo.status === filtroStatus;
        const matchBusca = termoBusca === '' || 
            individuo.nome.toLowerCase().includes(termoBusca) ||
            (individuo.cpf && individuo.cpf.includes(termoBusca)) ||
            (individuo.outrasInformacoes && individuo.outrasInformacoes.toLowerCase().includes(termoBusca)); // Adicionado busca por 'outrasInformacoes'
        
        return matchStatus && matchBusca;
    });
    
    // Ordenar alfabeticamente
    individuosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
    
    // Gerar HTML
    container.innerHTML = individuosFiltrados.map(individuo => {
        const idade = calcularIdade(individuo.dataNascimento); // calcularIdade é global de data_editavel.js
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
    const individuo = individuosData.find(i => i.id === id); // Usa individuosData
    if (!individuo) return;
    
    const idade = calcularIdade(individuo.dataNascimento); // calcularIdade é global de data_editavel.js
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
    const individuo = isEdicao ? individuosData.find(i => i.id === id) : {}; // Usa individuosData
    
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
    const individuo = individuosData.find(i => i.nome === nome); // Usa individuosData
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
        const index = individuosData.findIndex(i => i.id === parseInt(id)); // Usa individuosData
        if (index !== -1) {
            individuosData[index] = { ...individuosData[index], ...dadosIndividuo }; // Usa individuosData
        }
    } else {
        // Adicionar novo
        // O gerarNovoId() é global de data_editavel.js
        const novoId = gerarNovoId();
        individuosData.push({ id: novoId, ...dadosIndividuo }); // Usa individuosData
    }
    
    salvarDados(); // Chama a função salvarDados de data_editavel.js
    renderizarOrganograma();
    fecharModais();
}

// Excluir indivíduo
function excluirIndividuo() {
    const id = document.getElementById('edit-modal').dataset.editingId;
    if (id && confirm('Tem certeza que deseja excluir este indivíduo?')) {
        // Usa a função removerIndividuo de data_editavel.js
        removerIndividuo(parseInt(id));
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
function exportarDados() { // Esta função deve ser removida daqui e usada a de data_editavel.js
    // A função exportarDados original já está em data_editavel.js e é global.
    // Manter esta aqui é redundante. A chamada no event listener já aponta para a global.
    // Removendo este corpo de função...
    // const dataStr = JSON.stringify(individuosData, null, 2); // Usa individuosData
    // const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(dataBlob);
    // link.download = `organograma_${new Date().toISOString().split('T')[0]}.json`;
    // link.click();
}

// Importar dados
function importarDados(event) { // Esta função deve ser removida daqui e usada a de data_editavel.js
    // A função importarDados original já está em data_editavel.js e é global.
    // Manter esta aqui é redundante. A chamada no event listener já aponta para a global.
    // Removendo este corpo de função...
    // const file = event.target.files[0];
    // if (!file) return;
    
    // const reader = new FileReader();
    // reader.onload = function(e) {
    //     try {
    //         const dadosImportados = JSON.parse(e.target.result);
    //         if (Array.isArray(dadosImportados)) {
    //             individuosData = dadosImportados; // Usa individuosData
    //             salvarDados(); // Chama a função salvarDados de data_editavel.js
    //             renderizarOrganograma();
    //             alert('Dados importados com sucesso!');
    //         } else {
    //             alert('Formato de arquivo inválido!');
    //         }
    //     } catch (error) {
    //         alert('Erro ao importar arquivo: ' + error.message);
    //     }
    // };
    // reader.readAsText(file);
    
    // Limpar input
    // event.target.value = '';
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