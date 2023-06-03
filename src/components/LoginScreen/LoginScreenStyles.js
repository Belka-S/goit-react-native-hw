import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },

  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 78,
    width: '100%',
    height: '60%',
    position: 'relative',
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  titleText: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'medium',
    fontSize: 30,
  },

  mainText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#1B4371',
  },

  input: {
    marginBottom: 16,
    padding: 16,
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },

  button: {
    padding: 16,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#FF6C00',
  },

  passwordWrap: {
    width: '100%',
    position: 'relative',
  },

  passwordBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },
});
