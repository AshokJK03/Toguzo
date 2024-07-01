import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import promoted1 from '../../assets/images/Homepage/Promoted/promoted1.png';
import promoted2 from '../../assets/images/Homepage/Promoted/promoted2.jpeg';
import promoted3 from '../../assets/images/Homepage/Promoted/promoted3.jpeg';
import promoted4 from '../../assets/images/Homepage/Promoted/promoted4.jpeg';
import promoted5 from '../../assets/images/Homepage/Promoted/promoted5.jpeg';

const Promotedproducts = () => {
  const navigation = useNavigation();

  const deal = [
    {
      id: '0',
      title: 'Worldwide Treats',
      des: 'Jeans large size',
      image: promoted1,
      component: 'Wishlist'

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
      <Text style={{ fontSize: 20, fontWeight: 600, fontFamily: 'Nunito-SemiBold', left: 20 }}>Promoted</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={styles.containerTop}>
          {deal.map((item, index) => (
            <Pressable key={index} style={styles.container} onPress={() => navigation.navigate(item.component)}>
              <View style={{ top: 3, left: 3 }}>
                <Image
                  source={item.image}
                  style={{ width: 142, height: 142, borderRadius: 4, }}
                />
              </View>
              <View style={{ top: 8, width: 96, height: 36, marginLeft: 10, justifyContent: 'center' }}>
                <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: 600, }}>{item.title}</Text>
                <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: 400, color: '#7C7E7E' }}>{item.des}</Text>
              </View>

            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Promotedproducts

const styles = StyleSheet.create({
  containerTop: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingEnd: 20,
    paddingStart: 20,
    gap: 16,
    marginTop: 16,
  },
  Productlist: {
    //width: scale(-80),
    gap: 8,
  },
  container: {
    borderColor: '#E5E6E6',
    borderWidth: 1,
    borderRadius: 4,
    height: 200,
    width: 150,

  }
})