<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Data Cuaca Jakarta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <!-- Loading State -->
      <div v-if="loading" class="ion-text-center ion-padding">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Memuat data cuaca...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="ion-padding">
        <ion-text color="danger">
          <p>{{ error }}</p>
        </ion-text>
      </div>

      <!-- Data Table -->
      <div v-else>
        <ion-list>
          <ion-list-header>
            <ion-label class="header-cell"><strong>Waktu</strong></ion-label>
            <ion-label class="header-cell ion-text-center"
              ><strong>Suhu (°C)</strong></ion-label
            >
          </ion-list-header>

          <ion-item v-for="(entry, index) in weatherList" :key="index">
            <ion-label>{{ formatTime(entry.time) }}</ion-label>
            <ion-badge slot="end" :color="tempColor(entry.temperature_2m)">
              {{ entry.temperature_2m }} °C
            </ion-badge>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonBadge,
  IonSpinner,
  IonText,
} from "@ionic/vue";
import WeatherService, { WeatherEntry } from "@/services/WeatherAccess";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonBadge,
    IonSpinner,
    IonText,
  },
  data() {
    return {
      weatherList: [] as WeatherEntry[],
      loading: true,
      error: "",
    };
  },
  async mounted() {
    try {
      this.loading = true;
      this.weatherList = await WeatherService.getWeather();
    } catch (err) {
      this.error = "Gagal memuat data cuaca. Silakan coba lagi.";
      console.error(err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatTime(isoTime: string): string {
      const date = new Date(isoTime);
      return date.toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    tempColor(temp: number): string {
      if (temp >= 35) return "danger";
      if (temp >= 30) return "warning";
      return "primary";
    },
  },
});
</script>

<style scoped>
.header-cell {
  font-weight: bold;
  color: var(--ion-color-dark);
}

ion-badge {
  font-size: 0.9rem;
  padding: 6px 10px;
}
</style>
