<template>
  <div>
    <form @submit.prevent = updateForm>
      <div class="grid grid-cols-2">
        <div class="mb-6 mr-1">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Name</label
          >
          <input
            type="text"
            id="name"
            v-model="developer.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="developer.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="mb-6 mr-1">
          <label
            for="position"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your Job</label
          >
          <input
            type="text"
            id="position"
            v-model="developer.position"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Job"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="status"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select your status</label
          >
          <select
            id="status"
            v-model="developer.status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Offline</option>
            <option>Online</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
  import { onMounted } from "vue";
  import useDeveloper from '../services/Developerservice.js';
export default {

  props:{
    id:{
      require:true,
      type:String
    }
  },

  setup(props){
    

    const { developer, getDeveloper, updateDeveloper, errors } = useDeveloper();

    onMounted(getDeveloper(props.id))

    const updateForm = async () => {
      await updateDeveloper(props.id);
      //console.log(props.id);
    } 

    return {
      developer,
      errors,
      getDeveloper,
      updateForm,

    }
  }
};
</script>