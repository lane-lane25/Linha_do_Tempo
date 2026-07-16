// LÓGICA PARA MUDAR DE PÁGINA
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    // Adiciona uma animação de fade out na tela de entrada
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.display = 'block';
        renderTimeline(); // Inicia a renderização das memórias
    }, 800);
});

// Todas as memórias do seu caderno organizadas e com descrições carinhosas
const memorias = [
            { date: "23/02", title: "Nossa 1ª Conversa 💬", desc: "O dia em que devolver um livro através do Heitor, mudou tudo de uma forma maravilhosa e silenciosa." },
            { date: "24/02", title: "O Empréstimo do Livro 📚", desc: "Um pretexto perfeito para eu poder te emprestar o meu livro favorito." },
            { date: "02/03", title: "Troca de Figurinhas 🥰", desc: "Uma das minhas maiores desculpas para ter assunto com você." },
            { date: "09/03", title: "A Dica de Filme 🎬", desc: "Recomendei que assistisse Orgulho e Preconceito... como sempre, eu estava jogando um 'verde'." },
            { date: "10/03", title: "O Pedido de Desculpas 🙏", desc: "O seu cuidado e o carinho se mostrando presentes desde o começo da nossa amizade." },
            { date: "11/03", title: "Seu Aniversário 🎂", desc: "O dia do seu aniversário! E para melhorar, o dia que vc copiou a minha tarefa de história KSSKSKSKKSKSKSKSKS" },
            { date: "13/03", title: "A 1ª Lista de Músicas 🎵", desc: "Desde aquele dia, não consegui mais ouvir um MPB sem pensar em você." },
            { date: "14/03", title: "Canal do Minecraft📹", desc: "O dia em ouvi a voz mais doce desse mundo, a voz do mini Victor." },
            { date: "16/03", title: "1° dia que você faltou ✨", desc: "Orei pela cirurgia da sua mãe. O meu coração já se preocupava com você sem nem perceber." },
            { date: "17/03", title: "2ª Lista de Músicas & Conversas 🎶", desc: "Mais músicas, e mais você descobria de mim, e naquele dia percebi que eu não precisava ter medo de confiar em você." },
            { date: "18/03", title: "3ª Lista de Músicas 🎧", desc: "A minha banda favorita e as minhas musicas favoritas se tornaram 'nossas'." },
            { date: "22/03", title: "Rosto de Coitado 🥺", desc: "A minha maneira mais discreta de falar que eu era apaixonada por você." },
            { date: "23/03", title: "A Situação da Bia 🏫", desc: "Eu estava me sentindo péssima, mas você estava lá para confortar cada um dos meus sentimentos." },
            { date: "25/03", title: "Meu Aniversário 🎉", desc: "O dia do meu aniversário, foi o 1° dia que ficamos uma aula inteira juntos no laboratório." },
            { date: "26/03", title: "Stardew Valley 🌾", desc: "Você comprou Stardew Valley, um jogo bobo que se tornou parte essencial da nossa história juntos." },
            { date: "27/03", title: "The Office, Rocket League e Stardew 🎮", desc: "Comecei a ver 'The Office', joguei Rocket League e você jogou Stardew. Quando fizemos questão de estar no mundinho um do outro." },
            { date: "28/03", title: "Nossa 1ª Ligação 📞", desc: "Nossa primeira de MUITAS ligações, que durou maravilhosas 6 horas KSKSSKSKKSKSKSKS" },
            { date: "31/03", title: "Conta no Insta 📸", desc: "Você criou uma conta no insta, só para poder estar mais no meu mundo." },
            { date: "02/04", title: "4ª Lista de Músicas SKKSKSKSKSKS 🎵", desc: "Quanto mais músicas eu ouvia mais eu pensava em você." },
            { date: "18/04", title: "Escolha da Cor de Unha 💅", desc: "Foi a primeira vez que você escolheu a cor das minhas unhas, que aliás, foi lilás." },
            { date: "23/04", title: "Tua Mensagem de Preocupação 💙", desc: "Eu perdi a luta contra o sono, mas dessa vez foi diferente, dessa vez a primeira coisa que eu vi, foi a sua notificação." },
            { date: "26/04", title: "Primeira Foto & Declaração ✨", desc: "A primeira vez que eu te mandei uma foto, mas melhor que isso, descobri o que eu sentia por você e você por mim💙" },
            { date: "29/04", title: "Planejando a Viagem ✈️", desc: "O dia em que combinámos de ir juntos naquele aquário, que infelizmente não aconteceu." },
            { date: "03/05", title: "Mais do que Amigos 💙", desc: "Mandei 'beijos' no boa noite pela primeira vez e tivemos a nossa primeiríssima conversa em sermos mais que amigos." },
            { date: "06/05", title: "O Nome do Mingau 🐱", desc: "Você deu um nome pro gatinho do meu jogo KSKSKSKSKSKSKSKSKSSK" },
            { date: "08/05", title: "Falou de Mim Para a Mãe 💙", desc: "Um dos passos mais lindos: você falou de mim para a sua mãe. Meu coração derreteu." },
            { date: "11/05", title: "Se Agasalha! 🧥", desc: "Eu toda preocupada falando pra você se agasalhar por causa do frio." },
            { date: "12/05", title: "A 1ª Foto Tua 📸", desc: "Finalmente ganhei a primeira foto sua para poder guardar e ficar a admirar." },
            { date: "14/05", title: "Elogio Sincero ✨", desc: "Você disse com toda a doçura que eu estava muito, mas muito bonita, e eu fiquei toda boba KSKSKSKSKKSKSKSKSKS" },
            { date: "15/05", title: "A Surpresa 🙃", desc: "Aquele beijinho na sua bochecha que me fez ficar toda agitada KSKSSKSKSKSKSKSKSKS" },
            { date: "21/05", title: "O Meu 1º Áudio 🎙️", desc: "Perdi a vergonha e enviei o meu primeiro áudio para você." },
            { date: "27/05", title: "Fotos de Criança 👶", desc: "Ver as suas fotinhos de criança e perceber que a sua fofura vem desde sempre." },
            { date: "30/05", title: "Dia de Pãozinho 🥖", desc: "Fiz um pãozinho que estava muito bom, e não resisti em mandar uma foto pra você." },
            { date: "31/05", title: "Leitura de Provérbios 📖", desc: "O dia em que terminámos de ler Provérbios juntos, naquele dia tive a certeza que você não era só um presente, mas também a resposta de uma oração." },
            { date: "01/06", title: "O Coração Azul 💙", desc: "A primeira vez que usou o emoji de coração azul, e virou algo tão nosso." },
            { date: "15/06", title: "Meu Bem pela 1ª vez 🥰", desc: "Chamei você de meu bem pela primeira vez. Nunca disse só como um apelido, mas porque você é realmente o meu bem." },
            { date: "16/06", title: "Seu 'Meu Bem' 💙", desc: "No dia seguinte, lendo o seu 'meu bem' me aqueceu tanto o coração." },
            { date: "17/06", title: "1 Mês de Espera ⏳", desc: "O marco de um mês de espera... Cada dia nos deixa mais perto de estarmos juntos de novo." }
        ];

