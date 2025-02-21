import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const QuizTaker = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);

    const questions = [
        { question: '2+2=?', options: [3, 5, 6, 4], correct: 4 },
        { question: '3+5=?', options: [5, 8, 7, 6], correct: 8 },
        { question: '6-1=?', options: [5, 6, 7, 4], correct: 5 },
        { question: '10-3=?', options: [6, 8, 7, 5], correct: 7 },
    ];

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption == questions[questionIndex].correct) {
            setCorrectAnswers(correctAnswers + 1);
            setScore(score + 10);
        }
        setSelectedOption(null);

        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setShowCompletionMessage(true);
        }
    };

    const handleFinish = () => {
        setShowSummary(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>QUIZ</Text>
            {!showSummary &&

                <View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>
                            Question: {questions[questionIndex].question}
                        </Text>
                    </View>
                    <View style={styles.optionsContainer}>
                        {questions[questionIndex].options.map((option, index) => (
                            // When React updates the UI, it performs a process called reconciliation, where it compares the current state of the UI with the new state. The key helps React identify which elements have changed, been added, or removed.  this is why key={index}
                            <View key={index} style={styles.option}>
                                <RadioButton
                                    value={option}
                                    status={selectedOption == option ? 'checked' : 'unchecked'}
                                    onPress={() => handleOptionPress(option)}
                                />
                                <Text>{option}</Text>
                            </View>
                        ))}
                    </View>
                    {!showCompletionMessage ?
                        <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
                            <Text style={styles.buttonText}>Next Question</Text>
                        </TouchableOpacity>
                        :
                        <Text style={styles.completionText}>Questions Completed</Text>
                    }
                    <TouchableOpacity style={styles.button} onPress={handleFinish}>
                        <Text style={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                </View>
            }

            {showSummary &&
                <View style={styles.summary}>
                    <Text>Summary</Text>
                    <Text>Total Questions: {questions.length}</Text>
                    <Text>Total Correct Answers: {correctAnswers}</Text>
                    <Text>Total Score: {score}</Text>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
    },
    questionContainer: {
        marginVertical: 15,
        padding: 15,
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
    },
    question: {
        fontSize: 18,
    },
    optionsContainer: {
        marginVertical: 15,
        backgroundColor: '#b0e0e6',
        padding: 10,
        borderRadius: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignSelf: 'center',
        borderRadius: 25,
        width: 250,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    summary: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#98fb98',
    },
    completionText: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
        color: 'green',
    },
});
export default QuizTaker;
