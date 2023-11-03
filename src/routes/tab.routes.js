import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import HomeStackRoutes from './home.stack.routes';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();
const active_color = '#E5E5CB';
export default function TabRoutes () {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#16151B', //26252F
                    borderTopWidth: 0,
                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 18
                }
            }}
        >
            <Tab.Screen 
            name="Home"
            component={() => <HomeStackRoutes/>}
            options= {{
                headerShown: false,
                tabBarIcon: (({color, size, focused}) => {
                    if(focused) 
                        return <Ionicons name="home" size={size} color={active_color}/>
                    
                    return <Ionicons name="home-outline" size={size} color={color}/>
                })
            }}
            />

            <Tab.Screen 
            name="Search"
            component={Search}
            options= {{
                headerShown: false,
                tabBarIcon: (({color, size, focused}) => {
                    if(focused) 
                        return <Ionicons name="search" size={size} color={active_color}/>
                    
                    return <Ionicons name="search-outline" size={size} color={color}/>
                })
            }}
            />

            <Tab.Screen 
            name="Favorites"
            component={Favorites}
            options= {{
                headerShown: false,
                tabBarIcon: (({color, size, focused}) => {
                    if(focused) 
                        return <Ionicons name="bookmark" size={size} color={active_color}/>
                    
                    return <Ionicons name="bookmark-outline" size={size} color={color}/>
                })
            }}
            />

            <Tab.Screen 
            name="Settings"
            component={Settings}
            options= {{
                headerShown: false,
                tabBarIcon: (({color, size, focused}) => {
                    if(focused) 
                        return <Ionicons name="settings" size={size} color={active_color}/>
                    
                    return <Ionicons name="settings-outline" size={size} color={color}/>
                })
            }}
            />
        </Tab.Navigator>
    )
}