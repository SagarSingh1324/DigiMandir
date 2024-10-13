import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from '@expo/vector-icons/build/Fontisto';
export default function logout() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <TouchableOpacity>
                <Image
                    source={require('../../assets/images/LakshmiImage.png')}
                    // resizeMode="stretch"
                    style={styles.profileImage} />
                    </TouchableOpacity>
                <Text style={styles.profileName}>Nitya Sharma</Text>
                <View style={styles.followInfo}>
                    <Text style={styles.followers}>25K Followers</Text>
                    <Text style={styles.following}>124K Following</Text>
                </View>
            </View>
            <Text style={styles.bioText}>
                Thank God every morning when you get up that you have something to do that day, which must be done, whether you like it or not. - James Russell Lowell
            </Text>
            <Text style={styles.bioText}>
                My Savior. He can move the mountains.
            </Text>
            <Text style={styles.bioText}>
                Life is short. Pray hard.
            </Text>
            <Text style={styles.bioText}>
                The Verses Of Happiness 📖
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.thumbnailContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/LakshmiImage.png')}
                        style={styles.thumbnail} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image
                        source={require('../../assets/images/GaneshImage.png')}
                        style={styles.thumbnail} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image
                        source={require('../../assets/images/DiyaImage.png')}
                        style={styles.thumbnail} />
                </TouchableOpacity>
            </View>

            <View style={styles.postContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/GaneshImage.png')}
                        style={styles.postImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/LakshmiImage.png')}
                        style={styles.postImage} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700', // Light yellow background
        padding: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    followInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10,
    },
    followers: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    following: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    bioText: {
        fontSize: 14,
        marginBottom: 10,
        color: 'White',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    thumbnailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    postContainer: {
        marginBottom: 20,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    IconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    Icon: {
        alignItems: 'center',
    },
});
