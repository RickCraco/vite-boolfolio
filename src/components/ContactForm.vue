<template>
<form @submit.prevent="submitForm()">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Indirizzo</label>
        <input type="text" class="form-control" id="address" v-model="address" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <textarea class="form-control" id="message" rows="5" v-model="message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary me-3">Submit</button>
      <button type="reset" class="btn btn-secondary">Reset</button>
    </form>
</template>

<script>
    import { store } from "../store";
    import axios from "axios";
    export default {
        name: 'ContactForm',
        data(){
            return {
                store,
                name: '',
                email: '',
                address: '',
                message: ''
            }
        },
        methods: {
            submitForm(){
                const formdata = {
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    message: this.message
                }
                axios.post(`${this.store.apiUrl}contacts`, formdata).then((res) => {
                    console.log(res.data);
                    this.name = '';
                    this.email = '';
                    this.address = '';
                    this.message = '';
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>