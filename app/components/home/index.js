import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Filter from '../filter';
import ProductContainer from '../productContainer';
import SearchBox from '../search-box';
import BagIcon from '../bagIcon';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCarrot, faLemon } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-native";

const couponICon = require('../productCard/images/coupon.png');

const Home = (props) => {
  const [isInSeason, setSeason] = useState(true);

  const handlePressSeason = () => {
    setSeason(prev => !prev);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 20,
          paddingTop: 20
        }}>
          <BagIcon />
        </View>
        <Header {...props} />
        <View style={styles.searchFilter}>
          <SearchBox />
          <Filter />
        </View>
        <View style={styles.middleContent}>
          <View style={styles.middleLeft}>
            <Pressable
              onPress={handlePressSeason}
            >
              <View style={styles.seasonContainer}>
                <FontAwesomeIcon icon={faCarrot} size={isInSeason ? 54 : 48} color={isInSeason ? 'black' : 'grey'} />
                <Text style={isInSeason ? styles.inSeasonText : styles.offSeasonText}>In season</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={handlePressSeason}
            >
              <View style={styles.seasonContainer}>
                <FontAwesomeIcon icon={faLemon} size={isInSeason ? 48 : 54} color={'grey'} color={isInSeason ? 'grey' : 'black'} />
                <Text style={isInSeason ? styles.offSeasonText : styles.inSeasonText}>Off season</Text>
              </View>
            </Pressable>
            <View style={styles.seasonContainer}>
              <Image style={{width: 70, height: 70}} source={couponICon} />
              <Text style={{marginTop: 10}}>Coupons</Text>
            </View>
          </View>
          <View style={styles.middleRight}>
            <Text style={styles.popularProduct}>
              Popular Product
            </Text>
            <ProductContainer typeCardOne={true} isInSeason={isInSeason} {...props} />
          </View>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.recommend}>Recommended</Text>
          <View style={styles.bottomRight}>
            <View style={styles.bottomHeader}>
              <Text style={styles.bestPrice}>Best Price</Text>
            </View>
            <ProductContainer typeCardOne={false} {...props} />
          </View>
        </View>
      </View>
      <View style={styles.nav}>
        <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navText}>OrderCart</Text>
        </Link>
        <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navText}>MyInfo</Text>
        </Link>
      </View>
    </>
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
  nav: {
    backgroundColor: '#dc2f02',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)',
    alignItems: 'center',
  },
  navText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#FFF'
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    backgroundColor: '#F6F8F9'
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
  },
  inSeasonText: {
    color: 'black', 
    marginTop: 10,
    fontSize: 15
  },
  offSeasonText: {
    color: 'grey', 
    marginTop: 10,
    fontSize: 12
  }
});

export default Home;