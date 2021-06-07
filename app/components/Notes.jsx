import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from  'react-native';

const Notes = ({data, onDelete}) => {
    const {date, note} = data;
    return (
        <View style={styles.note}>
<Text style={styles.noteText}>{date}</Text>
<Text style={styles.noteText}>{note}</Text>
<TouchableOpacity onPress={onDelete} style={styles.noteDelete}>
    <Text style={styles.noteDeleteText}>X</Text>
</TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#3d3d3d',
        fontSize: 24,
    },
   noteDelete:{
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    top: 10,
    right: 10,
       backgroundColor: "#eb3148",
       padding: 10,
      
   },

   noteDeleteText:{
  color: 'white',
  fontSize: 24,
  fontWeight: '700',
   },
   
})

export default Notes;