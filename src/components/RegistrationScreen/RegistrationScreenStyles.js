import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },

  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 78,
    width: '100%',
    height: '67%',
    position: 'relative',
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  userPhotoContainer: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 0,
    transform: 'translateY(-60px)',
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  userPhoto: { width: 120, height: 120, borderRadius: 16 },

  imageWrap: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: -12.5,
    bottom: 14,

    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: '50%',
    borderColor: '#FF6C00',
    backgroundColor: 'white',
  },

  image: { width: 13, height: 13 },

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

  passwordWrap: { width: '100%', position: 'relative' },

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
