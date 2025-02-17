import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import headerStyles from '../styles/headerStyles';
import routes from '../data/routes';

const Header: React.FC<{ navigation?: any }> = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0));
  const nav = navigation || useNavigation();
  const { width } = Dimensions.get('window');
  const isWeb = Platform.OS === 'web';

  useEffect(() => {
    Animated.timing(menuAnimation, {
      toValue: isMenuOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isMenuOpen]);

  const handleNavigate = (route: string) => {
    nav.navigate(route.replace('/', '') || 'Home');
    setIsMenuOpen(false);
  };

  const slideIn = {
    transform: [{
      translateX: menuAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0],
      }),
    }],
  };

  const renderLinks = () => (
    routes.filter(route => !route.index).map((route, index) => (
      <React.Fragment key={route.label}>
        {index > 0 && <Text style={headerStyles.separator}>|</Text>}
        <TouchableOpacity
          style={[
            headerStyles.linkItem,
            index === 0 && headerStyles.firstLinkItem,
          ]}
          onPress={() => handleNavigate(route.path)}>
          <Text style={headerStyles.linkText}>{route.label.toUpperCase()}</Text>
        </TouchableOpacity>
      </React.Fragment>
    ))
  );

  const renderMenuItems = () => (
    <ScrollView>
      {routes.filter(route => !route.index).map((route, index, arr) => (
        <TouchableOpacity
          key={route.label}
          style={[
            headerStyles.menuItem,
            index === arr.length - 1 && headerStyles.lastMenuItem,
          ]}
          onPress={() => handleNavigate(route.path)}>
          <Text style={headerStyles.menuItemText}>{route.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity 
        style={{
          backgroundColor: '#3498db',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
          marginLeft: 10,
        }}
        onPress={() => nav.navigate('login')}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
          marginLeft: 10,
        }}
        onPress={() => nav.navigate('profile')}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.header}>
        <TouchableOpacity 
          style={headerStyles.title}
          onPress={() => handleNavigate('/')}>
          <Text style={headerStyles.titleText}>
            {routes.find(route => route.index)?.label || 'Home'}
          </Text>
        </TouchableOpacity>

        {isWeb ? (
          <>
            <View style={headerStyles.links}>
              {renderLinks()}
            </View>
            <TouchableOpacity 
              style={{
                backgroundColor: '#3498db',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: [{ translateY: -20 }],
              }}
              onPress={() => nav.navigate('login')}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#3498db',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
                position: 'absolute',
                right: 120,
                top: '50%',
                transform: [{ translateY: -20 }],
              }}
              onPress={() => nav.navigate('profile')}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Profile</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={headerStyles.links}>
              {renderLinks()}
            </View>

            <TouchableOpacity
              style={headerStyles.menuButton}
              onPress={() => setIsMenuOpen(!isMenuOpen)}>
              <Text style={headerStyles.menuIcon}>
                {isMenuOpen ? '×' : '☰'}
              </Text>
            </TouchableOpacity>

            {isMenuOpen && (
              <Animated.View style={[headerStyles.mobileMenu, slideIn]}>
                {renderMenuItems()}
              </Animated.View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default Header;
