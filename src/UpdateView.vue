<template>
  <!--  <div class="text-center container">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input v-model="id" label="ID" disable />
            <q-input v-model="fname" label="Firstname" />
            <q-input v-model="lname" label="Lastname" />
            <q-input v-model="username" label="Username" />
            <q-input v-model="password" label="Password" />
            <q-input v-model="email" label="Email" />
            <q-input v-model="avatar" label="Avatar" />
            <q-btn label="Submit" type="submit" />
        </q-form>
    </div>-->

  <div class="container text-lotus-green">
    <form @submit.prevent="validateForm">
      <div class="row ">
        <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
          <h5 for="tagid" class="text-nowrap mr-5 mb-0">Tag ID:</h5>
          <input type="number" class="form-control" id="tadid" v-model="tagid"
            :class="{ 'is-invalid': isTagidInvalid, 'is-valid': !isTagidInvalid }" @input="onTagidInput">
          <div class="invalid-feedback" v-if="isTagidInvalid">
            กรุณาใส่ Tag ID
          </div>
        </div>
        <div class="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex align-items-center mb-3">
          <h5 for="appname" class="text-nowrap mr-5 mb-0">App name:</h5>
          <input type="text" class="form-control" id="appname" v-model="appname"
            :class="{ 'is-invalid': isAppnameInvalid,'is-valid': !isAppnameInvalid }" @input="onAppnameInput">
          <div class="invalid-feedback" v-if="isAppnameInvalid">
            กรุณาใส่ App name
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center mb-3">
          <h5 for="appteam" class="text-nowrap mr-5 mb-0">App team:</h5>
          <input type="text" class="form-control" id="appteam" v-model="appteam"
            :class="{ 'is-invalid': isAppteamInvalid,'is-valid': !isAppteamInvalid }" @input="onAppteamInput">
          <div class="invalid-feedback" v-if="isAppteamInvalid">
            กรุณาใส่ App team
          </div>
        </div>
        <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center mb-3">
          <h5 for="owner" class="text-nowrap mr-5 mb-0">Owner:</h5>
          <input type="text" class="form-control" id="owner" v-model="owner"
            :class="{ 'is-invalid': isOwnerInvalid,'is-valid': !isOwnerInvalid }" @input="onOwnerInput">
          <div class="invalid-feedback" v-if="isOwnerInvalid">
            กรุณาใส่ Owner
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
          <h5 for="hostname" class="text-nowrap mr-5 mb-0">Hostname:</h5>
          <input type="text" class="form-control" id="hostname" v-model="hostname"
            :class="{ 'is-invalid': isHostnameInvalid,'is-valid': !isHostnameInvalid }" @input="onHostnameInput">
          <div class="invalid-feedback" v-if="isHostnameInvalid">
            กรุณาใส่ Hostname
          </div>
        </div>
        <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
          <h5 for="ip" class="text-nowrap mr-5 mb-0">IP:</h5>
          <input type="text" class="form-control" id="ip" v-model="ip" :class="{ 'is-invalid': isIPInvalid,'is-valid': !isIPInvalid }" @input="onIPInput">
          <div class="invalid-feedback" v-if="isIPInvalid">
            กรุณาใส่ IP
          </div>
        </div>
        <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
          <h5 for="os" class="text-nowrap mr-5 mb-0">OS:</h5>
          <select class="form-select" id="os" v-model="os" :class="{ 'is-invalid': isOSInvalid,'is-valid': !isOSInvalid }" @input="onOSInput">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback" v-if="isOSInvalid">
            กรุณาใส่ OS
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center mb-3">
          <h5 for="priority" class="text-nowrap mr-5 mb-0">Priority:</h5>
          <select class="form-select" v-model="priority" :class="{ 'is-invalid': isPriorityInvalid, 'is-valid': !isPriorityInvalid }" @input="onPriorityInput">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback" v-if="isPriorityInvalid">
            กรุณาใส่ Priority
          </div>
        </div>
        <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center mb-3">
          <h5 for="ma" class="text-nowrap mr-5 mb-0">MA Down time:</h5>
          <select class="form-select" v-model="ma" :class="{ 'is-invalid': isMAInvalid ,'is-valid': !isMAInvalid}" @input="onMAInput">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback" v-if="isMAInvalid">
            กรุณาใส่ MA Down time
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-green mx-3">Generate Tag</button>
        <button type="button" class="btn btn-outline-green mx-3" data-bs-dismiss="modal">Close</button>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tagid: '',
      appname: '',
      appteam: '',
      owner: '',
      hostname: '',
      ip: '',
      os: '',
      priority: '',
      ma: '',
      isTagidInvalid: false,
      isAppnameInvalid: false,
      isAppteamInvalid: false,
      isOwnerInvalid: false,
      isHostnameInvalid: false,
      isIPInvalid: false,
      isOSInvalid: false,
      isPriorityInvalid: false,
      isMAInvalid: false,

      isTagidValid: false,
      isAppnameValid: false,
      isAppteamValid: false,
      isOwnerValid: false,
      isHostnameValid: false,
      isIPValid: false,
      isOSValid: false,
      isPriorityValid: false,
      isMAValid: false,
    }
  },
  methods: {
    validateForm() {
      this.isTagidInvalid = !this.tagid
      this.isAppnameInvalid = !this.appname
      this.isAppteamInvalid = !this.appteam
      this.isOwnerInvalid = !this.owner
      this.isHostnameInvalid = !this.hostname
      this.isIPInvalid = !this.ip
      this.isOSInvalid = !this.os
      this.isPriorityInvalid = !this.priority
      this.isMAInvalid = !this.ma

      this.isTagidValid = !this.tagid.length >= 1
      this.isAppnameValid = !this.appname.length >= 1
      this.isAppteamValid = !this.appteam.length >= 1
      this.isOwnerValid = !this.owner.length >= 1
      this.isHostnameValid = !this.hostname.length >= 1
      this.isIPValid = !this.ip.length >= 1
      this.isOSValid = !this.os.length >= 1
      this.isPriorityValid = !this.priority.length >= 1
      this.isMAValid = !this.ma.length >= 1
      
      // if (!this.isEmailInvalid && !this.isPasswordInvalid) {
      //   // Form is valid, do something (e.g. submit it)
      // }
    },
    onTagidInput() {
      this.isTagidInvalid = false
      this.isTagidValid = this.tagid.length >= 1
    },
    onAppnameInput() {
      this.isAppnameInvalid = false
      this.isAppnameValid = this.appname.length >= 1
    },
    onAppteamInput() {
      this.isAppteamInvalid = false
      this.isAppteamValid = this.appteam.length >= 1
    },
    onOwnerInput() {
      this.isOwnerInvalid = false
      this.isOwnerValid = !this.owner.length >= 1
    },
    onHostnameInput() {
      this.isHostnameInvalid = false
      this.isHostnameValid = !this.hostname.length >= 1
    },
    onIPInput() {
      this.isIPInvalid = false
      this.isIPValid = !this.ip.length >= 1
    },
    onOSInput() {
      this.isOSInvalid = false
      this.isOSValid = !this.os.length >= 1
    },
    onPriorityInput() {
      this.isPriorityInvalid = false
      this.isPriorityValid = !this.priority.length >= 1
    },
    onMAInput() {
      this.isMAInvalid = false
      this.isMAValid = !this.ma.length >= 1
    },
  }
}
</script>

