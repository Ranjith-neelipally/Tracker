import {ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import WelcomeCard from '../../components/WelcomeCard/inde';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {manageAsyncData} from '../../../storage';

const Home = () => {
  const [adminDetails, setadminDetails] = useState<any>();
  const [response, setResponse] = useState<any>();
  const fetchAdminDetails = async () => {
    try {
      const response = await axios.get('http://192.168.31.109:8083/get-admin', {
        params: {
          email: 'ranjithkrn99@gmail.com',
        },
      });
      if (response) {
        setadminDetails(response.data.response);
      }
    } catch (error) {
      setadminDetails(error);
    }
  };

  useEffect(() => {
    fetchAdminDetails();
  }, []);

  const addData = async () => {
    try {
      const result = await manageAsyncData({
        action: 'set',
        collectionName: 'adminData',
        collectionData: {
          name: 'Ranjith',
          age: 22,
        },
      });
      setResponse(result);
    } catch (error) {
      console.error('Error adding data:', error);
      setResponse('Failed to add data');
    }
  };

  const getData = async () => {
    try {
      const result = await manageAsyncData({
        action: 'get',
        collectionName: 'adminData',
      });
      console.log('result', result);
    } catch (error) {
      console.error('Error getting data:', error);
      setResponse('Failed to get data');
    }
  };

  const DeleteData = async () => {
    try {
      const result = await manageAsyncData({
        action: 'remove',
        collectionName: 'adminData',
      });
      console.log('result', result);
    } catch (error) {
      console.error('Error getting data:', error);
      setResponse('Failed to get data');
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <WelcomeCard imageUri={adminDetails && adminDetails.profilePic} />
      <>
        <TouchableOpacity onPress={addData}>
          <Text>click here to add Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={getData}>
          <Text>click here to get Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={DeleteData}>
          <Text>Click here to dete</Text>
        </TouchableOpacity>

        {response && <Text>{response}</Text>}
      </>
    </ScrollView>
  );
};

export default Home;
