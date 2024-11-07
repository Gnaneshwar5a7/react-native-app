import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, TextInput, View} from 'react-native';
import {memo, useState} from 'react';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import FloatingButton from './FloatingButton';
import textStyles from '../styles/textStyles';
import Colors from '../styles/Colors';
import style from '../styles/style';
import RNText from './RNText';

interface PropType {
  name: string;
  type?: 'text' | 'password' | 'number';
  placeHolder?: string;
  color: 'dark' | 'light';
  readOnly?: boolean;
  control: Control<any, any>;
  rules?: RegisterOptions<FieldValues, string>;
}

interface RenderInputComponentProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
}

function Input({
  type,
  color,
  control,
  placeHolder,
  readOnly,
  name,
  rules,
}: PropType) {
  const RenderInputComponent = ({
    field,
    fieldState,
  }: RenderInputComponentProps) => {
    const [secureTextEntry, setSecureTextEntry] = useState(type === 'password');
    return (
      <View>
        <RNText text={name} type={color} />
        <View
          style={[
            styles.inputContainer,
            style.shadow,
            color !== 'dark'
              ? {
                  backgroundColor: Colors.seconderyBackground,
                }
              : {backgroundColor: Colors.secondery},
            fieldState.error && styles.errorInput,
          ]}>
          <TextInput
            readOnly={readOnly}
            autoCorrect={false}
            style={[
              color === 'dark' ? textStyles.darkText : textStyles.lightText,
              style.grow,
              readOnly && {opacity: 0.5},
              styles.input,
            ]}
            placeholder={placeHolder}
            placeholderTextColor={
              color === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'
            }
            value={field.value}
            onChangeText={field.onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={type === 'number' ? 'number-pad' : 'ascii-capable'}
          />
          {type === 'password' && (
            <FloatingButton
              onPress={e => {
                setSecureTextEntry(!secureTextEntry);
              }}
              right={5}
              top={13}>
              {secureTextEntry ? (
                <Icon size={20} name="eye" color={Colors.secondery} />
              ) : (
                <Icon size={20} name="eye-off" color={Colors.secondery} />
              )}
            </FloatingButton>
          )}
        </View>
        <RNText
          text={fieldState.error && fieldState.error?.message}
          type="warn"
        />
      </View>
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      render={RenderInputComponent}
      rules={rules}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  errorInput: {
    borderWidth: 0.5,
    borderColor: 'orange',
  },
  input: {
    padding: 10,
  },
});

export default memo(Input);
