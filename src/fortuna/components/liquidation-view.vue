<template>
  <div class="max-w-[900px] mx-auto p-4 bg-white rounded-lg font-sans shadow-md">
    <div class="text-center mb-4">
      <h1 class="text-xl font-semibold text-gray-800 mb-1">LIQUIDACIÓN</h1>
      <span class="text-gray-600 text-sm">{{ fakeData.date }}</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Información Requerida -->
      <div class="p-4 border border-gray-200 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-1 mb-2">Información Requerida</h2>
        <div class="space-y-1 text-sm">
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Nº Factura:</span>
            <span class="text-gray-600">{{ fakeData.factura }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Nº G. Remisión:</span>
            <span class="text-gray-600">{{ fakeData.remission }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Nº G. Transportista:</span>
            <span class="text-gray-600">{{ fakeData.transportGuide }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Nº G. Transportista 2:</span>
            <span class="text-gray-600">{{ fakeData.transport2Guide }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Vehículo:</span>
            <span class="text-gray-600">{{ fakeData.vehicle }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Conductor:</span>
            <span class="text-gray-600">{{ fakeData.driver }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Fecha:</span>
            <span class="text-gray-600">{{ fakeData.date }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Salida:</span>
            <span class="text-gray-600">{{ fakeData.departure }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Llegada:</span>
            <span class="text-gray-600">{{ fakeData.arrival }}</span>
          </div>
        </div>
      </div>

      <!-- Datos Complementarios -->
      <div class="p-4 border border-gray-200 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-1 mb-2">Datos Complementarios</h2>
        <div class="space-y-1 text-sm">
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Combustible:</span>
            <span class="text-gray-600">{{ fakeData.fuel }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Encarpar/Dsc:</span>
            <span class="text-gray-600">{{ fakeData.tarpaulin }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Barrendero:</span>
            <span class="text-gray-600">{{ fakeData.sweeper }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Conductor-Pay:</span>
            <span class="text-gray-600">{{ fakeData.driverPay }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Guardianía:</span>
            <span class="text-gray-600">{{ fakeData.guard }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Flete:</span>
            <span class="text-gray-600">{{ fakeData.freight }}</span>
          </div>
        </div>
      </div>

      <!-- Adicional -->
      <div class="p-4 border border-gray-200 rounded-md shadow-sm">
        <h2 class="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-1 mb-2">Adicional</h2>
        <div class="space-y-1 text-sm">
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Descripción:</span>
            <span class="text-gray-600">{{ fakeData.description }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-gray-800">Gastos:</span>
            <span class="text-gray-600">{{ fakeData.expenses }}</span>
          </div>
        </div>
      </div>

      <!-- Gasto Total -->
      <div class="p-4 border border-gray-200 rounded-md shadow-sm col-span-2">
        <h2 class="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-1 mb-2">Líquido por Viaje</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span class="block font-medium text-gray-800">GASTO TOTAL</span>
            <div class="text-xl font-bold text-green-600 mt-1 text-center">
              <span>{{ fakeData.gastoTotal }}</span>
            </div>
          </div>
          <div>
            <span class="block font-medium text-gray-800">LIQUIDO</span>
            <div class="text-xl font-bold text-green-600 mt-1 text-center">
              <span>{{ fakeData.netAmount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-6">
      <button @click="printPage" class="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Imprimir</button>
    </div>
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
