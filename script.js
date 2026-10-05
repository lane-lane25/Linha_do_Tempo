/* =========================================
   MEMÓRIAS INICIAIS
========================================= */

const initialMemories = [

    {
        date: "23/02",
        title: "Nossa 1ª Conversa 💬",
        desc: "O dia em que devolver um livro através do Heitor, mudou tudo de uma forma maravilhosa e silenciosa."
    },

    {
        date: "24/02",
        title: "O Empréstimo do Livro 📚",
        desc: "Um pretexto perfeito para eu poder te emprestar o meu livro favorito."
    },

    {
        date: "02/03",
        title: "Troca de Figurinhas 🥰",
        desc: "Uma das minhas maiores desculpas para ter assunto com você."
    },

    {
        date: "09/03",
        title: "A Dica de Filme 🎬",
        desc: "Recomendei que assistisse Orgulho e Preconceito... como sempre, eu estava jogando um 'verde'."
    },

    {
        date: "10/03",
        title: "O Pedido de Desculpas 🙏",
        desc: "O seu cuidado e o carinho se mostrando presentes desde o começo da nossa amizade."
    },

    {
        date: "11/03",
        title: "Seu Aniversário 🎂",
        desc: "O dia do seu aniversário! E para melhorar, o dia que vc copiou a minha tarefa de história KSSKSKSKKSKSKSKSKS"
    },

    {
        date: "13/03",
        title: "A 1ª Lista de Músicas 🎵",
        desc: "Desde aquele dia, não consegui mais ouvir um MPB sem pensar em você."
    },

    {
        date: "14/03",
        title: "Canal do Minecraft 📹",
        desc: "O dia em ouvi a voz mais doce desse mundo, a voz do mini Victor."
    },

    {
        date: "16/03",
        title: "1° dia que você faltou ✨",
        desc: "Orei pela cirurgia da sua mãe. O meu coração já se preocupava com você sem nem perceber."
    },

    {
        date: "17/03",
        title: "2ª Lista de Músicas & Conversas 🎶",
        desc: "Mais músicas, e mais você descobria de mim, e naquele dia percebi que eu não precisava ter medo de confiar em você."
    },

    {
        date: "18/03",
        title: "3ª Lista de Músicas 🎧",
        desc: "A minha banda favorita e as minhas musicas favoritas se tornaram 'nossas'."
    },

    {
        date: "22/03",
        title: "Rosto de Coitado 🥺",
        desc: "A minha maneira mais discreta de falar que eu era apaixonada por você."
    },

    {
        date: "23/03",
        title: "A Situação da Bia 🏫",
        desc: "Eu estava me sentindo péssima, mas você estava lá para confortar cada um dos meus sentimentos."
    },

    {
        date: "25/03",
        title: "Meu Aniversário 🎉",
        desc: "O dia do meu aniversário, foi o 1° dia que ficamos uma aula inteira juntos no laboratório."
    },

    {
        date: "26/03",
        title: "Stardew Valley 🌾",
        desc: "Você comprou Stardew Valley, um jogo bobo que se tornou parte essencial da nossa história juntos."
    },

    {
        date: "27/03",
        title: "The Office, Rocket League e Stardew 🎮",
        desc: "Comecei a ver 'The Office', joguei Rocket League e você jogou Stardew. Quando fizemos questão de estar no mundinho um do outro."
    },

    {
        date: "28/03",
        title: "Nossa 1ª Ligação 📞",
        desc: "Nossa primeira de MUITAS ligações, que durou maravilhosas 6 horas KSKSSKSKKSKSKSKS"
    },

    {
        date: "31/03",
        title: "Conta no Insta 📸",
        desc: "Você criou uma conta no insta, só para poder estar mais no meu mundo."
    },

    {
        date: "02/04",
        title: "4ª Lista de Músicas SKKSKSKSKSKS 🎵",
        desc: "Quanto mais músicas eu ouvia mais eu pensava em você."
    },

    {
        date: "18/04",
        title: "Escolha da Cor de Unha 💅",
        desc: "Foi a primeira vez que você escolheu a cor das minhas unhas, que aliás, foi lilás."
    },

    {
        date: "23/04",
        title: "Tua Mensagem de Preocupação 💙",
        desc: "Eu perdi a luta contra o sono, mas dessa vez foi diferente, dessa vez a primeira coisa que eu vi, foi a sua notificação."
    },

    {
        date: "26/04",
        title: "Primeira Foto & Declaração ✨",
        desc: "A primeira vez que eu te mandei uma foto, mas melhor que isso, descobri o que eu sentia por você e você por mim💙"
    },

    {
        date: "29/04",
        title: "Planejando a Viagem ✈️",
        desc: "O dia em que combinámos de ir juntos naquele aquário, que infelizmente não aconteceu."
    },

    {
        date: "03/05",
        title: "Mais do que Amigos 💙",
        desc: "Mandei 'beijos' no boa noite pela primeira vez e tivemos a nossa primeiríssima conversa em sermos mais que amigos."
    },

    {
        date: "06/05",
        title: "O Nome do Mingau 🐱",
        desc: "Você deu um nome pro gatinho do meu jogo KSKSKSKSKSKSKSKSKSSK"
    },

    {
        date: "08/05",
        title: "Falou de Mim Para a Mãe 💙",
        desc: "Um dos passos mais lindos: você falou de mim para a sua mãe. Meu coração derreteu."
    },

    {
        date: "11/05",
        title: "Se Agasalha! 🧥",
        desc: "Eu toda preocupada falando pra você se agasalhar por causa do frio."
    },

    {
        date: "12/05",
        title: "A 1ª Foto Tua 📸",
        desc: "Finalmente ganhei a primeira foto sua para poder guardar e ficar a admirar."
    },

    {
        date: "14/05",
        title: "Elogio Sincero ✨",
        desc: "Você disse com toda a doçura que eu estava muito, mas muito bonita, e eu fiquei toda boba KSKSKSKSKKSKSKSKSKS"
    },

    {
        date: "15/05",
        title: "A Surpresa 🙃",
        desc: "Aquele beijinho na sua bochecha que me fez ficar toda agitada KSKSSKSKSKSKSKSKSKS"
    },

    {
        date: "21/05",
        title: "O Meu 1º Áudio 🎙️",
        desc: "Perdi a vergonha e enviei o meu primeiro áudio para você."
    },

    {
        date: "27/05",
        title: "Fotos de Criança 👶",
        desc: "Ver as suas fotinhos de criança e perceber que a sua fofura vem desde sempre."
    },

    {
        date: "30/05",
        title: "Dia de Pãozinho 🥖",
        desc: "Fiz um pãozinho que estava muito bom, e não resisti em mandar uma foto pra você."
    },

    {
        date: "31/05",
        title: "Leitura de Provérbios 📖",
        desc: "O dia em que terminámos de ler Provérbios juntos, naquele dia tive a certeza que você não era só um presente, mas também a resposta de uma oração."
    },

    {
        date: "01/06",
        title: "O Coração Azul 💙",
        desc: "A primeira vez que usou o emoji de coração azul, e virou algo tão nosso."
    },

    {
        date: "15/06",
        title: "Meu Bem pela 1ª vez 🥰",
        desc: "Chamei você de meu bem pela primeira vez. Nunca disse só como um apelido, mas porque você é realmente o meu bem."
    },

    {
        date: "16/06",
        title: "Seu 'Meu Bem' 💙",
        desc: "No dia seguinte, lendo o seu 'meu bem' me aqueceu tanto o coração."
    },

    {
        date: "17/06",
        title: "1 Mês de Espera ⏳",
        desc: "O marco de um mês de espera... Cada dia nos deixa mais perto de estarmos juntos de novo."
    }

];


