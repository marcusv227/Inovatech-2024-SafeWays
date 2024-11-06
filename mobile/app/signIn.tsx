import { View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Button } from '../src/components/button';
import { useRouter } from 'expo-router'
import { Modal } from '../src/components/modal';
import {styles}  from './styles/stylesSignIn'

import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type FormDataProps = {
  name: string
  email: string
  number: string
  cpf: string
  password: string
  password_confirm: string
}

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o email").email("Email inválido"),
  cpf: yup.string().required("Informe o CPF").min(11, "O CPF deve ter 11 dígitos"),
  number: yup.string().required("Informe o número").min(11, "O número deve ter 11 digitos"),
  password: yup.string().required("Informe a senha").min(6, "A senha dever ter pelo menos 6 dígitos"),
  password_confirm: yup.string().required('Confirme sua senha').oneOf([yup.ref("password"), ""], "A senha não confere")

})


export default function SignIn({ setScreen }) {
  const {control,handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const router = useRouter();

  
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleConfirmBack = () => {
    hideModal();
    router.push('/(tabs)/profile');
  };

  function handleSignUp({name,email,password, password_confirm}:FormDataProps){
    console.log(name, email,password, password_confirm)
  }


 
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
      <View style={styles.container}>
   
      <View style={styles.formContainer}>
        <View>
          <View style={styles.logo}>
            
            <Text  variant='headlineLarge' >Crie sua conta</Text>
        </View>
          </View>
          

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Nome</Text>

          <Controller 
            control={control} 
            name='name' 
        
          render={({ field: {onChange, value}}) => (
            <TextInput
              placeholder='Digite seu Nome...' 
              mode="outlined" 
              right={<TextInput.Icon icon='text' />}
              theme={{colors: {background: "ffffff"} }}
              onChangeText={onChange}
              value={value}  
            />
          )}/>
          {
            errors.name?.message && <Text style={{color: 'red'}}>{ errors.name.message }</Text>
          }
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <Controller
           control={control} 
           name='email' 
           
           render={({ field: {onChange, value}})  => (
              <TextInput
                placeholder='Digite seu email...'  
                mode="outlined" 
                
                right={<TextInput.Icon icon='email' />} 
                theme={{colors: {background: "ffffff"} }}
                onChangeText={onChange}
                value={value}
              />
          )}/>
          {
            errors.email?.message && <Text style={{color: 'red'}}>{ errors.email.message }</Text>
          }


        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Digite seu CPF</Text>

          <Controller 
          control={control} 
          name='cpf' 
        
          render={({ field: {onChange, value}}) => (
            <TextInput
              placeholder='Digite seu CPF...'  
              mode="outlined" 
              theme={{colors: {background: "ffffff"} }}
              onChangeText={onChange}
              value={value}
              
              
            />
          )}/>
          {
            errors.password_confirm?.message && <Text style={{color: 'red'}}>{ errors.password_confirm.message }</Text>
          }
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Digite seu número</Text>

          <Controller 
          control={control} 
          name='number' 
        
          render={({ field: {onChange, value}}) => (
            <TextInput
              placeholder='Digite seu número...'  
              mode="outlined" 

              theme={{colors: {background: "ffffff"} }}
              onChangeText={onChange}
              value={value}
              
              
            />
          )}/>
          {
            errors.password_confirm?.message && <Text style={{color: 'red'}}>{ errors.password_confirm.message }</Text>
          }
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Senha</Text>
          <Controller 
          control={control} 
          name='password' 
        
          render={({ field: {onChange, value}}) => (
            <TextInput
              placeholder='Digite sua senha...'  
              mode="outlined" 
              secureTextEntry right={<TextInput.Icon icon="eye" />}
              theme={{colors: {background: "ffffff"} }}
              onChangeText={onChange}
              value={value}
              
            />
          )}/>
          {
            errors.password?.message && <Text style={{color: 'red'}}>{ errors.password.message }</Text>
          }
          
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Confirme a senha</Text>

          <Controller 
          control={control} 
          name='password_confirm' 
        
          render={({ field: {onChange, value}}) => (
            <TextInput
              placeholder='Confirme a senha'  
              mode="outlined" 
              secureTextEntry right={<TextInput.Icon icon="eye" />}
              theme={{colors: {background: "ffffff"} }}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType='send'
              
            />
          )}/>
          {
            errors.password_confirm?.message && <Text style={{color: 'red'}}>{ errors.password_confirm.message }</Text>
          }
        </View>

      
        <View style={styles.createButton}>
          <Button children="Voltar" mode='contained' icon="arrow-left" style={styles.button} onPress={() => setScreen('logo')}/>
          <Button children='Criar ' mode='contained' icon="check" style={styles.button} onPress={handleSubmit(handleSignUp)}/>
        </View>
        
      </View>
        <Modal message='Todos os dados preenchidos serão apagados. Tem certeza de que deseja voltar?' visible={visible} onConfirm={handleConfirmBack} onDismiss={hideModal}/>
    
      
    </View>
  </ScrollView>
    
  );
}



SignIn.options = {
  headerShow: false,
}