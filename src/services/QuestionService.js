const url = "https://firebasestorage.googleapis.com/v0/b/learningapp-653e1.appspot.com/o/questions.json?alt=media&token=e492e38c-d2ac-497c-9a7a-77fe9470c342";

// Función para desordenar las preguntas
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

export const getQuestions = async () => {
  try {
    const response = await fetch(url);
    const questions = await response.json();
    return shuffleQuestions(questions); // Asegúrate de mezclar las preguntas si es necesario
  } catch (error) {
    console.error('Error cargando las preguntas:', error);
    throw error;
  }
};

