<template>
  <div class="q-pa-md">
    <b class="text-name">{{currentUser.Title}}</b>
   <div>
     <b>{{ usernameMe.Id }}/</b>
     <b>{{ usernameMe.Title }}/</b>
     <b>{{ usernameMe.Email }}/</b>
   </div>
    <div class="row">
      <div class="col">
        <div class="">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-sm-6">
              <label for="startDate">Start</label>
              <input id="startDate" class="form-control" type="date" />
              <span id="startDateSelected"></span>
            </div>
            <div class="col-lg-3 col-sm-6">
              <label for="endDate">End</label>
              <input id="endDate" class="form-control" type="date" />
              <span id="endDateSelected"></span>
            </div>
            <div class="col-lg-3 col-sm-6">
              <label for="endDate">search</label>
              <div class="input-group">
                <input id="endDate" class="form-control" type="text" />
                <span id="searchSelected"></span>
                <q-btn icon="search" />
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
    <div class="q-py-md text-end">
      <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#create">
        Generate Tag
      </button>
    </div>
    <q-table title="Lotus's Tag" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-avatar="props">
        <q-td :props="props">
          <q-img :src="props.row.avatar" width="30px" />
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <button type="button" class="btn shadow-1 mx-1" data-bs-toggle="modal" data-bs-target="#create">
            <img v-bind:src="iconedit" class="iconedit" />
      </button>
        <!-- <q-btn icon="edit" @click="onEdit(props.row.id)" />--> 
          <q-btn icon="delete" @click="onDelete(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </div>

  <!-- Modal -->
  <div class="modal fade modal-lg" id="create" tabindex="-1" aria-labelledby="createLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content text-lotus-green">
        <div class="modal-header row border-0 bg-greens">
          <div class="col text-start" id="createLabel">
            <a class="navbar-brand">
              <img src="@/assets/icon/logo.svg" class="img-responsive" style="user-select: none;" height="25">
            </a>
          </div>
          <h5 class="col text-center text-light">Lotus's Tag</h5>
          <div class=" col text-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body mb-3">
          <div class="container text-lotus-green">
            <form @submit.prevent="validateForm">
              <div class="row ">
                <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
                  <h5 for="tagid" class="text-nowrap mr-5 mb-0">Tag ID:</h5>
                  <input type="number" class="form-control" id="tadid" v-model="tagid"
                    :class="{ 'is-invalid': isTagidInvalid, 'is-valid': isTagidValid }" @input="onTagidInput">
                  <div class="invalid-feedback" v-if="isTagidInvalid">
                    กรุณาใส่ Tag ID
                  </div>
                </div>
                <div class="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex align-items-center mb-3">
                  <h5 for="appname" class="text-nowrap mr-5 mb-0">App name:</h5>
                  <input type="text" class="form-control" id="appname" v-model="appname"
                    :class="{ 'is-invalid': isAppnameInvalid, 'is-valid': isAppnameValid }" @input="onAppnameInput">
                  <div class="invalid-feedback" v-if="isAppnameInvalid">
                    กรุณาใส่ App name
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center mb-3">
                  <h5 for="appteam" class="text-nowrap mr-5 mb-0">App team:</h5>
                  <input type="text" class="form-control" id="appteam" v-model="appteam"
                    :class="{ 'is-invalid': isAppteamInvalid, 'is-valid': isAppteamValid }" @input="onAppteamInput">
                  <div class="invalid-feedback" v-if="isAppteamInvalid">
                    กรุณาใส่ App team
                  </div>
                </div>
                <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center mb-3">
                  <h5 for="owner" class="text-nowrap mr-5 mb-0">Owner:</h5>
                  <input type="text" class="form-control" id="owner" v-model="owner"
                    :class="{ 'is-invalid': isOwnerInvalid, 'is-valid': isOwnerValid }" @input="onOwnerInput">
                  <div class="invalid-feedback" v-if="isOwnerInvalid">
                    กรุณาใส่ Owner
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
                  <h5 for="hostname" class="text-nowrap mr-5 mb-0">Hostname:</h5>
                  <input type="text" class="form-control" id="hostname" v-model="hostname"
                    :class="{ 'is-invalid': isHostnameInvalid, 'is-valid': isHostnameValid }" @input="onHostnameInput">
                  <div class="invalid-feedback" v-if="isHostnameInvalid">
                    กรุณาใส่ Hostname
                  </div>
                </div>
                <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
                  <h5 for="ip" class="text-nowrap mr-5 mb-0">IP:</h5>
                  <input type="text" class="form-control" id="ip" v-model="ip"
                    :class="{ 'is-invalid': isIPInvalid, 'is-valid': isIPValid }" @input="onIPInput">
                  <div class="invalid-feedback" v-if="isIPInvalid">
                    กรุณาใส่ IP
                  </div>
                </div>
                <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center mb-3">
                  <h5 for="os" class="text-nowrap mr-5 mb-0">OS:</h5>
                  <select class="form-select" id="os" v-model="os"
                    :class="{ 'is-invalid': isOSInvalid, 'is-valid': isOSValid }" @input="onOSInput">
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
                  <select class="form-select" v-model="priority"
                    :class="{ 'is-invalid': isPriorityInvalid, 'is-valid': isPriorityValid }" @input="onPriorityInput">
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
                  <select class="form-select" v-model="ma" :class="{ 'is-invalid': isMAInvalid, 'is-valid': isMAValid }"
                    @input="onMAInput">
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
          <!--    <div class="text-center container">
            <q-form @submit="onSubmit" @reset="onReset" class="">
              <q-input v-model="fname" label="Firstname" />
              <q-input v-model="lname" label="Lastname" />
              <q-input v-model="username" label="Username" />
              <q-input v-model="password" label="Password" />
              <q-input v-model="email" label="Email" />
              <q-input v-model="avatar" label="Avatar" />
              <q-btn label="Submit" type="submit" />
            </q-form>

          </div>  -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import API from './services/ApiService.js';