const container = document.getElementById('timelineContainer');
const searchInput = document.getElementById('searchInput');

function renderTimeline(filterText = '') {
    container.innerHTML = '';
    const normalizedFilter = filterText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // 1. Renderiza as memórias da lista que você cadastrou
    memorias.forEach((memoria, index) => {
        const normalizedTitle = memoria.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const normalizedDesc = memoria.desc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const normalizedDate = memoria.date;

        if (normalizedTitle.includes(normalizedFilter) || 
            normalizedDesc.includes(normalizedFilter) || 
            normalizedDate.includes(normalizedFilter)) {
            
            const side = index % 2 === 0 ? 'left' : 'right';
            
            const card = document.createElement('div');
            card.className = `container ${side}`;
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <div class="content">
                    <span class="date">${memoria.date}</span>
                    <h2>${memoria.title}</h2>
                    <p>${memoria.desc}</p>
                </div>
            `;
            container.appendChild(card);
        }
    });

    // 2. ADICIONA O CARD ESPECIAL FIXO NO FINAL DA LINHA DO TEMPO
    // Ele só aparece se o usuário não estiver usando a barra de pesquisa (para não quebrar a busca)
    if (filterText === '') {
        const finalCard = document.createElement('div');
        // Define o lado do card final (centralizado ou alternado, aqui deixamos do lado oposto do último)
        const finalSide = memorias.length % 2 === 0 ? 'left' : 'right';
        finalCard.className = `container ${finalSide}`;
        finalCard.style.animationDelay = `${memorias.length * 0.05}s`;

        finalCard.innerHTML = `
            <div class="content" style="border-top: 5px dashed var(--primary-color);">
                <span class="date" style="background-color: #e0ebf5;">O Futuro... 🌌</span>
                <h2>E a nossa história continua... 💙</h2>
                <p style="font-style: italic; font-weight: 500;">
                    "Ter parado de anotar as datas aqui não significa, de forma alguma, que a nossa história acabou. Significa apenas que ainda temos um futuro inteiro e lindo pela frente! Essas datas não resumem tudo o que somos, mas são um lembrete eterno de como o nosso amor nasceu e de quão lindo foi o nosso começo. Espero que tenha gostado meu bem💙"
                </p>
            </div>
        `;
        container.appendChild(finalCard);
    }
}

searchInput.addEventListener('input', (e) => {
    renderTimeline(e.target.value);
});