import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Header from '../components/Header';
import ProfileDetails, { ProfileDetailsData } from '../components/ProfileDetails';
import ProfileList from '../components/ProfileList';
import styles from '../styles/profileStyles';

interface ProfileScreenProps {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [imageUri, setImageUri] = useState('');
  const [photos, setPhotos] = useState<Array<{ uri: string }>>([]);
  const [profiles, setProfiles] = useState<ProfileDetailsData[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<ProfileDetailsData | null>(null);

  const handleImageUpload = async () => {
    if (Platform.OS === 'web') {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      
      input.onchange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImageUri(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };
      
      input.click();
    } else {
      try {
        const options: ImagePicker.ImageLibraryOptions = {
          mediaType: 'photo',
          quality: 0.7,
          includeBase64: false,
        };

        const result = await ImagePicker.launchImageLibrary(options);

        if (result.didCancel) {
          console.log('User cancelled image picker');
        } else if (result.errorCode) {
          console.log('ImagePicker Error:', result.errorMessage);
          Alert.alert('Error', 'Failed to pick image');
        } else if (result.assets && result.assets[0].uri) {
          setImageUri(result.assets[0].uri);
        }
      } catch (error) {
        console.error('Image picker error:', error);
        Alert.alert('Error', 'Failed to open image picker');
      }
    }
  };

  const handleMultiplePhotos = async () => {
    if (photos.length >= 10) {
      if (Platform.OS === 'web') {
        alert('Maximum 10 photos allowed');
      } else {
        Alert.alert('Limit Reached', 'Maximum 10 photos allowed');
      }
      return;
    }

    if (Platform.OS === 'web') {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.accept = 'image/*';

      input.onchange = (e: any) => {
        const files = Array.from(e.target.files || []);
        const remainingSlots = 10 - photos.length;
        const selectedFiles = files.slice(0, remainingSlots);

        selectedFiles.forEach((file: any) => {
          const reader = new FileReader();
          reader.onload = () => {
            setPhotos(prev => {
              if (prev.length >= 10) return prev;
              return [...prev, { uri: reader.result as string }];
            });
          };
          reader.readAsDataURL(file);
        });
      };

      input.click();
    } else {
      try {
        const options: ImagePicker.ImageLibraryOptions = {
          mediaType: 'photo',
          selectionLimit: 10 - photos.length,
          quality: 0.7,
          includeBase64: false,
        };

        const result = await ImagePicker.launchImageLibrary(options);

        if (result.didCancel) {
          console.log('User cancelled image picker');
        } else if (result.errorCode) {
          console.log('ImagePicker Error:', result.errorMessage);
          Alert.alert('Error', 'Failed to pick image');
        } else if (result.assets) {
          const newPhotos = result.assets.map(asset => ({ uri: asset.uri || '' }));
          setPhotos(prev => [...prev, ...newPhotos].slice(0, 10));
        }
      } catch (error) {
        console.error('Image picker error:', error);
        Alert.alert('Error', 'Failed to open image picker');
      }
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveProfile = (data: ProfileDetailsData) => {
    if (selectedProfile) {
      // Update existing profile
      setProfiles(profiles.map(p => 
        p.email === selectedProfile.email ? data : p
      ));
      setSelectedProfile(null);
      Platform.OS === 'web' 
        ? alert('Profile updated successfully')
        : Alert.alert('Success', 'Profile updated successfully');
    } else {
      // Create new profile
      setProfiles([...profiles, data]);
      Platform.OS === 'web'
        ? alert('Profile saved successfully')
        : Alert.alert('Success', 'Profile saved successfully');
    }
  };

  const handleEditProfile = (profile: ProfileDetailsData) => {
    setSelectedProfile(profile);
  };

  const handleDeleteProfile = (profile: ProfileDetailsData) => {
    setProfiles(profiles.filter(p => p.email !== profile.email));
    if (selectedProfile?.email === profile.email) {
      setSelectedProfile(null);
    }
    Platform.OS === 'web'
      ? alert('Profile deleted successfully')
      : Alert.alert('Success', 'Profile deleted successfully');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Profile Photo Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile Photo</Text>
            <View style={styles.photoSection}>
              <TouchableOpacity
                style={styles.photoContainer}
                onPress={handleImageUpload}
              >
                {imageUri ? (
                  <Image
                    source={{ uri: imageUri }}
                    style={styles.photo}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.placeholderContainer}>
                    <Text style={styles.placeholderText}>Add Photo</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Profile Details Form */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile Details</Text>
            <ProfileDetails 
              onSave={handleSaveProfile} 
              initialData={selectedProfile}
            />
          </View>

          {/* Profile List */}
          <ProfileList 
            profiles={profiles} 
            onEdit={handleEditProfile}
            onDelete={handleDeleteProfile}
          />

          {/* Gallery Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <View style={styles.galleryContainer}>
              {photos.map((photo, index) => (
                <View key={index} style={styles.photoContainer}>
                  <Image
                    source={{ uri: photo.uri }}
                    style={styles.photo}
                    resizeMode="cover"
                  />
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removePhoto(index)}
                  >
                    <Text style={styles.removeButtonText}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
              {photos.length < 10 && (
                <TouchableOpacity
                  style={[styles.photoContainer, styles.addPhotoButton]}
                  onPress={handleMultiplePhotos}
                >
                  <Text style={styles.addPhotoText}>+</Text>
                  <Text style={styles.addPhotoLabel}>
                    Add Photos ({10 - photos.length} remaining)
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
