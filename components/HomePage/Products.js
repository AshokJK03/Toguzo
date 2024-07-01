import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import product1 from '../../assets/images/Homepage/Products/product1.jpeg'
import product2 from '../../assets/images/Homepage/Products/product2.jpeg'
import product3 from '../../assets/images/Homepage/Products/product3.jpeg'
import product4 from '../../assets/images/Homepage/Products/product4.jpeg'
import product5 from '../../assets/images/Homepage/Products/product5.jpeg'
import product6 from '../../assets/images/Homepage/Products/product6.jpeg'
import product7 from '../../assets/images/Homepage/Products/product7.jpeg'
import product8 from '../../assets/images/Homepage/Products/product8.jpeg'
import product9 from '../../assets/images/Homepage/Products/product9.jpeg'
import product10 from '../../assets/images/Homepage/Products/product10.jpeg'
import product11 from '../../assets/images/Homepage/Products/product11.jpeg'
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();

  const list = [
    {
      id: "0",
      img: product1,
      name: "Grocery",
      component: 'Wishlist'
    },
    {
      id: "1",
      img: product2,
      name: "Fashion"
    },
    {
      id: "2",
      img: product3,
      name: "Beauty & personal care"
    },
    {
      id: "3",
      img: product4,
      name: "Home & decor"
    },
    {
      id: "4",
      img: product5,
      name: "Sports & Fitness"
    },
    {
      id: "5",
      img: product6,
      name: "Electronics"
    },
    {
      id: "6",
      img: product7,
      name: "Baby Care"
    },
    {
      id: "7",
      img: product8,
      name: "Stationary & Office supplies & stationary"
    },
    {
      id: "8",
      img: product9,
      name: "Pet Supplies"
    },
    {
      id: "9",
      img: product10,
      name: "Books & Education"
    },
    {
      id: "10",
      img: product11,
      name: "Home Appliances"
    },
  ]

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.ProductTop}>
        <View style={styles.Products}>
          {list.map((item, index) => (
            <Pressable key={index} style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 82, }} onPress={() => navigation.navigate(item.component)}>
              <View>
                <Image source={item.img}
                  style={styles.productview} />
              </View>
              <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: 600, marginTop: 4, fontFamily: "Nunito-SemiBold", textAlign: 'center', width: 56, height: 18 }}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({
  ProductTop: {
    height: 98,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Products: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 82,
    flexDirection: 'row',
    width: scale(-80),
    paddingEnd: 20,
    paddingStart: 20,
    gap: 8,
  
  },

  productview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    width: 60,
    height: 60,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#CBCDCD',

  },

  ProductImage: {
    borderRadius: 50,
    height: 25,
    width: 25,
    flexDirection: 'row'
  }
})