export default {
  async created() {
      await this.fetchRequestDigest();
      await this.intervalDigest();
      this.getCurrentUser();
    },
  data() {
    return {
      currentUser: {},
      usernameMe:[],
      site_url: process.env.VUE_APP_HOST + process.env.VUE_APP_SITE,
				Request: [],
        test:[],
				template : {
					test: {},
				},
        list: {
					test: "test",
				},
      iconedit: "https://cdn-icons-png.flaticon.com/512/1827/1827933.png",
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
    async fetchRequestDigest() {
        API.requestDigest().then((response) => {
          this.$local.set('requestDigest', response.GetContextWebInformation.FormDigestValue);
          this.intervalDigest();
        });
      },
      async intervalDigest() {
        setTimeout(() => this.fetchRequestDigest(), 300000);
      },
      async getCurrentUser() {
        API.currentUser().then((response) => {
          // console.log("getCurrentUser")
          this.currentUser = response;
          this.$refs.refReloadData.get_test();
          this.$refs.refReloadData.get_User(response.Email);
        });
      },
     
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

      this.isTagidValid = !this.tagid.length >= 6
      this.isAppnameValid = !this.appname.length >= 6
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
      this.isTagidValid = this.tagid.length >= 6
    },
    onAppnameInput() {
      this.isAppnameInvalid = false
      this.isAppnameValid = this.appname.length >= 6
    },
    onAppteamInput() {
      this.isAppteamInvalid = false
      this.isAppteamValid = this.appteam.length >= 1
    },
    onOwnerInput() {
      this.isOwnerInvalid = false
      this.isOwnerValid = this.owner.length >= 1
    },
    onHostnameInput() {
      this.isHostnameInvalid = false
      this.isHostnameValid = this.hostname.length >= 1
    },
    onIPInput() {
      this.isIPInvalid = false
      this.isIPValid = this.ip.length >= 1
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
  },


  mounted(){
    let vm = this
    var headers = { accept: "application/json;odata=verbose" };
    axios.get('http://localhost:8080/teams/testSharePointep1/_api/web/CurrentUser', { headers })
    .then((response) => {
      console.log("ssss",response)
      vm.usernameMe = response.data.d
			return response.data.d;
		});
    let vms = this
    var url = vms.site_url + "/Lists/test/items?$select=AppName";
    axios.get('http://localhost:8080/teams/testSharePointep1/Lists/test', { headers })
    .then((response) => {
      console.log("www", response.data)
      vms.test = response.data.data.HostName
			return response.data.data.HostName;
		})
    API.url(url).then((response) => {
      console.log("res", response)
					if(response.length != 0) {
						this.template.test = response;
					}else {
						this.template_status = false;
					}
				})
  },
  // get_test() {
  //   let vms = this
  //   var headers = { accept: "application/json;odata=verbose" };
  //   axios.get('http://localhost:8080/teams/testSharePointep1/Lists/test', { headers })
  //   .then((response) => {
  //     console.log("www",response)
  //     vms.test = response.data
	// 		return response.data;
	// 	});
	// 		},
}
</script>

<script setup>
//   import { result } from 'lodash';
import { ref } from "vue";
// import router from "./router";
import axios from "axios";



const columns = ref([
  { name: "id", align: "left", label: "tagID", field: "id", sortable: true },
  {
    name: "fname",
    align: "left",
    label: "HostName",
    field: "fname",
    sortable: true,
  },
  {
    name: "lname",
    align: "left",
    label: "IPAddress",
    field: "lname",
    sortable: true,
  },
  {
    name: "username",
    align: "left",
    label: "Owner",
    field: "username",
    sortable: true,
  },
  { name: "avatar", align: "center", label: "Appname", field: "avatar", sortable: true, },
  {
    name: "",
    align: "center",
    label: "Appteam",
    field: "",
    sortable: true,
  },
  {
    name: "Id",
    align: "center",
    label: "OperationSystem",
    field: "Id",
    sortable: true,
  },
  {
    name: "",
    align: "center",
    label: "Priority",
    field: "",
    sortable: true,
  },
  {
    name: "actions",
    align: "center",
    label: "MaintenanceDowntime",
    field: "id",
    sortable: true,
  },
]);

const rows = ref([]);
const fetchData = () => {
  fetch(" https://www.melivecode.com/api/users")
    .then((res) => res.json())
    .then((result) => {
      rows.value = result;
    });
};
fetchData();


// const fname = ref("")
// const lname = ref("")
// const username = ref("")
// const password = ref("")
// const email = ref("")
// const avatar = ref("")

// const onSubmit = () => {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "fname": fname.value,
//   "lname": lname.value,
//   "username": username.value,
//   "password": password.value,
//   "email": email.value,
//   "avatar": avatar.value
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://www.melivecode.com/api/users/create", requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     alert(result.message)

//     if (result.status == 'ok') {
//       //this.$swal({ icon: 'success', title: 'Succeed' ,  timer: 5000 });
//       router.push('/maintable')
//     }
//   })
//   .catch(error => console.log('error', error));
// }

// const onEdit = (id) => {
//  // router.push('/updateview/' + id)

// };

const onDelete = (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": id
  });

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://www.melivecode.com/api/users/delete", requestOptions)
    .then(response => response.json())
    .then(result => {
      alert(result.message)
      fetchData()
    })
    .catch(error => console.log('error', error));
};


</script>


<style src="@vueform/multiselect/themes/default.css">

</style>
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

.bg-greens {
  background-color: #00bcb4;
}

.is-valid {
  border-color: #00bcb4;
}

.iconedit {
    max-width: 20px;
    width: 100%;
}

.shadow-1 {
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}
</style>

