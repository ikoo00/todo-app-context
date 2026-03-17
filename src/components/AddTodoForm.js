// src/components/AddTodoForm.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
const AddTodoForm = ({ onAdd, darkMode }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = () => {
        if (text.trim()) {
            onAdd({
                text: text,
                priority: priority
            });

            setText('');
            setPriority('medium');
        }
    };
    return (
        <View style={[styles.container, darkMode && styles.containerDark]}>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.inputWithButton, darkMode && styles.inputDark]}
                    value={text}
                    onChangeText={setText}
                    placeholder='Tambahkan todo baru...'
                    placeholderTextColor={darkMode ? '#64748B' : '#94A3B8'}
                    onSubmitEditing={handleSubmit}
                    returnKeyType='done'
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.priorityRow}>
                <TouchableOpacity
                    style={[styles.priorityBtn, priority === "high" && styles.priorityHigh]}
                    onPress={() => setPriority("high")}
                >
                    <Text style={styles.priorityText}>High</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.priorityBtn, priority === "medium" && styles.priorityMedium]}
                    onPress={() => setPriority("medium")}
                >
                    <Text style={styles.priorityText}>Medium</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.priorityBtn, priority === "low" && styles.priorityLow]}
                    onPress={() => setPriority("low")}
                >
                    <Text style={styles.priorityText}>Low</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 18,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        padding: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },
    containerDark: {
        backgroundColor: '#0F172A',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    input: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        color: '#0F172A',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    inputWithButton: {
        marginRight: 10,
    },

    inputDark: {
        backgroundColor: '#1E293B',
        color: '#F1F5F9',
        borderColor: '#334155',
    },

    button: {
        width: 52,
        height: 52,
        backgroundColor: '#38BDF8',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold'
    },

    priorityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },

    priorityBtn: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 12,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CBD5F5',
    },

    priorityBtnActive: {
        backgroundColor: '#38BDF8',
    },

    priorityHigh: { backgroundColor: '#EF4444' },
    priorityMedium: { backgroundColor: '#F59E0B' },
    priorityLow: { backgroundColor: '#10B981' },

    priorityText: {
        color: '#FFFFFF',
        fontWeight: '700',
    }

});

export default AddTodoForm;