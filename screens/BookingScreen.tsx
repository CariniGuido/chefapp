import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Booking: { chefId: string };
};

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;
type BookingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Booking'>;

type Props = {
  route: BookingScreenRouteProp;
  navigation: BookingScreenNavigationProp;
};

const BookingScreen: React.FC<Props> = ({ route }) => {
  const { chefId } = route.params;
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleBooking = () => {
    // Implement booking logic here
    console.log(`Booking for Chef ${chefId}, Date: ${date}, Guests: ${guests}`);
  };

  return (
    <View style={styles.container}>
      <Text>Booking for Chef {chefId}</Text>
      <TextInput
        label="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        label="Number of Guests"
        value={guests}
        onChangeText={setGuests}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleBooking}>
        Confirm Booking
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});

export default BookingScreen;