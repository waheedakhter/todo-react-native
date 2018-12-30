
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import {Image} from 'react-native';
import FeedScreen from './feed/FeedScreen'
import AddScreen from './add/AddScreen'
import ProfileScreen from './login/ProfileScreen'
import TabIcon from './TabIcon';

const tabs = createBottomTabNavigator({
    Feed: {
        screen: FeedScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <TabIcon
                    name="feed"
                    tintColor={tintColor}
                    source={require('./images/feed.png')} />
            )
        }
    },
    Add: {
        screen: AddScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <TabIcon
                    name="add"
                    tintColor={tintColor}
                    source={require('./images/add.png')} 
                    />
            )
            
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <TabIcon
                    name="profile"
                    tintColor={tintColor}
                    source={require('./images/profile.png')} 
                    
                    />
            )
            
        }
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ tabs }, { headerMode: "none" });
