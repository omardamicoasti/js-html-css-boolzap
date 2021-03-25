var app = new Vue({
  el: "#app",

  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
    // chiusura array contacts
    contactCounter: 0,
    colorContact: "",
    newText: "",
    searchBar: "",
    hideContact: false,
  }, // chiusura data

  methods: {
    changeNotifications: function () {
      this.notificationsOnOff = "far fa-bell";
      this.notificationsText = "Disattiva notifiche via desktop";
    },
    // metodo per mostrare conversazione del contatto su cui clicco
    showConversation: function (index) {
      this.contactCounter = index;
      this.colorContact = "background-color: grey;";
    },
    // metodo per inviare nuovo messaggio
    sendMessage: function () {
      // gestione data
      var date = new Date();
      var format = { year: "numeric", month: "2-digit", day: "2-digit" };
      // gestione nuovo messaggio
      let newMessage = {
        // date: "10/01/2020 15:50:00",
        date:
          date.toLocaleDateString(undefined, format) +
          " " +
          date.toLocaleTimeString(),
        text: this.newText,
        status: "sent",
      };
      this.contacts[this.contactCounter].messages.push(newMessage);
      this.newText = "";
      setTimeout(this.receiveAnswer, 3000);
    },
    // metodo per ricevere messaggio automatico di risposta
    receiveAnswer: function () {
      // gestione data
      var date = new Date();
      var format = { year: "numeric", month: "2-digit", day: "2-digit" };
      // gestione nuova risposta
      let newAnswer = {
        date:
          date.toLocaleDateString(undefined, format) +
          " " +
          date.toLocaleTimeString(),
        text: "Ok, perfetto!",
        status: "received",
      };
      this.contacts[this.contactCounter].messages.push(newAnswer);
    },
    messageDate: function () {
      // se dichiaro variabili qui dentro anche con var inserendole poi nei metodi invio e ricevi non le vede
    },
    // LA FUNZIONE QUI SOTTO NON VA PERO' STO PROVANDO A SEGUIRE QUESTO RAGIONAMENTO
    searchContact: function () {
      for (let i = 0; i < this.contacts.length; i++) {
        if (!this.contacts[i].name.includes(this.searchBar)) {
          this.hideContact = true;
        } else  {

        }
      } 
    },
  }, // chiusura methods
}); // chiusura vue
Vue.config.devtools = true;
