
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function SpookyCounter() {
  const [spookyCount, setSpookyCount] = useState(0);

  return (
    <View>
      <Text>Conteo espeluznante: {spookyCount}</Text>
      <Button title="Aumentar miedo" onPress={() => setSpookyCount(spookyCount + 1)} />
    </View>
  );
}

export default SpookyCounter;
