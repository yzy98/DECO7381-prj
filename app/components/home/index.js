import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filter from '../filter';
import ProductContainer from '../productContainer';
import SearchBox from '../search-box';
import {ShoppingOutlined} from '@ant-design/icons';

const Home = (props) => {

  return (
    <View style={styles.container}>
      <ShoppingOutlined style={{
        fontSize: 30,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 20
      }} />
      <Header {...props} />
      <View style={styles.searchFilter}>
        <SearchBox />
        <Filter />
      </View>
      <View style={styles.middleContent}>
        <View style={styles.middleLeft}>
          <Text>In season</Text>
          <Text>Off season</Text>
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
    flexDirection: 'column'
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
    marginBottom: 15
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
  }
});

export default Home;