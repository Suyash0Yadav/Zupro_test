import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dummy data for jobs
const JOBS_DATA = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    payment: "₹80,000 - ₹1,20,000",
    dateJoining: "15th March 2024",
    location: "Bangalore, Karnataka",
    mapsUrl: "https://goo.gl/maps/xyz123",
  },
  {
    id: "2",
    title: "Product Designer",
    payment: "₹60,000 - ₹90,000",
    dateJoining: "1st April 2024",
    location: "Mumbai, Maharashtra",
    mapsUrl: "https://goo.gl/maps/abc456",
  },
  {
    id: "3",
    title: "Mobile App Engineer (React Native)",
    payment: "₹75,000 - ₹1,10,000",
    dateJoining: "20th March 2024",
    location: "Remote, India",
    mapsUrl: "https://goo.gl/maps/def789",
  },
  {
    id: "4",
    title: "Backend Developer (Node.js)",
    payment: "₹90,000 - ₹1,30,000",
    dateJoining: "Immediate",
    location: "Pune, Maharashtra",
    mapsUrl: "https://goo.gl/maps/ghi012",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    payment: "₹40,000 - ₹55,000",
    dateJoining: "10th April 2024",
    location: "New Delhi, Delhi",
    mapsUrl: "https://goo.gl/maps/jkl345",
  },
];

const JobCard = ({ item }: { item: (typeof JOBS_DATA)[0] }) => {
  const handleOpenMaps = () => {
    Linking.openURL(item.mapsUrl).catch((err) =>
      console.error("An error occurred", err),
    );
  };

  const handleApply = () => {
    alert(`Applied for ${item.title}`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.payment}>{item.payment}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.detailText}>Joining: {item.dateJoining}</Text>
        </View>

        <TouchableOpacity
          style={styles.detailItem}
          onPress={handleOpenMaps}
          activeOpacity={0.7}
        >
          <Ionicons name="location-outline" size={16} color="#2E7DFF" />
          <Text style={[styles.detailText, styles.locationText]}>
            {item.location}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={handleApply}
        activeOpacity={0.8}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Zupro</Text>
        <Text style={styles.headerSubtitle}>Find your next opportunity</Text>
      </View>

      <FlatList
        data={JOBS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  cardHeader: {
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  payment: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2E7DFF",
  },
  detailsContainer: {
    gap: 8,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
  },
  locationText: {
    color: "#2E7DFF",
    textDecorationLine: "underline",
  },
  applyButton: {
    backgroundColor: "#2E7DFF",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
