import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItems from './GoalItems.jsx';

const GoalsModal = ({ visible, setIsModelVisible }) => {


    const [goalInput, setGoalInput] = useState("");
    const [goals, setGoals] = useState([]);

    const handleTextChange = (goal) => {
        setGoalInput(goal);
    }

    const addGoalHandler = () => {
        if (goalInput.trim().length === 0) {
            return;
        }
        setGoals((prevGoals) => [...prevGoals, { id: goals[goals.length - 1]?.id + 1 || 1, name: goalInput, isCompleted: false }]);
        setGoalInput("");
        console.log("Goal added!");
    };

    const handleCheckbox = (id) => {
        setGoals((prevGoals) =>
            prevGoals.map((goal) =>
                goal.id === id ? { ...goal, isCompleted: !goal.isCompleted } : goal
            )
        );
    };

    const handleDelete = (id) => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    };

    return (
        <Modal visible={visible} animationType="fade">
            <View
                style={styles.appContainer}
            >

                <Text style={styles.textStyle}>To-Do Goal List</Text>
                <View style={styles.inputContainer}>

                    <TextInput
                        value={goalInput}
                        style={styles.textInput}
                        onChangeText={handleTextChange}
                        placeholder="Type your goal..." />

                    <Button title="Add Goal" onPress={() => { addGoalHandler() }} />
                </View>

                <View style={{ marginBottom: 40 }}>
                    <Text style={{ color: '#0071c8ff', fontSize: 20, marginTop: 30 }}>List of Goals: </Text>
                    <GoalItems goals={goals} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
                </View>

                <Button color="#7d7d7dff" title="back" onPress={() => { setIsModelVisible(false) }} />
            </View>
        </Modal>
    )
}

export default GoalsModal;



const styles = StyleSheet.create({
    appContainer: {
        justifyContent: "center",
        padding: 20
    },
    textStyle: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'semibold',
        color: '#0b007eff',
        fontSize: 25,
        textDecorationLine: 'underline',
    },
    inputContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#cccccc',
        paddingBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 6,
        padding: 10,
        width: '70%',
    },
})