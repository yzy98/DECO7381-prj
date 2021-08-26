import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import ProductCard from '../productCard';
import ProductCardTwo from '../productCardTwo';

const ProductContainer = (props) => {
  const {typeCardOne} = props;
  let typeee = <TypeTwo />;
  if (typeCardOne) {
    typeee = <TypeOne />
  }

  return (
    <>
    {typeee}
    </>
  );
};

const TypeOne = () => {
  return (
    <ScrollView
    style={{paddingLeft: 10}}
      horizontal='true'
    >
      <ProductCard name='Australian apple' season={true} price={10} />
      <ProductCard name='Australian blueberry' season={false} price={7} />
      <ProductCard name='Australian banana' season={true} price={10} />
      <ProductCard name='Australian strawberry' season={false} price={16} />
      <ProductCard name='Australian blueberry' season={true} price={4} />
    </ScrollView>
  );
};

const TypeTwo = () => {
  return (
    <ScrollView
      style={{
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 15
      }}
      horizontal='true'
    >
      <ProductCardTwo name='Australian banana' season={true} price={10} />
      <ProductCardTwo name='Australian strawberry' season={false} price={16} />
      <ProductCardTwo name='Australian blueberry' season={true} price={4} />
      <ProductCardTwo name='Australian apple' season={true} price={10} />
      <ProductCardTwo name='Australian blueberry' season={false} price={7} />
    </ScrollView>
  );
};


export default ProductContainer;