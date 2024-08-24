import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Card, Button, Chip, Avatar } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ChefProfile: { chefId: string };
  Booking: { chefId: string };
};

type ChefProfileScreenRouteProp = RouteProp<RootStackParamList, 'ChefProfile'>;
type ChefProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChefProfile'>;

type Props = {
  route: ChefProfileScreenRouteProp;
  navigation: ChefProfileScreenNavigationProp;
};

const ChefProfileScreen: React.FC<Props> = ({ route, navigation }) => {
  const { chefId } = route.params;

  // Mock data - replace with actual data fetching logic
  const chefData = {
    name: "Gordon Ramsay",
    specialties: ["French", "Italian", "British"],
    rating: 4.8,
    reviews: 245,
    description: "World-renowned chef with multiple Michelin stars. Known for his fiery temper and exceptional culinary skills.",
    image: require('../assets/chef-profile.png'),
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={chefData.image} style={styles.coverImage} />
      <View style={styles.profileInfo}>
        <Avatar.Image size={120} source={chefData.image} style={styles.avatar} />
        <Text style={styles.name}>{chefData.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {chefData.rating}</Text>
          <Text style={styles.reviews}>({chefData.reviews} reviews)</Text>
        </View>
        <View style={styles.specialtiesContainer}>
          {chefData.specialties.map((specialty, index) => (
            <Chip key={index} style={styles.chip}>{specialty}</Chip>
          ))}
        </View>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>About</Text>
          <Text>{chefData.description}</Text>
        </Card.Content>
      </Card>
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Booking', { chefId })}
        style={styles.bookButton}
      >
        Book This Chef
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 16,
    marginTop: -60,
  },
  avatar: {
    marginBottom: 8,
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  chip: {
    margin: 4,
  },
  card: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookButton: {
    margin: 16,
  },
});

export default ChefProfileScreen;