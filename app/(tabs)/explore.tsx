import { Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const COLORS = {
  primary: "#0A66C2", // LinkedIn Blue
  background: "#F3F2EF", // LinkedIn Light Grey
  card: "#FFFFFF",
  textMain: "#000000",
  textSecondary: "#666666",
  border: "#E0E0E0",
};

const GuideCard = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.7}>
    <View style={[styles.iconContainer, { backgroundColor: color + "10" }]}>
      <Ionicons name={icon} size={28} color={color} />
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#999" />
  </TouchableOpacity>
);

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Career Resources</Text>
          <Text style={styles.headerSubtitle}>
            Pro-tips to help you get hired faster
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preparation</Text>

          <GuideCard
            title="Optimizing Your Profile"
            description="How to attract more employers with a professional profile."
            icon="newspaper"
            color={COLORS.primary}
          />

          <GuideCard
            title="Resume Best Practices"
            description="Standard formats that work for modern companies."
            icon="document-text"
            color="#057642" // LinkedIn dark green
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Engagement</Text>

          <GuideCard
            title="Networking 101"
            description="How to reach out to recruiters professionally."
            icon="people"
            color="#915907" // LinkedIn brown
          />

          <GuideCard
            title="Interview Skills"
            description="Common questions and how to answer them confidently."
            icon="videocam"
            color="#783EC9"
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Found a listing that looks suspicious?
          </Text>
          <TouchableOpacity style={styles.safetyButton}>
            <Text style={styles.safetyButtonText}>Visit Safety Center</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.textMain,
    fontFamily: Fonts.sans,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
    fontFamily: Fonts.sans,
  },
  section: {
    marginTop: 8,
    backgroundColor: COLORS.card,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textMain,
    fontFamily: Fonts.sans,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.textMain,
    fontFamily: Fonts.sans,
  },
  cardDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
    fontFamily: Fonts.sans,
    lineHeight: 18,
  },
  footer: {
    padding: 24,
    alignItems: "center",
    marginBottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 12,
    fontFamily: Fonts.sans,
  },
  safetyButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  safetyButtonText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: Fonts.sans,
  },
});