/* =========================================
   QUANDO A PÁGINA CARREGAR
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const welcomeScreen = document.getElementById("welcome-screen");
    const mainContent = document.getElementById("main-content");

    const enterBtn = document.getElementById("enter-btn");

    const themeToggleBtn =
        document.getElementById("theme-toggle-btn");

    const addMemoryBtn =
        document.getElementById("add-memory-btn");

    const closeModalBtn =
        document.getElementById("close-modal-btn");

    const memoryModal =
        document.getElementById("memory-modal");

    const memoryForm =
        document.getElementById("memory-form");

    const memoriesContainer =
        document.getElementById("memories-container");


    /* =========================================
       ENTRAR NO SITE
    ========================================= */

    enterBtn.addEventListener("click", () => {

        welcomeScreen.style.opacity = "0";

        welcomeScreen.style.transition = "opacity 0.5s ease";

        setTimeout(() => {

            welcomeScreen.style.display = "none";

            mainContent.style.display = "block";

        }, 500);

    });


    /* =========================================
       TEMA
    ========================================= */

    themeToggleBtn.addEventListener("click", () => {

        const html = document.documentElement;

        const currentTheme =
            html.getAttribute("data-theme");

        if (currentTheme === "dark") {

            html.setAttribute("data-theme", "light");

            themeToggleBtn.textContent = "☀";

        } else {

            html.setAttribute("data-theme", "dark");

            themeToggleBtn.textContent = "☾";

        }

    });


    /* =========================================
       ABRIR MODAL
    ========================================= */

    addMemoryBtn.addEventListener("click", () => {

        memoryModal.classList.add("active");

    });


    /* =========================================
       FECHAR MODAL
    ========================================= */

    closeModalBtn.addEventListener("click", () => {

        memoryModal.classList.remove("active");

    });


    memoryModal.addEventListener("click", (event) => {

        if (event.target === memoryModal) {

            memoryModal.classList.remove("active");

        }

    });


    /* =========================================
       RENDERIZAR MEMÓRIAS
    ========================================= */

    function loadMemories() {

        const savedMemories =
            JSON.parse(
                localStorage.getItem("custom_memories")
            ) || [];

        const allMemories = [
            ...initialMemories,
            ...savedMemories
        ];

        memoriesContainer.innerHTML = "";

        allMemories.forEach((memory) => {

            const card =
                document.createElement("article");

            card.className = "memory-card";

            card.innerHTML = `
                <div class="memory-date">
                    ${escapeHTML(memory.date)}
                </div>

                <h3>
                    ${escapeHTML(memory.title)}
                </h3>

                <p>
                    ${escapeHTML(memory.desc)}
                </p>
            `;

            memoriesContainer.appendChild(card);

        });

    }


    /* =========================================
       PROTEÇÃO DO TEXTO
    ========================================= */

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =========================================
       ADICIONAR MEMÓRIA
    ========================================= */

    memoryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const date =
            document.getElementById("mem-date").value.trim();

        const title =
            document.getElementById("mem-title").value.trim();

        const desc =
            document.getElementById("mem-desc").value.trim();


        if (!date || !title || !desc) {

            return;

        }


        const savedMemories =
            JSON.parse(
                localStorage.getItem("custom_memories")
            ) || [];


        savedMemories.push({
            date: date,
            title: title,
            desc: desc
        });


        localStorage.setItem(
            "custom_memories",
            JSON.stringify(savedMemories)
        );


        memoryForm.reset();

        memoryModal.classList.remove("active");

        loadMemories();

    });


    /* =========================================
       CARREGAR AS MEMÓRIAS
    ========================================= */

    loadMemories();

});
    /* =========================================
       CONTADOR DESDE 26/04/2026
    ========================================= */

    const counterDays = document.getElementById("counter-days");
    const counterHours = document.getElementById("counter-hours");
    const counterMinutes = document.getElementById("counter-minutes");
    const counterSeconds = document.getElementById("counter-seconds");

    const startDate = new Date("2026-04-26T00:00:00");

    function updateCounter() {

        const now = new Date();

        const difference = now - startDate;

        if (difference < 0) {
            counterDays.textContent = "0";
            counterHours.textContent = "0";
            counterMinutes.textContent = "0";
            counterSeconds.textContent = "0";
            return;
        }

        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / 86400);

        const hours = Math.floor(
            (totalSeconds % 86400) / 3600
        );

        const minutes = Math.floor(
            (totalSeconds % 3600) / 60
        );

        const seconds = totalSeconds % 60;

        counterDays.textContent = days;
        counterHours.textContent = String(hours).padStart(2, "0");
        counterMinutes.textContent = String(minutes).padStart(2, "0");
        counterSeconds.textContent = String(seconds).padStart(2, "0");
    }

    updateCounter();

    setInterval(updateCounter, 1000);