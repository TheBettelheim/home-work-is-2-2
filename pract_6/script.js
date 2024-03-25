document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.querySelector('#projectForm');
    const projectCardsContainer = document.querySelector('.project-cards');

    projectForm.addEventListener('submit', event => {
        event.preventDefault();

        const projectName = document.querySelector('#projectName').value;
        const projectDeadline = document.querySelector('#projectDeadline').valueAsDate;
        const projectDescription = document.querySelector('#projectDescription').value;
        const projectStatus = document.querySelector('#projectStatus').value;
        const projectImage = document.querySelector('#projectImage').files[0];

        if (!projectName || !projectDeadline || !projectDescription || !projectStatus || !projectImage) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
            projectCard.innerHTML = `
                <img src="${reader.result}" alt="Project Image">
                <div class="project-info">
                    <h3>${projectName}</h3>
                    <p><strong>Срок выполнения:</strong> ${formatDate(projectDeadline)}</p>
                    <p><strong>Описание:</strong> ${projectDescription}</p>
                    <p><strong>Статус:</strong> ${projectStatus}</p>
                </div>
            `;
            projectCardsContainer.appendChild(projectCard);
        };
        reader.readAsDataURL(projectImage);
    });
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}
