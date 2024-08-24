import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text, Card, Title, Paragraph } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../App';

type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/chef.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to TakeAChef</Text>
          <Text style={styles.subtitle}>Discover amazing chefs near you</Text>
          
          <Card style={styles.card}>
            <Card.Content>
              <Title>Featured Chef</Title>
              <Paragraph>Check out our chef of the week!</Paragraph>
            </Card.Content>
            <Card.Cover source={require('../assets/chef-profile.png')} />
            <Card.Actions>
              <Button onPress={() => navigation.navigate('ChefProfile', { chefId: '1' })}>
                View Profile
              </Button>
            </Card.Actions>
          </Card>

          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('ChefProfile', { chefId: '1' })}
            style={styles.button}
          >
            Explore Chefs
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
});

export default HomeScreen;