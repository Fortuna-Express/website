<template>
  <div class="px-5 mb-10">
  <h1 class="text-3xl font-bold mt-4 text-center lg:text-left" >LIQUIDACIÓN</h1>
    <form @submit.prevent="submitForm" class="mx-auto">
      <div class="sm:flex justify-center sm:items-center px-6 mt-5 border-2 border-red-700 rounded-md p-4">

      <div class="md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4">
        <div class="flex flex-col justify-center">
          <label for="date" class="form-label">Fecha</label>
          <input id="date" type="date" v-model="formData.date" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col">
          <label for="remission" class="form-label">Nº G. Remisión</label>
          <input id="remission" type="text" v-model="formData.remission" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col">
          <label for="transportGuide" class="form-label">Nº G. Transp.</label>
          <input id="transportGuide" type="text" v-model="formData.transportGuide" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col">
          <label for="transportGuide2" class="form-label">Nº G. Transp. 2</label>
          <input id="transportGuide2" type="text" v-model="formData.transportGuide2" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col">
          <label for="factura" class="form-label">Factura</label>
          <input id="factura" type="text" v-model="formData.factura" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col">
          <label for="vehicle" class="form-label">Vehículo</label>
          <select id="vehicle" v-model="formData.vehicle" class="form-select bg-gray-100 rounded-sm w-full h-8 px-2">
            <option value="B7A-714">B7A-714</option>
            <option value="C3W-837">C3W-837</option>
          </select>
        </div>
      </div>
      </div>
    <h2 class="text-2xl text-gray-800 mt-4 text-center lg:text-left" >Información requerida</h2>

      <div class="sm:flex justify-center sm:items-center px-6 mt-2 border-2  border-red-700 rounded-md p-4">
        <div class=" md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 lg:flex">
          <div class="flex flex-col justify-center">
          <label for="date">Fecha</label>
          <input id="date" type="date" v-model="formData.date" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col justify-center">
          <label for="departure">Salida</label>
            <input id="departure" type="time" v-model="formData.departure" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>

        <div class="flex flex-col justify-center">
          <label for="arrival">Llegada</label>
          <input id="arrival" type="time" v-model="formData.arrival" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col justify-center">
          <label for="driver">Conductor</label>
          <input id="driver" type="text" v-model="formData.driver" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
      </div>
      </div>
      <h2 class="text-2xl text-gray-800 mt-4 text-center lg:text-left text-col" >Información complementaria</h2>
      <div class="sm:flex justify-center sm:items-center px-6 mt-2 border-2  border-red-700 rounded-md p-4">
        <div class=" md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 lg:flex">
          <div class="flex flex-col justify-center">
            <label for="fuel">Combustible</label>
            <input id="fuel" type="number" v-model="formData.fuel" step="any" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col justify-center">
          <label for="tarpaulin">Encarpar/Dsc</label>
            <input id="tarpaulin" type="number" v-model="formData.tarpaulin" step="any" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>

        <div class="flex flex-col justify-center">
          <label for="sweeper">Barrendero</label>
          <input id="sweeper" type="number" v-model="formData.sweeper" step="any" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col justify-center">
          <label for="driver_pay">Conductor-Pay</label>
            <input id="driver_pay" type="number" v-model="formData.driverPay" step="any" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
        <div class="flex flex-col justify-center">
          <label for="guard">Guardianía</label>
          <input id="guard" type="number" v-model="formData.guard" step="any" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>

        <div class="flex flex-col justify-center">
          <label for="freight">Flete</label>
            <input id="freight" type="number" v-model="formData.freight" step="any" class="form-input bg-gray-100 rounded-sm w-full h-8 px-2">
        </div>
      </div>
      </div>

      <h2 class="text-2xl text-gray-800 mt-4 text-center lg:text-left" >Información adicional</h2>
      <div class="sm:flex justify-center sm:items-center px-6 mt-2 border-2  border-red-700 rounded-md p-4">
        <div class=" md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 lg:flex">
          <div class="flex flex-col justify-center">
            <label for="description">Descripción</label>
            <textarea id="description" v-model="formData.description" class="form-input bg-gray-100 rounded-sm w-full h-24"></textarea>
        </div>
        <div class="flex flex-col justify-center">
          <label for="expenses">Gastos</label>
          <input id="expenses" type="number" v-model="formData.expenses" step="any" class="form-input bg-gray-100 rounded-sm w-full">
        </div>
      </div>
      </div>

    </form>
    <h2 class="text-2xl text-gray-800 mt-4 text-center lg:text-left" >Total</h2>
    <div class="sm:flex justify-center sm:items-center px-6 mt-2 border-2  border-red-700 rounded-md p-4 mx-auto">
    <div>
    <div class="flex flex-col ">
      <div class="flex justify-between items-center">
        <span class="font-medium text-gray-600 ml-2">GASTO TOTAL</span>
        <span id="net-amount" class="font-bold text-gray-800 text-2xl">{{ calculateNetAmount() }}</span>
      </div>
    
    </div>
    <div class="flex flex-col mt-5">
    <div class="flex justify-between items-center">
        <span class="font-medium text-gray-600  ml-2">LIQUIDO POR VIAJE</span>
        <span id="net-amount" class="font-bold text-gray-800 ml-4 text-2xl">{{ calculateNetAmount() }}</span>
      </div>
  </div>
</div>

</div>

    <!-- Botón de enviar -->
    <div class="flex justify-center mt-6">
        <button type="submit" class="inline-block bg-primary hover:bg-red-500 text-white py-1 w-32 rounded-md text-sm shadow-md transition-colors duration-300">Enviar</button>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        vehicle: 'B7A-714',
        driver: '',
        date: '',
        departure: '',
        arrival: '',
        remission: '',
        transportGuide: '',
        transportGuide2: '',
        factura: '',
        tolls: null,
        garage: '',
        fuel: null,
        tarpaulin: null,
        sweeper: null,
        driverPay: null,
        guard: null,
        freight: null,
        description: '',
        expenses: null,
        currentDate: '',
        totalExpense: null,
        liquidAmount: ''
      }
    };
  },
  created() {
    // Inicializar la fecha con la fecha actual
    this.formData.date = new Date().toISOString().substr(0, 10);
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      console.log(this.formData);
      // Redirigir a la ruta después de enviar el formulario
      this.$router.push('/liquidation');
    },
    calculateNetAmount() {
      const { fuel, tarpaulin, sweeper, driverPay, guard, freight,expenses } = this.formData;
      const totalExpenses = [fuel, tarpaulin, sweeper, driverPay, guard, freight,expenses].reduce((sum, value) => sum + (parseFloat(value) || 0), 0);

      return totalExpenses.toFixed(2); // Ajusta la cantidad de decimales si es necesario
    },
    calculateNetAmountLabel() {
      return 'LÍQUIDO POR VIAJE';
    }
  }
};
</script>

