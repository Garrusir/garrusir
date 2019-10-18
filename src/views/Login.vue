<template>
<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Вход</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      :rules="nameRules"
                      label="Логин"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      label="Пароль"
                      type="password"
                      required
                    ></v-text-field>

                  <v-alert type="error" v-if="error">
                     {{error}}
                  </v-alert>

                    <v-btn
                      :disabled="!valid"
                      color="primary"
                      class="mr-4"
                      @click="validate"
                    >
                      Войти
                    </v-btn>

                  </v-form>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>




</template>

<script>
  export default {
    data: () => ({
      error: '',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Логин обязателен',
        v => (v && v.length <= 10) || 'Логин должен быть не более 10 символов',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v => (v && v.length >= 5) || 'Пароль должен быть не менее 5 символов',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
            this.$store.dispatch('authReq', {'login': this.name, 'password': this.password})
            .then(()=>{
              console.log('asdsa');
              this.$router.push('/')
            })
            .catch(()=>{
              this.error = "Ошибка входа"
            })

        }
      },
    },
  }
</script>