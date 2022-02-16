const contentPage = document.getElementById('content');
const listComments = [];
const listContact = [];

const contentLink = {
    aboutMe: `
        <h1 class="font-oswald400">Leonardo <span class="span-blue">Araújo Dreyer</span></h1>
        <h3 class="font-oswald200">Rua: Ildefonso da Silva, 111, Parobé - RS<br>
        <span class="span-blue">leonardodreyer99@gmail.com<span></h3>
        <p>Olá, me chamo Leonardo!<br>
        Sou organizado, detalhista, preocupado em produzir trabalhos de qualidade e frequentemente não meço esforços para que o resultado seja o melhor possível. 
        Busco a perfeição.<br>
        Atualmente faço parte da sexta edição do programa Starter Full Stack Web Developer, oferecido pela Growdev. 
        Estou em busca de conhecimento e oportunidades para iniciar minha carreira profissional.</p>
    `,
    socialMedias:`
        <nav>
            <a href="https://github.com/Leonardo-Dreyer" target="_Blank"><i class="fab fa-github-square icons-social-media"></i></a>    
            <a href="https://www.linkedin.com/in/leonardo-dreyer99" target="_Blank"><i class="fab fa-linkedin icons-social-media"></i></a>
            <a href="https://www.instagram.com/leodreyer_/" target="_Blank"><i class="fab fa-instagram-square icons-social-media"></i></a>
        </nav>
    `,
    knowledge: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'],
    objectives: `
        <h4>Objetivo pessoal:</h4>
        <p>Alcançar minha independência financeira, realizar viagens e alguns desejos pessoais!</p>
        <h4 id="objetivo-prof">Objetivo profissional:</h4>
        <p>Tenho como objetivo, para 2022, iniciar minha carreira como desenvolvedor.
        Pretendo sempre me aperfeiçoar, me mantendo atualizado e buscando novos conhecimentos,
        almejando o crescimento tanto profissional como pessoal.</p>
    `,
    comment: `
        <label>Nome:</label>
        <input type="text" id="name-comment" placeholder="Mínimo 3 caracteres">
        <label>Comentário:</label>
        <textarea id="area-comment"></textarea>
        <div class="div-button"><input type="button" id="button-contact" value="Entre em contato"><input type="submit" id="save-comment"></div>
        <div class="status"></div>
        <div class="status-error"></div>
        <div class="status-success"></div>
    `,
    contact: `
        <div id="div-contact">
            <label>Nome:</label>
            <input type="text" id="name-contact" placeholder="Mínimo 3 caracteres">
            <label>Telefone:</label>
            <input type="tel" id="phone-contact" placeholder="(xx) x xxxx-xxxx">
            <label>Email:</label>
            <input type="text" id="email-contact">
            <div class="div-button""><input id="save-contact" type="submit"></div>
            <div class="status-error"></div>
            <div class="status-success"></div>
        </div>
    `
};

function loadContent() {
    contentPage.innerHTML = `${contentLink.aboutMe}${contentLink.socialMedias}`;
    
    document.getElementById('about-me').addEventListener('click', function(event) {
        event.preventDefault();
        loadContent();
    });
    
    document.getElementById('knowledge').addEventListener('click', function(event) {
        event.preventDefault();
        contentPage.innerHTML = `<h4>Conhecimentos:</h4>${contentLink.knowledge.join(', ')}.`;   
    });
    
    document.getElementById('objectives').addEventListener('click', function(event) {
        event.preventDefault();
        contentPage.innerHTML = contentLink.objectives;
    });

    document.getElementById('comment').addEventListener('click', function(event) {
        event.preventDefault();
        contentPage.innerHTML = contentLink.comment;    
        const statusError = document.querySelector('.status-error');
        const statusSuccess = document.querySelector('.status-success');
        document.getElementById('save-comment').addEventListener('click', function(event) {
            event.preventDefault();
            const nameComment = document.getElementById('name-comment');
            const areaComment = document.getElementById('area-comment');
            if (!nameComment.value || !areaComment.value || nameComment.value.length < 3 ) {
                statusSuccess.innerHTML = '';
                statusError.innerHTML = 'Preencha todos os campos corretamente!';
                nameComment.classList.add('error');
                areaComment.classList.add('error'); 
            } else {
                statusError.innerHTML = '';
                statusSuccess.innerHTML = 'Enviado com sucesso!';
                nameComment.classList.remove('error');
                areaComment.classList.remove('error');
                const commentSaved = {
                    id: parseInt(Math.random() * (1000 - 1) + 0),
                    name: nameComment.value,
                    area: areaComment.value
                };
                listComments.push(commentSaved);
                nameComment.value = '';
                areaComment.value = '';
            };
        });
        document.getElementById('button-contact').addEventListener('click', function(event) {
            event.preventDefault();
            contentPage.innerHTML = contentLink.contact;
            const statusError = document.querySelector('.status-error');
            const statusSuccess = document.querySelector('.status-success');
            document.getElementById('save-contact').addEventListener('click', function(event) {
                event.preventDefault();
                const nameContact = document.getElementById('name-contact');
                const phoneContact = document.getElementById('phone-contact');
                const emailContact = document.getElementById('email-contact');
                if (!nameContact.value || !phoneContact.value || !emailContact.value || 
                    nameContact.value.length < 3 || phoneContact.value.length < 8) {
                    statusSuccess.innerHTML = '';
                    statusError.innerHTML = 'Preencha todos os campos corretamente!';
                    nameContact.classList.add('error');
                    phoneContact.classList.add('error');
                    emailContact.classList.add('error');
                } else {
                    statusError.innerHTML = '';
                    statusSuccess.innerHTML = 'Enviado com sucesso!';
                    nameContact.classList.remove('error');
                    phoneContact.classList.remove('error');
                    emailContact.classList.remove('error');
                    const userContact = {
                        id: parseInt(Math.random() * (1000 - 1) + 0),
                        name: nameContact.value,
                        phone: phoneContact.value,
                        email: emailContact.value
                    };
                    listContact.push(userContact);
                    nameContact.value = '';
                    phoneContact.value = '';
                    emailContact.value = '';
                };
            });
        });
    });
};
loadContent();



