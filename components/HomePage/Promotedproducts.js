import { StyleSheet, Text, View, ScrollView, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import promoted1 from '../../assets/images/Homepage/Promoted/promoted1.png';
import promoted2 from '../../assets/images/Homepage/Promoted/promoted2.jpeg';
import promoted3 from '../../assets/images/Homepage/Promoted/promoted3.jpeg';
import promoted4 from '../../assets/images/Homepage/Promoted/promoted4.jpeg';
import promoted5 from '../../assets/images/Homepage/Promoted/promoted5.jpeg';

const screenWidth = Dimensions.get('window').width
const Promotedproducts = () => {


  const deal = [
    {
      id: '0',
      title: 'Worldwide Treats',
      des: 'Jeans large size',
      image: promoted1,

    },
    {
      id: '1',
      title: 'Trendy T-shirt',
      des: '7 colors, All Size',
      image: promoted2,
    },
    {
      id: '2',
      title: 'Roadster',
      des: 'White T-shirt',
      image: promoted3,
    },
    {
      id: '3',
      title: 'US POLO',
      des: 'Skinny fit black Jeans',
      image: promoted4,
    },
    {
      id: '4',
      title: 'Rajeshwari Jwels ',
      des: 'Gold plated earings',
      image: promoted5,

    }
  ]

  return (
    <View style={{ height: 283, marginTop: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 600, fontFamily: 'Nunito-SemiBold', marginBottom: 10, left: 20 }}>Promoted</Text>
      <View style={{ marginTop: 16, height: 200, paddingEnd: 20, }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {deal.map((item, index) => (
            <Pressable key={index} style={styles.container}>
              <View style={{ justifyContent: "center"}}>
                  <Image
                    source={item.image}
                    style={{ width: 142, height: 142, borderRadius: 4, marginTop: 5 }}
                  />
                <Text numberOfLines={1} style={{ fontSize: 12, marginTop: 8, fontWeight: 600, marginLeft: 10 }}>{item.title}</Text>
                <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: 400, color: '#7C7E7E', marginBottom: 10, marginLeft: 10 }}>{item.des}</Text>
              </View>
            </Pressable>
          ))}

        </ScrollView>
      </View>
    </View>
  )
}

export default Promotedproducts

const styles = StyleSheet.create({
  container: {
    borderColor: '#E5E6E6',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 150,
    marginLeft: 20,

  }
})