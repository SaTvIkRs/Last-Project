import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { AirbnbRating, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;
  }

  getMovie = () => {
    const url =
      "https://f967-2405-201-8008-e095-91c9-627b-6442-8312.ngrok.io/movies";
    axios
      .get(url)
      .then((response) => {
        let details = response.data.data;
        details["duration"] = this.timeConvert(details.duration);
        this.setState({ movieDetails: details });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  likedMovie = () => {
    const url =
      "https://f967-2405-201-8008-e095-91c9-627b-6442-8312.ngrok.io/like";
    axios
      .post(url)
      .then((response) => {
        this.getMovie();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  unlikedMovie = () => {
    const url =
      "https://f967-2405-201-8008-e095-91c9-627b-6442-8312.ngrok.io/dislike";
    axios
      .post(url)
      .then((response) => {
        this.getMovie();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  notWatched = () => {
    const url =
      "https://f967-2405-201-8008-e095-91c9-627b-6442-8312.ngrok.io/did_not_watch";
    axios
      .post(url)
      .then((response) => {
        this.getMovie();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const { movieDetails } = this.state;
    if (movieDetails.poster_link) {
      const { poster_link, title, release_date, duration, overview, rating } = movieDetails;

      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/bg.png")}
            style={{ flex: 1 }}
          >
            <View
              style={styles.headerContainer}
            >
              <Text style={styles.headerTitle}>Movie Recommendation</Text>
              <Icon
                name="chevron-right"
                type="feather"
                color={"white"}
                size= {RFValue(30)}
                containerStyle={{position:"absolute",right:RFValue(5)}}
                onPress={() => {
                  this.props.navigation.navigate("Movies");
                }}
              ></Icon>
            </View>

            <View style={styles.subContainer}>
              <View style={styles.posterContainer}>
                <Image
                  style={styles.posterImage}
                  source={{ uri: poster_link }}
                />
              </View>
              <View style={{flex:0.15}}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{`${
                      release_date.split("-")[0]
                    } | ${duration}`}</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <AirbnbRating
                  count={5}
                  reviews={["", "", "", "", ""]}
                  defaultRating={rating}
                  isDisabled={true}
                  size={RFValue(25)}
                  starContainerStyle={{ marginTop: RFValue(-30) }}
                />
              </View>
              <View style={styles.iconButtonContainer}>
                <TouchableOpacity onPress={this.likedMovie}>
                  <Image
                    style={styles.iconImage}
                    source={require("../assets/like.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.unlikedMovie}>
                  <Image
                    style={styles.iconImage}
                    source={require("../assets/dislike.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.notWatched}>
                  <Image
                    style={styles.iconImage}
                    source={require("../assets/didNotWatch.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 0.07,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor:"#182854"
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(18),
    fontFamily: "monospace",
    textAlign: "center",
    flex: 1
  },
  subContainer: {
    flex: 0.9,
  },
  posterContainer: {
    flex: 0.65,
    marginBottom:RFValue(10),
    justifyContent: "center",
    alignItems: "center",
  },
  posterImage: {
    width: RFValue(280),
    height: RFValue(380),
    resizeMode: "stretch",
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(5),
  },
  detailsContainer: {
    width: RFValue(280),
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: RFValue(10),
    marginHorizontal: RFValue(10),
    padding: RFValue(10),
    borderColor:"#182854",
    borderWidth:RFValue(2)
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  subtitle: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  ratingContainer: {
    flex: 0.1,
  },
  overview: {
    fontSize: RFValue(13),
    color: "#182854",
    fontFamily: "monospace",
    marginVertical: RFValue(5),
  },
  iconButtonContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconImage: {
    width: RFValue(50),
    height: RFValue(50),
  },
});
