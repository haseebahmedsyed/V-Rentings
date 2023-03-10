import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Drawer } from './DrawerNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Frontend/redux/actions/accountActions'
import { useNavigation } from '@react-navigation/native';
import Loader from '../Frontend/components/Loader'

const DrawerContent = (props) => {
    const dispatch = useDispatch()
    const { loading, error, isLoggedOut } = useSelector(state => state.loginReducer)
    const navigation = useNavigation()
    useEffect(() => {
        if (error) {
            console.log(error)
        }
        if (isLoggedOut) {
            navigation.navigate('Login')
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            })
        }
    }, [isLoggedOut, error])
    return (
        <>
            <Loader loading={loading}/>
            <DrawerContentScrollView style={{ margin: 0, padding: 0 }} {...props}>
                <View className='bg-red-400' style={styles.header} >
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbG2a_jBK1C1N0UAx8vCrWSelLx6XnhiXJw&usqp=CAU' }
                        }
                        style={{ height: 150, width: 150, borderRadius: 100, marginLeft: 'auto', marginRight: 'auto', marginTop: 25 }}
                    />
                    <Text style={styles.name}>Syed Haseeb Ahmed</Text>
                </View>


                <DrawerItem
                    label={"Home"}
                    icon={() => <Ionicons name='home' size={22} />}
                    style={{
                        fontWeight: 'bold',
                        marginTop: 10
                    }}
                />
                <DrawerItem
                    label={"View Profile"}
                    icon={() => <Ionicons name='person' size={22} />}
                    style={{
                        fontWeight: 'bold',
                        marginTop: 10
                    }}
                />
                <DrawerItem
                    label={"View Cars"}
                    icon={() => <Ionicons name='car' size={22} />}
                    style={{
                        fontWeight: 'bold',
                        marginTop: 10
                    }}
                    onPress={() => navigation.navigate('MyCars')}
                />
                <DrawerItem
                    label={"View Rents"}
                    icon={() => <Ionicons name='document-text' size={22} />}
                    style={{
                        fontWeight: 'bold',
                        marginTop: 10
                    }}
                    onPress={() => navigation.navigate('MyRents')}
                />
                <DrawerItem
                    label={"Logout"}
                    icon={() => <SimpleLineIcons name='logout' size={22} />}
                    style={{
                        fontWeight: 'bold',
                        marginTop: 10
                    }}
                    onPress={() => dispatch(logOut())}
                />

            </DrawerContentScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        color: '#ffffff',
        marginTop: 10
    },
    header: {
        height: 250,
        backgroundColor: '#00ccbb',
        margin: 0,
        display: 'flex',
        alignContent: 'center',
        marginTop: -4,
        paddingTop: 'auto',
        paddingBottom: 'auto'
    }
});

export default DrawerContent