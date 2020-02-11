import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getProfile} from 'hybrid-shared-redux/dist/actions/profile';

const Test = ({getPro, data = {}}) => {
	useEffect(() => {
		getPro();
	}, []);
	return <Text>title is {data.title}</Text>;
};

export default connect(
	({profile}) => ({
		data: profile.data.profile,
	}),
	{getPro: getProfile},
)(Test);
