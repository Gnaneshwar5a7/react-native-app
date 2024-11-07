import {memo, useCallback, useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';

import textStyles from '../../../styles/textStyles';
import {AuthContext} from '../../../context/AuthContext';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import RNText from '../../../components/RNText';
import {
  passwordRules,
  usernameRules,
} from '../validations/loginFormValidationRules';

function Form() {
  const {control, handleSubmit, reset} = useForm({mode: 'onSubmit'});
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const context = useContext(AuthContext);
  const navigation = useNavigation<any>();
  const onSubmit = useCallback(
    (data: any) => {
      if (data.Username === 'admin' && data.Password === 'admin') {
        const loginObject = {
          loginStatus: true,
          username: data.Username,
        };
        context?.loginAuthUser(loginObject);
        navigation.replace('auth');
        reset();
      } else {
        setIsLoginFailed(true);
        setTimeout(() => {
          setIsLoginFailed(false);
        }, 1000);
        reset();
      }
    },
    [context, reset],
  );

  return (
    <View style={styles.loginForm}>
      <Input
        placeHolder="abcd"
        name="Username"
        color="light"
        control={control}
        rules={usernameRules}
      />

      <Input
        name="Password"
        placeHolder="****"
        control={control}
        type="password"
        color="light"
        rules={passwordRules}
      />

      <Button onPress={handleSubmit(onSubmit)}>
        <RNText
          text={'Login'}
          type="light"
          size="medium"
          style={textStyles.btnText}
        />
      </Button>

      <View style={styles.errContainer}>
        {isLoginFailed && (
          <RNText
            text={'Wrong Username or Password'}
            type="warn"
            size="medium"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    padding: 20,
  },
  errContainer: {
    height: 50,
    alignItems: 'center',
  },
});
export default memo(Form);
