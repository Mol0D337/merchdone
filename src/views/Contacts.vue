<template>
  <div class="container" data-view>
    <div class="container__inner">
      <div>
        <Header />
        <div class="contacts">
          <img src="../assets/image/vika.png" alt="Viktoria">
          <div>
            <div class="contacts__author">Вікторія</div>
            <div class="contacts__text">МЕНЕДЖЕРКА <br> ЯКА ВСЕ ПІДКАЖЕ</div>
          </div>
          <div>
            <div class="contacts__title">Ми раді запитанням</div>
            <div class="contacts__title contacts__title_green">+380445134491</div>
            <div class="contacts__subtitle">inbox@merchdone.com</div>
            <a href="https://t.me/Mol0D" target="_blank" class="contacts__subtitle active">написати в telegram</a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "Contacts",
    components: {Header, Footer},
  }
</script>

<style scoped>

</style>
