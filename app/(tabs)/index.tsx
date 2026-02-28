import { Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// LinkedIn-inspired Color Palette
const COLORS = {
  primary: "#0A66C2", // LinkedIn Blue
  background: "#F3F2EF", // LinkedIn Light Grey Background
  card: "#FFFFFF",
  textMain: "#000000",
  textSecondary: "#666666",
  border: "#E0E0E0",
  link: "#004182",
};

// Dummy data for jobs
const JOBS_DATA = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore, Karnataka",
    salary: "₹80,000 - ₹1.2L",
    posted: "2d ago",
    logo: "code-working",
    logoBg: "#E8F2FF",
    mapsUrl: "https://goo.gl/maps/xyz123",
  },
  {
    id: "2",
    title: "Product Designer",
    company: "Creative Minds",
    location: "Mumbai, Maharashtra",
    salary: "₹60,000 - ₹90K",
    posted: "1w ago",
    logo: "color-palette",
    logoBg: "#FFEEED",
    mapsUrl: "https://goo.gl/maps/abc456",
  },
  {
    id: "3",
    title: "Mobile App Engineer",
    company: "App Builders Inc.",
    location: "Remote, India",
    salary: "₹75,000 - ₹1.1L",
    posted: "3h ago",
    logo: "phone-portrait",
    logoBg: "#F0FFF4",
    mapsUrl: "https://goo.gl/maps/def789",
  },
  {
    id: "4",
    title: "Backend Developer",
    company: "Data Systems Group",
    location: "Pune, Maharashtra",
    salary: "₹90,000 - ₹1.3L",
    posted: "5d ago",
    logo: "server",
    logoBg: "#FFF7ED",
    mapsUrl: "https://goo.gl/maps/ghi012",
  },
];

const JobCard = ({ item }: { item: (typeof JOBS_DATA)[0] }) => {
  const handleApply = () => {
    alert(`Applied for ${item.title}`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.logoContainer, { backgroundColor: item.logoBg }]}>
          <Ionicons name={item.logo as any} size={24} color={COLORS.primary} />
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.jobTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.companyName}>{item.company}</Text>
          <Text style={styles.locationText}>{item.location}</Text>
          <Text style={styles.postedText}>{item.posted}</Text>
        </View>
      </View>

      <View style={styles.salarySection}>
        <Text style={styles.salaryLabel}>Salary Range</Text>
        <Text style={styles.salaryValue}>{item.salary}</Text>
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

      {/* Search/Profile Header */}
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.avatarMini}>
          <Ionicons name="person-circle" size={36} color="#999" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color={COLORS.textSecondary} />
          <Text style={styles.searchText}>Search jobs...</Text>
        </View>
        <TouchableOpacity style={styles.headerAction}>
          <Ionicons
            name="chatbubble-ellipses"
            size={24}
            color={COLORS.textSecondary}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={JOBS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            <Text style={styles.sectionSubtitle}>
              Based on your profile and search history
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topHeader: {
    backgroundColor: COLORS.card,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  avatarMini: {
    marginRight: 12,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#EEF3F8",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  searchText: {
    marginLeft: 10,
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily: Fonts.sans,
  },
  headerAction: {
    marginLeft: 16,
  },
  listHeader: {
    padding: 16,
    backgroundColor: COLORS.card,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textMain,
    fontFamily: Fonts.sans,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
    fontFamily: Fonts.sans,
  },
  listContent: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: COLORS.card,
    padding: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.border,
  },
  cardHeader: {
    flexDirection: "row",
    marginBottom: 16,
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
    fontFamily: Fonts.sans,
    lineHeight: 20,
  },
  companyName: {
    fontSize: 14,
    color: COLORS.textMain,
    marginTop: 2,
    fontFamily: Fonts.sans,
  },
  locationText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 2,
    fontFamily: Fonts.sans,
  },
  postedText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
    fontFamily: Fonts.sans,
  },
  salarySection: {
    backgroundColor: "#F9FAFB",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  salaryLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  salaryValue: {
    fontSize: 15,
    color: COLORS.textMain,
    fontWeight: "700",
    marginTop: 2,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: Fonts.sans,
  },
});
