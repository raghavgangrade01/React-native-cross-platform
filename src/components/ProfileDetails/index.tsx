import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { INDIAN_STATES } from '../../constants/indianStates';
import styles from './styles';

export interface ProfileDetailsData {
  name: string;
  email: string;
  age: string;
  gender: string;
  state: string;
}

interface ProfileDetailsProps {
  onSave?: (data: ProfileDetailsData) => void;
  initialData?: ProfileDetailsData | null;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState<ProfileDetailsData>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    age: initialData?.age || '',
    gender: initialData?.gender || 'male',
    state: initialData?.state || INDIAN_STATES[0]
  });

  // Update form when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        email: initialData.email,
        age: initialData.age,
        gender: initialData.gender,
        state: initialData.state
      });
    } else {
      // Reset form when not editing
      setFormData({
        name: '',
        email: '',
        age: '',
        gender: 'male',
        state: INDIAN_STATES[0]
      });
    }
  }, [initialData]);

  const validateForm = () => {
    if (!formData.name.trim()) {
      Platform.OS === 'web' ? alert('Name is required') : Alert.alert('Error', 'Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      Platform.OS === 'web' ? alert('Email is required') : Alert.alert('Error', 'Email is required');
      return false;
    }
    if (!formData.age.trim()) {
      Platform.OS === 'web' ? alert('Age is required') : Alert.alert('Error', 'Age is required');
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave?.(formData);
    }
  };

  const renderSelect = (
    value: string,
    onChange: (value: string) => void,
    options: Array<{ label: string; value: string }>,
  ) => {
    if (Platform.OS === 'web') {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={styles.webSelect}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          style={styles.picker}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {initialData ? 'Edit Profile' : 'Create Profile'}
      </Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={formData.age}
          onChangeText={(text) => setFormData({ ...formData, age: text })}
          placeholder="Enter your age"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender</Text>
        {renderSelect(
          formData.gender,
          (value) => setFormData({ ...formData, gender: value }),
          [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>State</Text>
        {renderSelect(
          formData.state,
          (value) => setFormData({ ...formData, state: value }),
          INDIAN_STATES.map(state => ({ label: state, value: state }))
        )}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>
          {initialData ? 'Update Profile' : 'Save Profile'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDetails;
