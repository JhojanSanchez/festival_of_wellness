        // Datos de las actividades
        const activities = {
            // Ejemplo de día con múltiples actividades (ARRAY)
            1: [
                {
                    title: "Mirada Sana, Mundo Claro",
                    type: "Presencial",
                    time: "10:00h - 12:00h",
                    description: "Un espacio para aprender a cuidar tu salud visual, prevenir el cansancio ocular y mantener una visión nítida en tu día a día. En la sede de Stefanini.",
                    link: null
                },
                {
                    title: "Mirada Sana, Mundo Claro",
                    type: "Virtual",
                    time: "10:00h",
                    description: "Un espacio para aprender a cuidar tu salud visual, prevenir el cansancio ocular y mantener una visión nítida en tu día a día.",
                    link: "https://zoom.us/j/example3a"
                },
                {
                    title: "Olivos",
                    type: "Presencial",
                    time: "14:00h - 16:00h",
                    description: "En la sede de Stefanini.",
                    link: null
                }
            ],
            // Días con una sola actividad (OBJETO - como antes)
            2: {
                title: "Potencia tu Bienestar",
                type: "Virtual",
                time: "10:00h",
                description: "Primera charla práctica con consejos esenciales para mantener un cuerpo fuerte, saludable y lleno de energía.",
                link: "https://zoom.us/j/example3a"
            },
            // Ejemplo de otro día con múltiples actividades (ARRAY)
            3: [
                {
                    title: "Regala Vida",
                    type: "Presencial",
                    time: "8:00h - 12:00 h",
                    description: "Participa en la jornada de donación de sangre y sé parte de quienes salvan vidas con un simple y valioso gesto. En la sede de Stefanini.",
                    link: "https://zoom.us/j/example3a"
                },
                {
                    title: "Emermedica",
                    type: "Presencial",
                    time: "8:00h - 12:00h",
                    description: "En la sede de Stefanini.",
                    link: null
                },
                {
                    title: "Vetpluss",
                    type: "Presencial",
                    time: "14:00h - 16:00h",
                    description: "En la sede de Stefanini.",
                    link: null
                }
            ],
            4: {
                title: "Tu Cuerpo, Tu Mejor Proyecto ",
                type: "Virtual",
                time: "10:00h",
                description: "Segunda sesión para profundizar en hábitos que optimizan tu salud física y mental.",
                link: "https://zoom.us/j/example4"
            },
            5: {
                title: "",
                type: "",
                time: "",
                description: "",
                link: null
            },
            8: [
            {
                title: "Desestrésate",
                type: "Presencial",
                time: "8:00h - 13:00h",
                description: "Disfruta de masajes relajantes que alivian tensiones, mejoran tu circulación y recargan tu energía. En la sede de Stefanini.",
                link: null
            },
            {
                title: "Seguros Bolivar ",
                type: "Presencial",
                time: "8:00h - 10:00h",
                description: "En la sede de Stefanini.",
                link: null
            },
            {
                title: "Emi",
                type: "Presencial",
                time: "14:00h - 16:00h",
                description: "En la sede de Stefanini.",
                link: null
            },
            ],
            9: {
                title: "Respira y Conecta",
                type: "Virtual",
                time: "16:00h",
                description: "Taller de mindfulness para aprender a relajarte, reducir el estrés y vivir el momento presente con plenitud.",
                link: "https://zoom.us/j/example9"
            },
            10: [
            {
                title: "Pedaleando Sabor",
                type: "Presencial",
                time: "8:00h - 12:00h",
                description: "Súbete a la bici, genera tu propia energía y disfruta un jugo natural hecho con tu pedaleo. ¡Diversión y salud en un solo paso!. En la sede de Stefanini.",
                link: null
            },
            {
                title: "Energía en Movimiento",
                type: "Presencial",
                time: "8:00h - 10:00h",
                description: "Un momento para estirar, activar el cuerpo y recargar la mente. A través de breves ejercicios físicos mejorarás tu postura, reducirás el estrés y volverás a tus actividades con más energía y concentración.",
                link: null
            },
            {
                title: "Compensar",
                type: "Presencial",
                time: "14:00h - 16:00h",
                description: "Revizar---------------------------------------------------------------",
                link: null
            }
            ],
            11: {
                title: "Rendimiento Saludable",
                type: "Virtual",
                time: "16:00h - 17:00h",
                description: "Charla con un deportólogo para descubrir cómo mejorar tu rendimiento físico, prevenir lesiones y alcanzar tus metas deportivas.",
                link: "https://zoom.us/j/example11"
            },
            12:[
            {
                title: "Colombina",
                type: "presencial",
                time: "8:00h - 12:00h",
                description: "En la sede de Stefanini..",
                link: null
            },
            {
                title: "Celebrando la Salud",
                type: "Virtual",
                time: "10:00h",
                description: "Cierre especial del festival con actividades, agradecimientos y un repaso de todo lo vivido.",
                link: "https://zoom.us/j/example12"
            }
            ]
        };

        // Variables del carousel
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.nav-dot');

        // Función para mostrar actividad
        function showActivity(day) {
            const dayData = activities[day];
            if (!dayData) return;

            // Remover clase active de todos los días
            document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
            
            // Agregar clase active al día seleccionado
            event.target.closest('.day').classList.add('active');

            // Detectar si es array (múltiples actividades) o objeto (una sola actividad)
            const dayActivities = Array.isArray(dayData) ? dayData : [dayData];

            // Mostrar detalles de las actividades
            const detailDiv = document.getElementById('activity-detail');
            
            // Crear HTML para todas las actividades del día
            let activitiesHTML = '';
            
            dayActivities.forEach(activity => {
                activitiesHTML += `
                    <div class="single-activity">
                        <div class="activity-header">
                            <h3 class="activity-title">${activity.title}</h3>
                            <span class="activity-type ${activity.type.toLowerCase()}">${activity.type}</span>
                        </div>
                        ${activity.time ? `<div class="activity-time">📅 ${activity.time}</div>` : ''}
                        <p class="activity-description">${activity.description}</p>
                        ${activity.type === 'Virtual' && activity.link ? `
                            <a href="${activity.link}" class="btn btn-primary" target="_blank">
                                🔗 Unirse a la Actividad Virtual
                            </a>
                        ` : ''}
                    </div>
                `;
            });

            detailDiv.innerHTML = activitiesHTML;
            detailDiv.classList.add('show');
        }

        // Funciones del carousel
        function changeSlide(direction) {
            slides[currentSlideIndex].classList.remove('active');
            dots[currentSlideIndex].classList.remove('active');
            
            currentSlideIndex += direction;
            
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = slides.length - 1;
            }
            
            slides[currentSlideIndex].classList.add('active');
            dots[currentSlideIndex].classList.add('active');
        }

        function currentSlide(index) {
            slides[currentSlideIndex].classList.remove('active');
            dots[currentSlideIndex].classList.remove('active');
            
            currentSlideIndex = index - 1;
            
            slides[currentSlideIndex].classList.add('active');
            dots[currentSlideIndex].classList.add('active');
        }

        // Auto-slide del carousel
        setInterval(() => {
            changeSlide(1);
        }, 5000);

        // Función para descargar fondo virtual
        function downloadBackground() {
            // Crear un canvas para generar la imagen
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 1920;
            canvas.height = 1080;

            // Crear gradiente
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');

            // Llenar el fondo
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Agregar texto
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = 'bold 72px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Festival de la Salud 2025', canvas.width / 2, canvas.height / 2);

            ctx.font = '36px Arial';
            ctx.fillText('Promoviendo el bienestar en nuestra comunidad', canvas.width / 2, canvas.height / 2 + 80);

            // Descargar la imagen
            const link = document.createElement('a');
            link.download = 'fondo-festival-salud-2025.png';
            link.href = './img/H&WW.png';
            link.click();
        }


        function startCountdown() {
    const targetDate = new Date('2025-09-01T10:00:00').getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // ¡TIEMPO TERMINADO!
            clearInterval(timer);
            revealMainContent();
            return;
        }
        
        // Calcular tiempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Actualizar números
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
    }, 1000);
}

function revealMainContent() {
    const overlay = document.getElementById('countdown-overlay');
    const mainContent = document.getElementById('main-content');
    
    // Ocultar cuenta regresiva con fade out
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
    }, 1000);
}

// Iniciar al cargar la página
document.addEventListener('DOMContentLoaded', startCountdown);