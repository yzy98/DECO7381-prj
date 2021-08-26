import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filter from '../filter';
import ProductContainer from '../productContainer';
import SearchBox from '../search-box';
import BagIcon from '../bagIcon';
import { FontAwesomeIcon, } from '@fortawesome/react-native-fontawesome';
import { faCarrot, faLemon } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {

  return (
    <View style={styles.container}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20
      }}>
        <BagIcon num={7} />
      </View>
      <Header {...props} />
      <View style={styles.searchFilter}>
        <SearchBox />
        <Filter />
      </View>
      <View style={styles.middleContent}>
        <View style={styles.middleLeft}>
          <View style={styles.seasonContainer}>
            <FontAwesomeIcon icon={faCarrot} size={48} />
            <Text style={{marginTop: 10}}>In season</Text>
          </View>
          <View style={styles.seasonContainer}>
            <FontAwesomeIcon icon={faLemon} size={48} color={'grey'} />
            <Text style={{color: 'grey', marginTop: 10}}>Off season</Text>
          </View>
        </View>
        <View style={styles.middleRight}>
          <Text style={styles.popularProduct}>
            Popular Product
          </Text>
          <ProductContainer typeCardOne={true} />
        </View>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.recommend}>Recommended</Text>
        <View style={styles.bottomRight}>
          <View style={styles.bottomHeader}>
            <Text style={styles.bestPrice}>Best Price</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <ProductContainer typeCardOne={false} />
        </View>
      </View>
    </View>
    
  );
};

const Header = (props) => {
  const {user} = props; 

  return (
    <View style={styles.header}>
      <Text style={{fontSize: 15}}>Hi {user}!</Text>
      <Text style={{fontSize: 20}}>What you really like now?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    width: '100%',
    paddingLeft: 30
  },
  header: {
    position: 'relative',
    top: 10
  },
  searchFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  middleContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40
  },
  middleLeft: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    left: -20
  },
  middleRight: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    width: '70%'
  },
  popularProduct: {
    fontSize: 20,
    marginBottom: 30
  },
  bottomContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  },
  bottomLeft: {
    flex: 1
  },
  bottomRight: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    marginLeft: -20
  },
  bottomHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  bestPrice: {
    fontSize: 20,
  },
  seeAll: {
    marginLeft: 100,
    textDecorationLine: 'underline'
  },
  recommend: {
    flex: 1,
    transform: [{rotate: '-90deg'}],
    marginTop: 10,
    height: 90,
    fontSize: 15
  },
  seasonContainer: {
    alignItems: 'center',
    marginBottom: 30
  }
});

export default Home;