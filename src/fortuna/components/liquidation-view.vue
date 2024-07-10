<template>
  <div class="liquidation-container">
    <div class="header">
      <h1>LIQUIDACION</h1>
      <span class="info-value text-align-center">{{ fakeData.date }}</span>
    </div>
    <section>
      <h2>Información Requerida </h2>

      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Nº Factura:</span>
          <span class="info-value">{{ fakeData.factura}}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Nº G. Remisión:</span>
          <span class="info-value">{{ fakeData.remission }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Nº G. Transportista:</span>
          <span class="info-value">{{ fakeData.transportGuide }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Nº G. Transportista 2:</span>
          <span class="info-value">{{ fakeData.transport2Guide }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Vehículo:</span>
          <span class="info-value">{{ fakeData.vehicle }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Conductor:</span>
          <span class="info-value">{{ fakeData.driver }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Fecha:</span>
          <span class="info-value">{{ fakeData.date }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Salida:</span>
          <span class="info-value">{{ fakeData.departure }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Llegada:</span>
          <span class="info-value">{{ fakeData.arrival }}</span>
        </div>
      </div>

    </section>

    <section>
      <h2>Datos Complementarios</h2>
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Combustible:</span>
          <span class="info-value">{{ fakeData.fuel }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Encarpar/Dsc:</span>
          <span class="info-value">{{ fakeData.tarpaulin }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Barrendero:</span>
          <span class="info-value">{{ fakeData.sweeper }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Conductor-Pay:</span>
          <span class="info-value">{{ fakeData.driverPay }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Guardianía:</span>
          <span class="info-value">{{ fakeData.guard }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Flete:</span>
          <span class="info-value">{{ fakeData.freight }}</span>
        </div>
      </div>
    </section>

    <section>
      <h2>Adicional</h2>
      <div class="info-section">
        <div class="info-item">
          <span class="info-label">Descripción:</span>
          <span class="info-value">{{ fakeData.description }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Gastos:</span>
          <span class="info-value">{{ fakeData.expenses }}</span>
        </div>
      </div>
    </section>

    <section>
  <h2>Líquido por Viaje</h2>
  <div style="display: flex; justify-content: space-between;">
    <div>
      GASTO TOTAL
      <div class="net-amount">
        <span>{{ fakeData.gastoTotal }}</span>
      </div>
    </div>
    <div>
      LIQUIDO
      <div class="net-amount">
        <span>{{ fakeData.netAmount }}</span>
      </div>
    </div>
  </div>
</section>

    <button @click="printPage" class="btn-print">Imprimir</button>
  </div>
</template>

<script>
export default {
  name: "liquidation-view",
  data() {
    return {
      fakeData: {
        vehicle: "B7A-714",
        driver: "Juan Pérez",
        date: "2024-07-09",
        departure: "08:00",
        arrival: "12:00",
        remission: "12345",
        transportGuide: "67890",
        transport2Guide: "67890",
        factura:"E001-152",
        fuel: 200,
        tarpaulin: 30,
        sweeper: 15,
        driverPay: 100,
        guard: 25,
        freight: 300,
        description: "Entrega de mercancía en Lima",
        expenses: 400,
        netAmount: "$/180.00",
        gastoTotal: "$/180.00"

      }
    };
  },
  methods: {
    printPage() {
      window.print();
    }
  }
};
</script>

<style scoped>
.liquidation-container {
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  font-family: 'Arial', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  max-width: 100px;
  margin-bottom: 10px;
}

.liquidation-container h1 {
  color: #333;
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.liquidation-container h2 {
  font-size: 1.2rem;
  color: #666;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.info-section {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.info-label {
  font-weight: bold;
  color: #333;
}

.info-value {
  color: #555;
}

.net-amount {
  font-size: 1.4rem;
  font-weight: bold;
  color: #4caf50;
  text-align: center;
  margin-top: 15px;
}

.btn-print {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #921111;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s ease;
}

.btn-print:hover {
  background-color: #a40707;
}

@media print {
  body * {
    visibility: hidden;
  }
  .liquidation-container, .liquidation-container * {
    visibility: visible;
  }

  .btn-print {
    display: none; /* Ocultar botón de imprimir en la impresión */
  }
}
</style>
