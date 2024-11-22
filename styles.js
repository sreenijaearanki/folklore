import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCE4EC', // Light Maroon Background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000', // Primary Maroon
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#4E342E', // Dark Text
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#A52A2A', // Secondary Maroon Border
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    color: '#4E342E',
  },
  button: {
    backgroundColor: '#800000', // Primary Maroon Button
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleText: {
    fontSize: 14,
    color: '#4E342E', // Dark Text
    marginTop: 20,
  },
  link: {
    color: '#800000', // Primary Maroon Link
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#A52A2A', // Secondary Maroon Border
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  socialText: {
    color: '#800000', // Primary Maroon Text
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  rememberMe: {
    color: '#4E342E',
  },
  forgotPassword: {
    color: '#800000', // Primary Maroon
    textDecorationLine: 'underline',
  },
});
