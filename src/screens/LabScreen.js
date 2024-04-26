import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import QuizContainer from '../components/QuizContainer';
import { getQuestions } from '../services/QuestionService';
import { colors } from '../config/colors';
import TitleContainer from '../components/TitleContainer';
import { useAuth } from '../state/AuthContext'; 
import QuizResults from '../components/QuizResults';
import { useNavigation } from '@react-navigation/native';
import { updateScoreInLeaderboard } from '../services/leaderBoardService';

const Lab = () => {
  const navigation = useNavigation();
  const { currentUser } = useAuth(); 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0); // Estado para rastrear el puntaje del usuario
  const [showResults, setShowResults] = useState(false); 

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const loadedQuestions = await getQuestions();
      console.log("cargados", loadedQuestions.length);
      setQuestions(loadedQuestions);
    } catch (error) {
      console.error('Error al cargar las preguntas:', error);
    }
  };


  const handleAnswer = (answerIndex) => {
    //const selectedAnswer = questions[currentQuestionIndex].answers[answerIndex];
    const isCorrect = questions[currentQuestionIndex].correctAnswer;
    if (isCorrect==answerIndex) {
      // Incrementar el contador de puntos
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex <= 10) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      console.log("Quiz Completo", "¡Has completado el quiz!");
      console.log("Puntaje", score);
      updateScoreInLeaderboard(currentUser.uid, score);
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    // Reiniciar el estado para volver a intentar el quiz
    setCurrentQuestionIndex(0);
    setProgress(0);
    setScore(0);
    setShowResults(false); 
    navigation.reset({
      index: 0,
      routes: [{ name: 'Laboratorio' }], // Vuelve a la pantalla de inicio (Home) eliminando todas las pantallas anteriores
    });
  };

  const handleExit = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setProgress(0);
    setShowResults(false)
    navigation.navigate('Home');
  };




  return (
    <View style={styles.container}>
      <TitleContainer title="A practicar! 😼" />
      <View style={styles.quiz}>
      {showResults ? (
          <QuizResults
            score={score}
            onRetry={handleRetry}
          />
        ) : (
          questions.length > 0 && (
            <>
            <Text style={styles.scoreText}>Puntaje: {score}</Text>
            <QuizContainer
              question={questions[currentQuestionIndex]}
              onAnswerSelect={handleAnswer}
            />
            </>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  quiz:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,

  },
  scoreContainer: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Lab;
