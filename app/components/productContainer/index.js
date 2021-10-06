import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import ProductCard from '../productCard';
import ProductCardTwo from '../productCardTwo';

const ProductContainer = (props) => {
  const {typeCardOne} = props;
  let typeee = <TypeTwo {...props} />;
  if (typeCardOne) {
    typeee = <TypeOne {...props} />;
  }

  return (
    <>
    {typeee}
    </>
  );
};

const TypeOne = (props) => {
  const {fruitList, isInSeason} = props;

  const filteredFruitsArr = fruitList.filter(item => item.Season == isInSeason);

  const body = filteredFruitsArr.map((item) => {
    return (
      <ProductCard name={item.Name} season={item.Season} price={item.Price} id={item.id} description={item.Description} {...props} />
    );
  });

  return (
    <ScrollView
    style={{paddingLeft: 10}}
      horizontal='true'
    >
      {body}
    </ScrollView>
  );
};

const TypeTwo = (props) => {
  const {fruitList} = props;

  const body = fruitList.map((item) => {
    return (
      <ProductCardTwo name={item.Name} season={item.Season} price={item.Price} />
    );
  });

  return (
    <ScrollView
      style={{
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 15
      }}
      horizontal='true'
    >
      {body}
    </ScrollView>
  );
};


export default ProductContainer;