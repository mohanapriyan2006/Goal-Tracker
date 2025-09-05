import { Checkbox } from '@futurejj/react-native-checkbox'
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItems = ({ goals, handleCheckbox, handleDelete }) => {
    return (
        <View style={{ marginTop: 10 }}>
            {
                goals.length > 0 ?
                    <FlatList data={goals}
                        style={{ maxHeight: 300 }}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <Pressable style={({ pressed }) => pressed && { opacity: 0.5 }}>
                                    <View style={styles.goalsContainer}>
                                        <Checkbox status={item.isCompleted ? 'checked' : 'unchecked'} onPress={() => { handleCheckbox(item.id) }} />
                                        <Text style={item.isCompleted ? { textDecorationLine: 'line-through' } : {}}>{item.name}</Text>
                                        <Text style={item.isCompleted ? { color: '#016d2cff' } : { color: '#b00300ff' }}>{item.isCompleted ? "Completed" : "Pending"}</Text>
                                        <Button color='#8d0000ff' title="Delete" onPress={() => { handleDelete(item.id) }} />
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                    :
                    <Text style={{ color: '#980000ff', fontWeight: 'semibold', textAlign: 'center' , fontSize: 20 }}>No goals added yet!</Text>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    goalsContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#d7f0ffff',
        borderRadius: 6,
        padding: 15,
    },
})


export default GoalItems;