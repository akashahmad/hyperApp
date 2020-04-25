import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from "react";

const Dashboard = () => {
    return (
        <View style={styles.colorBlack}>
            <ScrollView>
                <View>
                    <Text>
                        Example
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
};

export default Dashboard;

const styles = StyleSheet.create({

    colorBlack: {
        color: "black"
    },


});
