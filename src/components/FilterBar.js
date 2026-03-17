// src/components/FilterBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FILTERS } from '../hooks/UseFilter';
const FilterBar = ({ activeFilter, onFilterChange, stats, darkMode }) => {
    const buttons = [
        { key: FILTERS.ALL, label: `Semua (${stats.total})` },
        { key: FILTERS.ACTIVE, label: `Aktif (${stats.active})` },
        { key: FILTERS.COMPLETED, label: `Selesai (${stats.completed})` },
    ];
    return (
        <View style={styles.container}>
            {buttons.map((btn, index) => (
                <TouchableOpacity
                    key={btn.key}
                    style={[
                        styles.btn,
                        index !== buttons.length - 1 && styles.btnMargin,
                        darkMode && styles.btnDark,
                        activeFilter === btn.key && styles.btnActive,
                        activeFilter === btn.key && darkMode && styles.btnActiveDark
                    ]}
                    onPress={() => onFilterChange(btn.key)}
                >
                    <Text style={[
                        styles.label,
                        darkMode && styles.labelDark,
                        activeFilter === btn.key && styles.labelActive
                    ]}>
                        {btn.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginBottom: 16 },
    btn: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 999,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
    },
    btnDark: { backgroundColor: '#334155' },
    btnActive: { backgroundColor: '#38BDF8' },
    btnActiveDark: { backgroundColor: '#0EA5E9' },
    btnMargin: { marginRight: 8 },

    label: { fontSize: 13, color: '#64748B', fontWeight: '500' },
    labelDark: { color: '#94A3B8' },
    labelActive: { color: '#FFFFFF', fontWeight: '700' },
});
export default FilterBar;