<template>
  <div class="container" data-view>
    <div class="container__inner">
      <div>
        <Header />
        <main class="main container__left">
          <div class="main_title">
            {{ $t('home.1') }} <br>
            {{ $t('home.2') }}
          </div>
          <div class="button__big">
            <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 8C16.5 3.6 12.9 0 8.5 0C4.1 0 0.5 3.6 0.5 8C0.5 12.4 4.1 16 8.5 16C9.7 16 10.7 15.8 11.7 15.2L16.5 20L11.7 24.8C10.7 24.2 9.7 24 8.5 24C4.1 24 0.5 27.6 0.5 32C0.5 36.4 4.1 40 8.5 40C12.9 40 16.5 36.4 16.5 32C16.5 30.8 16.3 29.8 15.7 28.8L20.5 24L34.5 38H42.5L15.7 11.2C16.3 10.2 16.5 9.2 16.5 8ZM8.5 12C6.3 12 4.5 10.2 4.5 8C4.5 5.8 6.3 4 8.5 4C10.7 4 12.5 5.8 12.5 8C12.5 10.2 10.7 12 8.5 12ZM8.5 36C6.3 36 4.5 34.2 4.5 32C4.5 29.8 6.3 28 8.5 28C10.7 28 12.5 29.8 12.5 32C12.5 34.2 10.7 36 8.5 36ZM20.5 19C21.1 19 21.5 19.4 21.5 20C21.5 20.6 21.1 21 20.5 21C19.9 21 19.5 20.6 19.5 20C19.5 19.4 19.9 19 20.5 19ZM42.5 2H34.5L22.5 14L26.5 18L42.5 2Z" fill="#313131"/>
            </svg>
            <div>
              <div class="button__big_title"><span class="active">{{ $t('main.1') }}</span> {{ $t('main.2') }}</div>
              <div class="button__big_subtitle">{{ $t('main.3') }}</div>
            </div>
          </div>
          <div class="button__big">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 32C9.8 32 8 33.8 8 36C8 38.2 9.8 40 12 40C14.2 40 16 38.2 16 36C16 33.8 14.2 32 12 32ZM0 0V4H4L11.2 19.2L8.4 24C8.2 24.6 8 25.4 8 26C8 28.2 9.8 30 12 30H36V26H12.8C12.6 26 12.4 25.8 12.4 25.6V25.4L14.2 22H29C30.6 22 31.8 21.2 32.4 20L39.6 7C40 6.6 40 6.4 40 6C40 4.8 39.2 4 38 4H8.4L6.6 0H0ZM32 32C29.8 32 28 33.8 28 36C28 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36C36 33.8 34.2 32 32 32Z" fill="#313131"/>
            </svg>
            <div>
              <div class="button__big_title"><span class="active">{{ $t('main.4') }}</span> {{ $t('main.5') }}</div>
              <div class="button__big_subtitle">{{ $t('main.6') }}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Slider />
    <Banner />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: 'Home',
  components: {Header, Banner, Slider},
}
</script>
