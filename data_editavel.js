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
    "outrasInformacoes": "No Sisp Conecta está cadastrado como \"Erik\""
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
    "nome": "Wesley André da Rosa \"Strack\"",
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
  },
  {
    "id": 10,
    "nome": "Kauã Fernandes Gil",
    "cpf": "107.988.099-22",
    "dataNascimento": "2005-01-24",
    "status": "ativo",
    "foto": "images/kaua.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 11,
    "nome": "Micheli Machado Del Canale",
    "cpf": "112.546.749-50",
    "dataNascimento": "2002-10-23",
    "status": "ativo",
    "foto": "images/micheli.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 12,
    "nome": "Lucas França Soares",
    "cpf": "146.150.859-23",
    "dataNascimento": "2007-07-04",
    "status": "ativo",
    "foto": "images/franca.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 13,
    "nome": "Izaias Martins",
    "cpf": "127.999.979-96",
    "dataNascimento": "2001-08-29",
    "status": "ativo",
    "foto": "images/izaias.jpeg",
    "outrasInformacoes": "Conduz uma Honda biz prata, placa MAW9E12.",
    "ligacoes": []
  },
  {
    "id": 14,
    "nome": "Fabricio Schafranski Gomes",
    "cpf": "130.598.939-26",
    "dataNascimento": "2007-03-29",
    "status": "ativo",
    "foto": "images/fabricio.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Larissa Schafranski",
        "tipo": "Irmão"
      }
    ]
  },
  {
    "id": 15,
    "nome": "Diego Bonfim Rodrigues",
    "cpf": "116.731.919-24",
    "dataNascimento": "2007-02-02",
    "status": "ativo",
    "foto": "images/diego_bonfim.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 16,
    "nome": "Diego Salvalaggio Rohling",
    "cpf": "058.328.589-99",
    "dataNascimento": "1990-05-28",
    "status": "ativo",
    "foto": "images/diego_salvalaggio.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 17,
    "nome": "Anderson Blasius Neves \"Triolho\"",
    "cpf": "086.884.169-23",
    "dataNascimento": "1992-12-11",
    "status": "ativo",
    "foto": "images/triolho.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 18,
    "nome": "Arthur Muriel Assunção Caldas",
    "cpf": "131.246.309-04",
    "dataNascimento": "2006-04-08",
    "status": "ativo",
    "foto": "images/arthur.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 19,
    "nome": "Larissa Schafranski Gomes",
    "cpf": "130.598.489-71",
    "dataNascimento": "2005-09-29",
    "status": "ativo",
    "foto": "images/larissa.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 20,
    "nome": "Cleide Cristiane Barth",
    "cpf": "074.051.519-57",
    "dataNascimento": "1981-12-14",
    "status": "ativo",
    "foto": "images/cleide.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Marcelo Saifa (negão)",
        "tipo": "companheiro"
      }
    ]
  },
  {
    "id": 21,
    "nome": "Leonardo André Siilveira \"Madruga\"",
    "cpf": "076.465.629-55",
    "dataNascimento": "1976-07-11",
    "status": "ativo",
    "foto": "images/madruga.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Samira",
        "tipo": "comparsa"
      }
    ]
  },
  {
    "id": 22,
    "nome": "Marcelo Saifa (Negão)",
    "cpf": "007.021.719-05",
    "dataNascimento": "1982-02-27",
    "status": "ativo",
    "foto": "images/negao.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Cleide",
        "tipo": "companheira"
      }
    ]
  },
  {
    "id": 23,
    "nome": "Salete Custodio Maria",
    "cpf": "092.625.379-48",
    "dataNascimento": "1993-09-04",
    "status": "preso",
    "foto": "images/salete.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 24,
    "nome": "Laerte Candido \"Negão\"",
    "cpf": "065.585.929-24",
    "dataNascimento": "1989-03-02",
    "status": "temporaria",
    "foto": "images/laerte.jpeg",
    "outrasInformacoes": "Saída temporária de 15 a 22/06.\n\nRestrições:\n\na) recolhimento domiciliar no período noturno das 20h às 06h durante os dias de semana, e nos finais de semana das 13h do sábado até 06h de segunda; e \n\nb) proibição de frequentar bares, casas noturnas e congêneres.",
    "ligacoes": [
      {
        "nome": "Laertinho",
        "tipo": "filho"
      }
    ]
  },
  {
    "id": 25,
    "nome": "Ricardo Kulkamp Blasius \"Gêmeos\"",
    "cpf": "",
    "dataNascimento": "2006-06-05",
    "status": "ativo",
    "foto": "images/ricardo.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "José Manoel",
        "tipo": "comparsa"
      }
    ]
  },
  {
    "id": 26,
    "nome": "Voldinei Gonçalves Neves",
    "cpf": "102.984.299-00",
    "dataNascimento": "1994-11-30",
    "status": "ativo",
    "foto": "images/voldinei.jpeg",
    "outrasInformacoes": "Mora na subida do morro da cruz.",
    "ligacoes": []
  },
  {
    "id": 27,
    "nome": "José Geraldo Rech Neto",
    "cpf": "115.715.649-50",
    "dataNascimento": "2003-03-28",
    "status": "ativo",
    "foto": "images/rech.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 28,
    "nome": "Sulamita da Silva de Oliveira",
    "cpf": "106.279.749-37",
    "dataNascimento": "1996-01-01",
    "status": "tornozeleira",
    "foto": "images/sulamita.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Rafael",
        "tipo": "companheiro"
      }
    ]
  },
  {
    "id": 29,
    "nome": "Rafael dos Santos Moraes",
    "cpf": "093.017.199-32",
    "dataNascimento": "1994-09-13",
    "status": "preso",
    "foto": "images/rafael.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Sulamita",
        "tipo": "companheira"
      }
    ]
  },
  {
    "id": 30,
    "nome": "Ederson de jesus Claudino \"Edinho\"",
    "cpf": "103.213.519-08",
    "dataNascimento": "1996-07-07",
    "status": "ativo",
    "foto": "images/edinho.jpeg",
    "outrasInformacoes": "Filho da \"Adrianinha\"",
    "ligacoes": []
  },
  {
    "id": 31,
    "nome": "Carlos Eduardo Beza Siberino",
    "cpf": "120.575.729-51",
    "dataNascimento": "2007-06-28",
    "status": "ativo",
    "foto": "images/carlos.jpeg",
    "outrasInformacoes": "Envolvido em uma ocorrência de tráfico de drogas no dia 17/06/2025. Protocolo: 10236817.\n\nDemais envolvidos: Adryan, Laertinho, Luiz Gustavo, Caroline Antunes Siberino e Maria Eduarda Rodrigues.",
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
        "nome": "Luiz Gustavo",
        "tipo": "comparsa"
      }
    ]
  },
  {
    "id": 32,
    "nome": "Caroline Antunes Siberino",
    "cpf": "135.265.819-40",
    "dataNascimento": "2003-07-19",
    "status": "ativo",
    "foto": "images/caroline.jpeg",
    "outrasInformacoes": "Envolvido em uma ocorrência de tráfico de drogas no dia 17/06/2025. Protocolo: 10236817.\n\nDemais envolvidos: Adryan, Laertinho, Luiz Gustavo, Carlos Eduardo Beza Siberino e Maria Eduarda Rodrigues.",
    "ligacoes": [
      {
        "nome": "Carlos Eduardo Beza Siberino",
        "tipo": "irmão"
      }
    ]
  },
  {
    "id": 33,
    "nome": "Maria Eduarda Rodrigues",
    "cpf": "116.423.589-32",
    "dataNascimento": "2009-10-21",
    "status": "ativo",
    "foto": "images/duda.jpeg",
    "outrasInformacoes": "Envolvido em uma ocorrência de tráfico de drogas no dia 17/06/2025. Protocolo: 10236817.\n\nDemais envolvidos: Adryan, Laertinho, Luiz Gustavo, Caroline Antunes Siberino e Caroline Antunes Siberino.",
    "ligacoes": [
      {
        "nome": "João Vitor- namorado",
        "tipo": "não especificado"
      }
    ]
  },
  {
    "id": 34,
    "nome": "Cleverson Ferreira dos Santos \"Cré\"",
    "cpf": "118.753.259-21",
    "dataNascimento": "1995-03-26",
    "status": "preso",
    "foto": "images/cre.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Bruno Abizair Farias",
        "tipo": "subordinado"
      }
    ]
  },
  {
    "id": 35,
    "nome": "Bruno Abizair Farias",
    "cpf": "097.951.959-48",
    "dataNascimento": "1991-11-30",
    "status": "preso",
    "foto": "images/bruno.jpeg",
    "outrasInformacoes": "Possuía uma caminhonete Montana rebaixada na época em que foi preso.",
    "ligacoes": [
      {
        "nome": "Cré",
        "tipo": "líder"
      }
    ]
  },
  {
    "id": 36,
    "nome": "Maria Laudite Gabriel Boing \"2 andar\"",
    "cpf": "743.642.359-20",
    "dataNascimento": "1971-04-10",
    "status": "ativo",
    "foto": "images/2andar.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 37,
    "nome": "José Manoel Morais da Silva",
    "cpf": "126.815.689-27",
    "dataNascimento": "2005-06-26",
    "status": "ativo",
    "foto": "images/josemanoel.jpeg",
    "outrasInformacoes": "",
    "ligacoes": []
  },
  {
    "id": 38,
    "nome": "Maicon Matos \"Batatinha\"",
    "cpf": "132.018.929-63",
    "dataNascimento": "2010-11-03",
    "status": "ativo",
    "foto": "images/batatinha.jpeg",
    "outrasInformacoes": "",
    "ligacoes": [
      {
        "nome": "Adryan",
        "tipo": "líder"
      },
      {
        "nome": "Laertinho",
        "tipo": "líder"
      },
      {
        "nome": "Luiz Gustavo",
        "tipo": "líder"
      }
    ]
  },
  {
    "id": 39,
    "nome": "Cintiéli Beza Bett",
    "cpf": "066.889.589-61",
    "dataNascimento": "2001-04-15",
    "status": "ativo",
    "foto": "images/cintieli.jpeg",
    "outrasInformacoes": "Reside em uma quitinete, em cima do posto \"Jeca\"",
    "ligacoes": [
      {
        "nome": "Maicon \"Batatinha\"",
        "tipo": "irmão"
      }
    ]
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