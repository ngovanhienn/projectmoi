import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  category: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderRadius: 20,
    backgroundColor: '#70472A',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   
  },
  catetitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
  },
  catename: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  cateinfo: {
    fontSize: 14,
    marginTop: 5,
  },
  catebottom: {
    padding: 15,
  },
});

// export default styles;

export default styles;
