<template>
  <div class="form-wrapper px-4">
    <form @submit.prevent="submitForm" class="container">
         <div class="form-group">
            <label for="date">Fecha</label>
            <input id="date" type="date" v-model="formData.date" class="input-field">
          </div>
      <!-- Sección: GUÍA REMITENTE -->
      <fieldset class="fieldset">
        <legend class="legend">GUIA</legend>
        <div class="form-group">
          <label for="remission">Nº G. Remisión</label>
          <input id="remission" type="text" v-model="formData.remission" class="input-field">
        </div>
        <div class="form-group mt-4">
          <label for="transportGuide">Nº G. Transportista</label>
          <input id="transportGuide" type="text" v-model="formData.transportGuide" class="input-field">
        </div>
        <div class="form-group mt-4">
          <label for="transportGuide">Nº G. Transportista 2</label>
          <input id="transportGuide2" type="text" v-model="formData.transportGuide2" class="input-field">
        </div>
        <div class="form-group mt-4">
          <label for="factura">Factura</label>
          <input id="factura" type="text" v-model="formData.factura" class="input-field">
        </div>
        
      </fieldset>
      <!-- Sección: INFORMACIÓN REQUERIDA -->
      <fieldset class="fieldset">
        <legend class="legend">INFORMACIÓN REQUERIDA</legend>
        <div class="form-row">
          <div class="form-group">
            <label for="vehicle">Vehículo</label>
            <select id="vehicle" v-model="formData.vehicle" class="input-field">
              <option value="B7A-714">B7A-714</option>
              <option value="C3W-837">C3W-837</option>
            </select>
          </div>
          <div class="form-group">
            <label for="driver">Conductor</label>
            <input id="driver" type="text" v-model="formData.driver" class="input-field">
          </div>
          <div class="form-group">
            <label for="date">Fecha</label>
            <input id="date" type="date" v-model="formData.date" class="input-field">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="departure">Salida</label>
            <input id="departure" type="time" v-model="formData.departure" class="input-field">
          </div>
          <div class="form-group">
            <label for="arrival">Llegada</label>
            <input id="arrival" type="time" v-model="formData.arrival" class="input-field">
          </div>
        </div>
      </fieldset>

      <!-- Sección: DATOS COMPLEMENTARIOS -->
      <fieldset class="fieldset">
        <legend class="legend">DATOS COMPLEMENTARIOS</legend>
        <div class="form-row">
          <div class="form-group">
            <label for="fuel">Combustible</label>
            <input id="fuel" type="number" v-model="formData.fuel" step="any" class="input-field">
          </div>
          <div class="form-group">
            <label for="tarpaulin">Encarpar/Dsc</label>
            <input id="tarpaulin" type="number" v-model="formData.tarpaulin" step="any" class="input-field">
          </div>
          <div class="form-group">
            <label for="sweeper">Barrendero</label>
            <input id="sweeper" type="number" v-model="formData.sweeper" step="any" class="input-field">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="driver_pay">Conductor-Pay</label>
            <input id="driver_pay" type="number" v-model="formData.driverPay" step="any" class="input-field">
          </div>
          <div class="form-group">
            <label for="guard">Guardianía</label>
            <input id="guard" type="number" v-model="formData.guard" step="any" class="input-field">
          </div>
          <div class="form-group">
            <label for="freight">Flete</label>
            <input id="freight" type="number" v-model="formData.freight" step="any" class="input-field">
          </div>
        </div>
      </fieldset>

      <!-- Sección: ADICIONAL -->
      <fieldset class="fieldset">
        <legend class="legend">ADICIONAL</legend>
        <div class="form-row">
          <div class="form-group">
            <label for="description">Descripción</label>
            <textarea id="description" v-model="formData.description" class="input-field"></textarea>
          </div>
          <div class="form-group">
            <label for="expenses">Gastos</label>
            <input id="expenses" type="number" v-model="formData.expenses" step="any" class="input-field">
          </div>
        </div>
      </fieldset>

      <!-- LÍQUIDO POR VIAJE -->
      <fieldset class="fieldset">
        <legend class="legend">TOTAL</legend>
        <div class="form-row">
          <div class="form-group">
            <a>GASTO TOTAL</a>
            <span id="net-amount" class="net-amount">{{ calculateNetAmount() }}</span>
            <a>LIQUIDO POR VIAJE</a>
            <span id="net-amount" class="net-amount">{{ calculateNetAmount() }}</span>
          </div>
        </div>
      </fieldset>

     
      <!-- Botón de enviar -->
      <button type="submit" class="btn-submit">Enviar</button>
    </form>
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
      this.$router.push('/liquidation/1');
    },
    calculateNetAmount() {
      // Implementar la lógica de cálculo del líquido por viaje
      return '$/180.00';
    },
    calculateNetAmountLabel() {
      return 'LÍQUIDO POR VIAJE';
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.fieldset {
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.legend {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.form-group {
  flex: 1;
  min-width: 200px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.btn-submit {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #700c0c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #ac1f1f;
}

.net-amount {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
  display: block;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>
