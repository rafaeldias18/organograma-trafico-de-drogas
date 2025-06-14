// Dados dos indivíduos - Estrutura editável
let individuosData = [
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
    "outrasInformacoes": ""
  },
  {
    "id": 8,
    "nome": "João da Silva Santos",
    "cpf": "890.123.456-78",
    "dataNascimento": "1980-03-15",
    "ligacoes": [
      {
        "nome": "Maria Souza Santos",
        "tipo": "comparsa"
      },
      {
        "nome": "Pedro Santos Silva",
        "tipo": "fornecedor"
      },
      {
        "nome": "Grupo Alfa",
        "tipo": "líder"
      }
    ],
    "status": "ativo",
    "foto": "images/joao_chefao.jpg",
    "outrasInformacoes": "Conhecido por sua liderança e por controlar a distribuição na região central."
  },
  {
    "id": 9,
    "nome": "Juliana Ferreira Lima",
    "cpf": "901.234.567-89",
    "dataNascimento": "1991-06-30",
    "ligacoes": [
      {
        "nome": "Roberto Gomes Silva",
        "tipo": "protetor"
      },
      {
        "nome": "Polícia",
        "tipo": "informante dupla"
      }
    ],
    "status": "ativo",
    "foto": "images/juliana_informante.jpg",
    "outrasInformacoes": "Suspeita de ser informante dupla, fornecendo informações para ambos os lados."
  },
  {
    "id": 10,
    "nome": "Lucas Oliveira Pereira",
    "cpf": "012.345.678-90",
    "dataNascimento": "1988-01-25",
    "ligacoes": [
      {
        "nome": "Roberto Gomes Silva",
        "tipo": "parceiro"
      },
      {
        "nome": "Fornecedores de Armas",
        "tipo": "contato"
      }
    ],
    "status": "prisão domiciliar",
    "foto": "images/lucas_armeiro.jpg",
    "outrasInformacoes": "Responsável pelo fornecimento e manutenção de armamentos do grupo."
  },
  {
    "id": 11,
    "nome": "Maria Souza Santos",
    "cpf": "123.456.789-02",
    "dataNascimento": "1983-05-20",
    "ligacoes": [
      {
        "nome": "João da Silva Santos",
        "tipo": "comparsa"
      },
      {
        "nome": "Camila Santos Oliveira",
        "tipo": "parceira"
      }
    ],
    "status": "ativo",
    "foto": "images/maria_contadora.jpg",
    "outrasInformacoes": "Responsável pela contabilidade e gestão financeira do grupo."
  },
  {
    "id": 12,
    "nome": "Patrícia Mendes Costa",
    "cpf": "234.567.890-13",
    "dataNascimento": "1989-10-18",
    "ligacoes": [
      {
        "nome": "Gustavo Rocha Silva",
        "tipo": "recrutado"
      },
      {
        "nome": "Ana Costa Pereira",
        "tipo": "recrutada"
      }
    ],
    "status": "ativo",
    "foto": "images/patricia_recrutadora.jpg",
    "outrasInformacoes": "Especialista em recrutar novos membros, especialmente jovens universitários."
  },
  {
    "id": 13,
    "nome": "Pedro Santos Silva",
    "cpf": "345.678.901-24",
    "dataNascimento": "1982-12-07",
    "ligacoes": [
      {
        "nome": "João da Silva Santos",
        "tipo": "fornecedor"
      },
      {
        "nome": "Fernanda Lima Costa",
        "tipo": "subordinada"
      }
    ],
    "status": "ativo",
    "foto": "images/pedro_quimico.jpg",
    "outrasInformacoes": "Químico formado, responsável pelo refino e produção de drogas sintéticas."
  },
  {
    "id": 14,
    "nome": "Rafael Pereira Oliveira",
    "cpf": "456.789.012-35",
    "dataNascimento": "1994-04-11",
    "ligacoes": [
      {
        "nome": "Ana Costa Pereira",
        "tipo": "colega"
      },
      {
        "nome": "Roberto Gomes Silva",
        "tipo": "informante"
      }
    ],
    "status": "ativo",
    "foto": "images/rafael_olheiro.jpg",
    "outrasInformacoes": "Responsável pela vigilância e monitoramento de atividades policiais."
  },
  {
    "id": 15,
    "nome": "Roberto Gomes Silva",
    "cpf": "567.890.123-46",
    "dataNascimento": "1986-08-03",
    "ligacoes": [
      {
        "nome": "Lucas Oliveira Pereira",
        "tipo": "parceiro"
      },
      {
        "nome": "Juliana Ferreira Lima",
        "tipo": "protegida"
      }
    ],
    "status": "ativo",
    "foto": "images/roberto_seguranca.jpg",
    "outrasInformacoes": "Ex-policial militar, responsável pela segurança do grupo e intimidação."
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

