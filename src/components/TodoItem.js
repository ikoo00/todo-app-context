// src/components/TodoItem.js
import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = memo(({ todo, onToggle, onDelete, darkMode }) => {

    const getPriorityStyle = () => {
        if (todo.priority === "high") return styles.high;
        if (todo.priority === "medium") return styles.medium;
        return styles.low;
    };

    return (
        <View style={[styles.container, darkMode && styles.containerDark]}>

            {/* PRIORITY INDICATOR */}
            <View style={[styles.priority, getPriorityStyle()]} />

            {/* CHECKBOX */}
            <TouchableOpacity
                style={[styles.checkbox, todo.done && styles.checkboxDone]}
                onPress={() => onToggle(todo.id)}
            >
                {todo.done && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            {/* TEXT + DUE DATE */}
            <View style={styles.textContainer}>

                <Text style={[
                    styles.text,
                    todo.done && styles.textDone,
                    darkMode && styles.textDark
                ]}>
                    {todo.text}
                </Text>

                {todo.dueDate && (
                    <Text style={[
                        styles.date,
                        darkMode && styles.dateDark
                    ]}>
                        Due: {todo.dueDate}
                    </Text>
                )}

            </View>

            {/* DELETE BUTTON */}
            <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => onDelete(todo.id)}
            >
                <Text style={[
                    styles.deleteText,
                    darkMode && styles.deleteTextDark
                ]}>
                    ✕
                </Text>
            </TouchableOpacity>

        </View>
    );
});

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    containerDark: {
        backgroundColor: '#1E293B',
        shadowOpacity: 0.3,
    },

    priority: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 10,
    },

    high: {
        backgroundColor: '#EF4444',
    },

    medium: {
        backgroundColor: '#F59E0B',
    },

    low: {
        backgroundColor: '#22C55E',
    },

    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#38BDF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    checkboxDone: {
        backgroundColor: '#38BDF8',
        borderColor: '#38BDF8',
    },

    checkmark: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    textContainer: {
        flex: 1,
    },

    text: {
        fontSize: 16,
        color: '#1E293B',
    },

    textDark: {
        color: '#F1F5F9',
    },

    textDone: {
        textDecorationLine: 'line-through',
        color: '#94A3B8',
    },

    date: {
        fontSize: 12,
        marginTop: 4,
        color: '#64748B',
    },

    dateDark: {
        color: '#94A3B8',
    },

    deleteBtn: {
        padding: 6,
    },

    deleteText: {
        color: '#F97316',
        fontSize: 16,
        fontWeight: 'bold',
    },

    deleteTextDark: {
        color: '#FB923C',
    },

});

export default TodoItem;