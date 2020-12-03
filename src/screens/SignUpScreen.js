import React, {useState} from 'react';
import styled from 'styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Text from '../components/Text';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Main>
        <Text title semi center>
          Sign In to get started
        </Text>
      </Main>

      <ProfilePhotoContainer>
        <DefaultProfilePhoto>
          <AntDesign name="plus" size={24} color="#ffffff" />
        </DefaultProfilePhoto>
      </ProfilePhotoContainer>

      <Auth>
        <AuthContainer>
          <AuthTitle>Username</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setUsername(text.trim())}
            value={username}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Email Address</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text.trim())}
            value={email}
          />
        </AuthContainer>

        <AuthContainer>
          <AuthTitle>Password</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text.trim())}
            value={password}
          />
        </AuthContainer>
      </Auth>

      <SignUpContainer disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text bold center color="#ffffff">
            Sign Up
          </Text>
        )}
      </SignUpContainer>

      <SignIn onPress={() => navigation.navigate('SignIn')}>
        <Text small center>
          Already have an account?{' '}
          <Text bold color="#8022d9">
            Sign In
          </Text>
        </Text>
      </SignIn>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 80px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
  background-color: #e1e2e6;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-self: center;
  margin-top: 16px;
  overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Auth = styled.View`
  margin: 10px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: '#ffffff',
  size: 'small',
}))``;

const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

const RightCircle = styled.View`
  background-color: #f5f4b0;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 100px;
  top: -200px;
  right: -100px;
`;

const LeftCircle = styled.View`
  background-color: #b0e6f5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50px;
  top: -50px;
  left: -50px;
`;

const StatusBar = styled.StatusBar``;

export default SignUpScreen;

