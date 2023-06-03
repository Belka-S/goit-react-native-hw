import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  // Header
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.25,
    borderColor: '#E8E8E8',
  },

  titleBtn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
  },

  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },

  // Hero
  hero: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  userContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },

  userPhoto: { marginRight: 8, width: 60, height: 60, borderRadius: 16 },

  userName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#212121',
  },

  userEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },

  image: {
    marginBottom: 8,
    height: 240,
    borderRadius: 8,
  },

  imageTitle: {
    marginBottom: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },

  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  comments: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  location: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
    textDecorationColor: '#212121',
  },

  // Footer
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.25,
    borderColor: '#E8E8E8',
  },

  addBtn: {
    marginLeft: 40,
    marginRight: 40,
    padding: 16,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#FF6C00',
  },

  // Common
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },

  logImage: { width: 24, height: 24 },
  addImage: { width: 14, height: 14 },
});
