import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "20px",
  },
  avatarLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  avatarImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  avatarName: {
    color: "#fff",
  },
});

export default styles;
