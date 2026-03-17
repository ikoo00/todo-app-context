// src/screens/HomeScreen.js
import React from 'react';
import {
    View, Text,
    StyleSheet, StatusBar, TouchableOpacity, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';   
import { useTodos } from '../hooks/UseTodos';
import { useFilter } from '../hooks/UseFilter';
import AddTodoForm from '../components/AddTodoForm';
import TodoItem from '../components/TodoItem';
import FilterBar from '../components/FilterBar';
const HomeScreen = () => {
    // Custom hook untuk filter
    const { activeFilter, setFilter, FILTERS } = useFilter();
    // Custom hook untuk semua todo operations
    const {
        todos,
        stats,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearDone,
    } = useTodos(activeFilter);
    
    // Theme hook
    const { darkMode, toggleTheme } = useTheme();
    return (
        <SafeAreaView style={[styles.safe, darkMode && styles.safeDark]}>
            <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor={darkMode ? '#0F172A' : '#F8FAFC'} />
            <View style={[styles.container, darkMode && styles.containerDark]}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <Text style={[styles.title, darkMode && styles.titleDark]}>My Todos</Text>
                        <TouchableOpacity 
                            style={[styles.themeToggle, darkMode && styles.themeToggleDark]} 
                            onPress={toggleTheme}
                        >
                            <Text style={[styles.themeToggleText, darkMode && styles.themeToggleTextDark]}>
                                {darkMode ? '☀️' : '🌙'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.subtitle, darkMode && styles.subtitleDark]}>
                        {stats.completed} dari {stats.total} selesai
                    </Text>
                </View>
                {/* Form tambah todo */}
                <AddTodoForm onAdd={addTodo} darkMode={darkMode} />
                {/* Filter bar */}
                <FilterBar
                    activeFilter={activeFilter}
                    onFilterChange={setFilter}
                    stats={stats}
                    darkMode={darkMode}
                />
                {/* Daftar todo */}
                <FlatList
                    data={todos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TodoItem
                            todo={item}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                            darkMode={darkMode}
                        />
                    )}
                    ListEmptyComponent={(
                        <Text style={[styles.emptyText, darkMode && styles.emptyTextDark]}>
                            Tidak ada todo{' '}
                            {activeFilter !== 'all' ? `dengan filter '${activeFilter}'` : ''}
                        </Text>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}
                />
                {/* Clear done button */}
                {stats.completed > 0 && (
                    <TouchableOpacity
                        style={[styles.clearBtn, darkMode && styles.clearBtnDark]}
                        onPress={clearDone}
                    >
                        <Text style={[styles.clearBtnText, darkMode && styles.clearBtnTextDark]}>
                            Hapus {stats.completed} item selesai
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#F8FAFC' },
    safeDark: { backgroundColor: '#0F172A' },
    container: { flex: 1, padding: 20, backgroundColor: '#F8FAFC' },
    containerDark: { backgroundColor: '#0F172A' },
    header: { marginBottom: 24, paddingTop: 8 },
    headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 4,
    },
    titleDark: { color: '#F8FAFC' },
    subtitle: { fontSize: 14, color: '#64748B' },
    subtitleDark: { color: '#94A3B8' },
    themeToggle: {
        backgroundColor: '#E2E8F0',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        minWidth: 50,
        alignItems: 'center',
    },
    themeToggleDark: { backgroundColor: '#334155' },
    themeToggleText: { fontSize: 18 },
    themeToggleTextDark: { color: '#F8FAFC' },
    emptyText: {
        textAlign: 'center',
        color: '#94A3B8',
        marginTop: 60,
        fontSize: 16,
    },
    emptyTextDark: { color: '#64748B' },
    clearBtn: {
        marginTop: 16,
        paddingVertical: 10,
        borderRadius: 14,
        backgroundColor: '#FEE2E2',
        alignItems: 'center',
    },
    clearBtnDark: { backgroundColor: '#7F1D1D' },
    clearBtnText: {
        color: '#B91C1C',
        fontSize: 14,
        fontWeight: '600',
    },
    clearBtnTextDark: {
        color: '#FECACA',
    },
});
export default HomeScreen;