<script setup>

//import { result } from 'lodash';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const id = ref(route.params.id)
const fname = ref("")
const lname = ref("")
const username = ref("")
const password = ref("")
const email = ref("")
const avatar = ref("")

const fetchData = () => {
  fetch("https://www.melivecode.com/api/users/" + id.value)
    .then(response => response.json())
    .then((result) => {
      fname.value = result.user.fname
      lname.value = result.user.lname
      username.value = result.user.username
      password.value = result.user.password
      email.value = result.user.email
      avatar.value = result.user.avatar
    })
}
fetchData()

// const onSubmit = () => {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({
//     "id": id.value,
//     "fname": fname.value,
//     "lname": lname.value,
//     "username": username.value,
//     "password": password.value,
//     "email": email.value,
//     "avatar": avatar.value
//   });

//   var requestOptions = {
//     method: 'PUT',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };

//   fetch("https://www.melivecode.com/api/users/update", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       alert(result.message)
//     })
//     .catch(error => console.log('error', error));
// }

</script>

<style scoped="">
/*Bootstrap-Icons*/
@import url("../node_modules/bootstrap-icons/font/bootstrap-icons.css");

.text-lotus-green {
  color: #00bcb4;
}

.mr-5 {
  margin-right: 5px;
}

.btn-green {
  --bs-btn-color: #fff;
  --bs-btn-bg: #00bcb4;
  --bs-btn-border-color: #00bcb4;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #00bcb4;
  --bs-btn-hover-border-color: #00bcb4;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #00bcb4;
  --bs-btn-active-border-color: #00bcb4;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #00bcb4;
  --bs-btn-disabled-border-color: #00bcb4;
}

.btn-outline-green {
  --bs-btn-color: #00bcb4;
  --bs-btn-border-color: #00bcb4;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #00bcb4;
  --bs-btn-hover-border-color: #00bcb4;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #00bcb4;
  --bs-btn-active-border-color: #00bcb4;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #00bcb4;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #00bcb4;
  --bs-gradient: none;
}

.is-valid {
  border-color:#00bcb4;
}

.form-wrap {
  padding-top: 35px;
}

.alert {
  padding-top: 1.5rem;
}

.alert h5 {
  margin-bottom: 0.0rem;
}
</style>
