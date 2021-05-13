import React, { useState } from "react";
import { View, FlatList, Text, TouchableHighlight, Button } from "react-native";

const getTimeStamp = () => new Date().toLocaleString();

const Item = ({ details, separators }) => {
  const handlePress = (details) => {};
  return (
    <TouchableHighlight
      onPress={() => handlePress(details)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <View style={{ backgroundColor: "white" }}>
        <Text>{details.title}</Text>
        <Text>{getTimeStamp()}</Text>
      </View>
    </TouchableHighlight>
  );
};

const RefactorComponent = ({ dataSet }) => {
  const [currentTimeStamp, setCurrentTimeStamp] = useState(getTimeStamp);

  const handlePress = () => setCurrentTimeStamp(getTimeStamp);

  return (
    <>
      <View style={{ flex: 1, padding: 30 }}>
        <View style={{ width: "100%", height: 60 }}>
          <Text>Current Time: {currentTimeStamp}</Text>
          <Button title="Update Timestamp" onPress={handlePress} />
        </View>
        <FlatList
          data={dataSet}
          renderItem={({ item, separators }) => (
            <Item details={item} separators={separators} />
          )}
        />
      </View>
      );
    </>
  );
};

export default RefactorComponent;
