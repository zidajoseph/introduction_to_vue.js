const app = new Vue({
  el: '#app',
  data: {
    errorMessage: 'Les e-mails ne correspondent pas',
    formData: {
      name: '',
      email: '',
      emailConfirm: '',
      content: '',
      region: '',
    },
    regions: [
      { id: 1, name: 'Tohoku (les six préfectures les plus au nord de Honshu)' },
      { id: 2, name: 'Kantou (moitié orientale du Japon, y compris Tokyo)' },
      { id: 3, name: 'Kansai (moitié sud-ouest du Japon, y compris Osaka)' }
    ],
    confirmView: false,
  },
  methods: {
    openCheckArea() {
      //Remise en état de l'exigence 2.
      if (!this.validation) return false;
      this.confirmView = true;
    },
    closeCheckArea() {
      this.confirmView = false;
    }
  },
  computed: {
    // Remise à neuf de l'exigence 1.
    validation: function() {
      return this.formData.email === '' || this.formData.emailConfirm === '' || this.formData.email === this.formData.emailConfirm
    },
    // Remise à neuf de l'exigence 3.
    errorClass: function() {
      return this.validation ? false : 'alert_bg';
    }
  },
})