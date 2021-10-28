import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Button, ScrollView, Alert } from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
    const [task, setTask] = React.useState({});
    const [allTask, setAllTask] = React.useState([]);
    const inputRef = React.useRef();

    const deleteTask = (a) => {
        let curItem = allTask.find((item) => item.id == a);
        Alert.alert('Task Done???',
            curItem.task,
            [
                {
                    text: 'Cancel'
                }, {
                    text: 'Delete',
                    onPress: () => {
                        let newTasks = allTask.filter((item) => item.id != a);
                        setAllTask(newTasks);
                    },
                    style: 'destructive'
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return (
        <View style={s.container}>
            {/* All Item */}
            <View style={[s.f4, s.bgBlue]}>
                <Text style={{ width: '100%', fontSize: 25, textAlign: 'center', backgroundColor: 'dodgerblue', color: '#fff' }}>All Tasks</Text>
                <ScrollView>
                    <View style={{ marginTop: 5, flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {
                            allTask.map((item, key) => {
                                return <ListItem key={key} itemId={item.id} itemKey={key} item={item.task} bgColor={item.bgColor} itemPressed={(a) => deleteTask(a)} />
                            })
                        }
                    </View>
                </ScrollView>
            </View>

            {/* Add Item */}
            <View style={{ width: '100%', height: 50, backgroundColor: 'dodgerblue', flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center', borderTopColor: '#fff', borderTopWidth: 5 }}>
                <View style={[s.fRow, s.fJCB]}>
                    <TextInput
                        onChangeText={(task) => setTask(task)}
                        placeholder="Add New Task"
                        placeholderTextColor="#999"
                        // value={task}
                        ref={inputRef}
                        style={s.input}
                    />
                    <Button
                        onPress={() => {
                            if (task != '') {
                                setAllTask([...allTask, { id: new Date().getTime().toString(), task: task, bgColor: Math.floor(Math.random() * 10) }]);
                                inputRef.current.clear()
                            }
                        }}
                        style={s.button} title="+ Add"
                    />
                </View>

            </View>
        </View>
    );
}

// s= style
const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    f4: {
        flex: 4,
    },
    f1: {
        // flex: 1
        width: '100%',
        height: 100
    },
    fRow: {
        // flex: 1,
        flexDirection: 'row',
    },
    bgGold: {
        backgroundColor: 'gold',
    },
    bgBlue: {
        // backgroundColor: 'dodgerblue',
    },
    spc: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fJCB: {
        justifyContent: 'flex-end'
    },
    input: {
        width: '80%',
        height: '100%',
        borderColor: 'dodgerblue',
        borderWidth: 1,
        backgroundColor: '#fff',
        color: 'dodgerblue',
        paddingLeft: 5,
        marginRight: 10,
        borderRadius: 7
    },
    confirmDelete: {
        color: 'red'
    }
});
