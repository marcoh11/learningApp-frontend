import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { colors } from '../config/colors';
import { getSubTopics } from '../services/subTopicService';
import TitleContainer from '../components/TitleContainer';
import SubTopic  from '../components/SubTopic';
import DropDownPicker from 'react-native-dropdown-picker';

const SubTopicScreen = ({ route }) => {
  const { topicId, topicName } = route.params;
  const [subtopics, setSubtopics] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const loadedSubtopics = await getSubTopics(topicId);
        console.log("cargados",loadedSubtopics);
        const subtopicsItems = loadedSubtopics.sort((a, b) => a.order - b.order).map(sub => ({ label: sub.name, value: sub.id }));
        setSubtopics(loadedSubtopics);
        setItems(subtopicsItems);
        if (loadedSubtopics.length > 0) {
          setSelectedSubtopic(loadedSubtopics[0]); 
          setValue(loadedSubtopics[0].id);
        }
      } catch (error) {
        console.error('Error al cargar los subtopics:', error);
      }
    };

    fetchSubTopics();
  }, [topicId]);

  const onDropDownChange = (selectedValue) => {
    const selectedSubtopic = subtopics.find((subtopic) => subtopic.id === selectedValue);
    setSelectedSubtopic(selectedSubtopic);
  };

  return (
    <View style={styles.container}>
    <TitleContainer title={topicName} />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(newValue) => {
          onDropDownChange(newValue)
        }}
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        placeholder="Seleccione"
      />
      {selectedSubtopic && (
        <SubTopic
          // Pasar las props necesarias al componente SubTopic
          subtopic={selectedSubtopic}
          // ...otras props que SubTopic pueda necesitar
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom:100,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  dropdownContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default SubTopicScreen;
