import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AddButton extends React.Component{
    render() {
        return(
            <Ionicons
                name="md-add-circle"
                color="#000000"
                size={36.22}
                // style={styles.menuIcon}
                onPress={()=> {
                    console.log(this.props.navigation)
                    return this.props.navigation.navigate('AddToilet')}
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        bottom: 30,
        left: 0,
    }  
})